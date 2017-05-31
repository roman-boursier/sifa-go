function Score() {

    this.create = function () {
        this.imagepokeball = game.add.image(game.width, 30 * game.global.pixelRatio, 'atlas', 'score-pokeball');
        this.imagepokeball.anchor.set(1,0);
        this.imagepokeball.scale.set(game.global.pixelRatio);
        
        this.pokeballsLabel = game.add.text(this.imagepokeball.right - (17 * game.global.pixelRatio), this.imagepokeball.top + 7 * game.global.pixelRatio, 'x ' + game.global.pokeballs, game.global.defaultFontStyle);
        this.pokeballsLabel.fill = '#242a89';
        this.pokeballsLabel.anchor.set(1,0);

        this.Statelabel = game.add.text(game.width / 2, 20, '', game.global.defaultFontStyle);
        this.Statelabel.anchor.set(0.5, 0);
        if(game.device.desktop){
          this.Statelabel.fontSize = 58;  
        }
        this.textContinu = game.add.text(game.width/2, game.height - 100 , '', game.global.defaultFontStyle );
        this.textContinu.anchor.setTo(0.5,0.5);

    }

    this.renderScore = function (score) {
        for (i = 0; i < score; i++) {
            this.pellicansScore = game.add.image((40 * game.global.pixelRatio) * i + (10 * game.global.pixelRatio), 20 * game.global.pixelRatio, 'atlas', 'pelican-score-on');
            this.pellicansScore.scale.set(game.global.pixelRatio);
        }
    }
    this.renderLabel = function(label) {
        this.Statelabel.text = label;
        
    }
}