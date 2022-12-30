// Variáveis
let meusPontos = 0

function placar(){
  fill(255, 255, 0)
  textSize(25)
  text(meusPontos, width / 3, 26)
}

function pontuacao(){
  if (yAtor < 15){
    somDosPontos.play()
    meusPontos += 1
  }
  if (colisao){
    if (meusPontos > 0){
      meusPontos -= 1
    }
  }
}