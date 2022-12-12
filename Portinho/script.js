/* FUNÇÃO PARA ABRIR E FECHER ABA DE CONFIGURAÇÕES */
function acao(){
  let configone = document.querySelector('.config01')
  let configtwo = document.querySelector('.config02')
  let modal = document.querySelector('.modal')
  let fade = document.querySelector('.fade')
  if (modal.style.display == 'block') {
    /* TENTATIVA DE SETAR DELAY + ANIMAÇÃO AO FECHAR ABA DE CONFIGURAÇÕES
    setTimeout(()=> {
      document.getElementById("result").innerHTML = "Hello, I am here";
      configone.style.display = 'none';
      configtwo.style.display = 'block';
    }
    ,400);
    */
    configone.style.display = 'none';
    configtwo.style.display = 'block';
    modal.style.display = 'none';
    fade.style.display = 'none';
  } else {
    configone.style.display = 'block';
    configtwo.style.display = 'none';
    modal.style.display = 'block';
    fade.style.display = 'block';
  }
}

function tema01(){
  const a = document.querySelector("#link")
  let configc = document.querySelector('.config')
  let btn1 = document.querySelector('.btn1')
  let btn2 = document.querySelector('.btn2')
  let btn3 = document.querySelector('.btn3')
  let btn4 = document.querySelector('.btn4')
  a.href = "temahome.css"
  configc.style.backgroundColor = '#0054A5';
  btn1.style.backgroundColor = 'rgb(205, 205, 205)';
  btn2.style.backgroundColor = 'rgb(230, 230, 230)';
  btn3.style.backgroundColor = 'rgb(230, 230, 230)';
  btn4.style.backgroundColor = 'rgb(230, 230, 230)';
}

function tema02(){
  const a = document.querySelector("#link")
  let configc = document.querySelector('.config')
  let btn1 = document.querySelector('.btn1')
  let btn2 = document.querySelector('.btn2')
  let btn3 = document.querySelector('.btn3')
  let btn4 = document.querySelector('.btn4')
  a.href = "temaredgrey.css"
  configc.style.backgroundColor = '#ee3f20';
  btn1.style.backgroundColor = 'rgb(230, 230, 230)';
  btn2.style.backgroundColor = 'rgb(205, 205, 205)';
  btn3.style.backgroundColor = 'rgb(230, 230, 230)';
  btn4.style.backgroundColor = 'rgb(230, 230, 230)';
}

function tema03(){
  const a = document.querySelector("#link")
  let configc = document.querySelector('.config')
  let btn1 = document.querySelector('.btn1')
  let btn2 = document.querySelector('.btn2')
  let btn3 = document.querySelector('.btn3')
  let btn4 = document.querySelector('.btn4')
  a.href = "temadarkblue.css"
  configc.style.backgroundColor = '#1f15a8';
  btn1.style.backgroundColor = 'rgb(230, 230, 230)';
  btn2.style.backgroundColor = 'rgb(230, 230, 230)';
  btn3.style.backgroundColor = 'rgb(205, 205, 205)';
  btn4.style.backgroundColor = 'rgb(230, 230, 230)';
}

function tema04(){
  const a = document.querySelector("#link")
  let configc = document.querySelector('.config')
  let btn1 = document.querySelector('.btn1')
  let btn2 = document.querySelector('.btn2')
  let btn3 = document.querySelector('.btn3')
  let btn4 = document.querySelector('.btn4')
  a.href = "temachristmas.css"
  configc.style.backgroundColor = '#006D18';
  btn1.style.backgroundColor = 'rgb(230, 230, 230)';
  btn2.style.backgroundColor = 'rgb(230, 230, 230)';
  btn3.style.backgroundColor = 'rgb(230, 230, 230)';
  btn4.style.backgroundColor = 'rgb(205, 205, 205)';
}

function temas() {
  let flexd1 = document.querySelector('.flex-container')
  let temas1 = document.querySelector('.temas')
  flexd1.style.display = 'none';
  temas1.style.display = 'block';
}

function voltar() {
  let flexd2 = document.querySelector('.flex-container')
  let temas2 = document.querySelector('.temas')
  let fontes2 = document.querySelector('.fontes')
  let outras2 = document.querySelector('.outrasopcoes')
  flexd2.style.display = 'flex';
  temas2.style.display = 'none';
  fontes2.style.display = 'none';
  outras2.style.display = 'none';
}

function fontes() {
  let flexd1 = document.querySelector('.flex-container')
  let fontes1 = document.querySelector('.fontes')
  flexd1.style.display = 'none';
  fontes1.style.display = 'block';
}

function outrasopcoes() {
  let flexd1 = document.querySelector('.flex-container')
  let outras1 = document.querySelector('.outrasopcoes')
  flexd1.style.display = 'none';
  outras1.style.display = 'block';
}