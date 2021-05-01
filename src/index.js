const config = {
  type: Phaser.CANVAS,
    width: 500,
    height: 500,
    canvas: document.getElementById('canvas'),
    scene: {
      preload: preload,
      create: create
    }
}

let game = new Phaser.Game(config)

function preload() {
  this.load.image('test', './src/assets/test.png')
}

function create() { 

  let button = this.add.sprite(250, 250, 'test').setInteractive();
  button.on('pointerdown', function (pointer) {

    console.log('click')
  });
}