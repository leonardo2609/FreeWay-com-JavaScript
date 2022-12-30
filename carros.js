//Carros
let xCarros = [670, 670, 670, 670, 670, 670]
let yCarros = [40, 96, 150, 210, 263, 315]
let larguraCarros = [60, 60, 60, 60, 60, 60]
let comprimentoCarros = [40, 40, 40, 40, 40, 40]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.5, 2.2]

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros[i], comprimentoCarros[i])
  }
}

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarros.length; i += 1){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function resetCarros(){
  for (let i = 0; i < xCarros.length; i += 1){
    if (xCarros[i] < -70){
    xCarros[i] = 670
    }
  }
}




