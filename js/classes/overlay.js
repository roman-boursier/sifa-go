function Overlay() {
    this.create = function () {
        this.graphic = game.add.graphics(game.width, game.height);
        this.graphic.beginFill('000000', '.9');
        this.graphic.x = 0;
        this.graphic.y = 0;
        this.graphic.drawRect(0, 0, game.width, game.height);

    }
 

}