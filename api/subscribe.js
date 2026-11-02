/* =============================================================
   ARUAN LUMEN — API DA NEWSLETTER
   -------------------------------------------------------------
   Recebe a inscrição do formulário "Fique perto" e guarda cada
   inscrito como um arquivo JSON no Vercel Blob (armazenamento
   privado "aruan-lumen-newsletter").

   Um arquivo por e-mail (o nome vem do hash do e-mail), então
   inscrever-se duas vezes apenas atualiza o registro — nunca
   duplica.
   ============================================================= */
const { put } = require("@vercel/blob");
const crypto = require("crypto");

module.exports = async (req, res) => {
  /* so aceitamos envio do proprio site */
  res.setHeader("Access-Control-Allow-Origin", "https://aruanlumen.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "method" });
  }

  try {
    const body = req.body || {};
    const name     = String(body.name || "").trim().slice(0, 120);
    const email    = String(body.email || "").trim().toLowerCase().slice(0, 200);
    const language = body.language === "pt" ? "pt" : "en";
    const consent  = body.consent === true;

    /* honeypot: campo invisivel que humano nao preenche.
       Se vier preenchido, e robo — fingimos sucesso e descartamos. */
    if (body.website) return res.status(200).json({ ok: true });

    /* validacoes */
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk)  return res.status(400).json({ ok: false, error: "email" });
    if (!consent)  return res.status(400).json({ ok: false, error: "consent" });

    /* um arquivo por e-mail: o nome e o hash do e-mail */
    const id = crypto.createHash("sha256").update(email).digest("hex").slice(0, 32);

    const registro = {
      email,
      name,
      language,
      consent: true,
      subscribedAt: new Date().toISOString(),
      source: "aruanlumen.com"
    };

    await put("subscribers/" + id + ".json", JSON.stringify(registro, null, 2), {
      access: "public",            /* nivel do arquivo; o store e privado   */
      addRandomSuffix: false,      /* nome estavel = sem duplicata          */
      allowOverwrite: true,        /* reinscricao atualiza o registro       */
      contentType: "application/json"
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("newsletter error:", err && err.message);
    return res.status(500).json({ ok: false, error: "server" });
  }
};
