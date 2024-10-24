var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    pixelArt:true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'images/background.png');
}

function create ()
{
    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);
    bg.setDisplaySize(960, 540);
}

function update ()
{
}