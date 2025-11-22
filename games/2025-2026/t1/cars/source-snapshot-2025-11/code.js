

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d35649de-c925-44f3-87ca-7d61ced13a7d","f01ac98c-8b92-42e6-947d-73f89e72f4db","82a49af0-bba8-45c3-b221-c86c3401255a","2feba39e-5612-4855-8d2d-26eb0ba80c3b","2f431710-cd38-44e4-9b4c-41ef30e793d5","08021f15-2dd0-4f50-927a-93d9dd8a375f","5f961f6e-49c4-4ef7-9ae6-cb00f8b8ca8c","e5c3eef6-c455-4122-adca-2f8061dca3e3","24246b80-11e9-4b00-b2f9-df8d627943e2","6c7bcb57-a93a-4270-985c-6d7bd75a2dd8","654ebb2f-3c38-4dfe-94a5-88b7ef3a432a","b6d5a872-191a-4b67-946e-dfba3dbc9f12","7b9af9b6-1b4e-4274-bbf8-af72c7e125a3"],"propsByKey":{"d35649de-c925-44f3-87ca-7d61ced13a7d":{"name":"car_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"f01ac98c-8b92-42e6-947d-73f89e72f4db":{"name":"motorcycle_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qK9AmfhKuafr7c1U_QozyIijRUAkXTZz/category_vehicles/motorcycle.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"qK9AmfhKuafr7c1U_QozyIijRUAkXTZz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qK9AmfhKuafr7c1U_QozyIijRUAkXTZz/category_vehicles/motorcycle.png"},"82a49af0-bba8-45c3-b221-c86c3401255a":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"2feba39e-5612-4855-8d2d-26eb0ba80c3b":{"name":"plants_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp/category_video_games/plants_06.png","frameSize":{"x":393,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eT6fcCes91_Dm3ACOzNMCh7aJ1_w7sqp/category_video_games/plants_06.png"},"2f431710-cd38-44e4-9b4c-41ef30e793d5":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"08021f15-2dd0-4f50-927a-93d9dd8a375f":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"5f961f6e-49c4-4ef7-9ae6-cb00f8b8ca8c":{"name":"car_yellow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"e5c3eef6-c455-4122-adca-2f8061dca3e3":{"name":"enemyBlue5_1","sourceUrl":"assets/api/v1/animation-library/gamelab/niNSAykfwhd2mAx7Ye0hw7ITszQMMEhA/category_vehicles/enemyBlue5.png","frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"niNSAykfwhd2mAx7Ye0hw7ITszQMMEhA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/niNSAykfwhd2mAx7Ye0hw7ITszQMMEhA/category_vehicles/enemyBlue5.png"},"24246b80-11e9-4b00-b2f9-df8d627943e2":{"name":"enemyGreen1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GfQyxHcgqQk2s5OSnkg46W7M1DX4IIUo/category_vehicles/enemyGreen1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"GfQyxHcgqQk2s5OSnkg46W7M1DX4IIUo","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GfQyxHcgqQk2s5OSnkg46W7M1DX4IIUo/category_vehicles/enemyGreen1.png"},"6c7bcb57-a93a-4270-985c-6d7bd75a2dd8":{"name":"enemyBlack3_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv/category_vehicles/enemyBlack3.png","frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ulwO7JbZrBzZgECi2i8ATCpZi_YwIWXv/category_vehicles/enemyBlack3.png"},"654ebb2f-3c38-4dfe-94a5-88b7ef3a432a":{"name":"enemyRed4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e8snIAw.ai8GPEKO_1xI6brjUxSYnyfz/category_vehicles/enemyRed4.png"},"b6d5a872-191a-4b67-946e-dfba3dbc9f12":{"name":"playerShip1_orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HcwzWJ92wMfl7Y.lKInjXuMYKY7A3w1P/category_vehicles/playerShip1_orange.png","frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"HcwzWJ92wMfl7Y.lKInjXuMYKY7A3w1P","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HcwzWJ92wMfl7Y.lKInjXuMYKY7A3w1P/category_vehicles/playerShip1_orange.png"},"7b9af9b6-1b4e-4274-bbf8-af72c7e125a3":{"name":"planet04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07/category_icons/planet04.png","frameSize":{"x":400,"y":366},"frameCount":1,"looping":true,"frameDelay":2,"version":"MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":366},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MNXTe9Vzbt4fPkzUHwmt2Pbzfo4_Gw07/category_icons/planet04.png"}}};
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

//SPITES
var carSkins = ["car_red_1", "car_blue_1", "car_green_1", "car_yellow_1"];
var driver = createSprite(190, 330);
driver.setAnimation("motorcycle_1");

var car1 = createSprite(125, 0);
car1.setAnimation("car_red_1");
car1.scale = 1.12;
car1.velocityY = 6;
car1.rotation = 180;

var car2 = createSprite(275, 400);
car2.setAnimation("car_blue_1");
car2.scale = 1.12;
car2.velocityY = -7;

var score = 0;
var lives = 3;
var gameOver = false;
var highScore = 0;

var fogMode = false;
var hardMode = false;
var fogAlpha = 0;
var flickerTimer = 0;

// Background themes using colors
var bgThemes = ["lightblue", "khaki", "lightgreen", "darkblue", "white"];
var bgIndex = 0;

// FUNCTIONS
function saveHighscore() {
  if (score > highScore) {
    highScore = Math.floor(score);
  }
}

function resetGame() {
  gameOver = false;
  score = 0;
  lives = 3;
  hardMode = false;
  fogMode = false;
  fogAlpha = 0;
  flickerTimer = 0;

  driver.x = 190;
  driver.y = 330;
  driver.setAnimation("motorcycle_1");

  car1.y = 0;
  car2.y = 400;
  car1.setAnimation(randomCarSkin());
  car2.setAnimation(randomCarSkin());
}

function handleMovement() {
  var speedBoost = hardMode ? 2.5 : 4;
  if (keyDown("right")) driver.x += speedBoost;
  if (keyDown("left")) driver.x -= speedBoost;

  var upSpeed = hardMode ? 5 : 7;
  if (keyDown("up")) driver.y -= upSpeed;
  if (keyDown("down")) driver.y += 2;
}

function randomCarSkin() {
  var index = randomNumber(0, 3);
  return carSkins[index];
}

function resetSprites() {
  var speedMod = hardMode ? 3 : 0;

  if (car1.y > 500 || car1.y < -100) {
    car1.setAnimation(randomCarSkin());
    var choice = randomNumber(1, 2);
    if (choice == 1) {
      car1.y = 0;
      car1.velocityY = 6 + speedMod;
      car1.rotation = 180;
    } else {
      car1.y = 400;
      car1.velocityY = -6 - speedMod;
      car1.rotation = 0;
    }
    car1.x = randomNumber(75, 175);
  }

  if (car2.y > 500 || car2.y < -100) {
    car2.setAnimation(randomCarSkin());
    var choice2 = randomNumber(1, 2);
    if (choice2 == 1) {
      car2.y = 400;
      car2.velocityY = -7 - speedMod;
      car2.rotation = 0;
    } else {
      car2.y = 0;
      car2.velocityY = 7 + speedMod;
      car2.rotation = 180;
    }
    car2.x = randomNumber(225, 350);
  }
}

function checkInteractions() {
  if (car1.isTouching(driver)) car1.displace(driver);
  if (car2.isTouching(driver)) car2.displace(driver);

  if (driver.y > 450 || driver.y < -50) {
    lives -= 1;
    driver.y = 300;
    if (lives <= 0) gameOver = true;
  }

  if (driver.x < 50 || driver.x > 350) {
    if (World.frameCount % 30 == 0) lives -= 1;
    if (lives <= 0) gameOver = true;
  }
}

//GAMEPLAY
function playGame() {
  fill("gray");
  rect(50, 0, 300, 450);

  stroke("yellow");
  strokeWeight(5);
  line(190, 0, 190, 400);
  line(210, 0, 210, 400);

  score += 0.5;
  driver.velocityY = 2;

  handleMovement();
  resetSprites();
  checkInteractions();

  fill("black");
  textSize(20);
  text("Score:" + Math.floor(score), 5, 20);
  text("Lives:" + lives, 325, 20);
  text("Highscore:" + highScore, 120, 20);

  drawSprites();

  if (score >= 500) fogMode = true;
  if (score >= 1000) hardMode = true;

  if (hardMode) {
    fill("red");
    textSize(18);
    text("HARD MODE", 150, 80);
    fogAlpha += randomNumber(-0.01, 0.02);
    fogAlpha = Math.max(0.1, Math.min(fogAlpha, 0.8));
  }

  if (fogMode) {
    if (!hardMode) {
      fogAlpha += 0.01;
      fogAlpha = Math.min(fogAlpha, 0.5);
    }

    var fogColor = "rgba(128,128,128," + fogAlpha + ")";
    noStroke();
    fill(fogColor);
    rect(0, 0, 400, 450);

    fill("white");
    textSize(18);
    text("FOG", 170, 50);
  }
}

function drawGameOver() {
  background("black");
  saveHighscore();

  stroke("white");
  textSize(40);
  text("GAME OVER", 80, 200);

  fill("white");
  textSize(25);
  text("Final Score:" + Math.floor(score), 80, 250);
  text("Highscore:" + highScore, 80, 285);

  textSize(16);
  text("Click to Restart", 120, 330);

  if (mouseIsPressed) {
    resetGame();
  }
}

function draw() {
  // SWITCH BACKGROUND THEME WITH E
  if (keyWentDown("e")) {
    bgIndex = (bgIndex + 1) % bgThemes.length;
  }

  // Draw background color
  background(bgThemes[bgIndex]);

  if (!gameOver) {
    playGame();
  } else {
    drawGameOver();
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
