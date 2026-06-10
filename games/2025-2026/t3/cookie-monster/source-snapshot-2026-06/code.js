

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["13e817c0-a62c-43cc-808d-e99009014af9","0a2b0348-004d-4aeb-aab5-d1d47269d783","fec30a5a-c978-4fb3-9795-df0210af3d2d","c3e2502c-73a2-4d32-a8ef-6ab9b0181e59","b7050a7f-d44e-4116-b05a-efad92c9f056","13f84642-6478-4de6-bbac-942bb1628336","5c066fdb-cfd3-4ef3-8778-2dbcd23f8ddc","08b56ef2-3b28-4053-b7ed-e9ecd41c2346"],"propsByKey":{"13e817c0-a62c-43cc-808d-e99009014af9":{"name":"cookie","sourceUrl":null,"frameSize":{"x":92,"y":88},"frameCount":1,"looping":true,"frameDelay":12,"version":"vnBevldkMgKmoR7K.KtpzTMWknkIzmXY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":88},"rootRelativePath":"assets/13e817c0-a62c-43cc-808d-e99009014af9.png"},"0a2b0348-004d-4aeb-aab5-d1d47269d783":{"name":"cookieMonster","sourceUrl":null,"frameSize":{"x":162,"y":281},"frameCount":1,"looping":true,"frameDelay":12,"version":"ENPlo1Zcqq_IgSG71teMCKToo1uK_QAA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":281},"rootRelativePath":"assets/0a2b0348-004d-4aeb-aab5-d1d47269d783.png"},"fec30a5a-c978-4fb3-9795-df0210af3d2d":{"name":"gonger","sourceUrl":null,"frameSize":{"x":54,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"XrF_HPoa0fGql4ZMKQMyJClKdgWC1g34","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":92},"rootRelativePath":"assets/fec30a5a-c978-4fb3-9795-df0210af3d2d.png"},"c3e2502c-73a2-4d32-a8ef-6ab9b0181e59":{"name":"start","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"d57o9cM1LMdntbOf2AW6NQHD4deQRrX6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/c3e2502c-73a2-4d32-a8ef-6ab9b0181e59.png"},"b7050a7f-d44e-4116-b05a-efad92c9f056":{"name":"background2","sourceUrl":"assets/v3/animations/50c197a7-2a0d-417f-a9f1-c7071f50d92c/b7050a7f-d44e-4116-b05a-efad92c9f056.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"9XSAFayMRBI7vSs6MnunWHQxn12QV9GO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/50c197a7-2a0d-417f-a9f1-c7071f50d92c/b7050a7f-d44e-4116-b05a-efad92c9f056.png"},"13f84642-6478-4de6-bbac-942bb1628336":{"name":"jar","sourceUrl":null,"frameSize":{"x":96,"y":172},"frameCount":1,"looping":true,"frameDelay":12,"version":"YuRrYTenG3B7vEwn1wdHAb2S2xAUSszq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":172},"rootRelativePath":"assets/13f84642-6478-4de6-bbac-942bb1628336.png"},"5c066fdb-cfd3-4ef3-8778-2dbcd23f8ddc":{"name":"gongerWon","sourceUrl":null,"frameSize":{"x":221,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"w0RZU4eS5jydyhNuohIGkb7L8hOVbFRC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":221,"y":150},"rootRelativePath":"assets/5c066fdb-cfd3-4ef3-8778-2dbcd23f8ddc.png"},"08b56ef2-3b28-4053-b7ed-e9ecd41c2346":{"name":"rectangle","sourceUrl":null,"frameSize":{"x":100,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"iKgE3VobPDeRDnP0kbKQXBpDoxME9mQ0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":42},"rootRelativePath":"assets/08b56ef2-3b28-4053-b7ed-e9ecd41c2346.png"}}};
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
var score = -1;
var health = 100;
var bgRun = createSprite(200, 200);
bgRun.setAnimation("background2");
bgRun.scale = 2;
var cookieMonster = createSprite(200, 320);
cookieMonster.setAnimation("cookieMonster");
cookieMonster.scale = 0.7;
var gonger = createSprite(70, 340);
gonger.setAnimation("gonger");
gonger.scale = 1.5;
var cookie = createSprite(200, 200);
cookie.setAnimation("cookie");
cookie.scale = 0.5;
var jar = createSprite(0, 370);
jar.setAnimation("jar");
jar.scale = 0.3;
var bgStartScreenTopRect = createSprite(200, 35);
bgStartScreenTopRect.setAnimation("rectangle");
bgStartScreenTopRect.scale = 4;
var bgStartScreenBottomRect = createSprite(200, 360);
bgStartScreenBottomRect.setAnimation("rectangle");
bgStartScreenBottomRect.scale = 4;
var bgSpriteStartScreen = createSprite(200, 200);
bgSpriteStartScreen.setAnimation("start");
bgSpriteStartScreen.scale = 1.5;
var touchingJar = false;
var touchingCookie = false;

// Create your sprites here

function draw() {
  // draw background
  if (keyWentUp("space")) {
    runBackground();
  }

  // update sprites
  if (cookie.x < 0) {
cookie.x = 400;
cookie.y = randomNumber(100, 300);
}
  if (jar.x > 400) {
  jar.x = 0;
  }
  if (cookieMonster.isTouching(jar)) {
  if (!touchingJar) {
    health = health - 10;
    touchingJar = true;
  }
} else {
  touchingJar = false;     
}
  if (health == 0) {
  lost();
  }
  if (cookieMonster.isTouching(gonger)) {
    lost();
  }
cookieMonster.velocityY = cookieMonster.velocityY + 0.2;

  if (score > 19 )  {
    if (health > 0) {
      jar.velocityX = 6;
    }
  }
if (cookieMonster.y > 320) {
cookieMonster.y = 320;
cookieMonster.velocityY = 0;
}

if (keyWentDown("up")) {
cookieMonster.velocityY = -7;
}
  if (keyDown("left")) {
    cookieMonster.velocityX = -4;
  } else {
    cookieMonster.velocityX = 0;
  }
  if (keyDown("right")) {
    cookieMonster.velocityX = 4;
  }

  if (cookieMonster.isTouching(cookie)) {
  if (!touchingCookie) {
  score = score + 1;
  touchingCookie = true;
  cookie.x = 450;
  cookie.y = randomNumber(100, 300);
  }
  } else {
  touchingCookie = false;
  }

  drawSprites();
  
  if (bgStartScreenTopRect.visible) {
    startBackground();
  }
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text(health, 350, 30);
  text("Score:", 0, 30);
  text(score, 65, 30);
}


// Create your functions here
function startBackground() {

  // Top rectangle
fill("red");
textSize(14);
text("GONGER CAUGHT", 110, 25);
text("COOKIE MONSTER!", 105, 42);

fill("red");
textSize(9);
text("AVOID THE JARS HE THROWS AND COLLECT COOKIES!", 70, 58);
text("MAKE SURE TO NOT TOUCH GONGER!", 90, 70);

  // Bottom rectangle
fill("red");
textSize(10);
text("USE UP, RIGHT, AND LEFT ARROWS TO MOVE AROUND", 70, 350);

textSize(12);
text("PRESS SPACE TO START", 100, 385);
}
function runBackground() {
  bgStartScreenTopRect.visible = 0;
  bgSpriteStartScreen.visible = 0;
  bgStartScreenBottomRect.visible = 0;
  cookie.velocityX = -3;
  jar.velocityX = 4;
}
function lost() {
  cookieMonster.visible = 0;
  gonger.visible = 0;
  cookie.visible = 0;
  jar.visible = 0;
  cookie.velocityX = 0;
  jar.velocityX = 0;
  bgRun.setAnimation("gongerWon");
  bgRun.scale = 3;
  bgStartScreenTopRect.visible = 0;
  bgStartScreenBottomRect.visible = 0;
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
