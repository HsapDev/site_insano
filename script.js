const fotos = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
   "img4.jpg",
    "img5.jpg",
     "img6.jpg",
      "img7.jpg",
       "img8.jpg",
        "img9.jpg"
];

let indice = 0;
const img = document.getElementById("foto");

function avancar() {
  indice = (indice + 1) % fotos.length;
  img.src = fotos[indice];
}

function voltar() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  img.src = fotos[indice];
}

function atualizarContador() {
  const inicio = new Date(2024, 2, 3, 0, 0); // 3 de março de 2024
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

  // Correções
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Monta o texto bonitão
  const texto = `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
  document.getElementById("data").innerText = `Estamos juntos há: ${texto}`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Também chama logo ao carregar
atualizarContador();
let tocando = false;

function toggleMusica() {
  const audio = document.getElementById("audio");
  const musicaDiv = document.querySelector(".musica");

  if (!tocando) {
    audio.play();
    musicaDiv.innerHTML = '<i>🔊</i> Tocando: Blue - Eiffel 65';
  } else {
    audio.pause();
    musicaDiv.innerHTML = '<i>🎵</i> Tocar: Blue - Eiffel 65';
  }

  tocando = !tocando;
}