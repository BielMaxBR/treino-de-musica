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

    this.pointers = [] //scene.add.container(x, y)

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
    //
  }

  run() {

    let pattern = this.patterns[this.patternIndex]
    if (!pattern) {
      this.patternIndex = 0
      pattern = this.patterns[this.patternIndex]
    }
    let note = pattern[this.beatIndex]

    this.pointers.forEach(pointer => {
      if (pointer == 0) return;
      let pos = Phaser.Math.RotateAroundDistance(
        new Phaser.Geom.Point(pointer.x, pointer.y),
        350,
        250,
        (2*Math.PI) / 32,
        100
      )
      //console.log(pointer)
      pointer.x = pos.x
      pointer.y = pos.y

    })

    if (this.beatIndex == pattern.length) {
      this.patternIndex++
      this.beatIndex = 0
    }

    if (note != 0) {
      let firstValue = this.pointers[0]
      if (!firstValue) firstValue = 0
      if (firstValue != 0 && this.pointers.length == 32) {
        this.pointers.push(firstValue)
      } else {
        let pointer = new Circle(this.scene, this.x, this.y + 100, 8)
        this.pointers.push(pointer)
      }

    } else {
      this.pointers.push(0)
    }
    if (this.pointers.length == 32) {
      this.pointers.shift()
    }
    this.beatIndex++


    /*
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