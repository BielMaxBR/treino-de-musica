export default class Orbit extends Phaser.GameObjects.GameObject {
  constructor(scene, x=250,y=250) {
    super(scene, 'center')
    this.scene = scene
    this.x = x
    this.y = y
    this.isBeating = false

    this.line = scene.add.line(this.x, this.y, 0, 280, 0, 0, 0xdddddd);
    this.line.setLineWidth(3)
    
    this.circulo = scene.add.circle(x, y, 100)
    this.circulo.setStrokeStyle(1,0xaaaaaa,0x999999)
    
    this.center = scene.add.sprite(this.x, this.y, 'center')
    this.pointer = scene.add.sprite(this.x, this.y + 100, 'pointer')
    this.pointer.setScale(0.5)
    
    //this.tween = scene.tweens.add({
    //  target: this,
    //  scale:{start:2,end:1},
    //  duration:300
    //})
    
  }
  
  run() {
    let pos = Phaser.Math.RotateAroundDistance(
    new Phaser.Geom.Point(this.pointer.x,this.pointer.y),
    350,
    250,
    Math.PI/32,
    100
    )
    
    
    this.pointer.x = pos.x
    this.pointer.y = pos.y
    
    if (this.pointer.x-this.center.x > -7 && this.pointer.x-this.center.x < 7 && this.pointer.y-this.center.y < 0) { 
      if (!this.isBeating) {
        this.isBeating = true
        this.scene.sound.play('beat')
        this.center.setScale(2)
      }
    }
    else {
      this.isBeating = false
      this.scene.beat.play()
      this.center.setScale(1)
    }
  
  }
}