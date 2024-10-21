// Create a Phaser game config
let config = {
    type: Phaser.AUTO,  // Automatically use WebGL or Canvas
    width: 800,         // Game width
    height: 600,        // Game height
    scene: {
        preload: preload,  // Preload assets
        create: create,    // Create game objects
        update: update     // Update game loop
    }
};

// Initialize the game
let game = new Phaser.Game(config);

// Preload function: Load assets
function preload() {
    this.load.image('background', 'images/background.png'); // Load an image asset
}

// Create function: Add objects to the scene
function create() {
    this.add.image(400, 300, 'background');  // Add the image to the center
}

// Update function: Called in a loop
function update() {
    // Handle game logic, physics, etc.
}