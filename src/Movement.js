class Movement extends Phaser.Scene {
    constructor() {
        super('movementScene')
    }

    preload() {
        this.load.spritesheet('character', './assets/spritesheets/Character_002.png', {
            frameWidth: 48
        })
    }

    init() {
        this.PLAYER_VELOCITY = 5
    }

    create() {
        this.cameras.main.setBackgroundColor(0xDDDDDD)
        this.player = this.add.sprite(width / 2, height / 2, 'character', 1).setScale(2)

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        let playerVector = new Phaser.Math.Vector2(0, 0)
        // handle left and right
        if(cursors.left.isDown){
            playerVector.x = -1
        }
        else if (cursors.right.isDown){
            playerVector.x += 1
        }
        // handle up and down
        if(cursors.up.isDown){
            playerVector.y = -1
        }
        else if(cursors.down.isDown){
            playerVector.y = 1
        }

        playerVector.normalize()

        this.player.x += playerVector.x * this.PLAYER_VELOCITY
        this.player.y += playerVector.y * this.PLAYER_VELOCITY
    }
}