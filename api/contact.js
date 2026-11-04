/* ARUAN LUMEN — API de contato profissional.
   Grava cada mensagem como JSON no Vercel Blob privado (pasta contact/). */
const { put } = require("@vercel/blob");
const crypto = require("crypto");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://aruanlumen.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method" });

  try {
    const body = req.body || {};
    const name    = String(body.name || "").trim().slice(0, 120);
    const email   = String(body.email || "").trim().toLowerCase().slice(0, 200);
    const subject = String(body.subject || "outro").trim().slice(0, 40);
    const message = String(body.message || "").trim().slice(0, 4000);

    /* honeypot anti-robô */
    if (body.website) return res.status(200).json({ ok: true });

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk || !name || message.length < 10) {
      return res.status(400).json({ ok: false, error: "fields" });
    }

    /* nome do arquivo: data + hash curto (mensagens nunca se sobrescrevem) */
    const ts = new Date().toISOString();
    const id = crypto.createHash("sha256").update(email + ts).digest("hex").slice(0, 10);

    await put("contact/" + ts.slice(0, 10) + "-" + id + ".json",
      JSON.stringify({ name, email, subject, message, receivedAt: ts, source: "aruanlumen.com" }, null, 2),
      { access: "private", addRandomSuffix: false, contentType: "application/json" });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact error:", err && err.message);
    return res.status(500).json({ ok: false, error: "server" });
  }
};
