import Circle from "./Circle.js"
export default class Clock extends Phaser.GameObjects.GameObject {
  constructor(scene, x = 250, y = 250) {
    super(scene, 'center')
    
    this.scene = scene
    this.x = x
    this.y = y
    
    this.isBeating = false
    
    this.patterns = scene.data.patterns
    this.track = scene.data.track
    
    this.beatIndex = 0
    this.playIndex = 16
    this.patternIndex = 0
    
    this.pointers = scene.add.container(x, y)
    
    this.orbit = new Circle(scene, x, y, 100, 0x00, 0x000000)
    this.orbit.setStrokeStyle(1, 0xaaaaaa, 0x999999)

    this.line = scene.add.line(x, y, 0, 280, 0, 0, 0xdddddd);
    this.line.setLineWidth(3)

    this.center = new Circle(scene, x, y, 16)

    //this.tween = scene.tweens.add({
    //  target: this,
    //  scale:{start:2,end:1},
    //  duration:300
    //})
  }

  run() {
    let pattern = this.patterns[this.patternIndex]
    let note = pattern[this.beatIndex]
    if (this.beatIndex<pattern.length) {
      console.log(note)
      this.beatIndex++
    }
    else {
      this.patternIndex++
      this.beatIndex = 0
    }
    /*let pos = Phaser.Math.RotateAroundDistance(
      new Phaser.Geom.Point(this.pointer.x, this.pointer.y),
      350,
      250,
      Math.PI / 32,
      100
    )
    

    this.pointer.x = pos.x
    this.pointer.y = pos.y

    if (this.pointer.x - this.center.x > -7 && this.pointer.x - this.center.x < 7 && this.pointer.y - this.center.y < 0) {
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
  */
  }
}