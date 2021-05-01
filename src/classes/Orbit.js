export default class Orbit extends Phaser.GameObjects.GameObject {
  constructor(scene, x=250,y=250) {
    super(scene, 'test')
    this.scene = scene
    this.x = x
    this.y = y
    this.orbita = 4
    this.planeta;
    this.sol;
  }

  preload() {
    this.scene.load.image('test', './assets/test.png')
  }

  create() {
    this.sol = this.scene.add.sprite(this.x,this.y, 'test')
    this.planeta = this.scene.add.sprite(this.x,this.y-100, 'test')
  }
}