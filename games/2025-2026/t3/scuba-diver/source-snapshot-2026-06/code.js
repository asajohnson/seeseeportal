

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d7ddeeb2-7b2f-456b-8906-81a686698795","1aa97ca8-51ca-411e-a3ae-5521477b1fb4","87e237b8-c8b8-4d8f-a2e5-f4f45c9e4284","59f6e0d9-bba0-46a3-840e-4eadfa12bcb4","f4250941-062a-4e2c-855f-47ea3f63f4b6","ff3e44d0-26cc-495a-b6e9-247604c26f9c","0a629833-572b-46f4-8f29-037ee91baf2d","1d211493-96dd-43f4-9bb4-3663f60ccddf","5d81b021-67ab-4890-8047-83d489b3e691","6701cf8a-7962-43f9-90bb-a5755073c033"],"propsByKey":{"d7ddeeb2-7b2f-456b-8906-81a686698795":{"name":"fly_bot","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"1aa97ca8-51ca-411e-a3ae-5521477b1fb4":{"name":"","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"87e237b8-c8b8-4d8f-a2e5-f4f45c9e4284":{"name":"player7878","sourceUrl":null,"frameSize":{"x":266,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"1296BceKY6J4Gla3.SCGfHTftDgThiDC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":190},"rootRelativePath":"assets/87e237b8-c8b8-4d8f-a2e5-f4f45c9e4284.png"},"59f6e0d9-bba0-46a3-840e-4eadfa12bcb4":{"name":"coin4656","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"OMC8weDm8S0EWeV71.z333S6SjWjfdIm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/59f6e0d9-bba0-46a3-840e-4eadfa12bcb4.png"},"f4250941-062a-4e2c-855f-47ea3f63f4b6":{"name":"rock1","sourceUrl":null,"frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":12,"version":"bzQp6.mUKWEvKIqZEsPQPQDs5M74sWsD","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/f4250941-062a-4e2c-855f-47ea3f63f4b6.png"},"ff3e44d0-26cc-495a-b6e9-247604c26f9c":{"name":"878","sourceUrl":null,"frameSize":{"x":337,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"axY.V0RnCwewX2buEGCwluqiZt0cJHCg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":337,"y":150},"rootRelativePath":"assets/ff3e44d0-26cc-495a-b6e9-247604c26f9c.png"},"0a629833-572b-46f4-8f29-037ee91baf2d":{"name":"rock2","sourceUrl":null,"frameSize":{"x":109,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":".O5b8IozHEOBEY88.PkjQnWwTy4Ehacu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":109,"y":143},"rootRelativePath":"assets/0a629833-572b-46f4-8f29-037ee91baf2d.png"},"1d211493-96dd-43f4-9bb4-3663f60ccddf":{"name":"coin","sourceUrl":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/1d211493-96dd-43f4-9bb4-3663f60ccddf.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"AfHILt1Qj.Vu9hq3GNnrhlH4IYgOS0r3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/1d211493-96dd-43f4-9bb4-3663f60ccddf.png"},"5d81b021-67ab-4890-8047-83d489b3e691":{"name":"images.png_1","sourceUrl":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/5d81b021-67ab-4890-8047-83d489b3e691.png","frameSize":{"x":266,"y":190},"frameCount":1,"looping":true,"frameDelay":4,"version":"yEvF4cTdMt0K1FQU2x31W.BirUVfj9FR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":190},"rootRelativePath":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/5d81b021-67ab-4890-8047-83d489b3e691.png"},"6701cf8a-7962-43f9-90bb-a5755073c033":{"name":"player","sourceUrl":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/6701cf8a-7962-43f9-90bb-a5755073c033.png","frameSize":{"x":266,"y":190},"frameCount":1,"looping":true,"frameDelay":4,"version":"WVGNHaO4jHL7tYIEUSJUeZK31Va8mCGy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":190},"rootRelativePath":"assets/v3/animations/f9dc0f3c-719b-4c86-96c6-d3f5eea4e2f4/6701cf8a-7962-43f9-90bb-a5755073c033.png"}}};
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

playSound("assets/YARA-YARA-FUNK.mp3", true);

var gameStarted = false;
var score = 0;
var health = 100;

var player = createSprite(200, 100);
player.setAnimation("player");
player.scale = 0.2;

var coin = createSprite(200, 200);
coin.setAnimation("coin");
coin.scale = 0.5;

var rock1 = createSprite(0, 200);
rock1.setAnimation("rock1");
rock1.scale = 0.5;
rock1.velocityX = 4;

var rock2 = createSprite(100, 0);
rock2.setAnimation("rock2");
rock2.scale = 0.5;
rock2.velocityY = 5;

function draw() {

if (gameStarted === false) {
    background("lightblue");

    fill("black");
    textSize(25);
    text("Use Arrow Keys to Move", 40, 150);

    textSize(20);
    text("Press SPACE to Start", 60, 220);

    if (keyDown("space")) {
      gameStarted = true;
    }

    drawSprites();
    return;
  }
if (rock1.isTouching(player)) {
  health = health - 1;
}
if (rock2.isTouching(player)) {
  health = health - 1;
}

background("lightblue");

if (keyDown("up")) {
    player.y -= 4;
  }
if (keyDown("down")) {
    player.y += 4;
  }
if (keyDown("left")) {
    player.x -= 4;
  }
if (keyDown("right")) {
    player.x += 4;
  }

if (player.isTouching(coin)) {
    score += 2;
    coin.x = randomNumber(50, 350);
    coin.y = randomNumber(50, 350);
  }

if (rock1.x > 450) {
    rock1.x = 0;
    rock1.y = randomNumber(50, 350);
  }

if (rock2.y > 450) {
    rock2.y = 0;
    rock2.x = randomNumber(50, 350);
  }

if (rock1.isTouching(player)) {
    rock1.displace(player);
  }
if (rock2.isTouching(player)) {
  rock2.displace(player);
}

if (player.x < 0 || player.x > 400 || player.y < 0 || player.y > 400 || health <= 0) {
    background("black");
    fill("red");
    textSize(40);
    text("Game Over", 80, 200);
  }

fill("black");
textSize(20);
text("Score: " + score, 10, 20);
fill("black");
textSize(20);
text("health: " + health, 300, 20);

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
