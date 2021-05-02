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
let isBeating = false
function update() {
  let pos = Phaser.Math.RotateAround(new Phaser.Geom.Point(orbit.planeta.x,orbit.planeta.y), 250, 250, Phaser.Math.DegToRad(180/60))
  orbit.planeta.x = pos.x
  orbit.planeta.y = pos.y
  let rad = Phaser.Math.Angle.Between(orbit.planeta.x, orbit.planeta.y, orbit.x, orbit.y);
  let deg = Phaser.Math.RadToDeg(rad)-90
  
  if (deg > -7 && deg < 7) { 
    if (!isBeating) {
      isBeating = true
      button.x += 32
    }
  }
  else {
    isBeating = false
  }
  
}