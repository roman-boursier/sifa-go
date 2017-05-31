var didactitielState = {
    
    create: function (){
        this.overlay = new Overlay();
        this.overlay.create();
        
        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'atlas', 'didacticiel_' +[game.global.lang]);
        this.sprite.anchor.setTo(0.5);
        
        this.sprite.scale.x = 0;
        this.sprite.scale.y = 0;
        game.add.tween(this.sprite.scale).to({x: game.global.pixelRatio, y: game.global.pixelRatio}, 1000, Phaser.Easing.Elastic.Out, true);
       
        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;
        this.sprite.input.useHandCursor = true;
        this.sprite.events.onInputDown.add(this.closePopup, this);
        
        game.global.premiereFois = true;

    },
    closePopup: function () {
    
        game.state.start('play');
        
    }


}
    