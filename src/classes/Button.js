export default class button extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, callback) {
    super(scene, x, y, width, height, color)
    scene.add.existing(this)
    this.setInteractive()
    this.on('pointerdown', callback)
  }

  changeColor(color) {
    this.fillColor = Phaser.Math.Linear(color, 0xffffff, 0.5)
  }
}