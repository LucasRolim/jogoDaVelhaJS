
//variavéis para controle dos elementos da tela.

var img_x = document.createElement("img"); 
img_x.src="img/x.jpg"; 
img_x.nome="x";

var img_o = document.createElement("img"); 
img_o.src="img/o.jpg"; 
img_o.nome="o";

var jogador = img_x;

var valorCasa11 = document.getElementById("casa_11");
var valorCasa12 = document.getElementById("casa_12");
var valorCasa13 = document.getElementById("casa_13");
var valorCasa21 = document.getElementById("casa_21");
var valorCasa22 = document.getElementById("casa_22");
var valorCasa23 = document.getElementById("casa_23");
var valorCasa31 = document.getElementById("casa_31");
var valorCasa32 = document.getElementById("casa_32");
var valorCasa33 = document.getElementById("casa_33");

var msg = document.getElementById("menssagem");


 function joga(posicao){
 	
 	posicao.appendChild(jogador);
 	//console.log(posicao.innerHTML);
	console.log(jogador.nome);
	trocaJogador();
	/*if(jogadaLegal(posicao)){
	        posicao.innerHTML = jogador;
	        if(vitoria(posicao)){
	           msg.innerHTML = posicao.innerHTML + " Ganhou!";
	        }
	        trocaJogador();
	}
	else{msg.innerHTML="Jogada nao permitida!"}
		*/
}

var trocaJogador = function(){ jogador.nome == "x" ? jogador = img_o : jogador = img_x; return jogador; }
var jogadaLegal  = function(posicao){var isCool; posicao.innerHTML =="X" || posicao.innerHTML =="O"?  isCool = false : isCool = true; return isCool; }

var imagemFactory = function(){}

var vitoria = function(posicao){
    switch(posicao.id){
       
        case "casa_11" :
            if( (posicao.innerHTML == valorCasa12.innerHTML && posicao.innerHTML == valorCasa13.innerHTML) || 
                (posicao.innerHTML == valorCasa21.innerHTML && posicao.innerHTML == valorCasa31.innerHTML) ||
                (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa33.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_12" :
          if( (posicao.innerHTML == valorCasa11.innerHTML && posicao.innerHTML == valorCasa13.innerHTML) || 
              (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa32.innerHTML)){

                return true; 
            }
        break;
       
        case "casa_13" :
          if( (posicao.innerHTML == valorCasa12.innerHTML && posicao.innerHTML == valorCasa11.innerHTML) || 
              (posicao.innerHTML == valorCasa23.innerHTML && posicao.innerHTML == valorCasa33.innerHTML) ||
              (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa31.innerHTML)){

                return true; 
            }
        break;
        
        case "casa_21" :
           if( (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa23.innerHTML) || 
               (posicao.innerHTML == valorCasa11.innerHTML && posicao.innerHTML == valorCasa31.innerHTML)){

                return true; 
            }
        break;
       
        case "casa_22" :
           if( (posicao.innerHTML == valorCasa21.innerHTML && posicao.innerHTML == valorCasa23.innerHTML) || 
               (posicao.innerHTML == valorCasa12.innerHTML && posicao.innerHTML == valorCasa32.innerHTML)){

                return true;
            }
        break;
       
        case "casa_23" :
            if( (posicao.innerHTML == valorCasa21.innerHTML && posicao.innerHTML == valorCasa22.innerHTML) || 
                (posicao.innerHTML == valorCasa13.innerHTML && posicao.innerHTML == valorCasa33.innerHTML)){

                return true;
            }
        break;

        case "casa_31" :
           if(  (posicao.innerHTML == valorCasa32.innerHTML && posicao.innerHTML == valorCasa33.innerHTML) || 
                (posicao.innerHTML == valorCasa11.innerHTML && posicao.innerHTML == valorCasa21.innerHTML) ||
                (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa13.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_32" :
            if(  (posicao.innerHTML == valorCasa31.innerHTML && posicao.innerHTML == valorCasa33.innerHTML) || 
                 (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa12.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_33" :
            if( (posicao.innerHTML == valorCasa32.innerHTML && posicao.innerHTML == valorCasa31.innerHTML) || 
                (posicao.innerHTML == valorCasa23.innerHTML && posicao.innerHTML == valorCasa12.innerHTML) ||
                (posicao.innerHTML == valorCasa22.innerHTML && posicao.innerHTML == valorCasa11.innerHTML) ){

                return true;
                
            }
        break;

    }

}