

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6d799241-8e06-455a-876b-e8e7b7bebf02","e52d8aa3-aace-4adc-b11f-79a99c0c3a1d","a0147a96-a1e8-4dd4-b078-c3a8bb254748","b4a2e4dc-ea37-444a-8d92-c469e7f0e653","1a1e39c1-d3ad-40d7-ae29-8da8b106e268","364ce90d-bcf0-4102-be99-af34288e379e","51487583-e3fd-48fc-b8fa-6855eb7cea7d","b587c6c1-45c6-414c-b249-81d1d0d67c97","1b22182e-d1d9-4e19-9efd-10c828475ce4","45a8e84d-aedc-42b3-8e06-fef3c57892cf","4ae0528d-ddf1-413c-a1df-ed69e357c33c","9beed7e0-9fbc-44f0-8560-648c2f25576b","7ba34080-aabd-4311-854d-603240177584","f91f0bfd-1ea4-4049-bbb0-0b70416c8e5d"],"propsByKey":{"6d799241-8e06-455a-876b-e8e7b7bebf02":{"name":"plane","sourceUrl":"assets/api/v1/animation-library/gamelab/N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd/category_vehicles/planeBlue1.png","frameSize":{"x":88,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N8nE_yTUDZ.3xJ03IT21_joiiSkUtXbd/category_vehicles/planeBlue1.png"},"e52d8aa3-aace-4adc-b11f-79a99c0c3a1d":{"name":"bird","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":".yULVDQgcG0tPAe99Eig.ngozVs1asX7","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/e52d8aa3-aace-4adc-b11f-79a99c0c3a1d.png"},"a0147a96-a1e8-4dd4-b078-c3a8bb254748":{"name":"bird3","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"G2lO_YInhkN8WPyeuvcd2V6GubpfKo72","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/a0147a96-a1e8-4dd4-b078-c3a8bb254748.png"},"b4a2e4dc-ea37-444a-8d92-c469e7f0e653":{"name":"bird2","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"yJUklJSPPmNjIIKLUJcpIyJfmH_mrFwv","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/b4a2e4dc-ea37-444a-8d92-c469e7f0e653.png"},"1a1e39c1-d3ad-40d7-ae29-8da8b106e268":{"name":"bird5","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"aRQk1byhxE6H5rL_jt52fzpqfBVLSsKG","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/1a1e39c1-d3ad-40d7-ae29-8da8b106e268.png"},"364ce90d-bcf0-4102-be99-af34288e379e":{"name":"bird4","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"3ak19aTc3I3SS37Ylr3DPt.MwknP7qG5","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/364ce90d-bcf0-4102-be99-af34288e379e.png"},"51487583-e3fd-48fc-b8fa-6855eb7cea7d":{"name":"bird6","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"WiUvgCfZDrLdElyJSJHQbN89bnuX6Oa.","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/51487583-e3fd-48fc-b8fa-6855eb7cea7d.png"},"b587c6c1-45c6-414c-b249-81d1d0d67c97":{"name":"bird7","sourceUrl":null,"frameSize":{"x":400,"y":294},"frameCount":2,"looping":true,"frameDelay":12,"version":"nnl7LIaMIX1Cvj6ToXwuRBMdhOCjSIyB","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":588},"rootRelativePath":"assets/b587c6c1-45c6-414c-b249-81d1d0d67c97.png"},"1b22182e-d1d9-4e19-9efd-10c828475ce4":{"name":"c","sourceUrl":null,"frameSize":{"x":64,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"8J6dIi7g36yH1c8fYvGv5wEn9jHo0QQh","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":120},"rootRelativePath":"assets/1b22182e-d1d9-4e19-9efd-10c828475ce4.png"},"45a8e84d-aedc-42b3-8e06-fef3c57892cf":{"name":"c2","sourceUrl":null,"frameSize":{"x":64,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"6BzZjVJ.3D9antzJeAm0p.ldBV5Mka9U","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":120},"rootRelativePath":"assets/45a8e84d-aedc-42b3-8e06-fef3c57892cf.png"},"4ae0528d-ddf1-413c-a1df-ed69e357c33c":{"name":"c3","sourceUrl":null,"frameSize":{"x":64,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"jwSvi96g3HEoBovGXWHfWOJwVQ_T.w9u","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":120},"rootRelativePath":"assets/4ae0528d-ddf1-413c-a1df-ed69e357c33c.png"},"9beed7e0-9fbc-44f0-8560-648c2f25576b":{"name":"c4","sourceUrl":null,"frameSize":{"x":64,"y":60},"frameCount":2,"looping":true,"frameDelay":12,"version":"tDy8cDfRRfEVFmHlUpJO4MPirrWaN0Pc","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":120},"rootRelativePath":"assets/9beed7e0-9fbc-44f0-8560-648c2f25576b.png"},"7ba34080-aabd-4311-854d-603240177584":{"name":"back","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4k9TYVq96jvmJvzKKqdG82VHu5KxCsmb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7ba34080-aabd-4311-854d-603240177584.png"},"f91f0bfd-1ea4-4049-bbb0-0b70416c8e5d":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"}}};
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
textSize(20);
fill(rgb(0, 0, 0));
text("arrow keys to move up down and side.  ", 0, 60);
text("Avoid hitting the birds or you will lose", 0, 120);
text("Clouds push you back", 0, 180);
text("Good Luck :)", 0, 300);
text("Press space to start", 0, 240);
var gamestate ="menu";
var score = 0;
//
var coin = createSprite(randomNumber(200, 300), randomNumber(350, 50));
coin.setAnimation("coin");
var plane = createSprite(150, 200);
plane.setAnimation("plane");
plane.scale = .75;
var c = createSprite(450, randomNumber(50, 350));
c.setAnimation("c");
var c2 = createSprite(450, randomNumber(50, 350));
c2.setAnimation("c2");
var c3 = createSprite(450, randomNumber(50, 350));
c3.setAnimation("c3");
var c4 = createSprite(450, randomNumber(50, 350));
c4.setAnimation("c4");
c4.scale = 1.25;
var back = createSprite(200, 200);
back.setAnimation("back");
back.scale = 4;
var bird = createSprite(50, 150);
bird.setAnimation("bird");
bird.scale = .15;
var bird2 = createSprite(50, 200);
bird2.setAnimation("bird2");
bird2.scale = .15;
var bird3 = createSprite(50, 250);
bird3.setAnimation("bird3");
bird3.scale = .15;
var bird4 = createSprite(50, 300);
bird4.setAnimation("bird4");
bird4.scale = .15;
var bird5 = createSprite(50, 350);
bird5.setAnimation("bird5");
bird5.scale = .15;
var bird6 = createSprite(50, 100);
bird6.setAnimation("bird6");
bird6.scale = .15;
var bird7 = createSprite(50, 50);
bird7.setAnimation("bird7");
bird7.scale = .15;
var health = 100;

plane.visible = false;
c.visible = false;
c2.visible = false;
c3.visible = false;
coin.visible = false;
c4.visible = false;
back.visible = false;
bird.visible = false;
bird3.visible = false;
bird4.visible = false;
bird2.visible = false;
bird5.visible = false;
bird6.visible = false;
bird7.visible = false;
function draw() {
  // draw background
  if (keyWentDown("space")) {
    
    coin.visible = true;
    bird.visible = true;
    bird3.visible = true;
    bird4.visible = true;
    bird2.visible = true;
    bird5.visible = true;
    bird6.visible = true;
    bird7.visible = true;
    plane.visible = true;
    c.visible = true;
    c2.visible = true;
    c3.visible = true;
    c4.visible = true;
    c.velocityX = -3;
    c2.velocityX = -3;
    c4.velocityX = -3;
    c3.velocityX = -3;
    gamestate = "game";
  }

  if (gamestate =="game"){
    background("blue");
    
    if (c.isTouching(plane)) {
      c.displace(plane);
    }
    if (c2.isTouching(plane)) {
      c2.displace(plane);
    }
    if (c3.isTouching(plane)) {
      c3.displace(plane);
    }
    if (c4.isTouching(plane)) {
      c4.displace(plane);
    }
  }else{
      text("arrow keys to move up down and side.  ", 0, 60);
  text("Avoid hitting the birds or you will lose", 0, 120);
  text("Clouds push you back", 0, 180);
  text("Good Luck :)", 0, 300);
  text("Press space to start", 0, 240);
  }


  if (health < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
  }

  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  movement()
  handleCollisions()
  drawSprites();

}

function handleCollisions() {
  if (bird.isTouching(plane)) {
    health = health - 100;
  }
   if (plane.isTouching(bird)) {
    
  }
  if (plane.isTouching(bird2)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    coin.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird3)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    coin.visible = false;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird4)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    coin.visible = false;
    c4.velocityX = 0;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird5)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    coin.visible = false;
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird6)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    coin.visible = false;
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird7)) {
    gamestate = "dead";
    textSize(30);
    background("red");
    text("GAME OVER", 100, 100);
    c.velocityX = 0;
    coin.visible = false;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(bird)) {
    gamestate = "dead";
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    textSize(30);
    background("red");
    text("GAME OVER", 100, 100);
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
  }
  if (plane.isTouching(coin)) {
    score = score + 1;
    coin.y = 200;
  }
  if (plane.isTouching(coin)) {
    coin.x = randomNumber(120, 300);
    coin.y = randomNumber(350, 50);
  }
  text("Score:", 30, 30);
  text (score, 120, 30);
  if (plane.x < -50 || plane.x > 450 || plane.y < -50 || plane.y > 450) {
    gamestate = "dead";
    c.velocityX = 0;
    coin.visible = false;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
  }
}

function gameOver() {
    if (gamestate=="dead") {
    c.velocityX = 0;
    c2.velocityX = 0;
    c3.velocityX = 0;
    c4.velocityX = 0;
    background("red");
    textSize(30);
    text("GAME OVER", 100, 100);
    coin.visible = false;
    c3.visible = false;
    c4.visible = false;
    back.visible = false;
    bird.visible = false;
    bird3.visible = false;
    bird4.visible = false;
    bird2.visible = false;
    bird5.visible = false;
    bird6.visible = false;
    bird7.visible = false;
    plane.visible = false;
    c.visible = false;
    c2.visible = false;
    health = 0;
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    if (bird.isTouching(plane)) {
      health = health - 100;
    }
  }
 
}

function movement(){
  if (keyDown("left")) {
      plane.x = plane.x - 2;
    }
    if (keyDown("up")) {
      plane.y = plane.y - 2;
    }
    if (keyDown("down")) {
      plane.y = plane.y + 2;
    }
    if (keyDown("right")) {
      plane.x = plane.x + 2;
    }
    if (c.x < 0) {
      c.x = 450;
      c.y = randomNumber(50, 350);
    }
    if (c2.x < 0) {
      c2.x = 450;
      c2.y = randomNumber(50, 350);
    }
    if (c3.x < 0) {
      c3.x = 450;
      c3.y = randomNumber(50, 350);
    }
    if (c4.x < 0) {
      c4.x = 450;
      c4.y = randomNumber(50, 350);
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
