var menuState = {
    create: function () {
            this.footer = new Footer();
            this.footer.add();
            
            this.logo = game.add.sprite(game.width / 2, 40, 'atlas', 'sifago_logo');
            this.logo.scale.set(game.global.pixelRatio);
            this.logo.anchor.setTo(0.5, 0);
            
            this.textIntro = game.add.text(game.width / 2, this.logo.bottom + 40 * game.global.pixelRatio, textes[game.global.lang]['menu_intro'], game.global.defaultFontStyle);
            this.textIntro.anchor.setTo(0.5, 0);
   
            
            this.bouton = game.add.button(game.width / 2, this.textIntro.bottom + 60 * game.global.pixelRatio, 'atlas', this.lancerLeJeu, this, 'btn_depart_'+ [game.global.lang] +'_off', 'btn_depart_'+ [game.global.lang] +'_on');
            this.bouton.anchor.setTo(0.5);
            this.bouton.scale.set(game.global.pixelRatio);
 
    },
    lancerLeJeu: function () {
        if (!game.global.premiereFois) {
            game.state.start('didactitiel');
        } else {
            game.state.start('play');
        }

    }

}


