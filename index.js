const config = {
  type: Phaser.CANVAS,
    width: 500,
    height: 500,
    scene: {
      preload: preload,
      create: create
    }
}

let game = new Phaser.Game(config)

function preload() {
  
}

function create() {
  console.log('tudo criado')
}