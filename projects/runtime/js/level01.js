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
                { "type": "sawblade", "x": 600, "y": groundY - 102},// adds the obstacle under "sawblade" to the game
                { "type": "sawblade", "x": 400, "y": groundY - 10},// adds the obstacle under "sawblade" to the game
                { "type": "sawblade", "x": 1800, "y": groundY - 130},// adds the obstacle under "sawblade" to the game
                { "type": "sawblade", "x": 1400, "y": groundY - 105},// adds the obstacle under "sawblade" to the game
                { "type": "sawblade", "x": 2500, "y": groundY - 10},// adds the obstacle under "sawblade" to the game
                { "type": "sawblade", "x": 3000, "y": groundY - 120},// adds the obstacle under "sawblade" to the game
            
                { "type": "rocks", "x": 2200, "y": groundY - 5},// adds the obstacle under "rocks" to the game
                { "type": "rocks", "x": 2800, "y": groundY - 5},// adds the obstacle under "rocks" to the game
                { "type": "rocks", "x": 3500, "y": groundY - 5},// adds the obstacle under "rocks" to the game
                { "type": "rocks", "x": 4000, "y": groundY - 5},// adds the obstacle under "rocks" to the game
                
                { "type": "flyingAlien", "x": 600, "y": groundY - 360},// adds the enemy under "flyingAlien" to the game
                { "type": "flyingAlien", "x": 1500, "y": groundY - 200},// adds the enemy under "flyingAlien" to the game
                { "type": "flyingAlien", "x": 2000, "y": groundY - 400},// adds the enemy under "flyingAlien" to the game
                { "type": "flyingAlien", "x": 3000, "y": groundY - 200},// adds the enemy under "flyingAlien" to the game

                { "type": "enemy", "x": 610, "y": groundY - 50},// adds the enemy under "enemy" to the game
                
                { "type": "enemy", "x": 1200, "y": groundY - 50},// adds the enemy under "enemy" to the game
                { "type": "enemy", "x": 2500, "y": groundY - 50},// adds the enemy under "enemy" to the game
                { "type": "enemy", "x": 3800, "y": groundY - 50},// adds the enemy under "enemy" to the game


                { "type": "reward", "x": 200, "y": groundY - 50},// adds the reward under "reward" to the game
                { "type": "reward", "x": 700, "y": groundY - 50},// adds the reward under "reward" to the game
                { "type": "reward", "x": 2000, "y": groundY - 50},// adds the reward under "reward" to the game
                { "type": "reward", "x": 2600, "y": groundY - 50},// adds the reward under "reward" to the game
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawBlade(x,y){
            var hitZoneSize = 20; //creates the size of the hit zone
            var damageFromObstacle = 5; //setting how much damage the object will inflict
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle
            sawBladeHitZone.x = x; // the x value of the hitzone
            sawBladeHitZone.y = y; // the y value of the hitzone
            game.addGameItem(sawBladeHitZone); // adds the hitzone to the game
            var obstacleImage = draw.bitmap('img/debris(1).png'); //draws in the image and stores it in the variable obsticalImage
            sawBladeHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it
            obstacleImage.x = -40; //tweaks the image 40 pixels to the left
            obstacleImage.y = -45; //tweaks the image 40 pixels up
            //sawBladeHitZone.rotationalVelocity = 10; // rotates the saw blades
        }
        function createRocks(x,y){
            var hitZoneSize = 20; //creates the size of the hit zone
            var damageFromObstacle = 5; //setting how much damage the object will inflict
            var rocksHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle
            rocksHitZone.x = x; // the x value of the hitzone
            rocksHitZone.y = y; // the y value of the hitzone
            game.addGameItem(rocksHitZone); // adds the hitzone to the game
            var obstacleImage = draw.bitmap('img/rocks.png'); //draws in the image and stores it in the variable obsticalImage
            rocksHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it
            obstacleImage.x = -40; //tweaks the image 25 pixels to the left
            obstacleImage.y = -25; //tweaks the image 25 pixels up
            //rocksHitZone.rotationalVelocity = 10; // rotates the saw blades
        }

        function createFlyAlien(x,y){
            var hitZoneSize = 40; //creates the size of the hit zone
            var damageFromObstacle = 5; //setting how much damage the object will inflict
            var flyAlienHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle
            flyAlienHitZone.x = x; // the x value of the hitzone
            flyAlienHitZone.y = y; // the y value of the hitzone
            game.addGameItem(flyAlienHitZone); // adds the hitzone to the game
            var obstacleImage = draw.bitmap('img/flyAlien.png'); //draws in the image and stores it in the variable obsticalImage
            flyAlienHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it
            obstacleImage.x = -80; //tweaks the image 25 pixels to the left
            obstacleImage.y = -50; //tweaks the image 25 pixels up
            //rocksHitZone.rotationalVelocity = 10; // rotates the saw blades
        }
        /*createSawBlade(600,380);
        createSawBlade(400,370);
        createSawBlade(800,470); */

        function createEnemy(x,y){
            var enemy = game.createGameItem('enemy',25); // creates the enemy game item and stores it in the var enemy
            var enemyImage = draw.bitmap ('img/alien.png');//adds the image and stores it in enemyImage
            //var redSquare = draw.rect(50,50,'red'); // draws a red square and stores it in var redSquare
            enemyImage.x = -100; // aligns the square with the hitzone x
            enemyImage.y = -80;// aligns the square with the hitzone y
            enemy.addChild(enemyImage); // adds the enemy image to the enemy so that we can see it
            enemy.x = x; // sets the x value for the enemy
            enemy.y = y; //sets the y value for the enemy
            game.addGameItem(enemy); //adds the enemy as a game item
            enemy.velocityX = -1; // moves the enemy toward HalleBot 1 pixel to the left
            //enemy.rotationalVelocity = 10; //rotates the enemy image 10 pixels 
            // this function detects if the enemy collides with halle and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10) // decreases your health #
                console.log('The enemy has hit Halle'); //sends to console log that halle has been hit by the enemy
                enemy.shrink(); // shrinks the enemy
            };
            // this function detects if the projectile collides with halle and it will increase the score
            enemy.onProjectileCollision= function(){
                console.log('The projectile hit the enemy'); //sends to console log that the enemy was hit
                game.changeIntegrity(10); //increases health
                game.increaseScore(10) //increases score
                enemy.shrink(); // shrinks the enemy on collizion
            };
    }

    /* createEnemy(600, groundY - 50);
    createEnemy(850, groundY - 50);
    createEnemy(1200, groundY - 50); */




    function createReward(x,y){
        var reward = game.createGameItem('reward',25); // creates the reward game item and stores it in the var reward
        var blueSquare = draw.bitmap('img/pots.png'); // draws a blue square and stores it in var blueSquare
        blueSquare.x = -40; // aligns the square with the hitzone x
        blueSquare.y = -40;// aligns the square with the hitzone y
        reward.addChild(blueSquare); // adds the reward image to the reward so that we can see it
        reward.x = x; // sets the x value for the reward
        reward.y = y; //sets the y value for the reward
        game.addGameItem(reward); //adds the reward as a game item
        reward.velocityX = -1; // moves the reward toward HalleBot 1 pixel to the left
        //reward.rotationalVelocity = 10; //rotates the reward image 10 pixels

        // this function detects if the reward collides with halle and executes health decrease
        reward.onPlayerCollision = function() {
            console.log('The reward has hit Halle');
            game.changeIntegrity(10) // increases your health #
            game.increaseScore(10)
            reward.shrink(); // shrinks the reward
        };
}


    for(var i = 0; i < levelData.gameItems.length; i++){
       var gameItem = levelData.gameItems[i]; // makes the obstacles, enemies, and rewards all usable game items

       if(gameItem.type === "sawblade"){
        createSawBlade(gameItem.x,gameItem.y);
       };//makes the sawblade a usuable game item
       
       if(gameItem.type === "flyingAlien"){
        createFlyAlien(gameItem.x,gameItem.y);
       };//makes flyingAlien a usuable game item

       if(gameItem.type === "rocks"){
        createRocks(gameItem.x,gameItem.y);
       };//makes the rocks a usuable game item

       if(gameItem.type === "enemy"){
        createEnemy(gameItem.x,gameItem.y);
       };//makes the enemy a usuable game item
       if(gameItem.type === "reward"){
        createReward(gameItem.x,gameItem.y);
       };//makes reward a usuable game item
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
