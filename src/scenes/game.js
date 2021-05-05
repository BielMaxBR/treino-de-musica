import Clock from '../classes/Clock.js'
import Button from '../classes/Button.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game")
    this.isPlaying = false
  }
  init(data) {
    this.data = data
    this.tickFunctions = []
  }

  initTick() {
    this.isPlaying = true
    let bps = this.data.bpm / 60
    let ms = 1000 / bps
    let previous = Date.now()
    let lag = 0
    this.music.play()

    const tick = () => {
      let current = window.performance.now()
      let ellapsed = current - previous

      this.clock.run()

      lag = ellapsed - ms
      if (lag < 0) lag = 0
      this.testxt = `${lag} -- ${ms}`
      previous = current
      setTimeout(tick, ms - lag)
    }

    setTimeout(tick, 3)

  }

  create() {
    this.music = this.sound.add(this.data.music)
    this.beat = this.sound.add('beat')

    //this.beat.once('complete',()=>{
    //  this.beat.play()
    //  this.beat.pause()
    //})
    this.texto = this.add.text(10, 10, "iniciado")
    this.clock = new Clock(this, 350, 250)

    this.button = new Button(this, 50, 370, 'test', 0, () => {
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
      this.button.scale += 1
    })

    //this.pause = new Button(this,650,50,"test",0,()=>{
    //  this.scene.pause('Game')
    //})

    this.tickFunctions.push(() => {
      this.clock.run()
    })
  }


  update() {
    this.texto.text = this.testxt
  }
}