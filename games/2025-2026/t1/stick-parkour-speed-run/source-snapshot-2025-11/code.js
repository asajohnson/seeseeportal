

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["96adbf09-5fb7-4678-8ede-0723e3141842","2b8dcc60-abbd-49b3-ab4a-c6b076bb2939","4f61438b-dc4e-4769-8388-2818ef2ac05a","78594342-2faa-47c3-a81b-8e76365fd232","bf2838de-b48b-4a59-8f0d-6b71b474f748","c0d0b511-d49d-4cc0-8b81-9209a47029b6","b85e01f5-8325-4515-b37d-44e07d376afd","0a3bff17-f4cc-487d-ba15-f5a7fb0dd780","ab002dd0-7c89-4dcd-85bb-61b9ec85e602","c6345f2f-3694-4850-939e-cc40a941c39c","7c1d5d6d-dd7e-4bc4-b78a-b61e92bf4c6b","3b35d905-79c5-4e96-865d-5046ed6b0a84","c5ffadf8-6140-425b-95f8-acef79d94e60"],"propsByKey":{"96adbf09-5fb7-4678-8ede-0723e3141842":{"name":"im not.png_1","sourceUrl":null,"frameSize":{"x":167,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"MdhiMvpxLl.UETTiK1Ds6n7JgnU1thf0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":106},"rootRelativePath":"assets/96adbf09-5fb7-4678-8ede-0723e3141842.png"},"2b8dcc60-abbd-49b3-ab4a-c6b076bb2939":{"name":"log_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7e_K_uST_SqCY9VZBEJAuoJ0VcGm9bZW/category_video_games/log.png","frameSize":{"x":400,"y":214},"frameCount":1,"looping":true,"frameDelay":2,"version":"7e_K_uST_SqCY9VZBEJAuoJ0VcGm9bZW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":214},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7e_K_uST_SqCY9VZBEJAuoJ0VcGm9bZW/category_video_games/log.png"},"4f61438b-dc4e-4769-8388-2818ef2ac05a":{"name":"background_landscape05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"},"78594342-2faa-47c3-a81b-8e76365fd232":{"name":"plants_08_1","sourceUrl":null,"frameSize":{"x":397,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"OB00nnB3Bgkx.AYdaGWcQ3bnXm6tM08v","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":336},"rootRelativePath":"assets/78594342-2faa-47c3-a81b-8e76365fd232.png"},"bf2838de-b48b-4a59-8f0d-6b71b474f748":{"name":"bolde.jpg_1","sourceUrl":null,"frameSize":{"x":61,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"s5WxdSjI8fmxCdW.SmRbvnDEzFdWe6.X","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":60},"rootRelativePath":"assets/bf2838de-b48b-4a59-8f0d-6b71b474f748.png"},"c0d0b511-d49d-4cc0-8b81-9209a47029b6":{"name":"pine_trees_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aXDGFLKigHda5qAkWF.aTWPcdAB_SAWJ/category_backgrounds/pine_trees.png"},"b85e01f5-8325-4515-b37d-44e07d376afd":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"0a3bff17-f4cc-487d-ba15-f5a7fb0dd780":{"name":"real city.jpg_1","sourceUrl":"assets/v3/animations/PG16GdXJZzFpU4hoN0UCDiPcrZxlC108qeUZM2HmEWQ/0a3bff17-f4cc-487d-ba15-f5a7fb0dd780.png","frameSize":{"x":612,"y":408},"frameCount":1,"looping":true,"frameDelay":4,"version":"g1Pzc0qAXPbH77FTTFq0koP_YNxaj.Ks","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":408},"rootRelativePath":"assets/v3/animations/PG16GdXJZzFpU4hoN0UCDiPcrZxlC108qeUZM2HmEWQ/0a3bff17-f4cc-487d-ba15-f5a7fb0dd780.png"},"ab002dd0-7c89-4dcd-85bb-61b9ec85e602":{"name":"stick man skate.jpg_1","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"c0xBOfjrXf.bpfFxusRe09tl0Gh0UsC_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/ab002dd0-7c89-4dcd-85bb-61b9ec85e602.png"},"c6345f2f-3694-4850-939e-cc40a941c39c":{"name":"monstertruck_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"},"7c1d5d6d-dd7e-4bc4-b78a-b61e92bf4c6b":{"name":"robot_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/w86yEqXhFyeUw3nvP1tOnzOHtIRsiPAC/category_robots/robot_04.png","frameSize":{"x":322,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"w86yEqXhFyeUw3nvP1tOnzOHtIRsiPAC","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/w86yEqXhFyeUw3nvP1tOnzOHtIRsiPAC/category_robots/robot_04.png"},"3b35d905-79c5-4e96-865d-5046ed6b0a84":{"name":"retroaliens_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85/category_retro/retroaliens_08.png","frameSize":{"x":400,"y":312},"frameCount":1,"looping":true,"frameDelay":2,"version":"Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":312},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Nn9DKAJvr5aApsY9qR9bKcvYnU_L_U85/category_retro/retroaliens_08.png"},"c5ffadf8-6140-425b-95f8-acef79d94e60":{"name":"download.jpg_1","sourceUrl":null,"frameSize":{"x":82,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"E3s7NctlfFxq6ADg7zo0G2QLXJK.9sCW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":72},"rootRelativePath":"assets/c5ffadf8-6140-425b-95f8-acef79d94e60.png"}}};
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

// VARIABLES
var sprite = createSprite(200, 200);
var stickman = createSprite(70, 400);
stickman.setAnimation("im not.png_1");
stickman.scale = 0.55;

var gamelog = createSprite(600, 370);
gamelog.setAnimation("download.jpg_1");
gamelog.scale = .6;

var bush = createSprite(1300, 370);
bush.setAnimation("plants_08_1");
bush.scale = 0.2;

var bold = createSprite(1700, 370);
bold.setAnimation("bolde.jpg_1");

var skateman;

// Ground
var ground = createSprite(200, 400, 400, 5);
ground.visible = false;

// GAME OVER FLAG
var gameOver = false;

// ⭐ SCORE VARIABLE
var score = 0;

function draw() {



// If dead → stop everything + show message


if (gameOver) {


  background("black");


  fill("red");


  textSize(50);


  text("GAME OVER", 80, 200);



  // ⭐ show final score


  fill("white");


  textSize(30);


  text("Score: " + score, 120, 260);



  return;  // stop the game loop


}



// background


sprite.setAnimation("pine_trees_1");



// ⭐ SCORE INCREASE (every frame)


score = score + 1;



// ⭐ draw score on screen


fill("white");


textSize(25);


text("Score: " + score, 20, 40);



// object movement


gamelog.velocityX = -6;


bush.velocityX = -6;


bold.velocityX = -7;



// 🔁 LOOPING OBJECTS


if (gamelog.x < -50) {


  gamelog.x = 600;


}



if (bush.x < -50) {


  bush.x = 1300;


}



if (bold.x < -50) {


  bold.x = 1700;


}



// jumping


if (keyWentDown("up")) {


  stickman.y -= 150;


  stickman.velocityY = 3;


}



if (keyWentDown("up") && skateman != undefined) {


  skateman.y -= 150;


  skateman.velocityY = 4;


}



// load skate scene


if (keyWentDown("a")) {



  var city = createSprite(200, 200);


  city.setAnimation("real city.jpg_1");



  var car = createSprite(500, 350);


  car.setAnimation("monstertruck_02_1");


  car.scale = 0.3;


  car.velocityX = -5;



  skateman = createSprite(100, 300);


  skateman.setAnimation("stick man skate.jpg_1");



  var robot = createSprite(1000, 350);


  robot.setAnimation("robot_04_1");


  robot.scale = 0.2;


  robot.velocityX = -6;



  var retro = createSprite(1500, 350);


  retro.setAnimation("retroaliens_08_1");


  retro.scale = 0.2;


  retro.velocityX = -7;


}



// COLLISIONS


stickman.collide(ground);


if (skateman != undefined) {


  skateman.collide(ground);


}



// HIT DETECTION → GAME OVER


if (stickman.isTouching(gamelog) ||


    stickman.isTouching(bush) ||


    stickman.isTouching(bold)) {



  gameOver = true;


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
