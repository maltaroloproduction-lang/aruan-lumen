/* =============================================================
   ARUAN LUMEN — COMPORTAMENTO DO SITE
   -------------------------------------------------------------
   Este arquivo só cuida de COMO as coisas funcionam.
   O conteúdo (textos, álbuns, links) está todo em data.js.
   ============================================================= */

(function () {
  "use strict";

  /* atalhos pra escrever menos */
  const $  = (s, ctx) => (ctx || document).querySelector(s);
  const $$ = (s, ctx) => Array.from((ctx || document).querySelectorAll(s));


  /* ===========================================================
     1. IDIOMA
     =========================================================== */

  /* começa em inglês (decisão do dossiê), mas lembra a escolha
     de quem já visitou antes */
  let lang = localStorage.getItem("al-lang") || "en";

  /* busca um texto no dicionário */
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || "";

  /* aplica o idioma em toda a página */
  function applyLang() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    /* todo elemento com data-t recebe seu texto */
    $$("[data-t]").forEach((el) => {
      const val = t(el.dataset.t);
      if (val) el.textContent = val;
    });

    /* destaca o botão do idioma ativo */
    $$(".lang button").forEach((b) =>
      b.classList.toggle("is-on", b.dataset.lang === lang)
    );

    /* o conteúdo montado por JS precisa ser redesenhado */
    renderAll();
  }

  $$(".lang button").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("al-lang", lang);
      applyLang();
    });
  });


  /* ===========================================================
     2. PLACEHOLDER DE IMAGEM
     -----------------------------------------------------------
     Enquanto a foto oficial não existe, mostramos um bloco que
     diz exatamente qual arquivo entra ali. Nada de imagem
     genérica inventada.
     =========================================================== */
  function ph(texto, nota, etiqueta) {
    return (
      '<div class="ph">' +
        '<span class="ph-tag">' + (etiqueta || "Foto oficial") + "</span>" +
        '<span class="ph-txt">' + texto + "</span>" +
        (nota ? '<span class="ph-note">' + nota + "</span>" : "") +
      "</div>"
    );
  }

  /* devolve a imagem de verdade se existir, senão o placeholder */
  function media(src, alt, texto, nota, etiqueta) {
    if (src) {
      return '<img src="' + src + '" alt="' + alt + '" loading="lazy" decoding="async">';
    }
    return ph(texto, nota, etiqueta);
  }


  /* ===========================================================
     3. MONTAGEM DO CONTEÚDO
     =========================================================== */

  /* --- 3.1 faixa corrida com o conceito da marca --- */
  function renderMarquee() {
    const box = $("#marquee");
    if (!box) return;
    const frases = [t("marquee.1"), t("marquee.2")];
    /* repete várias vezes pro loop ficar contínuo */
    let html = "";
    for (let i = 0; i < 6; i++) html += "<span>" + frases[i % 2] + "</span>";
    box.innerHTML = html + html;   /* duplicado: o -50% do CSS fecha o ciclo */
  }

  /* --- 3.2 hero e retrato --- */
  function renderPhotos() {
    const hero = $("#heroMedia");
    if (hero) {
      /* Fotografia oficial: retrato P&B na poltrona */
      hero.innerHTML =
        '<img src="assets/img/hero/aruan-poltrona.webp" alt="Aruan Lumen" ' +
        'fetchpriority="high" decoding="async">';
    }
    const port = $("#portrait");
    if (port) {
      /* Fotografia oficial: luz natural de janela — a direção do dossiê */
      port.innerHTML =
        '<img src="assets/img/portraits/aruan-janela.webp" alt="Aruan Lumen" ' +
        'loading="lazy" decoding="async">';
    }
  }

  /* --- 3.3 ficha técnica estilo créditos de filme --- */
  function renderCredits() {
    const box = $("#credits");
    if (!box) return;
    const itens = [
      ["credits.voice", "credits.voice.v"],
      ["credits.sound", "credits.sound.v"],
      ["credits.lang",  "credits.lang.v"],
      ["credits.theme", "credits.theme.v"]
    ];
    box.innerHTML = itens
      .map(([k, v]) => "<div><dt>" + t(k) + "</dt><dd>" + t(v) + "</dd></div>")
      .join("");
  }

  /* --- 3.4 identidade sonora --- */
  function renderSonic() {
    const box = $("#sonicGrid");
    if (!box) return;
    let html = "";
    for (let i = 1; i <= 6; i++) {
      html +=
        '<article class="sonic-cell">' +
          '<span class="sonic-n">0' + i + "</span>" +
          "<h3>" + t("sonic." + i + ".t") + "</h3>" +
          "<p>" + t("sonic." + i + ".p") + "</p>" +
        "</article>";
    }
    box.innerHTML = html;
  }

  /* --- 3.5 botões de plataforma ---
     Regra importante: sem link oficial, o botão fica desativado
     mostrando "Em breve". Nunca inventamos um link. */
  function platformBtns(links) {
    return PLATFORMS.map((p) => {
      const url = (links && links[p.name.toLowerCase().replace(/ /g, "")]) || p.url;
      if (url) {
        return '<a class="btn" href="' + url + '" target="_blank" rel="noopener">' + p.name + "</a>";
      }
      return '<span class="btn" aria-disabled="true" title="' + t("featured.soon") + '">' + p.name + "</span>";
    }).join("");
  }

  /* --- 3.6 lançamento em destaque --- */
  function renderFeatured() {
    const album = ALBUMS.find((a) => a.id === FEATURED_ID) || ALBUMS[0];
    if (!album) return;

    $("#featuredCover").innerHTML = media(
      album.cover, album.title,
      "Capa de " + album.title,
      "3000 × 3000 · assets/img/covers/",
      "Capa oficial"
    );

    const ano = album.year ? album.year : t("featured.tbc");
    $("#featuredMeta").innerHTML =
      "<span>" + t(album.type === "single" ? "music.single" : "music.album") + "</span>" +
      '<span class="dot"></span>' +
      "<span>" + album.lang + "</span>" +
      '<span class="dot"></span>' +
      "<span>" + ano + "</span>" +
      (album.tracks.length > 1
        ? '<span class="dot"></span><span>' + album.tracks.length + " " + t("music.tracks") + "</span>"
        : "");

    $("#featuredTitle").textContent = album.title;
    $("#featuredDesc").textContent  = album.desc[lang] || album.desc.en;

    $("#featuredActions").innerHTML = platformBtns(album.links);
  }

  /* --- 3.7 contador do próximo lançamento ---
     Só aparece se RELEASE_DATE tiver uma data no futuro. */
  function renderCountdown() {
    const box = $("#countdown");
    if (!box) return;

    if (!RELEASE_DATE) { box.hidden = true; return; }

    const alvo = new Date(RELEASE_DATE + "T00:00:00").getTime();
    const resta = alvo - Date.now();
    if (isNaN(alvo) || resta <= 0) { box.hidden = true; return; }

    const dias  = Math.floor(resta / 86400000);
    const horas = Math.floor((resta % 86400000) / 3600000);
    const mins  = Math.floor((resta % 3600000) / 60000);

    box.hidden = false;
    box.innerHTML =
      "<div><b>" + dias  + "</b><small>" + t("cd.days")  + "</small></div>" +
      "<div><b>" + horas + "</b><small>" + t("cd.hours") + "</small></div>" +
      "<div><b>" + mins  + "</b><small>" + t("cd.min")   + "</small></div>";
  }

  /* transforma 215 segundos em "3:35" */
  function dur(seg) {
    if (!seg) return "";
    const m = Math.floor(seg / 60), ss = String(seg % 60).padStart(2, "0");
    return m + ":" + ss;
  }

  /* --- 3.8 discografia ---
     Cada álbum é uma linha que abre mostrando as faixas. */
  function renderDisc() {
    const box = $("#discList");
    if (!box) return;

    box.innerHTML = ALBUMS.map((a) => {
      const pid   = "panel-" + a.id;
      const ano   = a.year ? a.year : "—";
      /* etiqueta: "Álbum"/"Single" pros lançados, "A confirmar" pro resto */
      const etiq  = a.status === "released"
        ? '<span class="tag">' + t(a.type === "single" ? "music.single" : "music.album") + "</span>"
        : '<span class="tag">' + (lang === "pt" ? "A confirmar" : "Unconfirmed") + "</span>";

      /* lista de faixas com duração, ou aviso de que ainda não foi definida */
      const faixas = a.tracks.length
        ? '<ul class="tracks">' + a.tracks.map((f, i) =>
            "<li><span class=\"n\">" + String(i + 1).padStart(2, "0") + "</span>" +
            "<span style=\"flex:1\">" + f.t + "</span>" +
            (f.d ? "<span class=\"n\" style=\"min-width:auto\">" + dur(f.d) + "</span>" : "") +
            "</li>"
          ).join("") + "</ul>"
        : '<p class="tracks-empty">' + t("music.notracks") + "</p>";

      return (
        '<button class="album" type="button" aria-expanded="false" ' +
                'aria-controls="' + pid + '" data-id="' + a.id + '">' +
          '<span class="album-cover">' +
            media(a.cover, a.title, a.title, null, null) +
          "</span>" +
          "<span>" +
            '<span class="album-title">' + a.title + "</span>" +
            '<span class="album-sub"><span>' + a.lang + "</span><span>" + ano + "</span>" + etiq + "</span>" +
            '<span class="album-desc">' + (a.desc[lang] || a.desc.en) + "</span>" +
          "</span>" +
          '<span class="album-toggle" aria-hidden="true"></span>' +
        "</button>" +

        '<div class="album-panel" id="' + pid + '">' +
          '<div class="album-panel-in">' +
            "<div></div>" +
            "<div>" +
              '<h4 style="font-family:var(--sans);font-size:0.6rem;font-weight:600;letter-spacing:0.24em;' +
                 'text-transform:uppercase;color:var(--amber);margin:0 0 1.2rem">' + t("music.tracks") + "</h4>" +
              faixas +
              '<div class="album-links">' + platformBtns(a.links) + "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    ligarAcordeao();
    ligarPrevia();
  }

  /* abre e fecha o painel de faixas */
  function ligarAcordeao() {
    $$(".album").forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel  = document.getElementById(btn.getAttribute("aria-controls"));
        const aberto = btn.getAttribute("aria-expanded") === "true";

        /* fecha todos os outros — mantém a página calma */
        $$(".album").forEach((o) => {
          if (o !== btn) {
            o.setAttribute("aria-expanded", "false");
            const p = document.getElementById(o.getAttribute("aria-controls"));
            if (p) { p.style.maxHeight = "0px"; p.classList.remove("is-open"); }
          }
        });

        btn.setAttribute("aria-expanded", aberto ? "false" : "true");
        if (aberto) {
          panel.style.maxHeight = "0px";
          panel.classList.remove("is-open");
        } else {
          /* altura real do conteúdo, pra animação ficar suave */
          panel.style.maxHeight = panel.scrollHeight + "px";
          panel.classList.add("is-open");
        }
      });
    });
  }

  /* --- 3.9 do arquivo --- */
  function renderArchive() {
    const box = $("#archiveList");
    if (box) box.innerHTML = ARCHIVE.map((x) => "<li>" + x + "</li>").join("");
  }

  /* --- 3.10 mosaico de visuais --- */
  function renderMosaic() {
    const box = $("#mosaic");
    if (!box) return;

    box.innerHTML = VISUALS.map((v, i) =>
      '<button class="tile ' + v.size + '" type="button" data-i="' + i + '" ' +
              'aria-label="' + t("visuals.zoom") + ': ' + v.label + '">' +
        media(v.src, v.label, v.label, v.note, "Visual") +
      "</button>"
    ).join("");

    $$(".tile").forEach((el) =>
      el.addEventListener("click", () => abrirLightbox(VISUALS[+el.dataset.i]))
    );
  }

  /* --- 3.11 cidades dos ouvintes --- */
  function renderPins() {
    const box = $("#pins");
    if (box) box.innerHTML = PINS.map((c) => "<li>" + c + "</li>").join("");
  }

  /* --- 3.12 links do rodapé --- */
  function renderFooter() {
    const lista = (arr) =>
      arr.map((x) =>
        x.url
          ? '<li><a href="' + x.url + '" target="_blank" rel="noopener">' + x.name + "</a></li>"
          : '<li><span class="off">' + x.name + " · " + t("footer.soon") + "</span></li>"
      ).join("");

    const p = $("#footPlatforms"); if (p) p.innerHTML = lista(PLATFORMS);
    const s = $("#footSocials");   if (s) s.innerHTML = lista(SOCIALS);
    const y = $("#year");          if (y) y.textContent = new Date().getFullYear();
  }

  /* --- 3.13 a roda 3D dos álbuns --- */
  function renderWheel() {
    const wheel = $("#wheel");
    if (!wheel) return;
    wheel.innerHTML = ALBUMS.map((a, i) =>
      '<button class="wheel-item" type="button" data-i="' + i + '" data-id="' + a.id + '" ' +
              'aria-label="' + a.title + '">' +
        '<img src="' + a.cover + '" alt="" loading="lazy" decoding="async">' +
      "</button>"
    ).join("");

    /* clique numa capa: desce até o álbum na lista e abre as faixas */
    $$(".wheel-item").forEach((el) => {
      el.addEventListener("click", () => {
        const alvo = $('.album[data-id="' + el.dataset.id + '"]');
        if (!alvo) return;
        alvo.scrollIntoView({ behavior: "smooth", block: "center" });
        if (alvo.getAttribute("aria-expanded") !== "true") {
          setTimeout(() => alvo.click(), 650);
        }
      });
    });
  }

  /* roda tudo de uma vez */
  function renderAll() {
    renderMarquee();
    renderPhotos();
    renderCredits();
    renderSonic();
    renderFeatured();
    renderCountdown();
    renderDisc();
    renderArchive();
    renderMosaic();
    renderPins();
    renderFooter();
    renderWheel();
  }


  /* ===========================================================
     4. PRÉVIA DA CAPA QUE SEGUE O MOUSE
     Só no desktop — no celular não existe mouse.
     =========================================================== */
  function ligarPrevia() {
    const peek = $("#peek");
    if (!peek || window.matchMedia("(max-width: 760px)").matches) return;

    $$(".album").forEach((btn) => {
      const album = ALBUMS.find((a) => a.id === btn.dataset.id);

      btn.addEventListener("mouseenter", () => {
        peek.innerHTML = media(
          album.cover, album.title, album.title, null, "Capa"
        );
        peek.classList.add("is-on");
      });

      btn.addEventListener("mouseleave", () => peek.classList.remove("is-on"));

      btn.addEventListener("mousemove", (e) => {
        peek.style.transform =
          "translate(" + (e.clientX - 115) + "px," + (e.clientY - 115) + "px) scale(1)";
      });
    });
  }
  /* o transform acima substitui o translate(-50%,-50%) do CSS,
     então deslocamos pela metade da largura (230 / 2 = 115) */


  /* ===========================================================
     5. LIGHTBOX
     =========================================================== */
  const lb = $("#lightbox");
  let ultimoFoco = null;

  function abrirLightbox(v) {
    ultimoFoco = document.activeElement;
    $("#lbMedia").innerHTML = media(v.src, v.label, v.label, v.note, "Visual");
    $("#lbCap").textContent = v.label + (v.note ? " · " + v.note : "");
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }

  function fecharLightbox() {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  $("#lbClose").addEventListener("click", fecharLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) fecharLightbox(); });


  /* ===========================================================
     6. MENU DO CELULAR
     =========================================================== */
  const burger = $("#burger");
  const drawer = $("#drawer");

  burger.addEventListener("click", () => {
    const aberto = drawer.classList.toggle("is-open");
    burger.classList.toggle("is-open", aberto);
    burger.setAttribute("aria-expanded", String(aberto));
    document.body.style.overflow = aberto ? "hidden" : "";
  });

  /* ao escolher uma seção, o menu fecha */
  $$("#drawer a").forEach((a) =>
    a.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    })
  );

  /* Esc fecha o que estiver aberto */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lb.classList.contains("is-open")) fecharLightbox();
    if (drawer.classList.contains("is-open")) burger.click();
  });


  /* ===========================================================
     7. SCROLL — progresso, nav, trilho lateral
     =========================================================== */
  const nav      = $("#nav");
  const progress = $("#progress");
  const rail     = $("#rail");
  const secoes   = ["home", "about", "sound", "music", "visuals", "connect"];

  function onScroll() {
    const y     = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;

    /* fio de progresso no topo */
    progress.style.transform = "scaleX(" + (total > 0 ? y / total : 0) + ")";

    /* nav ganha fundo depois de sair do hero */
    nav.classList.toggle("is-stuck", y > 80);

    /* trilho lateral só aparece depois da primeira tela */
    rail.classList.toggle("is-on", y > window.innerHeight * 0.7);

    /* marca a seção em que a pessoa está */
    let atual = secoes[0];
    secoes.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) atual = id;
    });
    $$("#rail a").forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + atual)
    );
    $$("#navLinks a").forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + atual)
    );
  }

  /* requestAnimationFrame: evita travar a rolagem */
  let travado = false;
  window.addEventListener("scroll", () => {
    if (travado) return;
    travado = true;
    requestAnimationFrame(() => {
      try { onScroll(); girarRoda(); }
      finally { travado = false; }   /* um erro nunca trava o scroll pra sempre */
    });
  }, { passive: true });


  /* ===========================================================
     7b. A RODA — o scroll da pista vira rotação
     =========================================================== */
  const stage = $("#wheelStage");

  function girarRoda() {
    if (!stage) return;
    const wheel = $("#wheel");
    const itens = $$(".wheel-item");
    if (!wheel || !itens.length) return;

    const n    = itens.length;
    const step = 360 / n;                     /* ângulo entre capas  */

    /* progresso dentro da pista: 0 no topo, 1 no fim */
    const r     = stage.getBoundingClientRect();
    const pista = stage.offsetHeight - window.innerHeight;
    const prog  = Math.min(1, Math.max(0, -r.top / (pista || 1)));

    /* a roda gira do primeiro ao último álbum */
    const rot = prog * step * (n - 1);
    wheel.style.transform = "rotateY(" + (-rot) + "deg)";

    /* o raio é proporcional ao tamanho real da capa na tela */
    const raio = (itens[0].offsetWidth || 240) * 1.6;

    /* qual capa está de frente agora */
    const frente = Math.round(rot / step) % n;

    itens.forEach((el, i) => {
      el.style.transform =
        "rotateY(" + (i * step) + "deg) translateZ(" + raio + "px)";

      /* quanto mais longe da frente, mais apagada a capa */
      let dist = Math.abs(i * step - rot);
      dist = Math.min(dist, 360 - dist) / 180;          /* 0 = frente */
      el.style.opacity = String(1 - dist * 0.75);
      el.style.filter  = "brightness(" + (1 - dist * 0.55) + ")";
      el.classList.toggle("is-front", i === frente);
      el.tabIndex = i === frente ? 0 : -1;              /* teclado: só a da frente */
    });

    /* legenda da capa da frente */
    const a = ALBUMS[frente];
    if (a) {
      const titulo = $("#wcTitle"), meta = $("#wcMeta");
      if (titulo.textContent !== a.title) {
        titulo.textContent = a.title;
        meta.textContent =
          t(a.type === "single" ? "music.single" : "music.album") +
          " · " + a.lang + " · " + (a.year || "");
      }
    }
  }


  /* ===========================================================
     8. REVELAÇÃO NO SCROLL
     Os elementos sobem suavemente ao entrar na tela.
     =========================================================== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          observer.unobserve(en.target);   /* anima uma vez só */
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  function observarReveals() {
    $$(".reveal:not(.is-in)").forEach((el) => observer.observe(el));
  }


  /* ===========================================================
     9. FORMULÁRIO DA NEWSLETTER
     -----------------------------------------------------------
     Por enquanto valida e confirma na tela. Para enviar de
     verdade, conecte aqui o serviço de e-mail (Mailchimp,
     Resend, Brevo...) no lugar indicado abaixo.
     =========================================================== */
  const form = $("#form");
  const msg  = $("#formMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = $("#fMail").value.trim();
    const ok    = $("#fOk").checked;
    const valido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!valido || !ok) {
      msg.textContent = t("connect.err");
      msg.className = "form-msg err";
      return;
    }

    /* desativa o botão enquanto envia, pra não duplicar */
    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;

    try {
      const resp = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: $("#fName").value.trim(),
          email: email,
          language: $("#fLang").value,
          consent: ok,
          website: $("#fWeb") ? $("#fWeb").value : ""   /* honeypot */
        })
      });

      /* 404/405 = estamos numa prévia sem backend; não tratamos como erro */
      if (resp.ok || resp.status === 404 || resp.status === 405) {
        msg.textContent = t("connect.ok");
        msg.className = "form-msg ok";
        form.reset();
      } else {
        msg.textContent = t("connect.err");
        msg.className = "form-msg err";
      }
    } catch (_) {
      /* sem rede / prévia local: confirma visualmente mesmo assim */
      msg.textContent = t("connect.ok");
      msg.className = "form-msg ok";
      form.reset();
    } finally {
      botao.disabled = false;
    }
  });


  /* ===========================================================
     10. PARTIDA
     =========================================================== */
  applyLang();          /* monta todo o conteúdo no idioma certo */
  observarReveals();    /* liga as animações de entrada */
  onScroll();           /* estado inicial da nav e do trilho */
  girarRoda();          /* posição inicial da roda */
  window.addEventListener("resize", girarRoda);

  /* libera a animação de abertura do hero */
  requestAnimationFrame(() => document.body.classList.add("is-ready"));

  /* o contador se atualiza a cada minuto, se estiver ativo */
  if (RELEASE_DATE) setInterval(renderCountdown, 60000);

  /* quando o conteúdo é remontado (troca de idioma),
     religa as animações dos elementos novos */
  const reobservar = new MutationObserver(() => observarReveals());
  reobservar.observe(document.body, { childList: true, subtree: true });

})();
