import Orbit from '../classes/Orbit.js'
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
    let bps = this.data.bpm/60
    let ms = 1000/bps
    let previous = window.performance.now()
    //let lag = 0
    this.sound.play(this.data.music)
    
    const tick = () => {
      let current = window.performance.now()
      let ellapsed = current - previous
      
      //lag += ellapsed
      
      //while (lag >= ms) {
        for (const func of this.tickFunctions) {
          func()
        }
        //lag -= ms
      
        this.testxt = `${ellapsed} -- ${ms}`
      previous = window.performance.now()
      setTimeout(tick,ms)
    }
    
    tick()
    
  }
  
  create() {
    this.texto = this.add.text(10,10,"iniciado")
    this.orbit = new Orbit(this, 350, 250)
  
    this.button = new Button(this, 50, 370, 'test', 0, () => {
      if (!this.isPlaying) {
        this.initTick.bind(this)()
      }
    })
    console.log(this.texto)
    this.tickFunctions.push(()=>{
      this.orbit.run()
    })
  }
  
  
  update() {
    this.texto.text = this.testxt
  }
}