function Animaux() {

   
    this.create = function () {
        this.sprite = game.add.group();
        if(!game.device.desktop && document.documentElement.clientWidth <= 414){
            this.sprite.scale.set(.4); 
        }
        
        this.sprite.enableBody = true;
        this.sprite.create(game.world.centerX, 110 , 'atlas', 'pelican1');
        this.nextAnimal = 4000;
        this.pelicans = ['pelican1','pelican2','pelican3'];
        this.animauxMechants = ['pelican1','pelican2','pelican3','hero1', 'hero2', 'hero3','perroquet1','perroquet2','perroquet3','pigeon2'];
        this.animauxNoms = this.animauxMechants.concat(this.pelicans);
   
    };

    this.update = function () {
        
         if(this.nextAnimal < game.time.now){
           this.sprite.children[0].kill();
           this.start = 3000, this.end = 400, this.score = 15;
           this.delay = Math.max(this.start - (this.start - this.end) * game.global.score / this.score, this.end)
           this.addAnimal();
           this.nextAnimal = game.time.now + this.delay;
        }
    };
    
    this.addAnimal = function () {
    
        this.animal = this.sprite.getFirstDead();
        if (!this.animal) {
            return;
        }
        
        if(!this.flag){
            if(game.device.desktop){
                this.animal.body.width = this.animal.body.width * game.global.pixelRatio;
                this.animal.body.height = this.animal.body.height * game.global.pixelRatio;
            }else {
                this.animal.body.width = this.animal.body.width * game.global.pixelRatio - 70 ;
                this.animal.body.height = this.animal.body.height * game.global.pixelRatio - 70;
            }
           
            this.flag = true  
        }

        this.animal.alpha = 0;
        game.add.tween(this.animal).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
        
        this.animal.frameName = game.rnd.pick(this.animauxNoms);
        this.animal.reset(game.rnd.pick([0 + (this.animal.width * game.global.pixelRatio), game.world.centerX, (game.width - 400 * game.global.pixelRatio)]), game.rnd.pick([100, 200]));
        
    };
  
        

}
