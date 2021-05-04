//import beatsrc from '../assets/kick.wav'
let ready = false
export default class Loading extends Phaser.Scene {
  constructor() {
    super("Loading")
  }
  
  preload() {
    this.load.image('test', './src/assets/test.png')
    this.load.image('sol', './src/assets/sol.png')
    this.load.image('planeta', './src/assets/planeta.png')
  
    this.load.audio('beat','./src/assets/kick.mp3')
    this.load.audio('orbitando','./src/assets/megalo.mp3')

    this.decodeSong = (key, path) => {
      var cache = this.cache.audio;
      var data = cache.get(key)
      var request = new XMLHttpRequest();
      request.open("GET", path, true);
      request.responseType = "arraybuffer";
      request.onload = () => {
        this.sound.decodeAudio(key,request.response)
      };
      request.send()
    }

  }
  create() {
    this.texto = this.add.text(10,10, "loading...")
    console.log('loading...')
    this.decodeSong('beat','./src/assets/kick.mp3')
    this.decodeSong('orbitando','./src/assets/megalo.mp3')
    document.addEventListener("visibilitychange", (a)=>{
      if (document.visibilityState === 'visible') {
        this.game.sound.resumeAll();
        this.scene.resume()
      } else {
        this.game.sound.pauseAll();
        this.scene.pause()
      }

    });
    ready = true
  }
  update() {
   if(ready) {
    this.scene.start("Game", {bpm:124,music:'orbitando'})
    }
  }
}