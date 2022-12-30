//Variáveis da imagem
let imagemEstrada
let imagemAtor
let imagemCarro_1
let imagemCarro_2
let imagemCarro_3

//Variáveis do som
let somDaTrilha
let somDosPontos
let somDaColisao

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro_1 = loadImage("imagens/carro-1.png")
  imagemCarro_2 = loadImage("imagens/carro-2.png")
  imagemCarro_3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro_1, imagemCarro_2, imagemCarro_3, imagemCarro_1, imagemCarro_2, imagemCarro_3]
  
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDosPontos = loadSound("pontos.wav")
  somDaColisao = loadSound("colidiu.mp3")
}