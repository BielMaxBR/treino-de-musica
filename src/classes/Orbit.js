export default class Orbit extends Phaser.GameObjects.GameObject {
  constructor(scene, x=250,y=250) {
    super(scene, 'test')
    this.scene = scene
    this.x = x
    this.y = y
    this.isBeating = false

    this.line = scene.add.line(this.x, this.y, 0, 280, 0, 0, 0xdddddd);
    this.line.setLineWidth(3)
    
    this.circulo = scene.add.circle(x, y, 100)
    this.circulo.setStrokeStyle(1,0xaaaaaa,0x999999)
    
    this.sol = scene.add.sprite(this.x, this.y, 'sol')
    this.planeta = scene.add.sprite(this.x, this.y + 100, 'sol')
    this.planeta.setScale(0.5)
    
  }
  
  run() {
    let pos = Phaser.Math.RotateAroundDistance(
    new Phaser.Geom.Point(this.planeta.x,this.planeta.y),
    350,
    250,
    Math.PI/64*4,
    100
    )
    
    
    this.planeta.x = pos.x
    this.planeta.y = pos.y
    
    if (this.planeta.x-this.sol.x > -7 && this.planeta.x-this.sol.x < 7 && this.planeta.y-this.sol.y < 0) { 
      if (!this.isBeating) {
        this.isBeating = true
        this.scene.sound.play('beat')
        this.sol.setScale(2)
      }
    }
    else {
      this.isBeating = false
      this.sol.setScale(1)
    }
  
  }
}