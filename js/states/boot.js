var bootState = {
    create: function () {
        this.overlay = new Overlay();

        if (!game.device.desktop)
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.refresh();
        } else {
            game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        }
        game.state.start('load');
    }

}