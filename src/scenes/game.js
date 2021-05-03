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
    let time = 1000/(this.data.bpm/60)
    this.sound.play(this.data.music)
    
    const tick = () => {
      for (const func of this.tickFunctions) {
        func()
      }
      setTimeout(tick, time)
    }
    tick(time)
    
  }
  
  create() {
    this.orbit = new Orbit(this, 350, 250)
  
    this.button = new Button(this, 50, 370, 'test', 0, () => {
      if (!this.isPlaying) {
        this.initTick.bind(this)()
      }
    })
    
    this.tickFunctions.push(()=>{
      this.orbit.run()
    })
  }
  
  
  update() {
  }
}