import Game from './scenes/game.js'
import Loading from './scenes/loading.js'

const config = {
  type: Phaser.WEBGL,
  width: 700,
  height: 500,
  canvas: document.getElementById('canvas'),
  scene: [Loading, Game]
}

let game = new Phaser.Game(config)