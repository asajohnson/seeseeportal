

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["afc6b548-ca1b-44ee-a529-a0fc34a45c1e","17d6b3cb-e902-4e9b-84d7-6e0becbc3f4b","f817dafb-00aa-473d-bbe1-57824e5c8d9e","ed072962-b023-480e-8e86-803cff8734db","a4573e9d-0b3a-4d7b-b472-aa9399ca1f95","3a296d8c-53c1-4050-a506-5849c3dbed18","8a1df308-e2b1-476e-b8f0-949864b49eb7"],"propsByKey":{"afc6b548-ca1b-44ee-a529-a0fc34a45c1e":{"name":"1","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"8B5u6Rpp2uzeuL7E7Pd4_F5srPtzcJv9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/afc6b548-ca1b-44ee-a529-a0fc34a45c1e.png"},"17d6b3cb-e902-4e9b-84d7-6e0becbc3f4b":{"name":"2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"L.6l1TFlRErJw1_czgxo2_ZJzIgfaygw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/17d6b3cb-e902-4e9b-84d7-6e0becbc3f4b.png"},"f817dafb-00aa-473d-bbe1-57824e5c8d9e":{"name":"3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VQiG2iuZyC_4PlNDvWUKW3Q33nHbzLCv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f817dafb-00aa-473d-bbe1-57824e5c8d9e.png"},"ed072962-b023-480e-8e86-803cff8734db":{"name":"4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KB8eaeiEd4Jm3jiH.ldNr_HJMc5OFmUp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ed072962-b023-480e-8e86-803cff8734db.png"},"a4573e9d-0b3a-4d7b-b472-aa9399ca1f95":{"name":"5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"yukw909J0lUnv.VLyL2fkz3TkgoJ0F.a","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a4573e9d-0b3a-4d7b-b472-aa9399ca1f95.png"},"3a296d8c-53c1-4050-a506-5849c3dbed18":{"name":"6","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"F0NU7rUeXuR038qWFdTV7TFIgBzVomSq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3a296d8c-53c1-4050-a506-5849c3dbed18.png"},"8a1df308-e2b1-476e-b8f0-949864b49eb7":{"name":"7","sourceUrl":null,"frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":12,"version":"6GAr48wBmciKvTkFI_8SHfNCYidg6wwj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/8a1df308-e2b1-476e-b8f0-949864b49eb7.png"}}};
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

var ship;
var stars = [];
var lasers;
var asteroids;
var score = 0;
var isGameOver = false;
var asteroidSpeed = 0;
var astroids2;
var astroid3;
var change = 0;
var highScore = 0;
var isStartScreen = true;

var maxSpeed = 8;

function setup() {
  //Game setup
  createCanvas(400, 400);
  ship = createSprite(200, 200);
  ship.setAnimation("1"); 
  ship.scale = 0.125;
  ship.setCollider("rectangle", 0, 0, 140, 290);
  
  lasers = new Group();
  asteroids = new Group();
  asteroids2 = new Group();
  asteroids3 = new Group();
  //Star spawn Location code
  for (var i = 0; i < 250; i++) {
    stars.push({
      x: random(1, 400),
      y: random(1, 400),
      r: random(1, 5)
    });
  }
}

function draw() {
  //Game Control and Start Screen
  if (isStartScreen) {
    background("black");
    fill("whaite");
    textAlign(CENTER, CENTER);
    textSize(37);
    text("ASTEROID BLASTER", width / 2, 80);

    textSize(20);
    text("Controls:\n\nA = Rotate Left\nD = Rotate Right\nW = Thrust\nSPACE = Shoot", 
       width / 2, height / 2);
    textSize(18);
    fill("yellow");
    text("Press SPACE to Start", width / 2, height - 60);
    if (keyWentDown("space")) {
      isStartScreen = false;
    }
    return;
  }
  background("black");
  //Background change
  change = change + 0.05;
  if (change < 20) {
    if (change >= 10) {
      background("gray");
    }
  }
  if (change >= 20) {
    background("brown");
  }
  if (change >= 30) {
    change = 0;
  }
  //High Score
  if (highScore < score) {
    if (score > highScore) {
      highScore = score;
    }
  }
  if (isGameOver) {
    //Game over screen
    change = 0;
    fill("red");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    fill("white");
    textSize(18);
    text("Press 'R' to Restart", width / 2, height / 2 + 40);
    fill("white");
    textSize(16);
    text("High Score: " + highScore, width / 2, height / 2 + 80);
    //Gmae Reset
    if (keyWentDown("r")) {
      resetGame();
    }
    return; 
  }
  
  // Draw stars
  fill("white");
  noStroke();
  for (var i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, stars[i].r, stars[i].r);
  }
  
  // Ship controls
  if (keyDown("a")) {
    ship.rotation -= 10;
  }
  if (keyDown("d")) {
    ship.rotation += 10;
  }
  if (keyDown("w")) {
    ship.velocityX += 1.1 * Math.cos(radians(ship.rotation - 90));
    ship.velocityY += 1.1 * Math.sin(radians(ship.rotation - 90));
  }
  //Slow Down
  if (ship.velocityX > 0) {
  ship.velocityX = ship.velocityX - 0.2;
  if (ship.velocityX < 0) {
    ship.velocityX = 0;
  }
}
if (ship.velocityX < 0) {
  ship.velocityX = ship.velocityX + 0.2;
  if (ship.velocityX > 0) {
    ship.velocityX = 0;
  }
}
if (ship.velocityY > 0) {
  ship.velocityY = ship.velocityY - 0.2;
  if (ship.velocityY < 0) {
    ship.velocityY = 0;
  }
}
if (ship.velocityY < 0) {
  ship.velocityY = ship.velocityY + 0.2;
  if (ship.velocityY > 0) {
    ship.velocityY = 0;
  }
}
  //Max Speed
  var speed = sqrt(ship.velocityX * ship.velocityX + ship.velocityY * ship.velocityY);
  if (speed > maxSpeed) {
  ship.velocityX = (ship.velocityX / speed) * maxSpeed;
  ship.velocityY = (ship.velocityY / speed) * maxSpeed;
}
  // Screen wrap for ship
  if (ship.x > width) {
    ship.x = 0;
  } else if (ship.x < 0) {
    ship.x = width;
  }
  if (ship.y > height) {
    ship.y = 0;
  } else if (ship.y < 0) {
    ship.y = height;
  }
  
  // Shoot laser
  if (keyWentDown("space")) {
    var laser = createSprite(ship.x, ship.y);
    laser.setAnimation("6");   
    laser.scale = 0.15;
    laser.rotation = ship.rotation;
    
    laser.velocity.x = 25 * Math.cos(radians(laser.rotation - 90));
    laser.velocity.y = 25 * Math.sin(radians(laser.rotation - 90));
    
    laser.life = 40;           
    lasers.add(laser);
    playSound("assets/category_digital/laser_fade_3.mp3", false);
  }
  
  // Spawn asteroids more frequently
  if (frameCount % 40 === 0) {  
    spawnAsteroid();
  }
  if (frameCount % 200 === 0) {
    spawnAsteroid2();
  }
  
  // Laser Hits Asteroid
  lasers.overlap(asteroids, function(laser, asteroid) {
    laser.remove();
    asteroid.hitPoints -= 1;
    if ((asteroid.hitPoints) <= 0) {
      asteroid.remove();
      score += 1;
      playSound("assets/category_explosion/retro_game_classic_explosion_1.mp3", false);
    }
  });
  lasers.overlap(asteroids2, function(laser, asteroid2) {
    laser.remove();
    asteroid2.hitPoints -= 1;
    if ((asteroid2.hitPoints) <= 0) {
      spawnAsteroid3(asteroid2.x, asteroid2.y); 
      spawnAsteroid3(asteroid2.x, asteroid2.y); 
      spawnAsteroid3(asteroid2.x, asteroid2.y); 
      spawnAsteroid3(asteroid2.x, asteroid2.y); // pass position
      asteroid2.remove();
      score += 3;
      playSound("assets/category_explosion/retro_game_classic_explosion_9.mp3", false);
    }
  });
  lasers.overlap(asteroids3, function(laser, asteroid3) {
    laser.remove();
    asteroid3.hitPoints -= 1;
    if ((asteroid3.hitPoints) <= 0) {
      asteroid3.remove();
      score += 1;
    }
    playSound("assets/category_explosion/vibrant_game_gas_bass_game_item.mp3", false);
  });
  
  // Asteroid Hits Ship
  asteroids.overlap(ship, function(asteroid, shipSprite) {
    ship.remove();
    isGameOver = true; 
    playSound("assets/category_explosion/vibrant_game_bright_distroy_item_1.mp3", false);
    playSound("assets/poppop.ai---womp-womp-sound-effect.mp3", false);
  });
  asteroids2.overlap(ship, function(asteroid2, shipSprite) {
    ship.remove();
    isGameOver = true; 
    playSound("assets/category_explosion/vibrant_game_bright_distroy_item_1.mp3", false);
    playSound("assets/poppop.ai---womp-womp-sound-effect.mp3", false);
  });
  asteroids3.overlap(ship, function(asteroid2, shipSprite) {
    ship.remove();
    isGameOver = true; 
    playSound("assets/category_explosion/vibrant_game_bright_distroy_item_1.mp3", false);
    playSound("assets/poppop.ai---womp-womp-sound-effect.mp3", false);
  });
  drawSprites();
  fill("white");
  textSize(18);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
}
//remve Sprites When Game Over
function resetGame() {
  ship = createSprite(200, 200);
  ship.setAnimation("1");
  ship.scale = 0.125;
  lasers.removeSprites();
  asteroids.removeSprites();
  asteroids2.removeSprites();
  asteroids3.removeSprites();
  score = 0;
  isGameOver = false;
}
//spawn Asteroid 1
function spawnAsteroid() {
  var asteroid = createSprite(0, 0);
  asteroid.setAnimation("3");
  asteroid.scale = 0.35;
  asteroid.setCollider("circle", 0, 0, 48);
  asteroid.rotation = asteroid.rotation + randomNumber(-2, 2);
  asteroid.rotationSpeed = randomNumber(1, 10);
  asteroid.hitPoints = 2;
  //Spawn at Top Bottom Left Right
  var edge = random(['top', 'bottom', 'left', 'right']);
  var centerX = width / 2;
  var centerY = height / 2;
  
  if (edge === 'top') {
    asteroid.x = random(0, width);
    asteroid.y = 0;
  } else if (edge === 'bottom') {
    asteroid.x = random(0, width);
    asteroid.y = height;
  } else if (edge === 'left') {
    asteroid.x = 0;
    asteroid.y = random(0, height);
  } else if (edge === 'right') {
    asteroid.x = width;
    asteroid.y = random(0, height);
  }
  
  var dirX = centerX - asteroid.x;
  var dirY = centerY - asteroid.y;
  var length = Math.sqrt(dirX * dirX + dirY * dirY);
  dirX /= length;
  dirY /= length;
  //Speed
  var speed = random(2, 3 + asteroidSpeed);
  asteroid.velocity.x = dirX * speed + random(-0.5, 0.8);
  (asteroid.velocity).y = dirY * speed + random(-0.5, 0.8);
  var distanceToShip = dist(asteroid.x, asteroid.y, ship.x, ship.y);
  if (distanceToShip > 0) {
    asteroids.add(asteroid);
  }
  //speed Increase
  if (asteroidSpeed < 15) {
    asteroidSpeed = asteroidSpeed + 0.02;
  }
}
//Spawn Asteriod 2
function spawnAsteroid2() {
  var asteroid2 = createSprite(0, 0);
  asteroid2.setAnimation("5");
  asteroid2.scale = 0.5;
  asteroid2.setCollider("circle", 0, 0, 50);
  asteroid2.rotation = asteroid2.rotation + randomNumber(-2, 2);
  asteroid2.rotationSpeed = randomNumber(1, 10);
  asteroid2.hitPoints = 4;
  
  var edge = random(['top', 'bottom', 'left', 'right']);
  var centerX = width / 2;
  var centerY = height / 2;
  
  if (edge === 'top') {
    asteroid2.x = random(0, width);
    asteroid2.y = 0;
  } else if (edge === 'bottom') {
    asteroid2.x = random(0, width);
    asteroid2.y = height;
  } else if (edge === 'left') {
    asteroid2.x = 0;
    asteroid2.y = random(0, height);
  } else if (edge === 'right') {
    asteroid2.x = width;
    asteroid2.y = random(0, height);
  }
  
  var dirX2 = centerX - asteroid2.x;
  var dirY2 = centerY - asteroid2.y;
  var length = Math.sqrt(dirX2 * dirX2 + dirY2 * dirY2);
  dirX2 /= length;
  dirY2 /= length;
  
  var speed = random(2, 3 + asteroidSpeed);
  (asteroid2.velocity).x = dirX2 * speed + random(-0.5, 0.8);
  (asteroid2.velocity).y = dirY2 * speed + random(-0.5, 0.8);
  var distanceToShip = dist(asteroid2.x, asteroid2.y, ship.x, ship.y);
  if (distanceToShip > 0) {
    asteroids2.add(asteroid2);
  }
}
//Spawn Asteriod 3
function spawnAsteroid3(x, y) {
  var asteroid3 = createSprite(x, y);
  asteroid3.setAnimation("4");
  asteroid3.scale = 0.3;
  asteroid3.setCollider("circle", 15, 15, 27);
  asteroid3.rotation = asteroid3.rotation + randomNumber(-2, 2);
  asteroid3.rotationSpeed = randomNumber(1, 10);
  asteroid3.hitPoints = 1;
  
  var centerX = width / 2;
  var centerY = height / 2;
  var dirX3 = centerX - asteroid3.x;
  var dirY3 = centerY - asteroid3.y;
  var length = Math.sqrt(dirX3 * dirX3 + dirY3 * dirY3);
  dirX3 /= length;
  dirY3 /= length;
  var speed = random(2, 3 + asteroidSpeed);
  (asteroid3.velocity).x = dirX3 * speed + random(-0.5, 0.8);
  (asteroid3.velocity).y = dirY3 * speed + random(-0.5, 0.8);
  asteroids3.add(asteroid3);
}
//Code for Deg
function radians(deg) {
  return ((deg * Math.PI) / 180);
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
