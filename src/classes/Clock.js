import Circle from "./Circle.js"
export default class Clock extends Phaser.GameObjects.GameObject {
  constructor(scene, x = 250, y = 250) {
    super(scene, 'center')

    this.scene = scene
    this.x = x
    this.y = y

    this.isBeating = false

    this.patterns = scene.level.patterns
    this.track = scene.level.track

    this.beatIndex = 0
    this.playIndex = 1.6
    this.trackIndex = 0

    this.pointers = [] //scene.add.container(x, y)

    this.orbit = new Circle(scene, x, y, 100, 0x00, 0x00)
    this.orbit.setStrokeStyle(1, 0xaaaaaa+this.scene.globalColor, 0x999999)
    
    this.line = scene.add.line(x, y, 0, 280, 0, 0, 0xdddddd+this.scene.globalColor);
    this.line.setLineWidth(3)
    
    this.center = new Circle(scene, x, y, 16, this.scene.globalColor)
    
    // this.scene.objects.push(this.orbit)
    // this.scene.objects.push(this.line)
    this.scene.objects.push(this.center)
  }

  run() {
    let row = this.track[this.trackIndex]
    let pattern = this.patterns[row]

    if (!pattern) {
      this.trackIndex = 0
      row = this.track[0]
      pattern = this.patterns[0]
    }
    
    let note = pattern[this.beatIndex]

    // console.log(this.trackIndex,' ',this.beatIndex)
    if (note != 0) {
      console.log(this.scene.globalColor)
      let pointer = new Circle(this.scene, this.x, this.y + 100, 8, this.scene.globalColor)

      this.pointers.push(pointer)
      this.scene.objects.push(pointer)

      if (note == 2) {
        this.scene.tweens.add({
          targets: this.scene.cameras.main,
          zoom: { start: 0.8, to: 1},
          ease: 'Bounce',
          duration: 200
        })
      }

      if (note == 3) {
        this.scene.changeColors(0x3377aa)
      }

    } else {
      this.pointers.push(0)
    }

    this.beatIndex++

    if (this.beatIndex == pattern.length) {
      this.trackIndex++
      this.beatIndex = 0
    }

    this.pointers.forEach(pointer => {
      if (pointer == 0) return;
      let pos = Phaser.Math.RotateAroundDistance(
        new Phaser.Geom.Point(pointer.x, pointer.y),
        350,
        250,
        (2 * Math.PI) / 32,
        100
      )
      this.scene.beat.play()
      this.scene.tweens.add({
        targets: pointer,
        x: pos.x,
        y: pos.y,
        ease: 'Bounce',
        duration: 70
      })

    })

    if (this.pointers.length > 32) {
      let value = this.pointers[0]
      this.pointers.shift()
      this.scene.objects.slice(this.scene.objects.indexOf(value),1)
      if (value!=0) {
        value.destroy()
      }
    }
  }
}