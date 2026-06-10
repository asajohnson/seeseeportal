

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7f5e3787-432b-4c59-884a-aea007241e50","f2b0b442-e1fd-4bcc-a6b9-99b23f54ee14","7b896eea-360c-47f3-a6b6-5ed55e085699","2106a970-4241-4887-a9a5-a1caf191b6ff","88508a70-f1c0-4b75-b1b0-34b67f424f7b","f256f727-0894-4719-94d5-cd2d4ee1e465","c99b12af-9f81-4163-ab57-1f8561f37751","69188722-05b2-4cd9-b930-2e836da2a935","db77d991-c769-4ae6-8820-be692c4c5405","003cec0d-b9ee-4194-911e-d12a7db465dd"],"propsByKey":{"7f5e3787-432b-4c59-884a-aea007241e50":{"name":"Bird Cat","sourceUrl":null,"frameSize":{"x":295,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"pExmYR_nUOcYcIsG8GItMzp3SLAZtGmm","loadedFromSource":true,"saved":true,"sourceSize":{"x":295,"y":116},"rootRelativePath":"assets/7f5e3787-432b-4c59-884a-aea007241e50.png"},"f2b0b442-e1fd-4bcc-a6b9-99b23f54ee14":{"name":"Bird Cat flap","sourceUrl":null,"frameSize":{"x":291,"y":116},"frameCount":11,"looping":true,"frameDelay":12,"version":"uLNtUB6HgwSm4FvmW61GPfGM8AWRvauC","loadedFromSource":true,"saved":true,"sourceSize":{"x":582,"y":696},"rootRelativePath":"assets/f2b0b442-e1fd-4bcc-a6b9-99b23f54ee14.png"},"7b896eea-360c-47f3-a6b6-5ed55e085699":{"name":"You Win","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"XDKPH_WV8bMqqOwBrM7kBEGlOe8y9QLg","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7b896eea-360c-47f3-a6b6-5ed55e085699.png"},"2106a970-4241-4887-a9a5-a1caf191b6ff":{"name":"Title","sourceUrl":null,"frameSize":{"x":186,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"00mZtSVrgWEE084Bk9OZnPg42eA889qI","loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":131},"rootRelativePath":"assets/2106a970-4241-4887-a9a5-a1caf191b6ff.png"},"88508a70-f1c0-4b75-b1b0-34b67f424f7b":{"name":"Play Button","sourceUrl":null,"frameSize":{"x":189,"y":63},"frameCount":13,"looping":true,"frameDelay":3,"version":"XPnn4GoxEFHeNkssXb4eETWRCakoysQt","loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":441},"rootRelativePath":"assets/88508a70-f1c0-4b75-b1b0-34b67f424f7b.png"},"f256f727-0894-4719-94d5-cd2d4ee1e465":{"name":"Brollow","sourceUrl":null,"frameSize":{"x":111,"y":171},"frameCount":1,"looping":true,"frameDelay":12,"version":"9R_qQG6.lfYIwvU0zBS.i911xB9Ca1RL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":111,"y":171},"rootRelativePath":"assets/f256f727-0894-4719-94d5-cd2d4ee1e465.png"},"c99b12af-9f81-4163-ab57-1f8561f37751":{"name":"Ticket","sourceUrl":null,"frameSize":{"x":54,"y":40},"frameCount":6,"looping":true,"frameDelay":5,"version":"XaPKnl4SsBzsWdbBsLC0BqgCBRnFCVA1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":120},"rootRelativePath":"assets/c99b12af-9f81-4163-ab57-1f8561f37751.png"},"69188722-05b2-4cd9-b930-2e836da2a935":{"name":"Cloud","sourceUrl":null,"frameSize":{"x":241,"y":112},"frameCount":1,"looping":true,"frameDelay":12,"version":"a8RVppTkVJxr1kdwWyyTe6yBOi7HyyxT","loadedFromSource":true,"saved":true,"sourceSize":{"x":241,"y":112},"rootRelativePath":"assets/69188722-05b2-4cd9-b930-2e836da2a935.png"},"db77d991-c769-4ae6-8820-be692c4c5405":{"name":"Reset","sourceUrl":null,"frameSize":{"x":71,"y":68},"frameCount":3,"looping":true,"frameDelay":12,"version":"nv_WrvShvrDzbWNeqrr5dI5G5g8WCIf5","loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":136},"rootRelativePath":"assets/db77d991-c769-4ae6-8820-be692c4c5405.png"},"003cec0d-b9ee-4194-911e-d12a7db465dd":{"name":"ded","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"HuhxXdMhz5_wtMvs9nzrop8n232H0qD0","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/003cec0d-b9ee-4194-911e-d12a7db465dd.png"}}};
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

var cloud = createSprite(40, 800);
cloud.setAnimation("Cloud");
var cloud2 = createSprite(345, 60);
cloud2.setAnimation("Cloud");
var dead = createSprite(100, 400);
dead.setAnimation("Brollow");
dead.velocityY = -1;
var deadSpeed = -1;
dead.scale = 0.25;
var dead2 = createSprite(300, 350);
dead2.setAnimation("Brollow");
dead2.velocityY = -1;
var deadSpeed2 = -1;
var screen = createSprite(200, 1000);
screen.setAnimation("You Win");
var player = createSprite(200, 100);
player.setAnimation("Bird Cat");
var ticket = createSprite(randomNumber(1, 400), randomNumber(1, 400));
ticket.setAnimation("Ticket");
player.scale = 0.5;
var start = createSprite(200, 280);
start.setAnimation("Play Button");
var title = createSprite(200, 150);
title.setAnimation("Title");
dead2.scale = 0.3;
player.scale = 0.4;
dead.scale = 0.3;
var velocityY = 0;
var gravity = 0.5;
var gameStarted = false;
var flapStrength = -8;
var score = 0;
var gameover = false;
playSound("9-02.-Assemble!-Cat-Army-(Midi-Edition).mp3", false);
function death() {
  gameover = true;
  dead.visible = false;
  dead2.visible = false;
}
function deathvisible() {
  dead.visible = false;
  dead2.visible = false;
}
function ticketspwn() {
  ticket.x = randomNumber(1, 400);
  ticket.y = randomNumber(1, 400);
}
function draw() {
  if (gameStarted === false) {
    cloud.y = 300;
    background("lightblue");
    fill("black");
    text("Controls: W=up D=right A=left", 0, 15);
    player.visible = false;
    ticket.visible = false;
    dead.visible = false;
    dead2.visible = false;
    start.visible = true;
    title.visible = true;
    drawSprites();
    if (mousePressedOver(start)) {
      gameStarted = true;
      playSound("9-05.-Let-The-Battle-Begins-(Midi-Edition)-(1).mp3", false);
      stopSound("9-02.-Assemble!-Cat-Army-(Midi-Edition).mp3", false);
      playSound("9-12.-Ending-Party-(Midi-Edition).mp3", true);
    }
  } else {
    if (dead.y < 0) {
      dead.y = 400;
      dead.x = randomNumber(30, 370);
      deadSpeed = -1;
      dead.velocityY = -1;
    }
    if (deadSpeed > -6) {        
      deadSpeed = deadSpeed - 0.03;
      dead.velocityY = deadSpeed;
    }
    if (dead2.y < 0) {
      dead2.y = 400;
      dead2.x = randomNumber(30, 370);
      deadSpeed2 = -1;
      dead2.velocityY = -1;
    }
    if (deadSpeed2 > -8) {       
      deadSpeed2 = deadSpeed2 - 0.06;
      dead2.velocityY = deadSpeed2;
    }
    background("lightblue");
    player.visible = true;
    ticket.visible = true;
    dead.visible = true;
    dead2.visible = true;
    start.visible = false;
    title.visible = false;
    velocityY += gravity;
    fill("black");
    textSize(40);
    text("Score:", 0, 30);
    text(score, 120, 30);
    text("Goal: 10", 230, 390);
    if (player.isTouching(ticket)) {
      score = score + 1;
      ticketspwn();
      playSound("9-16.-Reward-Obtained-(Midi-Edition).mp3", false);
    }
    if (keyWentDown("w")) {
      player.setAnimation("Bird Cat flap");
      velocityY = flapStrength;
      playSound("assets/sfx_wing.mp3", false);
    } else {
      player.setAnimation("Bird Cat");
    }
    if (keyDown("a")) {
      player.x = player.x - 5;
    }
    if (keyDown("d")) {
      player.x = player.x + 5;
    }
    player.y += velocityY;
    drawSprites();
  }
  if (player.x < -50 || player.x > 450 || player.y < -50 || player.y > 450) {
    gameover = true;
  }
  if (score == 10) {
    score = score + 1;
    gameover = false;
    playSound("2-02.-----------------------Piano-(1).mp3", true);
    stopSound("9-12.-Ending-Party-(Midi-Edition).mp3");
    ticket.visible = false;
    ticket.x = 90000;
    player.visible = false;
    screen.y = 200;
    reset.y = 30;
    deathvisible();
  }
  if (score == 11) {
    deathvisible();
    reset.y = 30;
  }
  if (gameover == true) {
    background("black");
    fill("red");
    textSize(50);
    text("Game Over!", 50, 200);
    deathvisible();
    reset.setAnimation("Reset");
    reset.y = 30;
    stopSound("9-12.-Ending-Party-(Midi-Edition).mp3");
  }
  if (score >= 11) {
    deathvisible();
    if (dead.isTouching(player)) {
      dead.x = 9000;
    }
    if (dead2.isTouching(player)) {
      dead2.x = 9000;
    }
  } else {
    if (dead.isTouching(player)) {
      death();
    }
    if (dead2.isTouching(player)) {
      death();
    }
  }
  dead.setCollider("circle");
  dead2.setCollider("circle");
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
