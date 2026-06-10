

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["021f9971-094e-4f03-9234-4fb8bbbcdd86","4bbc1826-69cb-48a6-82a7-58d12efbee88","de5987d9-5daa-459b-ab3a-a4d80a1ecd94","d319d7a0-0676-46ee-924c-937880614804","fdf6931c-d90c-4fd8-930b-c4f59a186bbb","391490ce-e5c9-435c-9f70-e3669b48b4f4"],"propsByKey":{"021f9971-094e-4f03-9234-4fb8bbbcdd86":{"name":"sneaker guy","sourceUrl":"assets/v3/animations/7c75bfc1-9bac-4e9b-90b9-56deaa530a51/021f9971-094e-4f03-9234-4fb8bbbcdd86.png","frameSize":{"x":341,"y":475},"frameCount":1,"looping":true,"frameDelay":4,"version":"emwgJQeKaJEDYJpt5PU1Mey6YMlZsSfU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":341,"y":475},"rootRelativePath":"assets/v3/animations/7c75bfc1-9bac-4e9b-90b9-56deaa530a51/021f9971-094e-4f03-9234-4fb8bbbcdd86.png"},"4bbc1826-69cb-48a6-82a7-58d12efbee88":{"name":"sci","sourceUrl":"assets/v3/animations/7c75bfc1-9bac-4e9b-90b9-56deaa530a51/4bbc1826-69cb-48a6-82a7-58d12efbee88.png","frameSize":{"x":310,"y":163},"frameCount":1,"looping":true,"frameDelay":4,"version":"mI3y2Us6WeuYczrlUVdbAYR35_hzfzj8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":163},"rootRelativePath":"assets/v3/animations/7c75bfc1-9bac-4e9b-90b9-56deaa530a51/4bbc1826-69cb-48a6-82a7-58d12efbee88.png"},"de5987d9-5daa-459b-ab3a-a4d80a1ecd94":{"name":"evil tom","sourceUrl":null,"frameSize":{"x":398,"y":320},"frameCount":3,"looping":true,"frameDelay":12,"version":"dOwQl5CRPvEtGkGI0TFExbcrV1mFtzKc","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":796,"y":640},"rootRelativePath":"assets/de5987d9-5daa-459b-ab3a-a4d80a1ecd94.png"},"d319d7a0-0676-46ee-924c-937880614804":{"name":"sci2","sourceUrl":null,"frameSize":{"x":178,"y":182},"frameCount":1,"looping":true,"frameDelay":12,"version":"CXyYhZq0nabJlmy3dG8lmY4zDhAP9.dn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":182},"rootRelativePath":"assets/d319d7a0-0676-46ee-924c-937880614804.png"},"fdf6931c-d90c-4fd8-930b-c4f59a186bbb":{"name":"sci3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"u_Y2KWjkcaYQI7vZ8TZB3XOi2t2M_pCL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fdf6931c-d90c-4fd8-930b-c4f59a186bbb.png"},"391490ce-e5c9-435c-9f70-e3669b48b4f4":{"name":"block","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"kEPoyRAr_azfsylFvnn.mvjn8K6oiH4T","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/391490ce-e5c9-435c-9f70-e3669b48b4f4.png"}}};
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

var health = 100;
var score = 0;

// PLAYER
var you = createSprite(50, 400);
var block = createSprite(200, 200);
you.setAnimation("sneaker guy");
you.scale = 0.15;
you.visible = false;
you.velocityY = 0;
you.debug = true;

var tom = createSprite(-100, 300);
block.setAnimation("block");
tom.visible = false;
block.visible = false;
tom.debug = true;

var building = createSprite(200, 200);
building.setAnimation("sci");
building.scale = 1;

var spikes = createGroup();
var burgers = createGroup();

World.frameRate = 20;

var started = false;
var scene = 2;
var canSwitch = true;

// SPEED



function draw() {

  // BACKGROUND
  var x = randomNumber(175, 255);
  background(rgb(x, x, x));

  arc(200, 200, 350, 350, 90, 180);
  arc(200, 200, 350, 350, 270, 360);

  fill("white");
  arc(200, 200, 350, 350, 0, 90);
  arc(200, 200, 350, 350, 180, 270);
  if (mouseDown("leftButton") && !started) {
    building.scale += 0.03;
  }

  if (building.scale > 2 && !started) {
playSound("sound.mp3", true);

    building.setAnimation("sci2");
    building.scale = 4;

tom.setAnimation("evil tom");
tom.visible = true;
block.visible = true;
tom.scale = 0.4;

you.visible = true;

started = true;

  }
if (tom.collide(you)) {
  health = 0;
}

  you.velocityY += 0.6;

  if (you.y > 250) {
    you.y = 300;
    you.velocityY = 0;
  }

  if (you.x >= 400 && canSwitch) {

    tom.x -= 400;
    you.x -= 400;

    // SWITCH BACKGROUND
    if (scene === 2) {
      building.setAnimation("sci3");
      scene = 3;
    } else {
      building.setAnimation("sci2");
      scene = 2;
    }
canSwitch = false;
  }

if (you.x < 380) {
    canSwitch = true;
  }



  building.depth = 0;
  tom.depth = 1;
  you.depth = 2;
  spikes.setDepthEach(10);
  burgers.setDepthEach(9);

  drawSprites();

  // UI
  fill("black");
  textSize(20);
  text("Score: " + score, 10, 20);
  text("Health: " + health, 280, 30);
if (keyDown("right")) {
  you.x = you.x + 2;
  tom.x = tom.x + 2;
}
if (keyDown("left")) {
  you.x = you.x - 2;
  tom.x = tom.x - 2;
}
if (keyDown("up")) {
    you.velocityY = -10;
  }

if (health <= 0) {
    stopSound("sound.mp3");
    playSound("narwal.mp3", true);
    background("black");
    fill("red");
    textSize(50);
    text("you win", 60, 200);
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
