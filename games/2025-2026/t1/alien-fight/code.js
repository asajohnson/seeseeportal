

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["797ac374-5ca8-4c7c-96fe-b4ff1e079080","07f7fa98-40e4-497d-9e29-384529450198","d3fe056a-0f73-4d30-91ad-5bfd433d1359","f0b29e49-2a71-489a-a035-53553b1c28e9","c2cde15b-0990-430e-ad87-b49ca3c867ba","92a63fa1-9ece-449c-aa37-2181a0335b29"],"propsByKey":{"797ac374-5ca8-4c7c-96fe-b4ff1e079080":{"name":"hero","sourceUrl":null,"frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"iAxEs2CFeEnFQGiSdl1FQ1LkNvzYoxRb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/797ac374-5ca8-4c7c-96fe-b4ff1e079080.png"},"07f7fa98-40e4-497d-9e29-384529450198":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":214,"y":209},"frameCount":1,"looping":true,"frameDelay":12,"version":"3yPl1WbOa9p6Co47SfOGsXLMZHcT5ueX","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":209},"rootRelativePath":"assets/07f7fa98-40e4-497d-9e29-384529450198.png"},"d3fe056a-0f73-4d30-91ad-5bfd433d1359":{"name":"enemy","sourceUrl":null,"frameSize":{"x":206,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"s04sMdKNtIBKmI.bGuhK3iY8u0_yDRXc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":237},"rootRelativePath":"assets/d3fe056a-0f73-4d30-91ad-5bfd433d1359.png"},"f0b29e49-2a71-489a-a035-53553b1c28e9":{"name":"plant","sourceUrl":null,"frameSize":{"x":219,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"fx1_eLRTOKYeA.gwihtqaL5caTCK9rEn","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":398},"rootRelativePath":"assets/f0b29e49-2a71-489a-a035-53553b1c28e9.png"},"c2cde15b-0990-430e-ad87-b49ca3c867ba":{"name":"box","sourceUrl":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png","frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":2,"version":"iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":118},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iXz63Eo1uaIi5XtkefDszxi6qzTTCqQm/category_faces/box.png"},"92a63fa1-9ece-449c-aa37-2181a0335b29":{"name":"rpgcharacter_02_1","sourceUrl":null,"frameSize":{"x":204,"y":248},"frameCount":1,"looping":true,"frameDelay":12,"version":"PICGYeQ4R6q0YDMXjc8ACNrXd4FE5wOF","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":248},"rootRelativePath":"assets/92a63fa1-9ece-449c-aa37-2181a0335b29.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create your variables here

// Create your sprites here

var gameState = "start";
function draw() {
  background("black");
  fill("brown");
  rect(0, 100, 400, 200);
 if (keyDown("left")) {
    hero.x = hero.x - 3;
  }
  if (keyDown("right")) {
    hero.x = hero.x + 3;
  }
  if (keyDown("up")) {
    hero.y = hero.y - 3;
  }
  if (keyDown("down")) {
    hero.y = hero.y + 3;
  }
  drawSprites();
  // update sprites
}
var hero = createSprite(20, 213);
hero.setAnimation("hero");
hero.scale = 0.2;

var enemy = createSprite(120, 150);
enemy.setAnimation("enemy");
enemy.scale = 0.2;
enemy.velocityX = 3; // move right to start

var enemy1 = createSprite(228, 238);
enemy1.setAnimation("enemy1");
enemy1.scale = 0.2;
enemy1.velocityX = -3; // move left to start

var plant = createSprite(370, 200);
plant.setAnimation("plant");
plant.scale = 0.3;

// Game state variable
var gameState = "start";

function draw() {
  background("black");

  // Draw the "road"
  fill("brown");
  rect(0, 100, 400, 200);

  if (gameState === "start") {
    // START SCREEN
    textSize(23);
    fill("white");
    textFont("Times New Roman");
    textAlign(CENTER);
    text("Hopefully You Win Hopefully You Don't!", 200, 190);
    textSize(17);
    text("Click to Play (Don't Touch The Black) ", 191, 231);
  }

  if (gameState === "play") {
    // Move hero
    if (keyDown("left")) {
      hero.x -= 3;
    }
    if (keyDown("right")) {
      hero.x += 3;
    }
    if (keyDown("up")) {
      hero.y -= 3;
    }
    if (keyDown("down")) {
      hero.y += 3;
    }

    // Enemies bounce across the road area
    if (enemy.x > 380 || enemy.x < 20) {
      enemy.velocityX *= -3.75;
    }
    if (enemy1.x > 380 || enemy1.x < 20) {
      enemy1.velocityX *= -3.75;
    }

    // Check win condition (touching the plant)
    if (hero.isTouching(plant)) {
      gameState = "win";
    }

    // Check lose condition (touching enemies)
    if (hero.isTouching(enemy) || hero.isTouching(enemy1)) {
      gameState = "lose";
    }

    drawSprites();
  }

  if (gameState === "win") {
    background("green");
    textSize(40);
    fill("black");
    textFont("Times New Roman");
    textAlign(CENTER);
    text("You Actually Won!!", 200, 200);
    textSize(20);
    text("Click to Play Again", 200, 240);
  }

  if (gameState === "lose") {
    background("black");
    textSize(35);
    fill("white");
    textFont("Times New Roman");
    textAlign(CENTER);
    text("You Lose As Expected", 200, 200);
    textSize(20);
    text("Click to Try Again", 200, 240);
  }
}

// Click to start or restart
function mousePressed() {
  if (gameState === "start" || gameState === "win" || gameState === "lose") {
    resetGame();
    gameState = "play";
  }
}

// Reset positions
function resetGame() {
  hero.x = 20;
  hero.y = 213;

  enemy.x = 120;
  enemy.velocityX = 3;

  enemy1.x = 280;
  enemy1.velocityX = -3;
}
// Create your functions here

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
