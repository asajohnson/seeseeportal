

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c78bcc18-0af8-4631-a3b4-1c80c8354a92","b7f96631-66cf-4c85-a01b-db9b6c568aa4","4bf3dfe6-a336-4dee-ad48-a640a7e78376","3f6afdfa-3043-43e2-837f-eb73700f0642"],"propsByKey":{"c78bcc18-0af8-4631-a3b4-1c80c8354a92":{"name":"bread","sourceUrl":null,"frameSize":{"x":293,"y":262},"frameCount":1,"looping":true,"frameDelay":12,"version":"gRdGEvPANvqXbvkykUyUOQFp_59VqfxW","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":262},"rootRelativePath":"assets/c78bcc18-0af8-4631-a3b4-1c80c8354a92.png"},"b7f96631-66cf-4c85-a01b-db9b6c568aa4":{"name":"meat","sourceUrl":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png"},"4bf3dfe6-a336-4dee-ad48-a640a7e78376":{"name":"veggie","sourceUrl":null,"frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":12,"version":"QuStr9cg0n_Tk093Dv_AUfuD6ulACmW9","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/4bf3dfe6-a336-4dee-ad48-a640a7e78376.png"},"3f6afdfa-3043-43e2-837f-eb73700f0642":{"name":"grid_1","sourceUrl":"assets/api/v1/animation-library/gamelab/6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr/category_backgrounds/background_grid.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/6udB34wA0EBLf0wwVkEWGCKKSjt5rRRr/category_backgrounds/background_grid.png"}}};
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

var veggie;
var meat;
var bread;
var score = 0;
var gameState = "title";
var speed = 4;

bread = createSprite(200, 200);
bread.setAnimation("bread");
bread.scale = 0.2;
bread.visible = false;

veggie = createSprite(450, randomNumber(50, 350));
veggie.setAnimation("veggie");
veggie.velocityX = -speed;
veggie.scale = 0.2;
veggie.visible = false;

meat = createSprite(450, randomNumber(50, 350));
meat.setAnimation("meat");
meat.velocityX = -speed;
meat.scale = 0.2;
meat.visible = false;

function draw() {
  background("white");

  if (gameState == "title") {
    fill("black");
    textSize(40);
    textAlign(CENTER);
    text("Protein", 200, 120);

    fill("lightgreen");
    rect(125, 180, 150, 50);

    fill("black");
    textSize(25);
    text("START", 200, 213);

    if (mouseIsPressed && 
        mouseX > 125 && mouseX < 275 && 
        mouseY > 180 && mouseY < 230) {
      gameState = "play";
      bread.visible = true;
      veggie.visible = true;
      meat.visible = true;
    }

    return;
  }

  if (score <= -1) {
    background("black");

    fill("red");
    textSize(40);
    textAlign(CENTER);
    text("GAME OVER", 200, 180);

    fill("white");
    textSize(25);
    text("Final Score: " + score, 200, 230);

    veggie.velocityX = 0;
    meat.velocityX = 0;

    return;
  }

  if (keyDown("left")) {
    bread.x -= 8;
  }
  if (keyDown("right")) {
    bread.x += 8;
  }
  if (keyDown("up")) {
    bread.y -= 8;
  }
  if (keyDown("down")) {
    bread.y += 8;
  }

  if (bread.isTouching(veggie)) {
    score--;
    veggie.x = 450;
    veggie.y = randomNumber(50, 350);
  }

  if (bread.isTouching(meat)) {
    score++;
    meat.x = 450;
    meat.y = randomNumber(50, 350);
  }

  if (veggie.x < -50) {
    veggie.x = 450;
    veggie.y = randomNumber(50, 350);
  }

  if (meat.x < -50) {
    meat.x = 450;
    meat.y = randomNumber(50, 350);
  }

  speed += 0.005;

  veggie.velocityX = -speed;
  meat.velocityX = -speed;

  drawSprites();

  fill("black");
  textSize(20);
  textAlign(LEFT);
  text("Score: " + score, 10, 25);
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
