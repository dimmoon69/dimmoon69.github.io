var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('logo', 'img/logo.png');
}

function create() {
  this.logo = this.add.image(0, 0, 'logo');
  this.logo.setScale(0.5);

  Phaser.Display.Align.In.Center(
    this.logo,
    this.add.zone(window.innerWidth/2, window.innerHeight/2, window.innerWidth, window.innerHeight)
  );

  this.tweens.add({
    targets: this.logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  });
}
