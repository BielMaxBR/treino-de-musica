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
  this.load.image('sol', './src/assets/sol.png')
  this.load.image('planeta', './src/assets/planeta.png')
  
  this.load.audio('beat', './src/assets/hihat.mp3')
  orbit  = new Orbit(this, 250, 250)
  console.log(this)
}

function create() { 
  this.beat = this.sound.add('beat')
  button = this.add.sprite(50, 350, 'test').setInteractive();

  button.on('pointerdown', function (pointer) {
    orbit.setOrbita(orbit.orbita-1)
  });

  orbit.create(this)

}
let isBeating = false

function update() {
  let pos = Phaser.Math.RotateAroundDistance(
    new Phaser.Geom.Point(orbit.planeta.x,orbit.planeta.y),
    250,
    250,
    Phaser.Math.DegToRad(360/(120)*(4/orbit.orbita)),
    100/4*orbit.orbita
  )
  orbit.planeta.x = pos.x
  orbit.planeta.y = pos.y

  if (orbit.planeta.x-orbit.sol.x > -7 && orbit.planeta.x-orbit.sol.x < 7) { 
    if (!isBeating) {
      isBeating = true
      //button.x += 20
      this.beat.play()
    }
  }
  else {
    isBeating = false
  }
  
}