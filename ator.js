//Variáveis
let xAtor = 100
let yAtor = 367
let colisao = false

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarros[i], comprimentoCarros[i], xAtor, yAtor, 15)
    if (colisao){
      somDaColisao.play()
      yAtor = 367
    }
  }
}

function resetAtor(){
  if (yAtor < 15){
    yAtor = 367
  }
}

function podeSeMover(){
  return yAtor < 367
}



