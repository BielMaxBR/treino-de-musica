export default class Orbit extends Phaser.GameObjects.GameObject {
  constructor(scene, x=250,y=250) {
    super(scene, 'test')
    this.scene = scene
    this.x = x
    this.y = y
    this.orbita = 4
    this.sol = this.scene.add.sprite(this.x, this.y, 'sol')
    this.planeta = this.scene.add.sprite(this.x, this.y - 100, 'planeta')
  
    this.isBeating = false
  }
  
  setOrbita(val) {
    this.orbita = 
    Math.min(Math.max(val, 1), 4);
  }

  run(bpm) {
    let pos = Phaser.Math.RotateAroundDistance(
    new Phaser.Geom.Point(this.planeta.x,this.planeta.y),
    350,
    250,
    Phaser.Math.DegToRad(360/(bpm)*(4/this.orbita)),
    100/4*this.orbita
  )
  this.planeta.x = pos.x
  this.planeta.y = pos.y

  if (this.planeta.x-this.sol.x > -7 && this.planeta.x-this.sol.x < 7) { 
    if (!this.isBeating) {
      this.isBeating = true
      //button.x += 20
      this.scene.beat.play()
    }
  }
  else {
    this.isBeating = false
  }
  
  }
}