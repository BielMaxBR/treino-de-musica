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

    this.decodeSong = (key) => {
      var cache = this.cache.audio;
      var data = cache.get(key)
      this.sound.decodeAudio(key,data)
      
    }

  }
  create() {
    this.add.text(10,10, "loading...")
    console.log('loading...')
    this.decodeSong('beat','./src/assets/kick.wav')
  }
  update() {
    this.scene.start("Game", {bpm:120})
  }
}