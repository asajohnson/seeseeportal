

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f106c7dc-2553-49bc-8197-6a6ed8de0ff7","3fb4a1dd-8493-4fd8-b5a4-2687116cccd0","a1898124-3a3f-410f-a6b4-072ef41a4408","8a2fae3a-a63e-43d0-bf4a-cf0eef0bd903","81739802-335e-46a5-aa9c-1fde9b45a588","5bc850dd-5bff-4031-a911-2f59f7664d7e","03cbc4a3-1acc-4c98-a110-5ab0f5e7f674","4670aa3c-be35-4aab-8e0b-7196c2776cba","8b9c33b9-7865-4307-99ec-aa5a2acec13c","8592781b-9ad7-4cd3-bb82-71a214903f2b","5cacb941-461a-44c8-b437-a497145092c8","22f81204-1e56-4e6a-be55-df5d3c3b624d","2947c00d-539e-4564-bbac-8b81142a168f"],"propsByKey":{"f106c7dc-2553-49bc-8197-6a6ed8de0ff7":{"name":"sky","sourceUrl":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/f106c7dc-2553-49bc-8197-6a6ed8de0ff7.png","frameSize":{"x":550,"y":413},"frameCount":1,"looping":true,"frameDelay":4,"version":"mN.pmzHrcu3yDlgr3RkanwM9QMyT.hPF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":550,"y":413},"rootRelativePath":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/f106c7dc-2553-49bc-8197-6a6ed8de0ff7.png"},"3fb4a1dd-8493-4fd8-b5a4-2687116cccd0":{"name":"jacob","sourceUrl":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/3fb4a1dd-8493-4fd8-b5a4-2687116cccd0.png","frameSize":{"x":150,"y":124},"frameCount":1,"looping":true,"frameDelay":4,"version":"vMMH2X6hDBk7Ux5sfh_brqS6iMqH6yZl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":124},"rootRelativePath":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/3fb4a1dd-8493-4fd8-b5a4-2687116cccd0.png"},"a1898124-3a3f-410f-a6b4-072ef41a4408":{"name":"bird1","sourceUrl":null,"frameSize":{"x":220,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"NQyZIJPC1oPWDqdJ3u2sAs9tEWkK4dgn","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":398},"rootRelativePath":"assets/a1898124-3a3f-410f-a6b4-072ef41a4408.png"},"8a2fae3a-a63e-43d0-bf4a-cf0eef0bd903":{"name":"dude","sourceUrl":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png","frameSize":{"x":347,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Mz9t_vVZ_K7DL7e61UbY1ivgFlG0hkqh/category_fantasy/alien_04.png"},"81739802-335e-46a5-aa9c-1fde9b45a588":{"name":"dude1","sourceUrl":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png","frameSize":{"x":331,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6CfTmOl4M7ZK4NBT3yGSTvcGtqfnGwlL/category_fantasy/alien_05.png"},"5bc850dd-5bff-4031-a911-2f59f7664d7e":{"name":"bird2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ro3YeNVn..WJBs0V1m7l5zGdbNNhGc7_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5bc850dd-5bff-4031-a911-2f59f7664d7e.png"},"03cbc4a3-1acc-4c98-a110-5ab0f5e7f674":{"name":"bird3","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Odhpzc2NEj9XHGhhw4y._TydCAhT2BcT","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/03cbc4a3-1acc-4c98-a110-5ab0f5e7f674.png"},"4670aa3c-be35-4aab-8e0b-7196c2776cba":{"name":"bird4","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"wOjGEqliVTja0orHznO4FocbrDG.qhuB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/4670aa3c-be35-4aab-8e0b-7196c2776cba.png"},"8b9c33b9-7865-4307-99ec-aa5a2acec13c":{"name":"bird5","sourceUrl":null,"frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"t00nDcX7EaRAvBUjNYJooQjrcUVi65IO","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/8b9c33b9-7865-4307-99ec-aa5a2acec13c.png"},"8592781b-9ad7-4cd3-bb82-71a214903f2b":{"name":"coin1","sourceUrl":"assets/api/v1/animation-library/gamelab/0iK8MYuwfbHN77pZ3th1rZrQBnO72BXh/category_board_games_and_cards/alienBeige_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"0iK8MYuwfbHN77pZ3th1rZrQBnO72BXh","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0iK8MYuwfbHN77pZ3th1rZrQBnO72BXh/category_board_games_and_cards/alienBeige_badge.png"},"5cacb941-461a-44c8-b437-a497145092c8":{"name":"mc","sourceUrl":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/5cacb941-461a-44c8-b437-a497145092c8.png","frameSize":{"x":640,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"A60SUdqRrp58IpnwwL51m5y92hIwdLJl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":480},"rootRelativePath":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/5cacb941-461a-44c8-b437-a497145092c8.png"},"22f81204-1e56-4e6a-be55-df5d3c3b624d":{"name":"mad","sourceUrl":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/22f81204-1e56-4e6a-be55-df5d3c3b624d.png","frameSize":{"x":700,"y":368},"frameCount":1,"looping":true,"frameDelay":4,"version":"yx0e6nwsLq3BUuDfLWWnfnJKy1gMVGIa","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":368},"rootRelativePath":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/22f81204-1e56-4e6a-be55-df5d3c3b624d.png"},"2947c00d-539e-4564-bbac-8b81142a168f":{"name":"blimp","sourceUrl":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/2947c00d-539e-4564-bbac-8b81142a168f.png","frameSize":{"x":232,"y":391},"frameCount":1,"looping":true,"frameDelay":4,"version":"OV_9e9JzbNVmc5U6SwdlrJchmKRntV_E","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":391},"rootRelativePath":"assets/v3/animations/3c04f72c-f65f-440f-9e8c-9ef300a92a96/2947c00d-539e-4564-bbac-8b81142a168f.png"}}};
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

playSound("YARA-YARA-FUNK-(Slowed--Reverb)---SIGMA-GYM-PHONK-(1).mp3", false);
var score = 0;
var health = 100;

var sky = createSprite(200, 200);
sky.setAnimation("sky");

var mc = createSprite(200, 200);
mc.setAnimation("mc");
mc.visible = false;

var mad = createSprite(200, 200);
mad.setAnimation("mad");
mad.visible = false;

var bgTimer = 0;
var currentBG = 1;

var blimp = createSprite(120, 200);
blimp.setAnimation("blimp");
blimp.scale = 0.2;

var jacob = createSprite(324, 192);
jacob.setAnimation("jacob");
jacob.scale = 0.6;

var bird1 = createSprite(376, 41);
bird1.setAnimation("bird1");
bird1.scale = 0.1;
bird1.velocityX = -5;

var bird2 = createSprite(337, 321);
bird2.setAnimation("bird2");
bird2.scale = 0.1;
bird2.velocityX = -5;

var bird3 = createSprite(329, 192);
bird3.setAnimation("bird3");
bird3.scale = 0.1;
bird3.velocityX = -5;

var bird5 = createSprite(350, 70);
bird5.setAnimation("bird5");
bird5.scale = 0.1;
bird5.velocityX = -7;

var coin = createSprite(350, 200);
coin.setAnimation("coin1");
coin.scale = 0.5;
coin.velocityX = -5;


function draw() {

if (health > 0) {
    bgTimer++;
    if (bgTimer > 300) {
      bgTimer = 0;
      currentBG++;

      if (currentBG > 3) {
        currentBG = 1;
      }
    }
    sky.visible = false;
    mc.visible = false;
    mad.visible = false;
    if (currentBG == 1) {
      sky.visible = true;
    } else if (currentBG == 2) {
      mc.visible = true;
    } else {
      mad.visible = true;
    }

    bird1.velocityX = bird1.velocityX - 0.25; 

    if (keyDown("down")) blimp.y += 3;
    if (keyDown("up")) blimp.y -= 3;

    if (bird1.isTouching(blimp)) health -= 1;
    if (bird2.isTouching(blimp)) health -= 1;
    if (bird3.isTouching(blimp)) health -= 1;
    if (bird5.isTouching(blimp)) health -= 1;

    if (health < 0) health = 0;

    if (coin.isTouching(blimp)) {
      score++;
      coin.x = 500;
      coin.y = randomNumber(50, 350);
    }

    if (bird1.x < 0) {
      bird1.x = 500;
      bird1.y = randomNumber(40, 360); 
      bird1.velocityX = -5;            
    }
    if (bird2.x < 0) bird2.x = 500;
    if (bird3.x < 0) bird3.x = 500;
    if (bird5.x < 0) bird5.x = 500;
    if (coin.x < 0) coin.x = 500;

    drawSprites();

    fill("red");
    textSize(20);
    text("Score: " + score, 10, 30);

    fill("blue");
    text("Health: " + health, 10, 60);
  } else {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!", 40, 200);
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
