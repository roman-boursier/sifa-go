// Phaser initialisation
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'container', '', true);


//Variables globales
game.global = {
    score: 0,
    pokeballs: 5,
    footerFontStyle: {font: '16px Arial', fontWeight: 'bold', fill: '#0055a4'},
    premiereFois: false,
    url:'https://www.sifatransit.com/jeu-sifago'
}


if(window.devicePixelRatio <= 1){

    game.global.pixelRatio = 1;
    game.global.defaultFontStyle = {font: '34px Montserrat', fontWeight: 400, fill: '#345660', align: 'center'};
    game.global.baseMargin = 30 * game.global.pixelRatio;
    
    /*Ecran d'ordi portable par exemple*/
    if(height <= 700){
       game.global.pixelRatio = .75;  
       game.global.baseMargin = 20 * game.global.pixelRatio;
       game.global.defaultFontStyle = {font: '24px Montserrat', fontWeight: 400, fill: '#345660', align: 'center'};
    } 
    
}else if(window.devicePixelRatio >= 2){  
    var canvas_width = document.documentElement.clientWidth;
    var canvas_height = document.documentElement.clientHeight;
    if( document.documentElement.clientWidth <= 414){
          game.global.pixelRatio = (canvas_width/canvas_height) - 0.2;
          game.global.defaultFontStyle = {font: '18px Montserrat', fontWeight: 400, fill: '#345660', align: 'center'};
          game.global.baseMargin = 20 * game.global.pixelRatio;
           game.global.footerFontStyle= {font: '11px Arial', fontWeight: 'bold', fill: '#0055a4'};      
    }else {
          game.global.pixelRatio = canvas_width/canvas_height + 0.2;
          game.global.defaultFontStyle = {font: '36px Montserrat', fontWeight: 400, fill: '#345660', align: 'center'};
          game.global.baseMargin = 30 * game.global.pixelRatio;
    }
       
}else if(window.devicePixelRatio >= 3){
     var canvas_width = document.documentElement.clientWidth;
    var canvas_height = document.documentElement.clientHeight;
    game.global.pixelRatio = canvas_width/canvas_height ;
     game.global.defaultFontStyle = {font: '16px Montserrat', fontWeight: 400, fill: '#345660', align: 'center'};
}



/*Declinaisons en fonction du dep*/
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}
var $_GET = $_GET();
if($_GET['filiale'] == '' || !$_GET['filiale'] ){
   game.global.filiale = 'sifa_transit'; 
}else{
   game.global.filiale = $_GET['filiale']; 
}

if($_GET['lang'] == '' || !$_GET['lang'] ){
   game.global.lang = 'fr'; 
}else{
   game.global.lang = $_GET['lang'];; 
}


// Nos différents states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('didactitiel', didactitielState);
game.state.add('play', playState);
game.state.add('gameOver', gameOverState);

//On lance le premier state
game.state.start('boot');





   










