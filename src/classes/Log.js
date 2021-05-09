export default class Log extends Phaser.GameObjects.Text {
  constructor(scene,text) {
    super(scene,10,10,text,{fontSize:18})
    scene.add.existing(this)
  }

  changeColor(color) {
    this.style.color = "#" + color.toString(16).padStart(6, '0');
  }
}
//this.add.text(10, 10, "iniciado")