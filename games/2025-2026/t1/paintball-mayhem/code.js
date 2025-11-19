

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3dc1a1e7-fff9-4791-9b0d-be7c75c8eae5","b4094e9b-82c7-4f98-8ba6-6259c8f9f5c6","3f0e1e4d-50dd-49c4-a204-7bb9d530a471","eb58caea-71ed-4272-a371-dbcde8bbfe04","0073e932-5626-4cf6-b4a2-35ef07c5d35c","6581f94c-dd7a-4468-ab87-808b13b87045"],"propsByKey":{"3dc1a1e7-fff9-4791-9b0d-be7c75c8eae5":{"name":"Bullet2","sourceUrl":null,"frameSize":{"x":7,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"B58kG6QLUkCChwJeaBNzH37CNBp7PxJa","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":7},"rootRelativePath":"assets/3dc1a1e7-fff9-4791-9b0d-be7c75c8eae5.png"},"b4094e9b-82c7-4f98-8ba6-6259c8f9f5c6":{"name":"Bullet1","sourceUrl":null,"frameSize":{"x":7,"y":7},"frameCount":1,"looping":true,"frameDelay":12,"version":"lf8hUQDwVoGQg6u_JI1S5qy_ds4TYN2A","loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":7},"rootRelativePath":"assets/b4094e9b-82c7-4f98-8ba6-6259c8f9f5c6.png"},"3f0e1e4d-50dd-49c4-a204-7bb9d530a471":{"name":"player1","sourceUrl":null,"frameSize":{"x":55,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"_M3pT2IbMwqRSy9KCHUKG5qGBrNBf_ZY","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":42},"rootRelativePath":"assets/3f0e1e4d-50dd-49c4-a204-7bb9d530a471.png"},"eb58caea-71ed-4272-a371-dbcde8bbfe04":{"name":"player2","sourceUrl":null,"frameSize":{"x":58,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"bhsnwCkPeQBGI1SBT8n.EmAFV_wTNN02","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":42},"rootRelativePath":"assets/eb58caea-71ed-4272-a371-dbcde8bbfe04.png"},"0073e932-5626-4cf6-b4a2-35ef07c5d35c":{"name":"obsticale1","sourceUrl":null,"frameSize":{"x":34,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"__.7NO7GjnW2.lzIn0EzZRXdB5YvbttM","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":73},"rootRelativePath":"assets/0073e932-5626-4cf6-b4a2-35ef07c5d35c.png"},"6581f94c-dd7a-4468-ab87-808b13b87045":{"name":"obsticale2","sourceUrl":null,"frameSize":{"x":32,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"w09V1hlhhFHTq2jpI2cDlSouUhq7qTRt","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":33},"rootRelativePath":"assets/6581f94c-dd7a-4468-ab87-808b13b87045.png"}}};
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

var hp1 = 100;
var hp2 = 100;

var p1Cooldown = 0;
var p2Cooldown = 0;
var cooldownTime = 20;

var bullet1 = createSprite(-45, 200);
bullet1.setAnimation("Bullet1");
bullet1.scale = 1;
bullet1.visible = false;

var bullet2 = createSprite(-45, 200);
bullet2.setAnimation("Bullet2");
bullet2.scale = 1;
bullet2.visible = false;

var obsticale1 = createSprite(100, 40);
obsticale1.setAnimation("obsticale1");
obsticale1.scale = 1.3;
var obsticale2 = createSprite(300, 360);
obsticale2.setAnimation("obsticale1");
obsticale2.scale = 1.3;
var obsticale3 = createSprite(200, 200);
obsticale3.setAnimation("obsticale2");
obsticale3.scale = 2;
var obsticale4 = createSprite(100, 300);
obsticale4.setAnimation("obsticale2");
obsticale4.scale = 2;
var obsticale5 = createSprite(300, 100);
obsticale5.setAnimation("obsticale2");
obsticale5.scale = 2;

var player1 = createSprite(50, 50);
player1.setAnimation("player1");
player1.scale = 0.7;

var player2 = createSprite(350, 350);
player2.setAnimation("player2");
player2.scale = 0.7;


function shootbullet1() {
  if (keyDown("g") && p1Cooldown > cooldownTime) {
    p1Cooldown = 0; 
 
    bullet1.x = player1.x;
    bullet1.y = player1.y;
    bullet1.pointTo(player2.x, player2.y);
    bullet1.setSpeedAndDirection(6, bullet1.rotation);
    bullet1.visible = true;
  }
}

function shootbullet2() {
  if (keyDown("l") && p2Cooldown > cooldownTime) {
    p2Cooldown = 0; 
 
    bullet2.x = player2.x;
    bullet2.y = player2.y;
    bullet2.pointTo(player1.x, player1.y);
    bullet2.setSpeedAndDirection(6, bullet2.rotation);
    bullet2.visible = true;
  }
}


function collisions() {
  if (bullet1.isTouching(obsticale1) ||
      bullet1.isTouching(obsticale2) ||
      bullet1.isTouching(obsticale3) ||
      bullet1.isTouching(obsticale4) ||
      bullet1.isTouching(obsticale5)) {
 
  bullet1.visible = false;
  bullet1.x = 450;
  bullet1.y = 450;
  }
 
  if (bullet2.isTouching(obsticale1) ||
      bullet2.isTouching(obsticale2) ||
      bullet2.isTouching(obsticale3) ||
      bullet2.isTouching(obsticale4) ||
      bullet2.isTouching(obsticale5)) {
 
  bullet2.visible = false;
  bullet2.x = 450;
  bullet2.y = 450;
  }
 
  if (bullet1.isTouching(player2)) {
    bullet1.visible = false;
    bullet1.x = 450;
    bullet1.y = 450;
    hp2 = hp2 - 10;
  }
 
  if (bullet2.isTouching(player1)) {
    bullet2.visible = false;
    bullet2.x = 450;
    bullet2.y = 450;
    hp1 = hp1 - 10;
  }
 
  player1.collide(obsticale1);
  player1.collide(obsticale2);
  player1.collide(obsticale3);
  player1.collide(obsticale4);
  player1.collide(obsticale5);
 
  player2.collide(obsticale1);
  player2.collide(obsticale2);
  player2.collide(obsticale3);
  player2.collide(obsticale4);
  player2.collide(obsticale5);
}

function p1movement() {
  if (keyDown("w")) {
    player1.y -= 3;
  }
  if (keyDown("a")) {
    player1.x -= 3;
  }
  if (keyDown("s")) {
    player1.y += 3;
  }
  if (keyDown("d")) {
    player1.x += 3;
  }
}

function p2movement() {
  if (keyDown("up")) {
    player2.y -= 3;
  }
  if (keyDown("left")) {
    player2.x -= 3;
  }
  if (keyDown("down")) {
    player2.y += 3;
  }
  if (keyDown("right")) {
    player2.x += 3;
  }
}

function p1win() {
  if (0 >= hp2) {
    background("black");
    fill("green");
    textSize(30);
    text("Player1 Wins!", 100, 200);
  }
}
function p2win() {
if (0 >= hp1) {
    background("black");
    fill("green");
    textSize(30);
    text("Player2 Wins!", 100, 200);
  }
}
function HPBars() {
  // --- Player 1 HP Bar ---
  fill("red");
  rect(20, 10, 100, 10);     
  fill("lime");
  rect(20, 10, hp1, 10);     

  // --- Player 2 HP Bar ---
  fill("red");
  rect(280, 10, 100, 10);    
  fill("lime");
  rect(280, 10, hp2, 10);    
}


function draw() {
  background("gray");
 
  // Increase cooldown timers
  p1Cooldown++;
  p2Cooldown++;
 
  // Player rotation
  player1.pointTo(player2.x, player2.y);
  player2.pointTo(player1.x, player1.y);
 
  drawSprites();
  shootbullet1();
  shootbullet2();
  collisions();
  p1movement();
  p2movement();
  p1win();
  p2win();
  HPBars();
 
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
