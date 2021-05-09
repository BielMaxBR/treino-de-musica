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
    this.orbit.setStrokeStyle(1, 0xaaaaaa + this.scene.globalColor, 0x999999)

    this.line = scene.add.line(x, y, 0, 280, 0, 0, 0xdddddd + this.scene.globalColor);
    this.line.setLineWidth(3)

    this.center = new Circle(scene, x, y, 16, this.scene.globalColor)

    this.scene.objects.push(this.center)
  }

  run() {

    if (this.beatIndex == 32) {
      this.trackIndex++
      this.beatIndex = 0
    }

    let row = this.track[this.trackIndex]
    let pattern = this.patterns[row]

    if (!pattern) {
      this.trackIndex = 0
      row = this.track[0]
      pattern = this.patterns[0]
    }

    let note = pattern[this.beatIndex].toString()

    if (note != "0") {
      if (note[0] == "1") {
        let pointer = new Circle(this.scene, this.x, this.y + 100, 8, this.scene.globalColor, 0xffffff)

        pointer.fillColor = this.scene.globalColor
        pointer.name = Date.now()
        this.pointers.unshift(pointer)
        this.scene.objects.push(pointer)
      }
      if (note.indexOf("2") != -1) {
        this.scene.tweens.add({
          targets: this.scene.cameras.main,
          zoom: { start: 1.1, to: 1 },
          ease: 'Bounce',
          duration: 100
        })
      }

      if (note.indexOf("3") != -1) {
        let color = Phaser.Math.Between(0x888888, 0xffffff)

        this.scene.changeColors(color)
      }

    } else {
      let pointer = new Circle(this.scene, this.x, this.y + 100, 0, 0x000000, 0x000000)

      this.pointers.unshift(0)
    }

    this.beatIndex++

    if (this.pointers.length >= 32) {
      if (this.pointers[31] && this.pointers[31] != 0) {
        this.pointers[31].destroy()
      }
      this.pointers.length = 31
    }
    for (let i = 0; i < 32; i++) {
      let pointer = this.pointers[i]
      if (pointer && pointer != 0) {
        let pos = Phaser.Math.RotateAroundDistance(
          new Phaser.Geom.Point(pointer.x, pointer.y),
          350,
          250,
          ((2 * Math.PI) / 32),
          100
        )
        
        let condenado = false
        if (pointer.x == 369.50903220161285 && pointer.y == 348.078528040323) { condenado = true }

        //this.scene.beat.play()
        let duration = 100
        if (i==0||i==31) duration = 50
        let tween = this.scene.tweens.add({
          targets: pointer,
          x: pos.x,
          y: pos.y,
          ease: 'Bounce',
          duration: duration
        })
        /*
         *  pointer.x = pos.x
         *  pointer.y = pos.y
         */

        tween.on('complete', _ => {
          if (condenado) {
            pointer.destroy()
            this.pointers.pop()
          }

        })
        this.pointers.length = 31

      }
    }
  }

}