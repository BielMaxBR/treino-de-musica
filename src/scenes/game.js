import Orbit from '../classes/Orbit.js'
import Button from '../classes/Button.js'

export default class Game extends Phaser.Scene {
  constructor(eita) {
    super("Game")
  }
  init(data) {
    this.bpm = data.bpm
  }
  create() {
    this.beat = this.sound.add('beat')
    
    this.orbit = new Orbit(this, 350, 250)
  
    this.button4 = new Button(this,50,250,'test',0,()=>{
      this.orbit.setTo(4)
    })
    this.button3 = new Button(this, 50, 290, 'test', 0, () => {
      this.orbit.setTo(3)
    })
    this.button2 = new Button(this, 50, 330, 'test', 0, () => {
      this.orbit.setTo(2)
    })
    this.button1 = new Button(this, 50, 370, 'test', 0, () => {
      this.orbit.setTo(1)
    })
  }
  
  update() {
    this.orbit.run(this.bpm)
  }
}