

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5aa5acca-4a56-40da-adb2-82030cc4f9bd","f28362eb-6048-469b-8ea1-be7896351e65","12c39ccb-197b-4c34-b359-b69914e1a650","ffb64fa3-01cc-4b05-a5b9-38f2132d5da1"],"propsByKey":{"5aa5acca-4a56-40da-adb2-82030cc4f9bd":{"name":"ball","sourceUrl":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/5aa5acca-4a56-40da-adb2-82030cc4f9bd.png","frameSize":{"x":310,"y":163},"frameCount":1,"looping":true,"frameDelay":4,"version":"b6TSKaBNNjtfjfYgy1NGTr7zJp0XLl9t","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":163},"rootRelativePath":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/5aa5acca-4a56-40da-adb2-82030cc4f9bd.png"},"f28362eb-6048-469b-8ea1-be7896351e65":{"name":"spike","sourceUrl":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/f28362eb-6048-469b-8ea1-be7896351e65.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"moJcDRpPzr.9UdQ_q4Aclk7Zg2piiQma","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/f28362eb-6048-469b-8ea1-be7896351e65.png"},"12c39ccb-197b-4c34-b359-b69914e1a650":{"name":"wrong spike","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"tMSSIDUQBpHgCWnUOCRaj5aBU1IqOV3J","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/12c39ccb-197b-4c34-b359-b69914e1a650.png"},"ffb64fa3-01cc-4b05-a5b9-38f2132d5da1":{"name":"Portal","sourceUrl":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/ffb64fa3-01cc-4b05-a5b9-38f2132d5da1.png","frameSize":{"x":153,"y":306},"frameCount":1,"looping":true,"frameDelay":4,"version":"khomJg2L262uMX.T8nmgTUZcxZ1lXzRc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":153,"y":306},"rootRelativePath":"assets/v3/animations/6paaUGLc5oKshgwm_qJI97LCNbCOLiv5mZEfezWSPRY/ffb64fa3-01cc-4b05-a5b9-38f2132d5da1.png"}}};
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

//all the sprites the game has
var portal = createSprite(400, 250);
portal.setAnimation("Portal");
portal.scale = 0.5;
var ball = createSprite(30, 275);
ball.setAnimation("ball");
ball.scale = 0.40;
ball.rotation = 10;
ball.rotationSpeed = 10;
var spike = createSprite(200, 275);
spike.setAnimation("spike");
spike.scale = 0.75;
// Create your variables here
var spike2 = createSprite(250, 275);
spike2.setAnimation("spike");
spike2.scale = 0.75;
// Create your sprites here
var spike3 = createSprite(350, 25);
spike3.setAnimation("wrong spike");
spike3.scale = 0.75;
var spike4 = createSprite(75, 25);
spike4.setAnimation("wrong spike");
ball.velocityX = 5;
function draw() {
  spike4.scale = 0.75;
  // draw background
  x = 1;
  //game controls
  if (keyDown("up")) {
    ball.y = 25;
  }
  if (keyDown("down")) {
    ball.y = 275;
  }
  if (ball.x >= 400) {
    ball.x = 25;
    ball.velocityX = ball.velocityX + 2;
  }
  text("score" +1, 185, 25);
  var x;
  background("green");
  fill("black");
  rect(0, 300, 400, 400);
  //death screens 
  if (ball.isTouching(spike)) {
    ball.velocityX = 0;
    ball.rotationSpeed = 0;
    background("red");
    textSize(30);
    text("you lose :)", 200, 200);
    playSound("assets/category_alerts/cartoon_negative_bling.mp3", false);
  }
  if (ball.isTouching(spike2)) {
    ball.velocityX = 0;
    ball.rotationSpeed = 0;
    background("white");
    textSize(30);
    text("you lose :)", 200, 200);
    
  }
 
  if (ball.isTouching(spike3)) {
    ball.rotationSpeed = 0;
    ball.velocityX = 0;
    background("blue");
    textSize(30);
    text("you lose :)", 200, 200);
  }
 
  if (ball.isTouching(spike4)) {
    background("gray");
    ball.velocityX = 0;
    ball.rotationSpeed = 0;
    textSize(30);
    text("you lose :)", 200, 200);
  }
  // update sprites
  //hitboxs
 spike.setCollider("rectangle", 10, 10, 25, 25);
  spike2.setCollider("rectangle", 10, 10, 25, 25);
  spike4.setCollider("rectangle", 10, 10, 25, 25);
  spike3.setCollider("rectangle", 10, 10, 25, 25);
  ball.setCollider("rectangle", 10, 10, 10, 10);
  drawSprites();
  
  
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
