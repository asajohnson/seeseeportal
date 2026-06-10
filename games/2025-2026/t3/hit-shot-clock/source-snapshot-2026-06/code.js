

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ea939c57-fbaa-4525-8d8e-f53c3dfaae31","b02cde3e-71b7-49d1-8022-6b8b4305c645","e2d8bf4e-825f-4b46-a51d-5204ac628320","da97e049-0f2b-46e6-87af-3d840dd73378","f6ebdbf7-ea71-436e-9b8f-b2f5fa50d07c","c7a56692-2887-4c01-a6b3-78f52e293905","1cabf42e-25ec-4602-83d2-1e8f179ca785"],"propsByKey":{"ea939c57-fbaa-4525-8d8e-f53c3dfaae31":{"name":"gray_robot_3_1","sourceUrl":null,"frameSize":{"x":480,"y":847},"frameCount":1,"looping":true,"frameDelay":12,"version":"J9J5SvbOXaSZerhjwhGLGPMc4sYyBmhX","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":847},"rootRelativePath":"assets/ea939c57-fbaa-4525-8d8e-f53c3dfaae31.png"},"b02cde3e-71b7-49d1-8022-6b8b4305c645":{"name":"kid_30_side_2","sourceUrl":null,"frameSize":{"x":204,"y":343},"frameCount":1,"looping":true,"frameDelay":12,"version":"_Rxeib3R2nQHXErSDAVXVVy41Blu.QGM","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":343},"rootRelativePath":"assets/b02cde3e-71b7-49d1-8022-6b8b4305c645.png"},"e2d8bf4e-825f-4b46-a51d-5204ac628320":{"name":"sports_basketballhalf2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh/category_backgrounds/sports_basketballhalf2.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4cK4OL0TYp17v4XpNg9ICEQ_SgSA7nCh/category_backgrounds/sports_basketballhalf2.png"},"da97e049-0f2b-46e6-87af-3d840dd73378":{"name":"images (1).jpg_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":".JkWBvS_ZRceHt_FMSDhlrvZDHA7VUgp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/da97e049-0f2b-46e6-87af-3d840dd73378.png"},"f6ebdbf7-ea71-436e-9b8f-b2f5fa50d07c":{"name":"gpt-image-2_Make_a_small_victory_screen_of_a_basketball_game_that_says_Player_1_wins_and_is_-0.jpg_1","sourceUrl":null,"frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":12,"version":"OMIifyeBFb5OrZpXgcKFlqCPpmhWGDPf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/f6ebdbf7-ea71-436e-9b8f-b2f5fa50d07c.png"},"c7a56692-2887-4c01-a6b3-78f52e293905":{"name":"gpt-image-2_Make_a_small_victory_screen_of_a_basketball_game_that_says_Player_1_wins_and_is_-0.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":1024,"y":1024},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nt_dbUeylxglc_gcrm_bV4YnfryHmaGK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/c7a56692-2887-4c01-a6b3-78f52e293905.png"},"1cabf42e-25ec-4602-83d2-1e8f179ca785":{"name":"unnamed.png_1","sourceUrl":"assets/v3/animations/7f906d19-0719-43d3-9597-5d1662b399d8/1cabf42e-25ec-4602-83d2-1e8f179ca785.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"kQhYMV946PVxHWRN_FgoOE0ypJQfLWRG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/7f906d19-0719-43d3-9597-5d1662b399d8/1cabf42e-25ec-4602-83d2-1e8f179ca785.png"}}};
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

var gameState = "instructions";
var winner = "";
var victory = null;
var back = createSprite(200, 200);
back.setAnimation("sports_basketballhalf2_1");
var bonus = createSprite(200, 200);
bonus.setAnimation("images (1).jpg_1");
bonus.scale = .2;
var drew = createSprite(50, 200);
drew.setAnimation("kid_30_side_2");
drew.scale = .3;
var bot = createSprite(350, 200);
bot.setAnimation("gray_robot_3_1");
bot.scale = 0.13;
var clock = createSprite(200, 200);
clock.setAnimation("unnamed.png_1");
clock.scale = .1;
clock.velocityX = 7;
clock.velocityY = 4;
bonus.velocityX = 5;
bonus.velocityY = 2;
var player1Score = 0;
var player2Score = 0;
function draw() {
  background("black");
  if (gameState == "instructions") {
    fill("green");
    textSize(25);
    textAlign(CENTER);
    textSize(20);
    text("Player 1: WASD", 200, 160);
    text("Player 2: Arrow keys", 200, 190);
    text("Don't let the shot clock get past you.", 200, 220);
    text("Collect Pasta to get bonus points.", 200, 250);
    textSize(20);
    text("Press SPACE to Start", 200, 300);
    if (keyDown("space")) {
      gameState = "play";
    }
   return; 
  }
  if (gameState == "gameOver") {
  drawSprites();
  fill("white");
  textSize(20);
  textAlign(CENTER);
  text("Press SPACE to play again", 200, 350);
  if (keyDown("space")) {
  if (victory) {
    victory.visible = false;
  }
  player1Score = 0;
  player2Score = 0;
  drew.x = 50;
  drew.y = 200;
  bot.x = 350;
  bot.y = 200;
  clock.x = 200;
  clock.y = 200;
  clock.velocityX = 7;
  clock.velocityY = 4;
  bonus.x = 200;
  bonus.y = 200;
  bonus.velocityX = 5;
  bonus.velocityY = 2;
  gameState = "play";
    }
  return;
  }
  if (keyDown("w")) {
    drew.y = drew.y - 10;
  }
  if (keyDown("s")) {
    drew.y = drew.y + 10;
  }
  if (keyDown("up")) {
    bot.y = bot.y - 10;
  }
  if (keyDown("down")) {
    bot.y = bot.y + 10;
  }
  drew.y = constrain(drew.y, 0, 400);
  bot.y = constrain(bot.y, 0, 400);
  if (clock.y < 0 || clock.y > 400) {
    clock.velocityY = -clock.velocityY;
  }
  if (clock.isTouching(drew)) {
    clock.velocityX = Math.abs(clock.velocityX);
  }
  if (clock.isTouching(bot)) {
    clock.velocityX = -Math.abs(clock.velocityX);
  }
if (clock.x <= 0) {
  player2Score++;
  clock.x = 1;
  clock.velocityX = Math.abs(clock.velocityX);
}
if (clock.x >= 400) {
  player1Score++;
  clock.x = 399;
  clock.velocityX = -Math.abs(clock.velocityX);
}
  if (bonus.y < 0 || bonus.y > 400) {
    bonus.velocityY = -bonus.velocityY;
  }
  if (player1Score >= 30 && gameState != "gameOver") {
    gameState = "gameOver";
    victory = createSprite(200, 200);
    victory.setAnimation("gpt-image-2_Make_a_small_victory_screen_of_a_basketball_game_that_says_Player_1_wins_and_is_-0.jpg_1_copy_1");
    victory.scale = 0.5;
  }
  if (player2Score >= 30 && gameState != "gameOver") {
    gameState = "gameOver";

    victory = createSprite(200, 200);
    victory.setAnimation("gpt-image-2_Make_a_small_victory_screen_of_a_basketball_game_that_says_Player_1_wins_and_is_-0.jpg_1");
    victory.scale = 0.5;
  }
  if (bonus.y > 400) {
    bonus.velocityY = -bonus.velocityY;
    bonus.setAnimation("images (1).jpg_1");
    bonus.x = randomNumber(1, 400);
    bonus.y = randomNumber(1, 400);
    bonus.velocityX = randomNumber(0, 1) == 0 ? 4 : -4;
    bonus.velocityY = randomNumber(0, 1) == 0 ? 4 : -4;
  }
  if (drew.isTouching(bonus)) {
    player1Score = player1Score + 1 ;
    bonus.x = randomNumber(1, 400);
    bonus.y = randomNumber(1, 400);
    bonus.velocityX = randomNumber(1, 400);
    bonus.velocityY = randomNumber(1, 400);
  }
  if (bot.isTouching(bonus)) {
    player2Score = player2Score + 1 ;
    bonus.x = randomNumber(1, 400);
    bonus.y = randomNumber(1, 400);
  }
  drawSprites();
  fill("white");
  textSize(20);
  textAlign(LEFT);
  text("P1: " + player1Score, 20, 30);
  textAlign(RIGHT);
  text("P2: " + player2Score, 380, 30);
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
