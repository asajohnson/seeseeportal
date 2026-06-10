

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0b86baa4-0abe-4d14-8d98-c80456ef33ac","ddf1affd-b34b-41d6-b2b0-163a8c305d62","cc3a5df9-c48e-40c5-a6fb-77888ac217bb","7eced8c8-1b6b-4150-aafd-d47762368af2","d2578793-5302-4868-af88-0696926b3c8d"],"propsByKey":{"0b86baa4-0abe-4d14-8d98-c80456ef33ac":{"name":"gameplayfaces_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png"},"ddf1affd-b34b-41d6-b2b0-163a8c305d62":{"name":"gameplayfaces_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"06wPXKdEQcswfpqQZSlfk0f9AlqkYNH.","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png"},"cc3a5df9-c48e-40c5-a6fb-77888ac217bb":{"name":"gameplayweird_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.77fIFMkseuWCQUPOwyXdm2DCnw8pjOc/category_faces/gameplayweird_13.png","frameSize":{"x":396,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":".77fIFMkseuWCQUPOwyXdm2DCnw8pjOc","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.77fIFMkseuWCQUPOwyXdm2DCnw8pjOc/category_faces/gameplayweird_13.png"},"7eced8c8-1b6b-4150-aafd-d47762368af2":{"name":"gameplayweird_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/WO5muxDrtWTCjiQ3JTMBd3QV3uiusKsp/category_faces/gameplayweird_11.png","frameSize":{"x":358,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"WO5muxDrtWTCjiQ3JTMBd3QV3uiusKsp","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":358,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WO5muxDrtWTCjiQ3JTMBd3QV3uiusKsp/category_faces/gameplayweird_11.png"},"d2578793-5302-4868-af88-0696926b3c8d":{"name":"grid_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr/category_backgrounds/background_grid.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr/category_backgrounds/background_grid.png"}}};
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

playSound("R_U_N-(1).mp3", true);
var gameState = "menu";
var winner = "";
var player = createSprite(100, 200, 30, 30);
var enemy = createSprite(300, 200, 30, 30);
var playerSpeed = 4;
var enemySpeed = 4;
var wall1 = createSprite(200, 150, 200, 20);
var wall2 = createSprite(100, 280, 20, 150);
var wall3 = createSprite(300, 280, 20, 150);
wall1.shapeColor = "brown";
wall2.shapeColor = "brown";
wall3.shapeColor = "brown";
var powerUp = createSprite(200, 100, 20, 20);
powerUp.shapeColor = "orange";
var p1Score = 0;
var p2Score = 0;
var playerIsIt = false;
var p1Skin = "blue";
var p2Skin = "red";
var gameTimer = 30;
function draw() {
  if (gameState === "menu") {
    background("black");
    fill("white");
    textSize(32);
    textFont("Anton");
    text("ULTIMATE TAG", 89, 120);
    fill("gold");
    rect(98, 203, 200, 50);
    textSize(18);
    fill(rgb(255, 255, 255));
    text("Press SPACE to Start", 114, 240);
    if (keyWentDown("space")) {
      gameState = "select";
    }
    return;
  }
  if (gameState === "select") {
    background("black");
    fill("white");
    textSize(24);
    text("CHARACTER SELECT", 70, 50);
    textSize(16);
    textFont("Anton");
    text("P1: A = Blue  D = Green", 40, 120);
    text("P2: Left = Red  Right = Purple", 20, 160);
    if (keyWentDown("a")) {
      p1Skin = "blue";
    }
    if (keyWentDown("d")) {
      p1Skin = "green";
    }
    if (keyWentDown("left")) {
      p2Skin = "red";
    }
    if (keyWentDown("right")) {
      p2Skin = "purple";
    }
    fill(p1Skin);
    rect(90, 220, 50, 50);
    fill(p2Skin);
    rect(250, 220, 50, 50);
    fill("white");
    text("Press ENTER", 120, 330);
    if (keyWentDown("enter")) {
      player.shapeColor = p1Skin;
      enemy.shapeColor = p2Skin;
      gameTimer = 30;
      gameState = "play";
    }
    return;
  }
  if (gameState === "gameOver") {
    background("black");
    fill("gold");
    textSize(30);
    text(winner + " WINS!", 60, 170);
    fill("white");
    textSize(18);
    text("Press R to Restart", 100, 240);
    if (keyWentDown("r")) {
      p1Score = 0;
      p2Score = 0;
      player.x = 100;
      player.y = 200;
      enemy.x = 300;
      enemy.y = 200;
      playerIsIt = false;
      gameTimer = 30;
      gameState = "menu";
    }
    return;
  }
  
  background("black");
  
  if (gameTimer > 0) {
    gameTimer -= 1/60;
  } else {
    if (p1Score > p2Score) {
      winner = "PLAYER 1";
    } else if (p2Score > p1Score) {
      winner = "PLAYER 2";
    } else {
      winner = "NOBODY";
    }
    gameState = "gameOver";
  }

  if (keyDown("a")) {
    player.x -= playerSpeed;
  }
  if (keyDown("d")) {
    player.x += playerSpeed;
  }
  if (keyDown("w")) {
    player.y -= playerSpeed;
  }
  if (keyDown("s")) {
    player.y += playerSpeed;
  }
  if (keyDown("left")) {
    enemy.x -= enemySpeed;
  }
  if (keyDown("right")) {
    enemy.x += enemySpeed;
  }
  if (keyDown("up")) {
    enemy.y -= enemySpeed;
  }
  if (keyDown("down")) {
    enemy.y += enemySpeed;
  }
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  enemy.collide(wall1);
  enemy.collide(wall2);
  enemy.collide(wall3);
  if (player.isTouching(powerUp)) {
    playerSpeed = 7 ;
    powerUp.x = randomNumber(40, 360);
    powerUp.y = randomNumber(40, 360);
  }
  if (enemy.isTouching(powerUp)) {
    enemySpeed = 7;
    powerUp.x = randomNumber(40, 360);
    powerUp.y = randomNumber(40, 360);
  }
  if (player.isTouching(enemy)) {
    if (playerIsIt) {
      p1Score++;
      playerIsIt = false;
    } else {
      p2Score++;
      playerIsIt = true;
    }
    player.x = 100;
    player.y = 200;
    enemy.x = 300;
    enemy.y = 200;
  }
  if (p1Score >= 5) {
    winner = "PLAYER 1";
    gameState = "gameOver";
  }
  if (p2Score >= 5) {
    winner = "PLAYER 2";
    gameState = "gameOver";
  }
  player.x = constrain(player.x, 15, 385);
  player.y = constrain(player.y, 15, 385);
  enemy.x = constrain(enemy.x, 15, 385);
  enemy.y = constrain(enemy.y, 15, 385);
  drawSprites();
  World.frameRate = 60;
  fill("white");
  textSize(18);
  text("P1: " + p1Score, 20, 20);
  text("P2: " + p2Score, 320, 20);
  text("Time: " + Math.ceil(gameTimer), 160, 50);
  if (playerIsIt) {
    fill("red");
    text("PLAYER 1 IS IT", 120, 20);
  } else {
    fill("lime");
    text("PLAYER 2 IS IT", 120, 20);
  }
}

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
