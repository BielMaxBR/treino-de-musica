//import beatsrc from '../assets/kick.wav'
export default class Loading extends Phaser.Scene {
  constructor() {
    super("Loading")
  }
  
  preload() {
    this.load.image('test', './src/assets/test.png')
    this.load.image('sol', './src/assets/sol.png')
    this.load.image('planeta', './src/assets/planeta.png')
  
    this.load.audio('beat','./src/assets/kick.wav')
  }
  create() {
    this.add.text(10,10, "loading...")
    //this.sound.decodeAudio('beat', beatsrc)
    console.log('loading...')
  }
  update() {
    //if (this.sound.on('decoded', 'beat')) {
      this.scene.start("Game", {bpm:120});
      //}
    
  }
}