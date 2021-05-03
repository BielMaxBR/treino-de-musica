export default class Orbit extends Phaser.GameObjects.GameObject {
  constructor(scene, x=250,y=250) {
    super(scene, 'test')
    this.scene = scene
    this.x = x
    this.y = y
    this.orbita = 4
    this.proxOrbita = 4
    this.isBeating = false

    this.line = this.scene.add.line(this.x, this.y, 0, 280, 0, 0, 0xffffff);
    this.line.setLineWidth(3)
    
    this.sol = this.scene.add.sprite(this.x, this.y, 'sol')
    this.planeta = this.scene.add.sprite(this.x, this.y - 100, 'planeta')
  
    console.log(this.sol)
  }
  
  setTo(val) {
    this.proxOrbita = 
    Math.min(Math.max(val, 1), 4);
  }
  
  run(bpm) {
    let pos = Phaser.Math.RotateAroundDistance(
    new Phaser.Geom.Point(this.planeta.x,this.planeta.y),
    350,
    250,
    (Math.PI/bpm*4)*(4/this.orbita),
    120/4*this.orbita
  )
  
  this.planeta.x = pos.x
  this.planeta.y = pos.y

  if (this.planeta.x-this.sol.x > -7 && this.planeta.x-this.sol.x < 7) { 
    if (!this.isBeating) {
      this.isBeating = true
      //this.scene.sound.play('beat')
      this.orbita = this.proxOrbita
      this.sol.setScale(2)
    }
  }
  else {
    this.isBeating = false
    this.sol.setScale(1)
  }
  
  }
}