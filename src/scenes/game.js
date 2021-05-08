import Clock from '../classes/Clock.js'
import Button from '../classes/Button.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game")
    this.isPlaying = false
  }
  init(level) {
    this.level = level
  }
  
  preload() {
    console.log("carregado")
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

  create() {
    this.music = this.sound.add(this.level.music)
    this.beat = this.sound.add('beat')

    this.texto = this.add.text(10, 10, "iniciado")
    this.clock = new Clock(this, 350, 250)

    this.button = new Button(this, 50, 370, 48, 48, 0xffaaff, () => {
      if (!this.isPlaying) {
        this.initTick.bind(this)()
      }
    })
    this.button.setScale(2)

    this.input.on('pointerdown', (e) => {
      if (this.clock.isBeating) {
        this.button.x += 64
      }

      //this.beat.play()
      //this.button.scale += 1
    })

    //this.pause = new Button(this,650,50,"test",0,()=>{
    //  this.scene.pause('Game')
    //})
    this.game.loop.targetFps = 500

  }
  update() {
    this.texto.text = this.game.loop.actualFps
    
  }
}