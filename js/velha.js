
//variavéis para controle dos elementos da tela.

var peca ;

var msg = document.createElement( "p" );

function joga ( casa ) {
   
    setMsg("");

    if ( jogadaLegal( casa ) ) {
        trocaPeca();
        casa.appendChild( peca );

        if ( vitoria ( casa ) ) {
            setMsg( "Ganhou" );
        }
    }
    else {
        setMsg( "Jogada não permitida!" );
    }
		
}

var trocaPeca = function() {peca == null || peca.nome == "o" ? peca = pecaFactory( "x" ) : peca = pecaFactory( "o" ); return peca; }

var jogadaLegal = function( casa ) { var legal; casa.innerHTML.trim() == "" ? legal = true : legal = false; return legal }

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

var vitoria = function( casa ) {

    switch ( casa.id ) {

        case "casa_11" :
            if( (casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_13.innerHTML) || 
                (casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_31.innerHTML) ||
                (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_33.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_12" :
          if( (casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_13.innerHTML) || 
              (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_32.innerHTML)){

                return true; 
            }
        break;
       
        case "casa_13" :
          if( (casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_11.innerHTML) || 
              (casa.innerHTML == casa_23.innerHTML && casa.innerHTML == casa_33.innerHTML) ||
              (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_31.innerHTML)){

                return true; 
            }
        break;
        
        case "casa_21" :
           if( (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_23.innerHTML) || 
               (casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_31.innerHTML)){

                return true; 
            }
        break;
       
        case "casa_22" :
           if( (casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_23.innerHTML) || 
               (casa.innerHTML == casa_12.innerHTML && casa.innerHTML == casa_32.innerHTML) ||
               (casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_33.innerHTML) ||
               (casa.innerHTML == casa_13.innerHTML && casa.innerHTML == casa_31.innerHTML)){

                return true;
            }
        break;
       
        case "casa_23" :
            if( (casa.innerHTML == casa_21.innerHTML && casa.innerHTML == casa_22.innerHTML) || 
                (casa.innerHTML == casa_13.innerHTML && casa.innerHTML == casa_33.innerHTML)){

                return true;
            }
        break;

        case "casa_31" :
           if(  (casa.innerHTML == casa_32.innerHTML && casa.innerHTML == casa_33.innerHTML) || 
                (casa.innerHTML == casa_11.innerHTML && casa.innerHTML == casa_21.innerHTML) ||
                (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_13.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_32" :
            if(  (casa.innerHTML == casa_31.innerHTML && casa.innerHTML == casa_33.innerHTML) || 
                 (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_12.innerHTML) ){

                return true;
            }
        break;
       
        case "casa_33" :
            if( (casa.innerHTML == casa_32.innerHTML && casa.innerHTML == casa_31.innerHTML) || 
                (casa.innerHTML == casa_23.innerHTML && casa.innerHTML == casa_13.innerHTML) ||
                (casa.innerHTML == casa_22.innerHTML && casa.innerHTML == casa_11.innerHTML) ){

                return true;
                
            }
        break;

    }

}