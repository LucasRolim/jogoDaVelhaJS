
//variavéis para controle dos elementos da tela.
var tabuleiroBloqueado = true; 
var peca ;
var contador = 0; //variavel que garante que a vitoria só será verificada apos a quarta jogada.
var vitoria = false;
var msg = document.createElement( "p" );
var nomeP1 = document.createElement( "p" );
var nomeP2 = document.createElement( "p" );


function setName(nome){

    console.log(nome.id);
    msg.innerHTML = "";
    
    if ( nome.id == "jogador_x"){
        nomeP1.innerHTML = "";
        nomePlayer1.appendChild ( nomeP1 );
        nomeP1.appendChild ( document.createTextNode ( nome.value ) ); 
    }
    else {
        nomeP2.innerHTML = "";
        nomePlayer2.appendChild ( nomeP2 );
        nomeP2.appendChild ( document.createTextNode ( nome.value ) ); 
    }
}

function iniciar(){ 
    limparTabuleiro(); 
    setMsg("");
    tabuleiroBloqueado = false; 
}

function joga ( casa ) {
   
    setMsg("");

    if ( tabuleiroBloqueado ) {

        setMsg( "Por favor inicie a partida!" );

    }
    else {

        if ( jogadaLegal( casa ) ) {
          
            trocaPeca();
            casa.appendChild( peca );
            contador++;

            if ( contador > 4 ) {

                if ( checaVitoria ( casa ) ) {
                    vitoria = true;
                    tabuleiroBloqueado = true;
                    setMsg( peca.nome + " ganhou!" );
                }
                if (contador == "9" && vitoria == false){
                    setMsg( "I deu velha!" );
                    tabuleiroBloqueado = true;
                }
            }
        }
        else {
            setMsg( "Jogada não permitida!" );
        }
    } 
		
}


var trocaPeca = function() { peca == null || peca.nome == "o" ? peca = pecaFactory( "x" ) : peca = pecaFactory( "o" ); return peca; }

var jogadaLegal = function( casa ) { var legal; casa.innerHTML.trim() == "" ? legal = true : legal = false; return legal; }

var limparTabuleiro = function(){

    casa_11.innerHTML="";casa_12.innerHTML="";casa_13.innerHTML="";
    casa_21.innerHTML="";casa_22.innerHTML="";casa_23.innerHTML="";
    casa_31.innerHTML="";casa_32.innerHTML="";casa_33.innerHTML="";
}

var pecaFactory =  function( peca ) {

    var imgPeca = document.createElement( "img" ); 
   
    if ( peca == "x" ) {
        imgPeca.src = "img/x.jpg"; 
        imgPeca.nome = "x";
    }
    else {
        imgPeca.src = "img/o.jpg"; 
        imgPeca.nome = "o";
    }

    return imgPeca;
}

var setMsg = function( m ) {
    msg.innerHTML = "";
    menssagem.appendChild ( msg );
    msg.appendChild ( document.createTextNode ( m ) ); 
}

var checaVitoria = function( casa ) {

    switch ( casa.id ) {

        case "casa_11" :
            if (( casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_13.innerHTML ) || 
                ( casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_31.innerHTML ) ||
                ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_33.innerHTML )) {

                return true;
            }
        break;
       
        case "casa_12" :
          if (( casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_13.innerHTML ) || 
              ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_32.innerHTML )) {

                return true; 
            }
        break;
       
        case "casa_13" :
          if (( casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_11.innerHTML ) || 
              ( casa.innerHTML == casa_23.innerHTML && casa.innerHTML == casa_33.innerHTML ) ||
              ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_31.innerHTML )) {

                return true; 
            }
        break;
        
        case "casa_21" :
           if (( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_23.innerHTML ) || 
               ( casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_31.innerHTML )) {

                return true; 
            }
        break;
       
        case "casa_22" :
           if (( casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_23.innerHTML ) || 
               ( casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_32.innerHTML ) ||
               ( casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_33.innerHTML ) ||
               ( casa.innerHTML == casa_13.innerHTML && casa.innerHTML == casa_31.innerHTML )) {

                return true;
            }
        break;
       
        case "casa_23" :
            if (( casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_22.innerHTML ) || 
                ( casa.innerHTML == casa_13.innerHTML && casa.innerHTML == casa_33.innerHTML )) {

                return true;
            }
        break;

        case "casa_31" :
            if ((casa.innerHTML == casa_32.innerHTML && casa.innerHTML == casa_33.innerHTML ) || 
                (casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_21.innerHTML ) ||
                (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_13.innerHTML )) {

                return true;
            }
        break;
       
        case "casa_32" :
            if (( casa.innerHTML == casa_31.innerHTML && casa.innerHTML == casa_33.innerHTML ) || 
                ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_12.innerHTML )) {

                return true;
            }
        break;
       
        case "casa_33" :
            if (( casa.innerHTML == casa_32.innerHTML && casa.innerHTML == casa_31.innerHTML ) || 
                ( casa.innerHTML == casa_23.innerHTML && casa.innerHTML == casa_13.innerHTML ) ||
                ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_11.innerHTML )) {

                return true;
                
            }
        break;

    }

}