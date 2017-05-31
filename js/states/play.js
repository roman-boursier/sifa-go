var playState = {
    preload: function () {
        this.decor = new Decor();
        this.pokeball = new Pokeball();
        this.animaux = new Animaux();
        this.score = new Score();
    },
    create: function () {
        this.footer = new Footer();
        this.footer.add();
        
        game.physics.startSystem(Phaser.Physics.ARCADE); 
        this.decor.create();
       
        this.animaux.create();
        this.pokeball.create();     
        this.score.create();
        game.input.onDown.add(this.unpause, this);

    },
    unpause: function () {
        game.paused = false;
    },
    restart: function () {
        game.global.pokeballs -= 1;
        this.score.pokeballsLabel.text = 'x ' + game.global.pokeballs;
        this.score.renderScore(game.global.score);
         this.score.renderLabel('');    
        this.score.textContinu.text = '';
        this.pokeball.restart();
        this.animaux.addAnimal();
        
    },
    colisionPokeballAnimal: function (ball, animal) {
        
        if (this.pauseflag !== true) {
            
            ball.scale.x= .4 * game.global.pixelRatio;
            ball.scale.y= .4 * game.global.pixelRatio;
            if (animal.frameName == 'pelican1' || animal.frameName == 'pelican2' || animal.frameName == 'pelican3') {
                ball.frameName = 'pokeball-gagner';
                game.global.score += 1;
                this.score.renderLabel(textes[game.global.lang]['jeu_ok']);    
            } else {
                ball.frameName = 'pokeball-perdu';
                this.score.renderLabel(textes[game.global.lang]['jeu_not_ok']);
            }
            this.score.textContinu.text = textes[game.global.lang]['jeu_continue'];
            game.paused = true;
            this.pauseflag = true;
        }
        else {
          
            this.pokeball.sprite.kill();
            this.restart();
            animal.kill();
            this.pauseflag = false;
        }

    },
    update: function () {
        
        if (this.pokeball.sprite.scale.x < .4 * game.global.pixelRatio) {
            game.physics.arcade.overlap(this.pokeball.sprite, this.animaux.sprite, this.colisionPokeballAnimal, 0, this);
            if (this.pokeball.sprite.scale.x < .2 * game.global.pixelRatio) {
                this.restart();
            }
        }

        if (game.global.pokeballs == 0) {
            game.state.start('gameOver');
        } else {
            this.pokeball.update();
            this.animaux.update();
        }
    },
    render: function () {
        /*game.debug.text('force Y : ' + Phaser.forceY, 20, 720);
         game.debug.text('force X : ' + Phaser.forceX, 20, 740);*/
        game.debug.body(this.animaux.sprite);
    }
}
