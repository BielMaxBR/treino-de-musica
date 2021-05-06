export default class button extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, callback) {
    super(scene, x, y, width, height, color)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerdown', callback)
  }
}