export default class Circle extends Phaser.GameObjects.Arc {
  constructor(scene, x, y, tam, color=0xffffff, alpha = 0xffffff) {
    super(scene, x, y, tam, 0, 360, color, alpha)
    scene.add.existing(this)
    console.log(color)
  }
  
}
