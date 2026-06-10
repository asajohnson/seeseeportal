

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["85d7713e-29b8-45da-9d9b-15c3c18302a3","1d3c2efb-018e-4127-b31a-ed3b4cc6e28e","8097bf77-97c3-4b02-bb6d-4539ddbe2162","066425ee-f394-4745-a6fd-e8e296337b93","8c61ed47-462d-4589-ad10-ac6b0b947874","9d86e435-8135-498b-b950-224218b21297"],"propsByKey":{"85d7713e-29b8-45da-9d9b-15c3c18302a3":{"name":"Jimmyjonathanthythird","sourceUrl":null,"frameSize":{"x":363,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"GTwJOVSWfrNe5g_MexfFAUifu7N4qC_O","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":363,"y":237},"rootRelativePath":"assets/85d7713e-29b8-45da-9d9b-15c3c18302a3.png"},"1d3c2efb-018e-4127-b31a-ed3b4cc6e28e":{"name":"Billybobthybillionth","sourceUrl":null,"frameSize":{"x":363,"y":237},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ttc8R1QTU4jv91OmD4NojN7q9DmQBuio","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":363,"y":237},"rootRelativePath":"assets/1d3c2efb-018e-4127-b31a-ed3b4cc6e28e.png"},"8097bf77-97c3-4b02-bb6d-4539ddbe2162":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":42,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"U0fXDSOONk8zfxqcxhSSuu.lgVU1by0J","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":60},"rootRelativePath":"assets/8097bf77-97c3-4b02-bb6d-4539ddbe2162.png"},"066425ee-f394-4745-a6fd-e8e296337b93":{"name":"crate","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"DRD6TM2jXy2vEzWb9RDJlQhrWWMdsZ.R","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/066425ee-f394-4745-a6fd-e8e296337b93.png"},"8c61ed47-462d-4589-ad10-ac6b0b947874":{"name":"long crate","sourceUrl":null,"frameSize":{"x":100,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"bughhJxIiMFxJiDgMQW9KCnFP_QX66Px","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8c61ed47-462d-4589-ad10-ac6b0b947874.png"},"9d86e435-8135-498b-b950-224218b21297":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"sHCg_s8gutyYkwHGUTlaMtorkfPwyhSw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9d86e435-8135-498b-b950-224218b21297.png"}}};
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

playSound("assets/CALL-of-DUTY-Black-Ops-Rooftops-Remix-deleted-verse.mp3", true);
var bg = createSprite(200, 200, 400, 400);
bg.setAnimation("background");

var crate1 = createSprite(100, 100, 100, 100);
crate1.setAnimation("crate");
crate1.rotation = 284;
crate1.scale = 0.8;

var crate2 = createSprite(300, 325, 100, 100);
crate2.setAnimation("crate");
crate2.rotation = 52;
crate2.scale = 0.7

var crate3 = createSprite(150, 300, 100, 100);
crate3.setAnimation("long crate");
crate3.rotation = 183;
crate3.scale = 0.8;

var crate4 = createSprite(275, 75, 100, 100)
crate4.setAnimation("long crate");
crate4.rotation = 0;
crate4.scale = 0.8;


var player1 = createSprite(325, 125);
player1.setAnimation("Jimmyjonathanthythird");
player1.scale = 0.15;
player1.rotation = 180

var player2 = createSprite(50, 250);
player2.setAnimation("Billybobthybillionth");
player2.scale = 0.15;

var bullet1 = createSprite(-100, -100, 8, 8);
bullet1.setAnimation("animation_1");
bullet1.visible = false;
bullet1.scale = 0.1;

var bullet2 = createSprite(-100, -100, 8, 8);
bullet2.setAnimation("animation_1");
bullet2.visible = false;
bullet2.scale = 0.1;

var health1 = 7;
var health2 = 7;

var passedMenu = false;
var gameEnded = false;

function draw() {

  if (!passedMenu) {
    menuScreen();
    return;
  }

  if (gameEnded) {
    gameOver();
    return;
  }

  if (keyDown("left")) {
    player1.rotation -= 5;
  }

  if (keyDown("right")) {
    player1.rotation += 5;
  }

  if (keyDown("up")) {
    player1.setSpeedAndDirection(3, player1.rotation);
  } else if (keyDown("down")) {
    player1.setSpeedAndDirection(-3, player1.rotation);
  } else {
    player1.velocityX = 0;
    player1.velocityY = 0;
  }

  if (keyDown("a")) {
    player2.rotation -= 5;
  }

  if (keyDown("d")) {
    player2.rotation += 5;
  }

  if (keyDown("w")) {
    player2.setSpeedAndDirection(3, player2.rotation);
  } else if (keyDown("s")) {
    player2.setSpeedAndDirection(-3, player2.rotation);
  } else {
    player2.velocityX = 0;
    player2.velocityY = 0;
  }

  if (keyWentDown("l") && bullet1.visible == false) {
    var angle1 = player1.rotation * Math.PI / 180;

    var forward1 = 30;
    var offsetY1 = 10;

    bullet1.x =
      player1.x +
      forward1 * Math.cos(angle1) +
      offsetY1 * Math.cos(angle1 + Math.PI / 2);

    bullet1.y =
      player1.y +
      forward1 * Math.sin(angle1) +
      offsetY1 * Math.sin(angle1 + Math.PI / 2);

    bullet1.rotation = player1.rotation + 90;
    bullet1.visible = true;
    bullet1.setSpeedAndDirection(10, player1.rotation);
  }

  if (keyWentDown("f") && bullet2.visible == false) {
    var angle2 = player2.rotation * Math.PI / 180;

    var forward2 = 30;
    var offsetY2 = 10;

    bullet2.x =
      player2.x +
      forward2 * Math.cos(angle2) +
      offsetY2 * Math.cos(angle2 + Math.PI / 2);

    bullet2.y =
      player2.y +
      forward2 * Math.sin(angle2) +
      offsetY2 * Math.sin(angle2 + Math.PI / 2);

    bullet2.rotation = player2.rotation + 90;
    bullet2.visible = true;
    bullet2.setSpeedAndDirection(10, player2.rotation);
  }

  if (bullet1.visible && bullet1.x < 0) resetBullet1();
  if (bullet1.visible && bullet1.x > 400) resetBullet1();
  if (bullet1.visible && bullet1.y < 0) resetBullet1();
  if (bullet1.visible && bullet1.y > 400) resetBullet1();

  if (bullet2.visible && bullet2.x < 0) resetBullet2();
  if (bullet2.visible && bullet2.x > 400) resetBullet2();
  if (bullet2.visible && bullet2.y < 0) resetBullet2();
  if (bullet2.visible && bullet2.y > 400) resetBullet2();
  
  if (player1.x < 20) {
    player1.x = 20;
  }
  
  if (player1.x > 380) {
    player1.x = 380;
  }
  
  if (player1.y < 20) {
    player1.y = 20;
  }
  
  if (player1.y > 380) {
    player1.y = 380;
  }
  
  if (player2.x < 20) {
    player2.x = 20;
  }
  
  if (player2.x > 380) {
    player2.x = 380;
  }
  
  if (player2.y < 20) {
    player2.y = 20;
  }
  
  if (player2.y > 380) {
    player2.y = 380;
}
  
  handleCollisions();
  checkLife();

  drawSprites();

  fill("white");
  textSize(15);
  textAlign(LEFT);
  text("P1 Health: " + health1, 10, 20);
  text("P2 Health: " + health2, 10, 40);
}

function menuScreen() {
  background("black");

  fill("white");
  textAlign(CENTER);

  textSize(28);
  text("Dual Strike", 200, 50);

  textSize(16);

  text("PLAYER 1", 100, 100);
  text("← → Rotate", 100, 130);
  text("↑ ↓ Move", 100, 150);
  text("L Shoot", 100, 170);

  text("PLAYER 2", 300, 100);
  text("A D Rotate", 300, 130);
  text("W S Move", 300, 150);
  text("F Shoot", 300, 170);

  fill("yellow");
  textSize(20);
  text("Press ENTER to Start", 200, 250);

  fill("white");
  textSize(14);

  if (keyWentDown("enter")) {
    passedMenu = true;
  }
}

function gameOver() {
  background("black");

  fill("red");
  textAlign(CENTER);
  textSize(30);

  if (health1 <= 0) {
    text("PLAYER 2 WINS!", 200, 180);
  }

  if (health2 <= 0) {
    text("PLAYER 1 WINS!", 200, 180);
  }

  fill("white");
  textSize(18);
  text("R to play again", 200, 230);

  if (keyWentDown("r")) {
    resetGame();
  }
}

function checkLife() {
  if (health1 <= 0 || health2 <= 0) {
    gameEnded = true;
  }
}

function handleCollisions() {
  if (bullet1.isTouching(player2)) {
    health2 -= 1;
    resetBullet1();
  }

  if (bullet2.isTouching(player1)) {
    health1 -= 1;
    resetBullet2();
  }

  player1.collide(crate1);
  player1.collide(crate2);
  player1.collide(crate3);
  player1.collide(crate4);


  player2.collide(crate1);
  player2.collide(crate2);
  player2.collide(crate3);
  player2.collide(crate4);
  
  if (bullet1.isTouching(crate1)){
    resetBullet1()
  }
  
  if (bullet1.isTouching(crate2)){
    resetBullet1()
  }
  
  if (bullet1.isTouching(crate3)){
    resetBullet1()
  }
  
  if (bullet1.isTouching(crate4)){
    resetBullet1()
  }
  
  if (bullet2.isTouching(crate1)){
    resetBullet2()
  }
  
  if (bullet2.isTouching(crate2)){
    resetBullet2()
  }
  
  if (bullet2.isTouching(crate3)){
    resetBullet2()
  }
  
  if (bullet2.isTouching(crate4)){
    resetBullet2()
  }
  
}

function resetBullet1() {
  bullet1.visible = false;
  bullet1.velocityX = 0;
  bullet1.velocityY = 0;
  bullet1.x = -100;
  bullet1.y = -100;
}

function resetBullet2() {
  bullet2.visible = false;
  bullet2.velocityX = 0;
  bullet2.velocityY = 0;
  bullet2.x = -100;
  bullet2.y = -100;
}

function resetGame() {
  player1.x = 325;
  player1.y = 125;
  player1.rotation = 180;
  player1.velocityX = 0;
  player1.velocityY = 0;

  player2.x = 50;
  player2.y = 250;
  player2.rotation = 0;
  player2.velocityX = 0;
  player2.velocityY = 0;

  health1 = 5;
  health2 = 5;

  resetBullet1();
  resetBullet2();

  gameEnded = false;
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
