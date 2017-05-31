var loadState = {
    preload: function () {
        // Texte de chargement
        var loadingLabel = game.add.text(game.width / 2, game.height / 2, 'Chargement', {font: '30px Arial', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5);

        //Chargement des assets
        game.load.atlasJSONArray('atlas','assets/atlas.png','assets/atlas.json');
    },
    create: function () {
          setTimeout(function () {
                game.state.start('menu');
          },1000);
          
    }
}


