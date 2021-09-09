
let jogador = null, vencedor = null, jogadorX = 0, jogadorO = 0;
let jogadorSelecionado = window.document.querySelector("#jogador-selecionado");
let vencedorSelecionado = window.document.querySelector("#vencedor-selecionado");
let placarX = window.document.querySelector("#placarX");
let placarO = window.document.querySelector("#placarO");

mudarJogador("O");
imprimirPlacarJogador(jogadorX, jogadorO);

function escolherCasa(id){

    if(vencedor !== null){
        return;
    }

    let casa = window.document.getElementById(id);
    if(casa.innerHTML !== "-"){
        return;
    }
    else{
        casa.innerHTML = jogador;
        casa.style.color = "#000";
    }

    if(jogador === "O"){
        jogador = "X";
    } 
    else{
        jogador = "O";
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){

    let casa1 = window.document.getElementById(1);    
    let casa2 = window.document.getElementById(2);
    let casa3 = window.document.getElementById(3);
    let casa4 = window.document.getElementById(4);
    let casa5 = window.document.getElementById(5);
    let casa6 = window.document.getElementById(6);
    let casa7 = window.document.getElementById(7);
    let casa8 = window.document.getElementById(8);
    let casa9 = window.document.getElementById(9);

    if(checarSequencias(casa1, casa2, casa3)){
        mudaCorCasa(casa1, casa2, casa3);
        imprimirVencedor(casa1);

        if(casa1.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa4, casa5, casa6)){
        mudaCorCasa(casa4, casa5, casa6);
        imprimirVencedor(casa4);

        if(casa4.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    
    if(checarSequencias(casa7, casa8, casa9)){
        mudaCorCasa(casa7, casa8, casa9);
        imprimirVencedor(casa7);
        
        if(casa7.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa1, casa4, casa7)){
        mudaCorCasa(casa1, casa4, casa7);
        imprimirVencedor(casa1);
        
        if(casa1.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa2, casa5, casa8)){
        mudaCorCasa(casa2, casa5, casa8);
        imprimirVencedor(casa2);
        
        if(casa2.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa3, casa6, casa9)){
        mudaCorCasa(casa3, casa6, casa9);
        imprimirVencedor(casa3);
        
        if(casa3.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa1, casa5, casa9)){
        mudaCorCasa(casa1, casa5, casa9);
        imprimirVencedor(casa1);

        if(casa1.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }

        imprimirPlacarJogador(jogadorX, jogadorO);
    }

    if(checarSequencias(casa3, casa5, casa7)){
        mudaCorCasa(casa3, casa5, casa7);
        imprimirVencedor(casa3);

        if(casa3.innerHTML === "X"){
            jogadorX += 1;
        }
        else{
            jogadorO += 1;
        }
        
        imprimirPlacarJogador(jogadorX, jogadorO);
    }

}


function checarSequencias(valor1, valor2, valor3){

    let sequenciaIgual = false;
    if(valor1.innerHTML !== "-" && valor1.innerHTML === valor2.innerHTML && valor2.innerHTML === valor3.innerHTML){
        sequenciaIgual = true;
    }
    return sequenciaIgual;
}

function mudaCorCasa(valorCor1, valorCor2, valorCor3){

    valorCor1.style.backgroundColor = "#0f0";
    valorCor2.style.backgroundColor = "#0f0";
    valorCor3.style.backgroundColor = "#0f0";
}


function imprimirVencedor(jogadorVencedor){
    vencedor = jogadorVencedor.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function imprimirPlacarJogador(x, o){
   placarX.innerHTML = x;
    placarO.innerHTML = o;
}

function reiniciar(){

    vencedor = null;
    vencedorSelecionado.innerHTML = "";

    for(let i = 1; i <= 9; i++){

        let casa = window.document.getElementById(i);
        casa.style.backgroundColor = "blanchedalmond";
        casa.style.color = "blanchedalmond";
        casa.innerHTML = "-";
    }
    
    mudarJogador("O");
}