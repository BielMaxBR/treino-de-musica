import Orbit from '../classes/Orbit.js'
export default class Game extends Phaser.Scene {
  constructor(eita) {
    super("Game")
  }
  init(data) {
    this.bpm = data.bpm
  }
  create() {
    this.beat = this.sound.add('beat')
    
    this.button = this.add.sprite(50, 350, 'test').setInteractive();

    this.orbit = new Orbit(this, 350, 250)
  
    this.button.on('pointerdown', (pointer) => {
      //this.orbit.setOrbita(this.orbit.orbita - 1)
      this.sound.play('beat')
    });
    
  }
  
  update() {
    this.orbit.run(this.bpm)
  }
}