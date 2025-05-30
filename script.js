const LOGINS = [
  { username: "admjao", password: "SlAxMjMhMTIz" },
  { username: "zanatta", password: "c2FtdWNhMjAxMQ==" }, // ASSINOU 30.05 | ACABA 30.07
  { username: "nome1", password: "ZXVtdWRvMTIz" },
  { username: "nome2", password: "ZXVtdWRvMTIz" },
  { username: "nome3", password: "ZXVtdWRvMTIz" },         
  { username: "nome4", password: "ZXVtdWRvMTIz" },        
  { username: "nome5", password: "ZXVtdWRvMTIz" },    
  { username: "nome6", password: "ZXVtdWRvMTIz" },    
  { username: "nome7", password: "ZXVtdWRvMTIz" },    
  { username: "nome8", password: "ZXVtdWRvMTIz" },
  { username: "nome9", password: "ZXVtdWRvMTIz" }
];

const SESSION_KEY = "xfut_session";

// Lista de jogos e opções (agora com data e hora exata de início)
const jogos = [
  {
    nome: "Final da Champions | PSG VS Inter (31/05)",
    inicio: "2025-05-31T16:00:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://embedflix.top/tv/tnt" },
      { nome: "Opção 2", url: "https://nossoplayeronlinehd.lat/tv/sbt" },
      { nome: "Opção 3", url: "https://nossoplayeronlinehd.lat/tv/tnt" },
      { nome: "Opção 4", url: "https://embedflix.top/infra.php?url=/channels/hd/hd10.php" },
      { nome: "Opção 5", url: "https://embedflix.top/infra.php?url=/channels/bra/br4.php" }
    ]
  },
  {
    nome: "Bahia VS São Paulo (31/05)",
    inicio: "2025-05-31T18:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://embedflix.top/tv/prfc-1-hd" },
      { nome: "Opção 2", url: "https://embedflix.top/infra.php?url=/channels/bra/br4.php" },
      { nome: "Opção 3", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=premiere" },
      { nome: "Opção 4", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=premiere-3" }
    ]
  },
  {
    nome: "Vasco VS Bragantino (31/05)",
    inicio: "2025-05-31T21:00:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://nossoplayeronlinehd.lat/tv/sportv" },
      { nome: "Opção 3", url: "https://embedflix.top/infra.php?url=/channels/bra/br1.php" },
      { nome: "Opção 4", url: "https://embedflix.top/infra.php?url=/channels/bra/br5.php" },
      { nome: "Opção 5", url: "https://embedflix.top/tv/sportv-hd" }
    ]
  },
  {
    nome: "Mirassol Vs Sport Recife (01/06)",
    inicio: "2025-06-01T11:00:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Juventude Vs Grêmio (01/06)",
    inicio: "2025-06-01T16:00:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Santos Vs Botafogo (01/06)",
    inicio: "2025-06-01T16:00:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Flamengo Vs Fortaleza (01/06)",
    inicio: "2025-06-01T18:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Ceará SC Vs Atlético-MG (01/06)",
    inicio: "2025-06-01T18:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Corinthians Vs EC Vitória (01/06)",
    inicio: "2025-06-01T18:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Cruzeiro Vs Palmeiras (01/06)",
    inicio: "2025-06-01T19:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Internacional Vs Fluminense (01/06)",
    inicio: "2025-06-01T20:30:00-03:00",
    opcoes: [
      { nome: "Opção 1", url: "https://meuplayeronlinehd.com/myplay/watch.html?id=sportv" },
      { nome: "Opção 2", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 3", url: "https://embedflix.top/tv/globo-sp" },
      { nome: "Opção 4", url: "https://embedflix.top/tv/globo-sp" }
    ]
  },
  {
    nome: "Canais Fixos",
    inicio: null,
    opcoes: [
      { nome: "UFC 1", url: "https://embedflix.top/tv/ufc-fight-pass-hd" },
      { nome: "UFC 2", url: "https://nossoplayeronlinehd.com/tv/ufcfightpass" },
      { nome: "Globo Sp", url: "https://embedflix.top/tv/globo-sp" }
    ]
  }
];

// Controle dos intervalos para cada jogo
const intervalosJogos = {};

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map(n => String(n).padStart(2, '0')).join(':');
}

function showMain() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-container").style.display = "block";
  document.getElementById("notificacao-jogo").style.display = "block";
  renderJogos();
}

function showLogin() {
  document.getElementById("main-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
  localStorage.removeItem(SESSION_KEY);
}

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");
  if (localStorage.getItem(SESSION_KEY) === "active") {
    msg.innerText = "Já existe um login ativo neste navegador!";
    return;
  }
  let encodedPass = "";
  try {
    encodedPass = btoa(p);
  } catch (e) {
    msg.innerText = "Senha contém caracteres inválidos!";
    return;
  }
  const isValid = LOGINS.some(login => login.username === u && login.password === encodedPass);
  if (isValid) {
    localStorage.setItem(SESSION_KEY, "active");
    showMain();
    msg.innerText = "";
  } else {
    msg.innerText = "Usuário ou senha inválidos!";
  }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  showLogin();
}

// Função para normalizar string (remover acentos)
function normalizar(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderJogos(filter = "") {
  const list = document.getElementById("games-list");
  list.innerHTML = "";
  // Limpa todos intervalos antigos
  for (const idx in intervalosJogos) {
    clearInterval(intervalosJogos[idx]);
    delete intervalosJogos[idx];
  }
  jogos
    .filter(jogo => normalizar(jogo.nome).includes(normalizar(filter)))
    .forEach((jogo, idx) => {
      const block = document.createElement("div");
      block.className = "game-block";

      const title = document.createElement("h3");
      title.innerText = jogo.nome;
      block.appendChild(title);

      let statusArea = null;
      if (jogo.inicio) {
        statusArea = document.createElement("div");
        statusArea.className = "status-area";
        statusArea.id = `status-jogo-${idx}`;
        block.appendChild(statusArea);
      }

      const opcoes = document.createElement("div");
      opcoes.className = "opcoes";
      jogo.opcoes.forEach(opcao => {
        const link = document.createElement("a");
        link.href = opcao.url;
        link.innerText = opcao.nome;
        link.className = "opcao-link";
        link.target = "_blank";
        opcoes.appendChild(link);
      });
      block.appendChild(opcoes);

      list.appendChild(block);

      if (jogo.inicio) {
        iniciarContagemJogo(jogo, idx);
      }
    });
}

const TEMPO_JOGO_MS = 115 * 60 * 1000; // 1h55min em ms

function iniciarContagemJogo(jogo, idx) {
  const statusArea = document.getElementById(`status-jogo-${idx}`);
  if (!statusArea) return;

  function updateStatus() {
    const agora = new Date();
    const inicio = new Date(jogo.inicio);
    const diff = inicio - agora;
    if (diff > 0) {
      if (diff <= 5 * 60 * 1000) {
        statusArea.innerHTML = `<span class="status ao-vivo-instant">AO VIVO EM INSTANTE</span> <span class="timer">${formatTime(diff)}</span>`;
      } else {
        statusArea.innerHTML = `<span class="status countdown">Começa em: <span class="timer">${formatTime(diff)}</span></span>`;
      }
    } else if (diff > -TEMPO_JOGO_MS) {
      const tempoRestante = TEMPO_JOGO_MS + diff;
      if (tempoRestante > 0) {
        statusArea.innerHTML = `<span class="status ao-vivo-agora">🟢 AO VIVO AGORA</span> <span class="timer">${formatTime(tempoRestante)}</span>`;
      } else {
        statusArea.innerHTML = `<span class="status encerrado">Jogo encerrado</span>`;
      }
    } else {
      statusArea.innerHTML = `<span class="status encerrado">Jogo encerrado</span>`;
    }
  }
  updateStatus();
  // Limpa intervalo antigo se houver
  if (intervalosJogos[idx]) clearInterval(intervalosJogos[idx]);
  intervalosJogos[idx] = setInterval(updateStatus, 1000);
}

window.onload = function() {
  if (localStorage.getItem(SESSION_KEY) === "active") {
    showMain();
  } else {
    showLogin();
  }
  window.addEventListener("storage", function(e) {
    if (e.key === SESSION_KEY && e.newValue !== "active") {
      showLogin();
    }
  });
};

window.addEventListener("beforeunload", () => {
  localStorage.removeItem(SESSION_KEY);
});

function closeNotification() {
  const notif = document.getElementById("user-notification");
  if (notif) notif.style.display = "none";
}

function handleSearch() {
  const searchTerm = document.getElementById('search-input').value;
  renderJogos(searchTerm);
}
