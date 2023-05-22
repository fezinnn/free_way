//variaveis ator
let yAtor = 366;
let xAtor = 96;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}


function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3
    }
  
    if (keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
      yAtor += 3
      }
    }
  
    if (keyIsDown(LEFT_ARROW)){
      if(podeSeMoverEsquerda()){
      xAtor -= 3
      }
    }
  
    if (keyIsDown(RIGHT_ARROW)){
      if(podeSeMoverDireita()){
      xAtor += 3
      }
    }
}


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
       voltaParaPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
       meusPontos -= 1;
      }
    }
  }
}


function voltaParaPosicaoInicial(){
  yAtor = 366;
  xAtor = 100;
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(250, 255, 100));
  text(meusPontos, width / 5, 27);
}


function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaParaPosicaoInicial();
    somPonto.play();
  }
}


function pontosMaiorQueZero(){
  return meusPontos > 0
}


function podeSeMover(){
  return yAtor < 366;
}


function podeSeMoverEsquerda(){
  return xAtor > 0;
}


function podeSeMoverDireita(){
  return xAtor < 470;
}
