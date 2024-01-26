// Code Practice: Beyond Orthogonal
// Name: Victoria Ayala
// Date: 01/26

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Movement ]

}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config