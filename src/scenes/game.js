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
    let bps = 1000/(this.data.bpm/60)
    let lastTime = window.performance.now()
    this.sound.play(this.data.music)
    
    const tick = () => {
      for (const func of this.tickFunctions) {
        func()
      }
      let currentTime = window.performance.now()
      let waitTime = (lastTime+bps) - currentTime-100
      
      lastTime = lastTime+bps
      setTimeout(tick, waitTime)
    }
    
    tick(bps)
    
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