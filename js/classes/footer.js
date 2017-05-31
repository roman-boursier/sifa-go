function Footer() {

    this.add = function () {

        this.logo = game.add.sprite(15 * game.global.pixelRatio, game.height - 15 * game.global.pixelRatio, 'atlas', 'sifa_logo-footer');
        this.logo.anchor.set(0, 1);
        if(game.width <=414){
            this.logo.scale.set(0.5);
        }
        
        this.slogan = game.add.text(this.logo.right + 15 * game.global.pixelRatio, game.height - 15 * game.global.pixelRatio, textes[game.global.lang]['footer_left'], game.global.footerFontStyle);
        this.slogan.anchor.set(0, 1);
        this.slogan.inputEnabled = true;
        this.slogan.events.onInputUp.add(this.redirectSlogan, this);

        if (game.device.desktop) {
            this.credit = game.add.text(game.width - 15, game.height - 15, textes[game.global.lang]['footer_right'], game.global.footerFontStyle);
            this.credit.anchor.set(1, 1)
            if (!game.device.desktop) {
                this.slogan.fontSize = '22px';
                this.credit.fontSize = '22px';
            }
        }

    }
    
    this.redirectSlogan = function () {
        window.open('https://www.sifatransit.com/', '_blank');
        console.log('oui');
    }

}