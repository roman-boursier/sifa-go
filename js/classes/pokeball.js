function Pokeball() {

    this.create = function () {
        this.initialPosition = [game.width / 2, game.height - (250 * game.global.pixelRatio)];
        
        this.sprite = game.add.sprite(this.initialPosition[0], this.initialPosition[1], 'atlas', 'pokeball');
        this.sprite.scale.set(game.global.pixelRatio);
        
        game.physics.arcade.enable(this.sprite);
        this.sprite.body.allowGravity = false;
        this.sprite.anchor.setTo(0.5);

        /*Input*/
        this.sprite.inputEnabled = true;
        this.swipe();
        this.sprite.events.onInputDown.add(this.drag, this);
        this.sprite.events.onInputUp.add(this.positionInit, this);
        
        game.global.velocityOk = game.device.desktop ? 0.5 : 0.1 ;


    };

    this.update = function () {
        if (this.sprite.alive) {

            if (this.catchFlag == true) {

                if (Phaser.swipe == true) {
                    this.lancer();
                }
                else {
                    this.sprite.x = game.input.activePointer.worldX;
                    this.sprite.y = game.input.activePointer.worldY;
                }
            }
            if (this.returnFlag == true) {
                    if (this.sprite.x !== this.initialPosition[0]) {
                        this.sprite.x = this.initialPosition[0];
                        this.sprite.y = this.initialPosition[1];
                        this.catchFlag = false;
                    }
                }

        }
    };

    /*
     * Permet de dragué la ball
     */
    this.drag = function () {
        this.sprite.body.moves = false;
        Phaser.swipe = false
        this.catchFlag = true;
        this.returnFlag = false;
    };

    this.positionInit = function () {
        if (Phaser.swipe !== true) {
            this.returnFlag = true;
        }
    };

    this.lancer = function () {
         this.returnFlag = false;
        this.sprite.body.moves = true;
        this.sprite.body.allowGravity = true;
        this.sprite.body.gravity.y = (-Phaser.forceY) * 500;
        if (this.sprite.scale.x > .9 * game.global.pixelRatio) {
            this.sprite.body.velocity.y = Phaser.forceY * 150;
            this.sprite.body.velocity.x = Phaser.forceX * 150;

            /*this.sprite.body.acceleration.y += 20;*/
        }
        this.sprite.scale.x -= .015 * game.global.pixelRatio;
        this.sprite.scale.y -= .015 * game.global.pixelRatio;
    };

    this.swipe = function () {
        this.hammer = new Hammer(document.getElementsByTagName('body')[0]);
        this.hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
        this.hammer.on('panend', function (e) {
          
            /*Si nombre négatif*/
            if (e.velocity <= 0) {
                e.velocity = -e.velocity;
            }
            if (e.velocity > game.global.velocityOk) {
                Phaser.forceY = e.velocityY;
                Phaser.forceX = e.velocityX;
                Phaser.swipe = true;
            }
        });
    };

    this.restart = function () {
        this.sprite.frameName = 'pokeball';
        this.sprite.body.moves = false;
        this.sprite.scale.x = game.global.pixelRatio;
        this.sprite.scale.y = game.global.pixelRatio;
        this.sprite.x = this.initialPosition[0];
        this.sprite.y = this.initialPosition[1];
        this.sprite.revive();
        this.catchFlag = false;
    }

}
