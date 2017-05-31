function Decor(){
    this.create = function(){
        this.nuages = game.add.sprite(game.width/2, 26 * game.global.pixelRatio, 'atlas', 'nuages');
        this.nuages.scale.set(game.global.pixelRatio);
        this.nuages.anchor.set(0.5, 0);
        
        this.ile = game.add.sprite(game.width/2, this.nuages.top + (100 * game.global.pixelRatio), 'atlas', 'ile');
        this.ile.anchor.setTo(0.5, 0);
        this.ile.scale.set(game.global.pixelRatio);
        
         
         
       
    }

    
}