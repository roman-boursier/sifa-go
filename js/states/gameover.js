var gameOverState = {
    create: function () {
        this.footer = new Footer();
        this.footer.add();
        
        // C'est fini
        this.fini = game.add.text(game.width / 2, 40, textes[game.global.lang]['end'], game.global.defaultFontStyle);
        this.fini.anchor.set(0.5, 0);
        this.fini.fill = '#ffffff';

        // Score
        this.finalscore = game.add.text(game.width / 2, this.fini.bottom + game.global.baseMargin, textes[game.global.lang]['end_score'] + game.global.score, game.global.defaultFontStyle);
        this.finalscore.anchor.set(0.5);
        this.finalscore.fill = '#1f3581';


        // Rangs texte + images
        if (game.global.score == 0) {
            this.rang = textes[game.global.lang]['rang_1'];
            this.rangImg = 'medaille-perchoir';
        } else if (game.global.score >= 1 && game.global.score < 3) {
            this.rang = textes[game.global.lang]['rang_2'];
            this.rangImg = 'medaille-moineau';
        } else if (game.global.score >= 3 && game.global.score < 5) {
            this.rang = textes[game.global.lang]['rang_3'];
            this.rangImg = 'medaille-oiseau';
        } else {
            this.rang = textes[game.global.lang]['rang_4'];
            this.rangImg = 'medaille-migrateur';
        }

        // Médaille
        if(game.device.desktop || document.documentElement.clientWidth > 414){
            this.medaille = game.add.image(game.width / 2, this.finalscore.bottom + game.global.baseMargin, 'atlas', this.rangImg);
            this.medaille.anchor.set(0.5, 0);
            this.medaille.scale.set(game.global.pixelRatio);
        }

        this.rang = game.add.text( game.width / 2, game.device.desktop || document.documentElement.clientWidth > 414 ? this.medaille.bottom + game.global.baseMargin : this.finalscore.bottom + game.global.baseMargin, textes[game.global.lang]['rang_label'] + this.rang, game.global.defaultFontStyle);
        this.rang.wordWrap = true; 
        this.rang.wordWrapWidth = game.width;
        this.rang.anchor.set(0.5, 0);
        if(game.desktop){
            this.rang.fill = '#cf434c';
        }else {
            this.rang.fill = '#ffffff';
        }
        this.logo = game.add.image(game.width / 2, this.rang.bottom + game.global.baseMargin, 'atlas', 'logo_' + game.global.filiale );
        this.logo.anchor.setTo(0.5, 0);
        
        if(game.device.desktop ){
            this.logo.scale.set(game.global.pixelRatio);
        }else{
            this.logo.scale.set(game.global.pixelRatio / 0.5);
        }
        
        this.bonneAnnee = game.add.text(game.width / 2, this.logo.bottom + game.global.baseMargin, textFiliales[game.global.filiale], game.global.defaultFontStyle);
      
        this.bonneAnnee.wordWrap = true; 
        this.bonneAnnee.wordWrapWidth = game.width;
        this.bonneAnnee.anchor.setTo(0.5, 0);
        this.bonneAnnee.fill = '#000301';

        this.boutonRecommencer = game.add.button((game.width / 2) - (100 * game.global.pixelRatio), this.bonneAnnee.bottom + game.global.baseMargin, 'atlas', this.recommencer, this, 'btn_recommence_'+ [game.global.lang] +'_off', 'btn_recommence_'+ [game.global.lang] +'_on');
        this.boutonRecommencer.anchor.setTo(1, 0);
         if(!game.device.desktop){
            this.boutonRecommencer.scale.set(game.global.pixelRatio - 0.06);
        }
        

        this.boutonPartage = game.add.button(this.boutonRecommencer.right + (20 * game.global.pixelRatio),  this.bonneAnnee.bottom + game.global.baseMargin, 'atlas',  this.partagerScore, this, 'btn_partage_'+ [game.global.lang] +'_off', 'btn_partage_'+ [game.global.lang] +'_on');
        this.boutonPartage.anchor.setTo(0, 0);
           if(!game.device.desktop){
            this.boutonPartage.scale.set(game.global.pixelRatio - 0.06);
        }
     
        this.boutonMail = game.add.button(this.boutonPartage.right + (20 * game.global.pixelRatio) , this.bonneAnnee.bottom + game.global.baseMargin, 'atlas',  this.partageMail, this, 'btn_mail_on', 'btn_mail_off');
        this.boutonMail.anchor.setTo(0, 0);
        if(!game.device.desktop){
            this.boutonMail.scale.set(game.global.pixelRatio - 0.06);
        }

    },
    recommencer: function () {
        game.global.score = 0;
        game.global.pokeballs = 5;
        game.state.start('menu');
    },
    partageMail: function(){
        window.location.href = "mailto:?subject="+ textes[game.global.lang]['partage_caption'] + "&body="+ textes[game.global.lang]['partage_one'] + game.global.score + ' ' + textes[game.global.lang]['partage_two'] + '\n' + game.global.url + '?filiale=' +  game.global.filiale + '&lang=' + game.global.lang;
    },
    partagerScore: function(rang) {
        FB.ui({
            method: "feed",
            link: game.global.url,
            caption: textes[game.global.lang]['partage_caption'],
            name: textes[game.global.lang]['partage_caption'],
            description: textes[game.global.lang]['partage_one'] + game.global.score + ' ' + textes[game.global.lang]['partage_two'],
            picture: game.global.url + "/assets/logo_facebook_sifago.jpg"
        }, function (response) {
        });
        
        ga('send', 'event', {
            eventCategory: 'Partage facebook',
            eventAction: 'click',
            eventLabel: 'Partage facebook'
          });
    }

}