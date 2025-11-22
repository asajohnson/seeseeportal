

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["532c1b3b-13b7-48dc-a974-8c78eaf9d8a6","a2b395d2-2f68-4a3f-abca-4e1b78b2526b","96b539cd-0cb2-45db-9c27-6de24f012cea","2139a4d9-5455-48aa-9156-4fba44e74402","ddfbf1e7-d72b-4872-afd8-489206b6682a","015e9e51-0e69-45bf-8eae-abe40af2959d","41b36581-1c85-404e-9cd9-e3954c490419","a5fb4c73-cf05-4a1e-94e6-9a57d393235b","0c60fd4d-5788-4d9d-81d5-b0ad75a3ceeb","6bc31730-cbcc-4581-8eec-db1b3fbc78c6"],"propsByKey":{"532c1b3b-13b7-48dc-a974-8c78eaf9d8a6":{"name":"paddle","sourceUrl":null,"frameSize":{"x":8,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"EfBNf1BdLMG.ZSef4Hwmtve85GKQpAYj","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":55},"rootRelativePath":"assets/532c1b3b-13b7-48dc-a974-8c78eaf9d8a6.png"},"a2b395d2-2f68-4a3f-abca-4e1b78b2526b":{"name":"paddle2","sourceUrl":null,"frameSize":{"x":8,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"PG6oJf7x3yLLXAMulfq8nYZ48vDvQGdM","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":55},"rootRelativePath":"assets/a2b395d2-2f68-4a3f-abca-4e1b78b2526b.png"},"96b539cd-0cb2-45db-9c27-6de24f012cea":{"name":"ball","sourceUrl":null,"frameSize":{"x":40,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"4ps5WoHCOiSHfxlwoIvvG1STg7usViI0","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":41},"rootRelativePath":"assets/96b539cd-0cb2-45db-9c27-6de24f012cea.png"},"2139a4d9-5455-48aa-9156-4fba44e74402":{"name":"top","sourceUrl":null,"frameSize":{"x":98,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"PdP2juOgz3vMkURKdr3jTKbF4iLbpI3C","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":100},"rootRelativePath":"assets/2139a4d9-5455-48aa-9156-4fba44e74402.png"},"ddfbf1e7-d72b-4872-afd8-489206b6682a":{"name":"bottom","sourceUrl":null,"frameSize":{"x":98,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ba96M2LNHRQkBkzS72dV3h1WYBo1sHFI","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":100},"rootRelativePath":"assets/ddfbf1e7-d72b-4872-afd8-489206b6682a.png"},"015e9e51-0e69-45bf-8eae-abe40af2959d":{"name":"scoringareaL","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4yGYeL0c3vKU3_JzeCKwwT1uMa.qvaaC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/015e9e51-0e69-45bf-8eae-abe40af2959d.png"},"41b36581-1c85-404e-9cd9-e3954c490419":{"name":"scoringareaR","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9koZSYZlUDze2am4bv4CG3dh81uEkCeO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/41b36581-1c85-404e-9cd9-e3954c490419.png"},"a5fb4c73-cf05-4a1e-94e6-9a57d393235b":{"name":"dad","sourceUrl":null,"frameSize":{"x":309,"y":430},"frameCount":1,"looping":true,"frameDelay":12,"version":"xfJ.LleQ_zdwwUl.S4FXTXSePH4HjJmq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":309,"y":430},"rootRelativePath":"assets/a5fb4c73-cf05-4a1e-94e6-9a57d393235b.png"},"0c60fd4d-5788-4d9d-81d5-b0ad75a3ceeb":{"name":"67","sourceUrl":"assets/v3/animations/6D08DhBozc5a3HXYmAHiPyAQhiOM39KEJ9ePC78A6ww/0c60fd4d-5788-4d9d-81d5-b0ad75a3ceeb.png","frameSize":{"x":176,"y":265},"frameCount":1,"looping":true,"frameDelay":4,"version":"_5cso7LwrTU1pKh6fhksyhxWnfBlP7U1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":265},"rootRelativePath":"assets/v3/animations/6D08DhBozc5a3HXYmAHiPyAQhiOM39KEJ9ePC78A6ww/0c60fd4d-5788-4d9d-81d5-b0ad75a3ceeb.png"},"6bc31730-cbcc-4581-8eec-db1b3fbc78c6":{"name":"fluffy","sourceUrl":"assets/v3/animations/6D08DhBozc5a3HXYmAHiPyAQhiOM39KEJ9ePC78A6ww/6bc31730-cbcc-4581-8eec-db1b3fbc78c6.png","frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":4,"version":"G2yNVMRjbR5_8Sw3M9h69NDhPxyiaY3F","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/v3/animations/6D08DhBozc5a3HXYmAHiPyAQhiOM39KEJ9ePC78A6ww/6bc31730-cbcc-4581-8eec-db1b3fbc78c6.png"}}};
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
var scoreL = 0;
var scoreR = 0;

// Create your sprites here
var gameState = "play";
var left = createSprite(10, 200);
var right = createSprite(390, 200);
var ball = createSprite(200, 200);
var top = createSprite(200, 200);
var bottom = createSprite(200, 200);
var scoringareaL = createSprite(200, 200);
var scoringareaR = createSprite(200, 200);
left.setAnimation("paddle");
right.setAnimation("paddle2");
ball.setAnimation("ball");
top.setAnimation("top");
bottom.setAnimation("bottom");
scoringareaL.setAnimation("scoringareaL");
scoringareaR.setAnimation("scoringareaR");
ball.scale = 0.5;
left.bounciness = 1.05;
right.bounciness = 1.05;
ball.bounciness = 1;
top.bounciness = 1;
bottom.bounciness = 1;
top.scale = 4;
bottom.scale = 4;
scoringareaL.scale = 4;
scoringareaR.scale = 4;
scoringareaL.setCollider("rectangle", -50, 5, 2, 400);
scoringareaR.setCollider("rectangle", 50, 5, 2, 400);
top.setCollider("rectangle", 0, 50, 4, 400, 90);
bottom.setCollider("rectangle", 0, -50, 2, 400, 90);
function draw() {
  // draw background
  if (keyWentDown("6") && keyWentDown("7")) {
    ball.setAnimation("67");
    ball.scale = 0.2;
    var fluffy = createSprite(200, 200);
    fluffy.setAnimation("fluffy");
    fluffy.scale = 3;
  }
  background("black");
  if(gameState === "play") {
    drawSprites();
    score();
    textSize(20);
  fill("white");
  text("Score:" +scoreL, 320, 20);
  text("Score:" + scoreR, 10, 20);
  if (scoreL >= 10) {
    gameState = "win";
    
  }
    if (scoreR >= 10) {
      gameState = "win";
    }
    if (gameState=== "win") {
    ball.velocityX = 0;
    ball.velocityY = 0;
    }
  }
  if (keyWentDown("space")) {
    ball.velocityX = random(-5, 5);
    ball.velocityY = random(-5,5);
  }
  if (keyDown("w")) {
    if (left.y > left.height / 2) {
    left.y = left.y - 5;
  }
  }
  if (keyDown("s")) {
    if (left.y < 400 - left.height / 2) {
    left.y = left.y + 5;
  }
  }
  if (keyDown("up")) {
    if (right.y > right.height / 2) {
    right.y = right.y - 5;
  }
  }
  if (keyDown("down")) {
   if (right.y < 400 - right.height / 2) {
    right.y = right.y + 5;
  }
  }
  ball.bounceOff(top);
  ball.bounceOff(bottom);
  ball.bounceOff(left);
  ball.bounceOff(right);
  drawSprites();
}

// Create your functions here
function score() {
  if (ball.isTouching(scoringareaL)) {
    scoreL = scoreL + 1;
    ball.visible = false;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = random(-5, 5);
    ball.velocityY = random(-5,5);
    ball.visible = true
  }
  if (ball.isTouching(scoringareaR)) {
    scoreR = scoreR + 1;
    ball.visible = false;
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = random(-5, 5);
    ball.velocityY = random(-5,5);
    ball.visible = true
  }
}
scoringareaL.debug = false;
scoringareaR.debug = false;
top.debug = false;
bottom.debug = false;

var speedX = random(-5, -2);
if (random(1) > 0.5) {
  speedX = random(2, 5); 
}

var speedY = random(-5, -2);
if (random(1) > 0.5) {
  speedY = random(2, 5);
}


ball.velocityX = speedX;
ball.velocityY = speedY;

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
