var Achicken = Achicken || {};

//loading the game assets
Achicken.PreloadState = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(100, 1);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets    
    this.load.image('chicken', 'assets/images/bird.png');
    this.load.image('floor', 'assets/images/floor.png');
    this.load.image('sky', 'assets/images/sky.png');

    //load levels
    this.load.text('level1', 'assets/levels/level1.json');

  },
  create: function() {
    this.state.start('Game');
  }
};