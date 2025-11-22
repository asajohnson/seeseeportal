

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c2a054ec-d5b7-464e-9bef-73d611ce0bc6","0c3a08bc-5512-4819-987d-1a6cc0ea3163","6efcda5f-ad5d-411f-9cc6-63a077f33440","6b141e95-3531-4d8a-bd72-ee54f0f78394","ebc80769-7af9-4ba5-b3a7-6469ef42cdfe","09d35ca3-cbd9-44fc-b651-e92d2a413afc","cf8bd538-b949-4d5d-87fc-3b6741ef9b1e","1c5bdde7-5f1c-4dcd-a20a-558b638f4ec1"],"propsByKey":{"c2a054ec-d5b7-464e-9bef-73d611ce0bc6":{"name":"Ground","sourceUrl":null,"frameSize":{"x":100,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"NpIZuhWCR20QgGk5AXqGR.cgeYUFpvog","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":20},"rootRelativePath":"assets/c2a054ec-d5b7-464e-9bef-73d611ce0bc6.png"},"0c3a08bc-5512-4819-987d-1a6cc0ea3163":{"name":"Keypad","sourceUrl":null,"frameSize":{"x":35,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"xxPuV32qgsz38ajrJjy1aIMQNV96Lxh4","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":25},"rootRelativePath":"assets/0c3a08bc-5512-4819-987d-1a6cc0ea3163.png"},"6efcda5f-ad5d-411f-9cc6-63a077f33440":{"name":"Flag","sourceUrl":null,"frameSize":{"x":18,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"CFChP2s5_O4bkZLfK1t.txfjkZTSJNc5","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":41},"rootRelativePath":"assets/6efcda5f-ad5d-411f-9cc6-63a077f33440.png"},"6b141e95-3531-4d8a-bd72-ee54f0f78394":{"name":"Spike","sourceUrl":null,"frameSize":{"x":40,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"zdjDNbDj.rNGioHlEsB5wmOPI63mQ9YC","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":36},"rootRelativePath":"assets/6b141e95-3531-4d8a-bd72-ee54f0f78394.png"},"ebc80769-7af9-4ba5-b3a7-6469ef42cdfe":{"name":"Clown","sourceUrl":null,"frameSize":{"x":324,"y":184},"frameCount":1,"looping":true,"frameDelay":12,"version":"RZXF.fDWaWki.FxzINfr_UtjxTB.zkTu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":324,"y":184},"rootRelativePath":"assets/ebc80769-7af9-4ba5-b3a7-6469ef42cdfe.png"},"09d35ca3-cbd9-44fc-b651-e92d2a413afc":{"name":"PLTR","sourceUrl":null,"frameSize":{"x":8,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"YScnChjyFZG0nDc4aNzRqk91krLSMVQ8","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":88},"rootRelativePath":"assets/09d35ca3-cbd9-44fc-b651-e92d2a413afc.png"},"cf8bd538-b949-4d5d-87fc-3b6741ef9b1e":{"name":"Walk","sourceUrl":null,"frameSize":{"x":15,"y":17},"frameCount":6,"looping":true,"frameDelay":12,"version":"gqqxQJtbyEEY58hd5a3pet5yIQsfaO81","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":34},"rootRelativePath":"assets/cf8bd538-b949-4d5d-87fc-3b6741ef9b1e.png"},"1c5bdde7-5f1c-4dcd-a20a-558b638f4ec1":{"name":"Idle","sourceUrl":null,"frameSize":{"x":15,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"mKB1ZRo2XDQpSgkw.fv12Y5HIgXYpT8X","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":17},"rootRelativePath":"assets/1c5bdde7-5f1c-4dcd-a20a-558b638f4ec1.png"}}};
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

var Title = "title";
var clown = createSprite(200, 200);
clown.setAnimation("Clown");
clown.visible = false;
var sprite = createSprite(200, 100);
sprite.setAnimation("Idle");
sprite.scale = 3;
sprite.setCollider("rectangle");
var ground = createSprite(200, 380, 400, 40);
ground.setAnimation("Ground");
ground.scale = 4;
ground.setCollider("rectangle", 0, 0, ground.width, ground.height);
var Keypad = createSprite(300, 200);
Keypad.setAnimation("Keypad");
Keypad.scale = 1.5;
Keypad.visible = true;
var flag = createSprite(350, 300);
flag.setAnimation("Flag");
flag.scale = 2;
var currentAnim = "Idle";
var groundedBuffer = 0;
var GROUNDED_BUFFER_FRAMES = 4;
var holeY = 150;
var holeH = 60;
var wallSpeed = 3;
var pushForce = 2;
var wallTop = createSprite(430, 100, 40, 200);
var wallBottom = createSprite(430, 300, 40, 200);
wallTop.shapeColor = "black";
wallBottom.shapeColor = "black";
function resetWall() {
  wallTop.x = 440;
  wallBottom.x = 440;
  holeH = randomNumber(40, 120);
  holeY = randomNumber(40, 360 - holeH);
  wallTop.height = holeY;
  wallBottom.height = 400 - (holeY + holeH);
  wallBottom.y = holeY + holeH + wallBottom.height / 2;
}
resetWall();
function moveWalls() {
  wallTop.x -= wallSpeed;
  wallBottom.x -= wallSpeed;
  if (wallTop.x < -40) {
    resetWall();
  }
}
function wallPushPlayer() {
  if (sprite.isTouching(wallTop) || sprite.isTouching(wallBottom)) {
  sprite.x -= pushForce;
  }
  if (sprite.x < 0) {
  sprite.x = 50;
  sprite.y = 300;
  sprite.velocityX = 0;
  sprite.velocityY = 0;
  }
}
function draw() {
if (Title === "title") {
    background("orange");
    Keypad.visible = true;
    sprite.x = 100;
    sprite.y = 200;
    clown.visible = false;
    fill("black");
    textSize(40);
    textAlign(CENTER);
    text("LEVEL DEVIL", 200, 80);
    sprite.setAnimation("Idle");
    currentAnim = "Idle";
    wallTop.visible = false;
    wallBottom.visible = false;
    drawSprites();
    textSize(20);
    text("Press SPACE to Start", 200, 125);
    if (keyWentDown("space")) {
    Title = "play";
    Keypad.visible = false;
    sprite.x = 50;
    sprite.y = 300;
    }
    return;
  } else {
  wallTop.visible = true;
  wallBottom.visible = true;
}
background("orange");
sprite.velocityY += 0.7;
var moving = false;
if (keyDown("left")) {
sprite.velocityX -= 0.4;
sprite.mirrorX(-1);
moving = true;
}
if (keyDown("right")) {
sprite.velocityX += 0.4;
sprite.mirrorX(1);
moving = true;
}
var groundedNow = sprite.collide(ground);
if (groundedNow) groundedBuffer = GROUNDED_BUFFER_FRAMES;
else if (groundedBuffer > 0) groundedBuffer--;
var touchingGround = groundedBuffer > 0;
if (keyWentDown("up") && touchingGround) {
sprite.velocityY = -15;
groundedBuffer = 0;
}
sprite.velocityX *= 0.9;
sprite.velocityX = constrain(sprite.velocityX, -10, 10);
sprite.velocityY = constrain(sprite.velocityY, -17, 30);
var newAnim;
if (!touchingGround) newAnim = "Jump";
else if (moving) newAnim = "Walk";
else newAnim = "Idle";
if (newAnim !== currentAnim) {
  sprite.setAnimation("Walk");
  currentAnim = newAnim;
  }
moveWalls();
wallPushPlayer();
if (sprite.overlap(flag)) {
  clown.scale = 1.5;
  Title = "title";
}
if (sprite.x == -1) {
  Title = "title";
}
if (sprite.isTouching(wallBottom) || sprite.isTouching(wallTop)) {
  currentAnim = "Idle";
  sprite.velocityX = 0;
  sprite.velocityY = 0;
}
drawSprites();
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
