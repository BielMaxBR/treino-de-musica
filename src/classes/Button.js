export default class button extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite, frame, callback) {
    super(scene, x, y, sprite, frame)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerdown', callback)
  }
}