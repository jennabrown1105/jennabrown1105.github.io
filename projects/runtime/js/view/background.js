var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width; //containers to hold the width
        var canvasHeight = app.canvas.height;//containers to hold the height
        var groundY = ground.y; //sets the ground
        
        // container which will be returned
        var background;

        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
            
            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black'); //creats a var called backgroundFill and stores a rectangle that acts as the background
            background.addChild(backgroundFill); // adds the background to the canvas so we can see it
            
            // TODO: 3 - Add a moon and starfield
            for(var i = 0; i <= 100; i++ ){
                var circle = draw.circle(3,'white','LightGray',2); // creates a var called circle that holds each circle
                circle.x = canvasWidth*Math.random(); // multiplies canvasWidth * a random decimal between .1 and .99 and assigns it to circle.y 
                circle.y = groundY*Math.random(); // multiplies groundY * a random decimal between .1 and .99 and assigns it to circle.y 
                background.addChild(circle); //adds the circle to the background
            }

            var moon = draw.bitmap('img/planetss.png'); // A var moon that holds bitmat drawing of the planet
            moon.x = canvasWidth - 590; // holds the x value (left to right)
            moon.y = groundY - 390; // holds the y value (up and down)
            moon.scaleX = .8; // changes the x scale of the planet
            moon.scaleY = .8; // changes the y scale of the planet 
            background.addChild(moon); //adds the moon to the background
            var planet = draw.bitmap('img/fplanet.png');  // A var planet that holds bitmap drawing of the planet
            planet.x = canvasWidth - 2000;// holds the x value (left to right)
            planet.y = groundY - 600;// holds the y value (up and down)
            planet.scaleX = .5;// changes the x scale of the planet
            planet.scaleY = .5;// changes the y scale of the planet
            background.addChild(planet);//adds the planet to the background
            


            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            //every time this loop runs, it creates a building with an x and y value and pushes it to the buildings array
            /*for(var i = 0; i < 5; i++) {
                var buildingHeight = 300; //declare variable called buildingHeight that holds the height of the building in pixels
                var building = draw.rect(75,buildingHeight,'#5D4173','#5D4173',1); // declares a varable called building that will hold each building
                building.x = 200*i; // adds 200 pixels to the x value every time the loop runs
                building.y = groundY-buildingHeight; //sets the buildings y position by subtracting the height of the building from ground Y
                background.addChild(building); //adds the building to the background so we can see it
                buildings.push(building); //push the building data to the buildings array and store it as an index
            }
            */
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/street-light.png'); //stores the tree picture
            tree.x = canvasWidth - 210; //sets x for the tree
            tree.y = groundY - 200; //sets y for the tree
            tree.scaleX = .05; //sets x scale
            tree.scaleY = .05; //sets y scale
            background.addChild(tree); //adds the tree to the background
            

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1; // takes the current value of tree.x and moves it to the left slowly

            if(tree.x < -200) {
                tree.x = canvasWidth;
            } //moves the tree and resets it once its past a certain point
            
            // TODO 5: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
