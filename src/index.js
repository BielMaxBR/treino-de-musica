import Orbit from "./classes/Orbit.js";
import Game from './scenes/game.js'
import Loading from './scenes/loading.js'
const config = {
  type: Phaser.CANVAS,
    width: 700,
    height: 500,
    canvas: document.getElementById('canvas'),
    scene: [Loading, Game]
}

let game = new Phaser.Game(config)

let isBeating = false

function update() {
  
}