import Clock from '../classes/Clock.js'
import Button from '../classes/Button.js'
import Log from '../classes/Log.js'
import Shader from '../shaders/shader.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game")
    this.isPlaying = false
  }
  init(level) {
    this.level = level
  }

  preload() {
    this.load.audio(this.level.music, this.level.path)
  }

  initTick() {
    this.isPlaying = true
    this.music.play()

    let bps = this.level.bpm / 60
    let ms = 1000 / bps

    const tick = () => {
      this.clock.run()
    }
    const timer = this.time.addEvent({
      delay: ms,
      callback: tick,
      callbackScope: this,
      loop: true
    })

  }

  invertColor(hexTripletColor) {
    let color = hexTripletColor
    color = 0xFFFFFF ^ color; // invert three bytes
    return color;
}

  changeColors(color) {
    this.globalColor = color

    let backColor = this.invertColor(color)
    this.background.fillColor = backColor

    for (let obj of this.objects) {
      if (obj) {
        
        obj.changeColor(color)
      }
    }
  }
  create() {
    this.cameras.main.setPostPipeline(new Shader(this.game))
    this.globalColor = 0xffffff
    this.background = this.add.rectangle(350, 250, 3000, 3000, this.invertColor(this.globalColor))
    this.objects = []
    this.music = this.sound.add(this.level.music)
    this.beat = this.sound.add('beat')

    this.texto = new Log(this, 'iniciando')

    this.objects.push(this.texto)
    
    this.clock = new Clock(this, 350, 250)

    this.button = new Button(this, 50, 370, 48, 48, this.globalColor, () => {
      if (!this.isPlaying) {
        this.initTick.bind(this)()
      }
    })
    this.button.setScale(2)
    this.objects.push(this.button)

    this.input.on('pointerdown', (e) => {
      if (this.clock.isBeating) {
        this.button.x += 64
      }

      let color = Phaser.Math.Between(0x888888, 0xffffff)
      
      this.changeColors(color)
    })

    //this.pause = new Button(this,650,50,"test",0,()=>{
    //  this.scene.pause('Game')
    //})
    this.game.loop.targetFps = 500

  }
  update() {
    this.texto.setText(this.game.loop.actualFps)

  }
}