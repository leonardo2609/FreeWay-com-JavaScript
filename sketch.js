function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemEstrada);
  mostraAtor()
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
  resetCarros()
  verificaColisao()
  placar()
  pontuacao()
  resetAtor()
}