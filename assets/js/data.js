/* =============================================================
   ARUAN LUMEN — CAMADA DE CONTEÚDO
   -------------------------------------------------------------
   TUDO que é texto, álbum ou link mora neste arquivo.
   Para atualizar o site você NÃO precisa mexer no HTML nem no CSS.
   Basta editar aqui embaixo.
   ============================================================= */


/* -------------------------------------------------------------
   1. TEXTOS DO SITE (bilíngue)
   Cada chave aparece no HTML como data-t="nome-da-chave".
   ------------------------------------------------------------- */
const I18N = {

  /* ===================== INGLÊS ===================== */
  en: {
    "nav.home": "Home", "nav.music": "Music", "nav.about": "About",
    "nav.visuals": "Visuals", "nav.connect": "Connect",

    /* hero */
    "hero.tagline": "Music for what remains.",
    "hero.cta1": "Explore the music",
    "hero.cta2": "Enter the world",
    "hero.scroll": "Scroll",

    /* faixa corrida */
    "marquee.1": "The beauty of what remains",
    "marquee.2": "Some things never really leave us",

    /* o artista */
    "artist.label": "The Artist",
    "artist.title": "Some stories stay with us.",
    "artist.open": "Aruan Lumen creates music for the moments that refuse to disappear.",
    "artist.p2": "Through intimate vocals, cinematic atmospheres and deeply personal storytelling, his songs explore love, memory, absence and the quiet courage of beginning again.",
    "artist.p3": "Every song is a place where emotion becomes sound.",
    "artist.cta": "Discover Aruan",
    "credits.voice": "Voice", "credits.voice.v": "Warm baritone · intimate · restrained",
    "credits.sound": "Sound", "credits.sound.v": "Cinematic alternative soul",
    "credits.lang": "Languages", "credits.lang.v": "Portuguese (BR) · English",
    "credits.theme": "Themes", "credits.theme.v": "Love · memory · absence · rebuilding",

    /* citação */
    "slab.l1": "Not everything that ends",
    "slab.l2": "disappears.",
    "slab.credit": "The beauty of what remains — core concept",

    /* lançamento */
    "featured.label": "Featured Release",
    "featured.listen": "Listen",
    "featured.presave": "Pre-save",
    "featured.full": "Full album",
    "featured.soon": "Coming soon",
    "featured.tbc": "Release date to be confirmed",
    "cd.days": "Days", "cd.hours": "Hours", "cd.min": "Minutes",

    /* identidade sonora */
    "sonic.label": "Sonic Identity",
    "sonic.title": "What the music is made of.",
    "sonic.intro": "Streaming is where music is consumed. This is where it is understood.",
    "sonic.1.t": "Intimacy first",
    "sonic.1.p": "A warm baritone recorded close to the listener. Breath, hesitation and restraint are kept, not polished away.",
    "sonic.2.t": "Organic instruments",
    "sonic.2.p": "Fingerpicked guitar, soft piano, warm bass and discreet percussion. Analogue textures and vinyl noise instead of gloss.",
    "sonic.3.t": "Space as instrument",
    "sonic.3.p": "Room between every element. Natural reverb, atmospheric layers and silences placed on purpose.",
    "sonic.4.t": "Gradual emotion",
    "sonic.4.p": "Songs grow rather than explode. The build is earned, never forced into a chorus.",
    "sonic.5.t": "Two languages",
    "sonic.5.p": "Written in Brazilian Portuguese and English, each one keeping its own natural pronunciation and sensibility.",
    "sonic.6.t": "Cinematic frame",
    "sonic.6.p": "Every record is written as a place. Ambient recordings, strings and texture build the scene around the voice.",

    /* discografia */
    "music.label": "Music",
    "music.title": "The body of work.",
    "music.intro": "A permanent archive of every record, song and story.",
    "music.tracks": "Tracklist",
    "music.notracks": "Tracklist to be confirmed.",
    "music.album":   "Album",
    "wheel.hint":    "Scroll to spin · tap the cover to open",
    "music.single":  "Single",

    /* visuais */
    "visuals.label": "Visuals",
    "visuals.title": "Photography is part of the song.",
    "visuals.intro": "The official cover art of every release — with portraits and editorial series joining as the archive grows.",
    "visuals.zoom": "Open image",
    "visuals.hint": "Swipe, use the arrows or your keyboard",

    /* cartas */
    "letters.label": "Letters from Aruan",
    "letters.title": "Some memories become songs.",
    "letters.p": "A space for reflections, the stories behind each song and small essays written between records.",
    "letters.cta": "Arriving in the next chapter",

    /* comunidade */
    "connect.label": "Stay Close",
    "connect.title": "Stay close.",
    "connect.sub": "New music. New stories. No noise.",
    "connect.name": "Name (optional)",
    "connect.email": "Your e-mail",
    "connect.lang": "Preferred language",
    "connect.consent": "I agree to receive e-mails from Aruan Lumen and I know I can unsubscribe at any time.",
    "connect.cta": "Join the journey",
    "connect.ok": "Welcome. Something is on its way.",
    "connect.err": "Please fill in a valid e-mail and accept the consent.",
    "connect.pins": "Listeners are writing in from",

    /* rodapé */
    "footer.listen": "Listen on",
    "footer.follow": "Follow",
    "footer.more": "More",
    "footer.press": "Press kit",
    "footer.contact": "Professional contact",
    "footer.privacy": "Privacy",
    "footer.ai": "Aruan Lumen is an artistic identity developed with artificial intelligence and human creative direction.",
    "footer.rights": "All rights reserved.",
    "footer.soon": "Soon"
  },

  /* ===================== PORTUGUÊS ===================== */
  pt: {
    "nav.home": "Início", "nav.music": "Música", "nav.about": "Sobre",
    "nav.visuals": "Visuais", "nav.connect": "Conecte-se",

    /* hero */
    "hero.tagline": "Música para aquilo que permanece.",
    "hero.cta1": "Ouvir as músicas",
    "hero.cta2": "Entrar no universo",
    "hero.scroll": "Role",

    /* faixa corrida */
    "marquee.1": "A beleza daquilo que permanece",
    "marquee.2": "Algumas coisas nunca vão embora de verdade",

    /* o artista */
    "artist.label": "O Artista",
    "artist.title": "Algumas histórias ficam com a gente.",
    "artist.open": "Aruan Lumen cria música para os momentos que se recusam a desaparecer.",
    "artist.p2": "Com voz íntima, atmosferas cinematográficas e uma narrativa profundamente pessoal, suas canções exploram o amor, a memória, a ausência e a coragem silenciosa de começar de novo.",
    "artist.p3": "Cada música é um lugar onde a emoção vira som.",
    "artist.cta": "Conhecer Aruan",
    "credits.voice": "Voz", "credits.voice.v": "Barítono quente · íntimo · contido",
    "credits.sound": "Som", "credits.sound.v": "Soul alternativo cinematográfico",
    "credits.lang": "Idiomas", "credits.lang.v": "Português (BR) · Inglês",
    "credits.theme": "Temas", "credits.theme.v": "Amor · memória · ausência · reconstrução",

    /* citação */
    "slab.l1": "Nem tudo que termina",
    "slab.l2": "desaparece.",
    "slab.credit": "A beleza daquilo que permanece — conceito central",

    /* lançamento */
    "featured.label": "Lançamento em destaque",
    "featured.listen": "Ouvir",
    "featured.presave": "Pré-save",
    "featured.full": "Álbum completo",
    "featured.soon": "Em breve",
    "featured.tbc": "Data de lançamento a confirmar",
    "cd.days": "Dias", "cd.hours": "Horas", "cd.min": "Minutos",

    /* identidade sonora */
    "sonic.label": "Identidade sonora",
    "sonic.title": "Do que a música é feita.",
    "sonic.intro": "O streaming é onde a música é consumida. Aqui é onde ela é compreendida.",
    "sonic.1.t": "A intimidade primeiro",
    "sonic.1.p": "Um barítono quente gravado perto do ouvinte. A respiração, a hesitação e a contenção ficam — não são polidas pra fora.",
    "sonic.2.t": "Instrumentos orgânicos",
    "sonic.2.p": "Violão dedilhado, piano suave, baixo quente e percussão discreta. Texturas analógicas e ruído de vinil em vez de brilho artificial.",
    "sonic.3.t": "O espaço como instrumento",
    "sonic.3.p": "Ar entre cada elemento. Reverberação natural, camadas atmosféricas e silêncios colocados de propósito.",
    "sonic.4.t": "Emoção gradual",
    "sonic.4.p": "As músicas crescem em vez de explodir. A virada é conquistada, nunca forçada num refrão.",
    "sonic.5.t": "Dois idiomas",
    "sonic.5.p": "Composto em português brasileiro e em inglês, cada um guardando sua pronúncia natural e sua própria sensibilidade.",
    "sonic.6.t": "Enquadramento cinematográfico",
    "sonic.6.p": "Cada disco é escrito como um lugar. Gravações de ambiente, cordas e textura constroem a cena em volta da voz.",

    /* discografia */
    "music.label": "Música",
    "music.title": "A obra.",
    "music.intro": "Um arquivo permanente de cada disco, cada música e cada história.",
    "music.tracks": "Faixas",
    "music.notracks": "Faixas a confirmar.",
    "music.album":   "Álbum",
    "wheel.hint":    "Role para girar · toque na capa para abrir",
    "music.single":  "Single",

    /* visuais */
    "visuals.label": "Visuais",
    "visuals.title": "A fotografia faz parte da canção.",
    "visuals.intro": "As capas oficiais de cada lançamento — retratos e séries editoriais entram conforme o arquivo cresce.",
    "visuals.zoom": "Abrir imagem",
    "visuals.hint": "Deslize, use as setas ou o teclado",

    /* cartas */
    "letters.label": "Cartas do Aruan",
    "letters.title": "Algumas memórias se tornam canções.",
    "letters.p": "Um espaço para reflexões, as histórias por trás de cada música e pequenos ensaios escritos entre um disco e outro.",
    "letters.cta": "Chega no próximo capítulo",

    /* comunidade */
    "connect.label": "Fique perto",
    "connect.title": "Fique perto.",
    "connect.sub": "Música nova. Histórias novas. Sem ruído.",
    "connect.name": "Nome (opcional)",
    "connect.email": "Seu e-mail",
    "connect.lang": "Idioma preferido",
    "connect.consent": "Concordo em receber e-mails do Aruan Lumen e sei que posso cancelar quando quiser.",
    "connect.cta": "Entrar na jornada",
    "connect.ok": "Bem-vindo. Algo está a caminho.",
    "connect.err": "Preencha um e-mail válido e aceite o consentimento.",
    "connect.pins": "Os ouvintes estão escrevendo de",

    /* rodapé */
    "footer.listen": "Ouça em",
    "footer.follow": "Siga",
    "footer.more": "Mais",
    "footer.press": "Material de imprensa",
    "footer.contact": "Contato profissional",
    "footer.privacy": "Privacidade",
    "footer.ai": "Aruan Lumen é uma identidade artística desenvolvida com inteligência artificial e direção criativa humana.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.soon": "Em breve"
  }
};


/* -------------------------------------------------------------
   2. DISCOGRAFIA — CONFIRMADA NAS PLATAFORMAS (nov/2026)
   -------------------------------------------------------------
   Dados verificados na Apple Music e no Deezer em 02/11/2026.
   Capas oficiais baixadas do catálogo (assets/img/covers/).

   Cada faixa é { t: "título", d: duração em segundos }.
   "type": "album" ou "single".
   Links por álbum: applemusic e deezer confirmados um a um.
   O Spotify usa a página oficial do artista.
   ------------------------------------------------------------- */
const ALBUMS = [
  {
    id: "meu-caminho-de-volta",
    title: "Meu Caminho de Volta",
    year: 2026, date: "2026-06-28", lang: "PT", type: "album",
    cover: "assets/img/covers/meu-caminho-de-volta.webp",
    desc: {
      en: "Sometimes the longest distance we travel is between who we became and who we always were. A record about choosing yourself and finding the way back.",
      pt: "Às vezes a maior distância que percorremos é entre quem nos tornamos e quem sempre fomos. Um disco sobre se escolher e encontrar o caminho de volta."
    },
    tracks: [
      { t: "Prólogo", d: 201 },
      { t: "Cicatrizes Profundas", d: 228 },
      { t: "Eu Não Virei a Dor", d: 230 },
      { t: "Meu Valor", d: 210 },
      { t: "De Pai Para Filho", d: 259 },
      { t: "Correntes Invisíveis", d: 238 },
      { t: "Eu Me Escolho", d: 243 },
      { t: "Jornada Minha", d: 170 },
      { t: "Estradas Alheias", d: 242 },
      { t: "Limites", d: 216 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/meu-caminho-de-volta/6783633757",
      deezer: "https://www.deezer.com/album/1013047061"
    },
    status: "released"
  },
  {
    id: "the-rope-and-the-scar",
    title: "The Rope And The Scar",
    year: 2026, date: "2026-06-02", lang: "EN", type: "album",
    cover: "assets/img/covers/the-rope-and-the-scar.webp",
    desc: {
      en: "The rope is what pulls you out. The scar is proof you made it. Songs about climbing back and things starting to make sense now.",
      pt: "A corda é o que te puxa pra fora. A cicatriz é a prova de que você conseguiu. Canções sobre a subida de volta e as coisas começando a fazer sentido."
    },
    tracks: [
      { t: "The Dream", d: 216 },
      { t: "Doesn't Take Me Back", d: 220 },
      { t: "Still Got Time", d: 173 },
      { t: "The Rope", d: 211 },
      { t: "A Little Better", d: 182 },
      { t: "Make Sense Now", d: 207 },
      { t: "In My Head", d: 218 },
      { t: "A Place Like Ours", d: 191 },
      { t: "Different Now", d: 234 },
      { t: "First Look", d: 214 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/the-rope-and-the-scar/6775314801",
      deezer: "https://www.deezer.com/album/995577261"
    },
    status: "released"
  },
  {
    id: "carta-no-silencio",
    title: "Carta No Silêncio",
    year: 2026, date: "2026-05-19", lang: "PT", type: "single",
    cover: "assets/img/covers/carta-no-silencio.webp",
    desc: {
      en: "A letter written into the silence — everything that was never said, finally sung.",
      pt: "Uma carta escrita no silêncio — tudo o que nunca foi dito, enfim cantado."
    },
    tracks: [{ t: "Carta No Silêncio", d: 229 }],
    links: {
      applemusic: "https://music.apple.com/us/album/carta-no-sil%C3%AAncio-single/6773694945",
      deezer: "https://www.deezer.com/album/986969351"
    },
    status: "released"
  },
  {
    id: "anatomia-do-silencio",
    title: "Anatomia do Silêncio",
    year: 2026, date: "2026-04-24", lang: "PT", type: "album",
    cover: "assets/img/covers/anatomia-do-silencio.webp",
    desc: {
      en: "Twelve songs dissecting what lives inside the quiet: heroes of the everyday, sweetness, exposure and the dreams that carry us.",
      pt: "Doze canções dissecando o que mora dentro do quieto: heróis do cotidiano, doçura, exposição e os sonhos que carregam a gente."
    },
    tracks: [
      { t: "Sumido", d: 215 },
      { t: "A Gente é Herói", d: 204 },
      { t: "Um Lugar Só Nosso", d: 189 },
      { t: "Faz Sentido Agora", d: 226 },
      { t: "Leve", d: 209 },
      { t: "Passei Pela Noite", d: 186 },
      { t: "Anatomia do Silêncio", d: 171 },
      { t: "Depois De Você", d: 194 },
      { t: "Sonho Que Me Leva", d: 215 },
      { t: "Doce Demais", d: 228 },
      { t: "Em Que Lugar", d: 154 },
      { t: "Exposto", d: 222 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/anatomia-do-sil%C3%AAncio/1895213695",
      deezer: "https://www.deezer.com/album/967640131"
    },
    status: "released"
  },
  {
    id: "where-silence-lives",
    title: "Where Silence Lives",
    year: 2026, date: "2026-04-17", lang: "EN", type: "album",
    cover: "assets/img/covers/where-silence-lives.webp",
    desc: {
      en: "The quiet after everything. Songs about standing where you are, making it through the night and realising — we're still here.",
      pt: "O quieto depois de tudo. Canções sobre estar de pé onde se está, atravessar a noite e perceber — ainda estamos aqui."
    },
    tracks: [
      { t: "Fading", d: 158 },
      { t: "Where I Stand", d: 228 },
      { t: "Just The Way You Are", d: 198 },
      { t: "Right Place", d: 203 },
      { t: "Between The Silence", d: 288 },
      { t: "After You", d: 233 },
      { t: "Without Knowing", d: 249 },
      { t: "I Made It Through The Night", d: 189 },
      { t: "Be At Easy", d: 171 },
      { t: "We're Still Here", d: 143 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/where-silence-lives/1894011626",
      deezer: "https://www.deezer.com/album/962177661"
    },
    status: "released"
  },
  {
    id: "sem-precisar-provar",
    title: "Sem Precisar Provar",
    year: 2026, date: "2026-03-05", lang: "PT", type: "single",
    cover: "assets/img/covers/sem-precisar-provar.webp",
    desc: {
      en: "On worth that doesn't ask for permission — existing whole, without needing to prove anything.",
      pt: "Sobre um valor que não pede licença — existir inteiro, sem precisar provar nada."
    },
    tracks: [{ t: "Sem Precisar Provar", d: null }],
    links: {
      applemusic: "https://music.apple.com/us/album/sem-precisar-provar-single/1882844384",
      deezer: "https://www.deezer.com/album/933592861"
    },
    status: "released"
  },
  {
    id: "stay",
    title: "STAY",
    year: 2026, date: "2026-01-23", lang: "EN", type: "album",
    cover: "assets/img/covers/stay.webp",
    desc: {
      en: "Closeness, desire and the fragile geometry of staying. The most intimate chapter of the universe.",
      pt: "Proximidade, desejo e a geometria frágil de ficar. O capítulo mais íntimo do universo."
    },
    tracks: [
      { t: "Even So", d: 286 },
      { t: "Under Your Spell", d: 294 },
      { t: "Still My Valentine", d: 227 },
      { t: "Too Close", d: 224 },
      { t: "Your Eyes", d: 273 },
      { t: "If Love Crossed The Line", d: 199 },
      { t: "After It Passed", d: 201 },
      { t: "Where Love Waits", d: 224 },
      { t: "Limitless", d: 216 },
      { t: "Whole", d: 238 },
      { t: "Still Here (Ainda Aqui)", d: 264 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/stay/1869230270",
      deezer: "https://www.deezer.com/album/897739612"
    },
    status: "released"
  },
  {
    id: "anatomia-da-ausencia",
    title: "Anatomia da Ausência",
    year: 2026, date: "2026-01-20", lang: "PT", type: "album",
    cover: "assets/img/covers/anatomia-da-ausencia.webp",
    desc: {
      en: "The Portuguese-language sister of Where the Broken Shine — the same wounds and the same light, sung in the language they were lived in.",
      pt: "A irmã em português de Where the Broken Shine — as mesmas feridas e a mesma luz, cantadas na língua em que foram vividas."
    },
    tracks: [
      { t: "Onde o Vento Me Chamar", d: 319 },
      { t: "Pequenas Coisas Que Ficam", d: 247 },
      { t: "Depois Que Você Chegou", d: 249 },
      { t: "Onde a Luz Me Trouxe", d: 172 },
      { t: "Corações Quebrados Que Brilham", d: 209 },
      { t: "Tua Luz", d: 210 },
      { t: "Palavras", d: 182 },
      { t: "Minha Escolha", d: 239 },
      { t: "Oceano do Que Fomos", d: 219 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/anatomia-da-aus%C3%AAncia/1869944929",
      deezer: "https://www.deezer.com/album/899597072"
    },
    status: "released"
  },
  {
    id: "where-the-broken-shine",
    title: "Where the Broken Shine",
    year: 2025, date: "2025-12-19", lang: "EN", type: "album",
    cover: "assets/img/covers/where-the-broken-shine.webp",
    desc: {
      en: "Where it all began. A record about the light that only appears after something breaks — cinematic, intimate, unresolved.",
      pt: "Onde tudo começou. Um disco sobre a luz que só aparece depois que algo se quebra — cinematográfico, íntimo, em aberto."
    },
    tracks: [
      { t: "Where the Wind Will Call Me", d: 334 },
      { t: "Little Things That Stay", d: 288 },
      { t: "After You Arrived", d: 253 },
      { t: "Where the Broken Shine", d: 169 },
      { t: "The Light You Left Behind", d: 203 },
      { t: "The Words You Left Behind", d: 213 },
      { t: "I Would Still Choose You", d: 188 },
      { t: "Where the Light Brought Me", d: 172 },
      { t: "Ocean of What We Were", d: 199 }
    ],
    links: {
      applemusic: "https://music.apple.com/us/album/where-the-broken-shine/1861407504",
      deezer: "https://www.deezer.com/album/877406982",
      amazonmusic: "https://music.amazon.com/albums/B0G6YSWFHN"
    },
    status: "released"
  }
];

/* Qual projeto aparece no destaque da Home.
   Troque este id quando houver lançamento novo. */
const FEATURED_ID = "meu-caminho-de-volta";

/* Data do próximo lançamento, formato "AAAA-MM-DD".
   Deixe null e o contador fica escondido automaticamente. */
const RELEASE_DATE = null;



/* -------------------------------------------------------------
   4. GALERIA DE VISUAIS
   Por enquanto: as capas oficiais dos lançamentos.
   Quando as fotos editoriais chegarem, é só adicionar itens
   com o caminho delas em "src".
   ------------------------------------------------------------- */
const VISUALS = [
  { id: "v1", size: "tall", src: "assets/img/visuals/aruan-poltrona-pb.webp",     label: "Aruan Lumen — retrato editorial",       note: "P&B" },
  { id: "v2", size: "wide", src: "assets/img/visuals/aruan-linho-violao.webp",    label: "Aruan Lumen — com o violão",            note: "Editorial" },
  { id: "v3", size: "sq",   src: "assets/img/covers/meu-caminho-de-volta.webp",   label: "Meu Caminho de Volta — capa oficial",   note: "2026" },
  { id: "v4", size: "sq",   src: "assets/img/covers/where-the-broken-shine.webp", label: "Where the Broken Shine — capa oficial", note: "2025" },
  { id: "v5", size: "wide", src: "assets/img/visuals/aruan-industrial.webp",      label: "Aruan Lumen — estúdio",                 note: "Editorial" },
  { id: "v6", size: "tall", src: "assets/img/portraits/aruan-janela.webp",        label: "Aruan Lumen — luz de janela",           note: "Editorial" }
];


/* -------------------------------------------------------------
   5. PLATAFORMAS E REDES — LINKS OFICIAIS CONFIRMADOS
   O link do artista vale pra todos os álbuns que não tiverem
   link próprio na plataforma.
   ------------------------------------------------------------- */
const PLATFORMS = [
  { name: "Spotify",       url: "https://open.spotify.com/artist/7jW0qHMgJdJz7Gdr4pb1jk" },
  { name: "Apple Music",   url: "https://music.apple.com/us/artist/aruan-lumen/1861380796" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCVdAnzR-u2N1jM60nbhsLNA" },
  { name: "Deezer",        url: "https://www.deezer.com/artist/361880382" },
  { name: "Amazon Music",  url: "https://music.amazon.com/artists/B0G6YJSW5G" }
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/aruanlumen/" },
  { name: "YouTube",   url: "https://www.youtube.com/@aruanlumen" },
  { name: "TikTok",    url: "https://www.tiktok.com/@aruanlumen" }
];

/* Cidades de exemplo no bloco de comunidade.
   Na fase 2 isso vem de verdade de quem assina a newsletter. */
const PINS = ["São Paulo", "Lisboa", "London", "Berlin", "New York", "Rio de Janeiro", "Tokyo"];
