var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp", // change the name of the game
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 600, "y": groundY - 100},
                { "type": "sawblade", "x": 400, "y": groundY - 10},
                { "type": "sawblade", "x": 800, "y": groundY - 95},

                { "type": "enemy", "x": 610, "y": groundY - 50},
                { "type": "enemy", "x": 850, "y": groundY - 50},
                { "type": "enemy", "x": 1200, "y": groundY - 50},

                { "type": "reward", "x": 200, "y": groundY - 50},
                { "type": "reward", "x": 700, "y": groundY - 50},
                { "type": "reward", "x": 2000, "y": groundY - 50},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x,y){
            var hitZoneSize = 25; //creates the size of the hit zone
            var damageFromObstacle = 10; //setting how much damage the object will inflict
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle
            sawBladeHitZone.x = x; // the x value of the hitzone
            sawBladeHitZone.y = y; // the y value of the hitzone
            game.addGameItem(sawBladeHitZone); // adds the hitzone to the game
            var obstacleImage = draw.bitmap('img/sawblade.png'); //draws in the image and stores it in the variable obsticalImage
            sawBladeHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it
            obstacleImage.x = -25; //tweaks the image 25 pixels to the left
            obstacleImage.y = -25; //tweaks the image 25 pixels up
            sawBladeHitZone.rotationalVelocity = 10; // rotates the saw blades
        }

        /*createSawBlade(600,380);
        createSawBlade(400,370);
        createSawBlade(800,470); */

        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25); // creates the enemy game item and stores it in the var enemy
            var redSquare = draw.rect(50,50,'red'); // draws a red square and stores it in var redSquare
            redSquare.x = -25; // aligns the square with the hitzone x
            redSquare.y = -25;// aligns the square with the hitzone y
            enemy.addChild(redSquare); // adds the enemy image to the enemy so that we can see it
            enemy.x = x; // sets the x value for the enemy
            enemy.y = y; //sets the y value for the enemy
            game.addGameItem(enemy); //adds the enemy as a game item
            enemy.velocityX = -1; // moves the enemy toward HalleBot 1 pixel to the left
            enemy.rotationalVelocity = 10; //rotates the enemy image 10 pixels
    
            // this function detects if the enemy collides with halle and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10) // decreases your health #
                console.log('The enemy has hit Halle');
                enemy.shrink(); // shrinks the enemy
            };
            // this function detects if the projectile collides with halle and it will increase the score
            enemy.onProjectileCollision= function(){
                console.log('The projectile hit the enemy');
                game.changeIntegrity(5);
                game.increaseScore(10)
                enemy.shrink(); // shrinks the enemy on collizion
            };
    }

    /* createEnemy(600, groundY - 50);
    createEnemy(850, groundY - 50);
    createEnemy(1200, groundY - 50); */




    function createReward(x,y){
        var reward = game.createGameItem('reward',25); // creates the reward game item and stores it in the var reward
        var blueSquare = draw.rect(50,50,'blue'); // draws a blue square and stores it in var blueSquare
        blueSquare.x = -25; // aligns the square with the hitzone x
        blueSquare.y = -25;// aligns the square with the hitzone y
        reward.addChild(blueSquare); // adds the reward image to the reward so that we can see it
        reward.x = x; // sets the x value for the reward
        reward.y = y; //sets the y value for the reward
        game.addGameItem(reward); //adds the reward as a game item
        reward.velocityX = -1; // moves the reward toward HalleBot 1 pixel to the left
        reward.rotationalVelocity = 10; //rotates the reward image 10 pixels

        // this function detects if the reward collides with halle and executes health decrease
        reward.onPlayerCollision = function() {
            console.log('The reward has hit Halle');
            game.changeIntegrity(10) // increases your health #
            game.increaseScore(10)
            reward.shrink(); // shrinks the reward
        };
}


    for(var i = 0; i < levelData.gameItems.length; i++){
       var gameItem = levelData.gameItems[i];

       if(gameItem.type === "sawblade"){
        createSawBlade(gameItem.x,gameItem.y);
       };

       if(gameItem.type === "enemy"){
        createEnemy(gameItem.x,gameItem.y);
       };
       if(gameItem.type === "reward"){
        createReward(gameItem.x,gameItem.y);
       };
    };


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
