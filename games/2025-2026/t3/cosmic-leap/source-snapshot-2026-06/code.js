

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b1539d24-6eb6-44bd-95e7-db601b001056","7b21c4fe-bfe7-4a6b-9a4e-165edfd26e44","6fd6016d-b134-4751-871f-ea374c88b7f1","c16eca13-ff77-4a95-bdc2-902e13cbddeb","b06b2e74-89de-43c3-add2-1258d20ef4af","90b416ca-a03f-499c-9899-2bf23b14d4f7","ac0f126b-a052-48b9-8f51-543ede5cc70d","e3402777-e1aa-4a3b-af1d-426fdbeed82b","4f01edfd-5294-425e-b600-0050d7c610e6","c6161a19-c1ea-45a2-82e9-6e76efc79d65","3650ac88-5b75-4ce1-acd7-4d891f55dd8b","cd67eb79-2dfd-431c-97ed-a4a73a83ca04","828db2e9-045e-4729-b9d9-f7cf2b41cfd2","967d0c12-34af-44ce-a488-b7f4684b72cb","c5af3ec0-a25c-43d7-a682-a02676303b75","7d63b4f9-be2a-432b-a16c-5195615c3aad"],"propsByKey":{"b1539d24-6eb6-44bd-95e7-db601b001056":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"7b21c4fe-bfe7-4a6b-9a4e-165edfd26e44":{"name":"alienYellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hqQGdMdKGlhSG.CyibUP63V1cTWJfult/category_fantasy/alienYellow.png","frameSize":{"x":66,"y":82},"frameCount":1,"looping":true,"frameDelay":2,"version":"hqQGdMdKGlhSG.CyibUP63V1cTWJfult","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":82},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hqQGdMdKGlhSG.CyibUP63V1cTWJfult/category_fantasy/alienYellow.png"},"6fd6016d-b134-4751-871f-ea374c88b7f1":{"name":"alienYellow_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf/category_fantasy/alienYellow_walk.png","frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":2,"version":"yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yK6UXQtnemQ5itIdr3t5PWyn_FP7jFUf/category_fantasy/alienYellow_walk.png"},"c16eca13-ff77-4a95-bdc2-902e13cbddeb":{"name":"alienYellow_walk_1_copy_1","sourceUrl":null,"frameSize":{"x":72,"y":88},"frameCount":2,"looping":true,"frameDelay":12,"version":"q0RsA2ZxXr1ThPywdcM6sK_wXDc2LtKo","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":88},"rootRelativePath":"assets/c16eca13-ff77-4a95-bdc2-902e13cbddeb.png"},"b06b2e74-89de-43c3-add2-1258d20ef4af":{"name":"alienYellow_jump_1","sourceUrl":null,"frameSize":{"x":67,"y":83},"frameCount":2,"looping":true,"frameDelay":12,"version":"wM3Q2l8XlXc8SZ3QWOdf1GqeI1o4tq_u","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":83},"rootRelativePath":"assets/b06b2e74-89de-43c3-add2-1258d20ef4af.png"},"90b416ca-a03f-499c-9899-2bf23b14d4f7":{"name":"Asteroid.jpg_1","sourceUrl":null,"frameSize":{"x":249,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"9l2owy6yZiCdMPblOTl7y_0wBZN3SeLd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":47},"rootRelativePath":"assets/90b416ca-a03f-499c-9899-2bf23b14d4f7.png"},"ac0f126b-a052-48b9-8f51-543ede5cc70d":{"name":"Asteroid.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":93,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"bNy0OFSoqrG09Yf2fgQ2UH4QXN6sFERs","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":65},"rootRelativePath":"assets/ac0f126b-a052-48b9-8f51-543ede5cc70d.png"},"e3402777-e1aa-4a3b-af1d-426fdbeed82b":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"4f01edfd-5294-425e-b600-0050d7c610e6":{"name":"background_landscape09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"c6161a19-c1ea-45a2-82e9-6e76efc79d65":{"name":"alienGreen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l/category_fantasy/alienGreen.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4.t6IDgXj00fjxSiOZK.KXVz4qDwmz9l/category_fantasy/alienGreen.png"},"3650ac88-5b75-4ce1-acd7-4d891f55dd8b":{"name":"alienGreen_jump_1","sourceUrl":null,"frameSize":{"x":67,"y":93},"frameCount":2,"looping":true,"frameDelay":12,"version":"Ys3FgJQhTWC.tgPXAvZ9FoTGt7iZpdfW","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":93},"rootRelativePath":"assets/3650ac88-5b75-4ce1-acd7-4d891f55dd8b.png"},"cd67eb79-2dfd-431c-97ed-a4a73a83ca04":{"name":"alienGreen_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png"},"828db2e9-045e-4729-b9d9-f7cf2b41cfd2":{"name":"alienGreen_walk_1_copy_1","sourceUrl":null,"frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":12,"version":"E_NlDWSBO_tIJmtTm4ifRPepgkfxwFj4","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/828db2e9-045e-4729-b9d9-f7cf2b41cfd2.png"},"967d0c12-34af-44ce-a488-b7f4684b72cb":{"name":"alienYellow_2","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"9YP7T4j.fZDxMAKpz3djEiakD6jZ1wjN","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/967d0c12-34af-44ce-a488-b7f4684b72cb.png"},"c5af3ec0-a25c-43d7-a682-a02676303b75":{"name":"alienGreen_2","sourceUrl":null,"frameSize":{"x":66,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"9NzOCcDfAQC02Suou5cxCjSpuC.IOj_v","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":66},"rootRelativePath":"assets/c5af3ec0-a25c-43d7-a682-a02676303b75.png"},"7d63b4f9-be2a-432b-a16c-5195615c3aad":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VUC4Zf7oLLgXlOrgCTFFYr3Sb2I8LKoI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7d63b4f9-be2a-432b-a16c-5195615c3aad.png"}}};
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

//Variables
var timesTouched = 0;
var playerIsTouchingPlatform1 = false;
var playerIsTouchingPlatform2 = false;
var hit = 0;
var score = 0;
//Sprites
var space = createSprite(200, 200);
space.setAnimation("bg_landscape21_1");
var player = createSprite(200, 350);
player.setAnimation("alienYellow_1");
player.scale = 0.75;
var player2 = createSprite(200, 350);
player2.setAnimation("alienGreen_1");
player2.scale = 0.75;
var platform = createSprite(randomNumber(200, 400), -1000);
platform.setAnimation("Asteroid.jpg_1");
var platform2 = createSprite(randomNumber(0, 100), -100);
platform2.setAnimation("Asteroid.jpg_1");
function draw() {
  //Velocity of the platforms
  platform.velocityY = randomNumber(5, 10);
  platform2.velocityY = randomNumber(5, 10);
  //Makes sure players comes back to the ground
  player.velocityY = player.velocityY + 0.5;
  player2.velocityY = player2.velocityY + 0.5;
  //Increases score for passed platforms and new levels
  if ((player.y) <= 0) {
    timesTouched = timesTouched + 1;
    if (timesTouched == 1) {
      space.setAnimation("space_1");
      score = score + 10;
      movement();
    } else if (timesTouched == 2) {
      space.setAnimation("background_landscape09_1");
      score = score + 15;
      movement();
    } else if (timesTouched == 3) {
      space.setAnimation("bg_landscape21_1");
      score = score + 20;
      movement();
    }
    player.y = 400;
    player.x = 200;
  }
  //Changes background based on if the top of the screen was met
  if ((player2.y) <= 0) {
    timesTouched = timesTouched + 1;
    if (timesTouched == 1) {
      platform.velocityY = randomNumber(10, 13);
      platform2.velocityY = randomNumber(10, 13);
      space.setAnimation("space_1");
    } else if (timesTouched == 2) {
      platform.velocityY = randomNumber(13, 17);
      platform2.velocityY = randomNumber(13, 17);
      space.setAnimation("background_landscape09_1");
    } else if (timesTouched == 3) {
      platform.velocityY = randomNumber(17, 20);
      platform2.velocityY = randomNumber(17, 20);
      space.setAnimation("bg_landscape21_1");
    }
    player2.y = 400;
    player2.x = 200;
  }
  //Activates the code
  boundaries();
  contact();
  movement();
}
function boundaries() {
  //Player boundaries
  if (player.y >= 365) {
    player.y = 365;
  }
  if (player2.y >= 365) {
    player2.y = 365;
  }
  //reset platforms to the top
  if (platform.y >= 400) {
    score = score + 1;
    platform.y = -1000;
    platform2.y = 0;
    platform.x = randomNumber(200, 400);
  }
  if (platform2.y >= 400) {
    score = score + 1;
    platform2.y = -1000;
    platform.y = 0;
    platform2.x = randomNumber(0, 200);
  }
  //Player boundaries
  if (35 >= player.x) {
    player.x = 35;
  }
  if (player.x >= 355) {
    player.x = 355;
  }
  if (0 >= player.y) {
    space.setAnimation("space_1");
    player.y = 400;
    player.x = 200;
  }
  if (35 >= player2.x) {
    player2.x = 35;
  }
  if (player2.x >= 355) {
    player2.x = 355;
  }
  if (0 >= player2.y) {
    space.setAnimation("space_1");
    player2.y = 400;
    player2.x = 200;
  }
}
function contact() {
  //Detects if contact is ever made
  if (hit < 5) {
    if (platform.isTouching(player)) {
      platform.displace(player);
      if (playerIsTouchingPlatform1 === false) {
        hit = hit + 1;
        playerIsTouchingPlatform1 = true; 
      }
    } else {
      playerIsTouchingPlatform1 = false;
    }
    if (platform2.isTouching(player)) {
      platform2.displace(player);
      if (playerIsTouchingPlatform2 === false) {
        hit = hit + 1;
        playerIsTouchingPlatform2 = true; 
      }
    } else {
      playerIsTouchingPlatform2 = false;
    }
    if (platform.isTouching(player2)) {
      platform.displace(player2);
    }
    if (platform2.isTouching(player2)) {
      platform2.displace(player2);
    }
  }
  //Hides the characters and platforms
  if (hit >= 5) {
    space.setAnimation("animation_1");
    space.scale = 5;
    player.visible = false;
    player2.visible = false;
    platform.visible = false;
    platform2.visible = false;
  }
}
function movement() {
  //player1 movements
  if (keyWentDown("up")) {
    player.setAnimation("alienYellow_jump_1");
    player.velocityY = -7;
  }
  if (keyDown("left")) {
    player.setAnimation("alienYellow_walk_1_copy_1");
    player.velocityX = -7;
  }
  if (keyDown("right")) {
    player.setAnimation("alienYellow_walk_1");
    player.velocityX = 7;
  }
  //player2 movements
  if (keyWentDown("w")) {
    player2.setAnimation("alienGreen_jump_1");
    player2.velocityY = -7;
  }
  if (keyDown("a")) {
    player2.setAnimation("alienGreen_walk_1");
    player2.velocityX = -7;
  }
  if (keyDown("d")) {
    player2.setAnimation("alienGreen_walk_1_copy_1");
    player2.velocityX = 7;
  }
  drawSprites();
  //displays the score and instruction
  fill("white");
  textSize(20);
  text("Score: "+ score, 10, 30);
  text("Collisions: "+ hit, 270, 30);
  text("Player 1 uses A,W,D to move", 10, 60);
  text("Player 2 uses left, up, right arrow", 10, 90);
  //Produces the death page
  if (hit >= 5) {
    textSize(65);
    fill("white");
    text("GAME OVER", 0, 200);
    fill("black");
    rect(0, 0, 400, 125);
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
