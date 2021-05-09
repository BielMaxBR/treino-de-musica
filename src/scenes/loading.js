let ready = false
export default class Loading extends Phaser.Scene {
  constructor() {
    super("Loading")
  }

  preload() {
    //this.load.path = "src/assets"
    this.texto = this.add.text(10, 10, "loading...")

    this.load.audio('beat', './src/assets/kick.m4a')
    
    this.load.json('music',"./src/assets/music.json")

  }
  create() {
    this.musicData = this.cache.json.get('music')
    document.addEventListener("visibilitychange", (a) => {
      if (document.visibilityState === 'visible') {
        //this.game.sound.resumeAll();
        this.game.scene.resume('Game')
      } else {
        //this.game.sound.pauseAll();
        this.game.scene.pause('Game')
      }

    });
    ready = true
  }
  update() {
    if (ready) {
      this.scene.start("Game", this.musicData)
    }
    
  }
}