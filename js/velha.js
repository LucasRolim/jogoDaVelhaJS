
//variavéis para controle dos elementos da tela.


//peça é um elemento de imagem
var peca;

//cada 
var casa_11 = document.getElementById( "casa_11" );
var casa_12 = document.getElementById( "casa_12" );
var casa_13 = document.getElementById( "casa_13" );
var casa_21 = document.getElementById( "casa_21" );
var casa_22 = document.getElementById( "casa_22" );
var casa_23 = document.getElementById( "casa_23" );
var casa_31 = document.getElementById( "casa_31" );
var casa_32 = document.getElementById( "casa_32" );
var casa_33 = document.getElementById( "casa_33" );

var casa_msg = document.getElementById( "menssagem" );


var msg = document.createElement( "p" );
msg.appendChild(document.createTextNode( "Jogada nao permitida!" ));
//casa_msg.appendChild(msg);
console.log(casa_msg);


 function joga ( casa ) {

    peca = peca == null || peca.nome == "x" ? pecaFactory( "o" ) : pecaFactory( "x" );

 	casa.appendChild(peca);

	if(jogadaLegal(casa)){
	        casa.innerHTML = peca;
	        if(vitoria(casa)){
	           msg.innerHTML = casa.innerHTML + " Ganhou!";
	        }
	        trocapeca();
	}
	else{casa_msg.appendChild("Jogada nao permitida!") }
		
}

var pecaFactory =  function ( peca ) {

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

var trocaPeca = function ( peca ) { peca.nome == "x" ? peca = pecaFactory("o") : peca = pecaFactory("x") }

var jogadaLegal = function ( casa ) { casa.innerHTML.trim() == ""? true : false }

var vitoria = function ( casa ) {

    switch( casa.id ) {
       
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
               ( casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_32.innerHTML )) {

                return true;
            }
        break;
       
        case "casa_23" :
            if (( casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_22.innerHTML ) || 
                ( casa.innerHTML == casa_13.innerHTML && casa.innerHTML == casa_33.innerHTML ) ) {

                return true;
            }
        break;

        case "casa_31" :
            if (( casa.innerHTML == casa_32.innerHTML && casa.innerHTML == casa_33.innerHTML ) || 
                ( casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_21.innerHTML ) ||
                ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_13.innerHTML )) {

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
                ( casa.innerHTML == casa_23.innerHTML && casa.innerHTML == casa_12.innerHTML ) ||
                ( casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_11.innerHTML )) {

                return true;
                
            }
        break;

    }

}