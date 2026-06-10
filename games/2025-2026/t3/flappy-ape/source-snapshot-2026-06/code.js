

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f407e1b3-3173-4805-81de-349f0e65abd7","91e79694-ef2c-437d-aa62-4571713c8da4","132638f9-8324-41b1-a3e1-e1e43c652297"],"propsByKey":{"f407e1b3-3173-4805-81de-349f0e65abd7":{"name":"rock","sourceUrl":null,"frameSize":{"x":71,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"1C5OuE.1DBhOWbSb9j_kVxyNgP_YBaqh","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":75},"rootRelativePath":"assets/f407e1b3-3173-4805-81de-349f0e65abd7.png"},"91e79694-ef2c-437d-aa62-4571713c8da4":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/3gV6ql1CjwZaa8v4FuGTP_q5sKpCnhpl/category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"3gV6ql1CjwZaa8v4FuGTP_q5sKpCnhpl","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gV6ql1CjwZaa8v4FuGTP_q5sKpCnhpl/category_animals/fly.png"},"132638f9-8324-41b1-a3e1-e1e43c652297":{"name":"dinosaur","sourceUrl":null,"frameSize":{"x":689,"y":387},"frameCount":2,"looping":true,"frameDelay":12,"version":"pvET4Y4X7yuKq_O5GbMUzD.GTZHU26K1","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":689,"y":774},"rootRelativePath":"assets/132638f9-8324-41b1-a3e1-e1e43c652297.png"}}};
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

var player = createSprite(200, 200);
player.setAnimation("dinosaur");
player.scale = 0.15;

player.velocityY = 0;
var gravity = 1;

var coin = createSprite(-200, 200);
coin.setAnimation("coin");

var score = 0;

var gameState = "start";

var rock = createSprite(-200, 200);
rock.setAnimation("rock");
rock.setCollider("circle", 0, 0, 20);

var rock2 = createSprite(-300, 245);
rock2.setAnimation("rock");
rock2.setCollider("circle", 0, 0, 20);

var rock3 = createSprite(-400, 205);
rock3.setAnimation("rock");
rock3.setCollider("circle", 0, 0, 20);

function draw() {


 if (gameState === "start") {

   background("lightblue");
 

   fill("darkgreen");

   textSize(28);

   text("Flappy Ape", 124, 80);
 

   fill("black");

   textSize(18);

   text("Controls:", 145, 130);
 

   text("Up Arrow = Jump", 105, 170);

   text("Down Arrow = Move Down", 75, 195);

   text("Left Arrow = Move Left", 80, 220);

   text("Right Arrow = Move Right", 75, 245);
 

   text("Collect coins", 130, 290);

   text("Avoid the rocks", 115, 315);
 

   fill("red");

   textSize(24);

   text("Press SPACE to Start", 70, 370);
 

   if (keyDown("space")) {

     gameState = "play";

   }
 

   return;

 }


 if (gameState === "gameOver") {

   background("black");
 

   fill("lime");

   textSize(50);

   text("Game Over!", 50, 180);
 

   fill("white");

   textSize(25);

   text("Final Score: " + score, 95, 240);
 

   return;

 }


 background("lightblue");


 player.velocityY += gravity;


 if (keyDown("up")) {

   player.velocityY = -10;

 }


 if (keyDown("down")) {

   player.velocityY = 5;

 }


 if (keyDown("left")) {

   player.x -= 8;

 }


 if (keyDown("right")) {

   player.x += 8;

 }


 if (player.y > 380) {

   player.y = 380;

   player.velocityY = 0;

 }


 rock.velocityX = 5;

 rock2.velocityX = 6;

 rock3.velocityX = 7;

 coin.velocityX = 4;


 if (rock.x > 450) {

   rock.x = randomNumber(-200, -50);

   rock.y = randomNumber(0, 400);

 }


 if (rock2.x > 450) {

   rock2.x = randomNumber(-300, -100);

   rock2.y = randomNumber(0, 400);

 }


 if (rock3.x > 450) {

   rock3.x = randomNumber(-400, -150);

   rock3.y = randomNumber(0, 400);

 }


 if (coin.x > 450) {

   coin.x = randomNumber(-200, -50);

   coin.y = randomNumber(0, 400);

 }


 fill("black");

 textSize(20);

 text("Score: " + score, 10, 30);


 if (player.isTouching(coin)) {

   score++;

   coin.x = randomNumber(-200, -50);

   coin.y = randomNumber(0, 400);

 }


 if (player.x < 0) {

   player.x = 0;

 }


 if (player.x > 400) {

   player.x = 400;

 }


 if (player.y < 0) {

   player.y = 0;

 }


 if (player.y > 400) {

   player.y = 400;

 }


 handleCollisions();

 drawSprites();
}

function handleCollisions() {
  if (
    player.isTouching(rock) ||
    player.isTouching(rock2) ||
    player.isTouching(rock3)
  ) {
    gameState = "gameOver";
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
