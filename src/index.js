import Orbit from "./classes/Orbit.js";

const config = {
  type: Phaser.CANVAS,
    width: 700,
    height: 500,
    canvas: document.getElementById('canvas'),
    scene: {
      preload: preload,
      create: create,
      update: update
    }
}

let game = new Phaser.Game(config)

let orbit;// = new Orbit(game.scene,250,250)
let button;

function preload() {
  this.load.image('test', './src/assets/test.png')
  orbit  = new Orbit(this, 250, 250)
  console.log(this)
}

function create() { 
  button = this.add.sprite(50, 350, 'test').setInteractive();

  button.on('pointerdown', function (pointer) {
    console.log('click')
  });

  orbit.create(this)

}

function update() {
  // Phaser.Actions.RotateAroundDistance(orbit, this.geomPoint, 0.095, 100);
  let pos = Phaser.Math.RotateAround(new Phaser.Geom.Point(orbit.planeta.x,orbit.planeta.y), 250, 250, 0.1)
  orbit.planeta.x = pos.x
  orbit.planeta.y = pos.y
  // console.log(pos)
}