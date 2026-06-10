

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c417202f-63da-49f8-a9fc-c3245e5f5cf2","13d33cd3-16eb-4470-b377-f2d9a8e7c8f6","3d7c0229-d7de-46c4-a9fc-874d0fad56c7","ef56f4cd-801f-425f-94ed-c11e5491561c","867c03ed-2d48-4b13-9a9d-597410d0aa1f","f37e0511-77e4-4d9a-aeb6-6d05be82d55a","3fe4b8de-071c-4b95-989b-ecd3ef51a988","3ca5eb76-1401-4a04-85f1-f804c0a53327","17d87c64-9f39-46f2-a3a6-2c063aaea265"],"propsByKey":{"c417202f-63da-49f8-a9fc-c3245e5f5cf2":{"name":"f","sourceUrl":null,"frameSize":{"x":736,"y":414},"frameCount":1,"looping":true,"frameDelay":12,"version":"gdAx3LM80onJ4Edm03xGnyJddxyrYWIH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":736,"y":414},"rootRelativePath":"assets/c417202f-63da-49f8-a9fc-c3245e5f5cf2.png"},"13d33cd3-16eb-4470-b377-f2d9a8e7c8f6":{"name":"w","sourceUrl":"assets/v3/animations/90e7f2b8-d84c-473c-b0d3-9e2868e0c998/13d33cd3-16eb-4470-b377-f2d9a8e7c8f6.png","frameSize":{"x":525,"y":350},"frameCount":1,"looping":true,"frameDelay":4,"version":"yu39CRndMhdK2QW2B1xZDa4z4uJmxkgC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":525,"y":350},"rootRelativePath":"assets/v3/animations/90e7f2b8-d84c-473c-b0d3-9e2868e0c998/13d33cd3-16eb-4470-b377-f2d9a8e7c8f6.png"},"3d7c0229-d7de-46c4-a9fc-874d0fad56c7":{"name":"p","sourceUrl":null,"frameSize":{"x":64,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"5NrmYDEBfi4fNHKsmRK26YeS.IY81kje","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":59},"rootRelativePath":"assets/3d7c0229-d7de-46c4-a9fc-874d0fad56c7.png"},"ef56f4cd-801f-425f-94ed-c11e5491561c":{"name":"it","sourceUrl":null,"frameSize":{"x":64,"y":59},"frameCount":1,"looping":true,"frameDelay":12,"version":"ynaBXD7_UYnNBHmMT.2jMBWqChAqveXI","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":59},"rootRelativePath":"assets/ef56f4cd-801f-425f-94ed-c11e5491561c.png"},"867c03ed-2d48-4b13-9a9d-597410d0aa1f":{"name":"log","sourceUrl":null,"frameSize":{"x":211,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"eJwDgS5zBz2Mp_exOqPUZfJymcZ.s7OT","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":60},"rootRelativePath":"assets/867c03ed-2d48-4b13-9a9d-597410d0aa1f.png"},"f37e0511-77e4-4d9a-aeb6-6d05be82d55a":{"name":"log2","sourceUrl":null,"frameSize":{"x":211,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"VXEcWZNngNXhiSCxYNZFnMJtU64zVGRj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":60},"rootRelativePath":"assets/f37e0511-77e4-4d9a-aeb6-6d05be82d55a.png"},"3fe4b8de-071c-4b95-989b-ecd3ef51a988":{"name":"log3","sourceUrl":null,"frameSize":{"x":211,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"gzP_ODbB.dGPhX_lKQKVay_Icgx3iVMS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":60},"rootRelativePath":"assets/3fe4b8de-071c-4b95-989b-ecd3ef51a988.png"},"3ca5eb76-1401-4a04-85f1-f804c0a53327":{"name":"b","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TB9By5quEhe8H2DP5fdVC_1c3rZof65B","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3ca5eb76-1401-4a04-85f1-f804c0a53327.png"},"17d87c64-9f39-46f2-a3a6-2c063aaea265":{"name":"tree","sourceUrl":null,"frameSize":{"x":130,"y":188},"frameCount":1,"looping":true,"frameDelay":12,"version":"aeyRWB22o7HKdIFtqOd9JoDTSClzM8gK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":188},"rootRelativePath":"assets/17d87c64-9f39-46f2-a3a6-2c063aaea265.png"}}};
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

var b = createSprite(250, 250);
var p = createSprite(351, 171);
var it = createSprite(345, 280);
var log = createSprite(208, 113);
var log2 = createSprite(83, 252);
var log3 = createSprite(317, 252);


p.setAnimation("p");
b.setAnimation("b");
it.setAnimation("it");
log.setAnimation("log");
log2.setAnimation("log2");
log3.setAnimation("log3");


b.scale = 5;
p.scale = 0.5;
it.scale = 0.5;
log.scale = 0.7;
log2.scale = 0.7;
log3.scale = 0.7;
log.rotation = 90;
log2.rotation = 90;
log3.rotation = 90;
log.visible = false;
log2.visible = false;
log3.visible = false;
function draw() {
  background("white");
 
  if (keyWentDown("1")) {
    p.x = 0;
    p.y = 0;
    b.setAnimation("f");
    b.scale = 1;
    b.y = 200;
 
    log.visible = true;
    log2.visible = true;
    log3.visible = true;
  }
 
  if (keyWentDown("2")) {
    log.visible = true;
    log2.visible = true;
    log3.visible = false;
    b.setAnimation("w");
    p.x = 0;
    p.y = 0;
    b.scale = 1.2;
    b.y = 200;
    log.setAnimation("tree");
    log2.setAnimation("tree");
    log3.setAnimation("tree");
    log.x = 102;
    log.y = 280;
    log.rotation = 135;
    log2.x = 302;
    log2.y = 130;
    log2.rotation = 315;
    log.scale = 0.6;
    log2.scale = 0.6;
    log3.scale = 0.6;
 
  }
 
  
  
 
  if (log.visible) {
    p.collide(log);
    it.collide(log);
  }
  if (log2.visible) {
    p.collide(log2);
    it.collide(log2);
  }
  if (log3.visible) {
    p.collide(log3);
    it.collide(log3);
  }
 
  if (keyDown("up")) {
    p.velocityY = -4;
  } else if (keyDown("down")) {
    p.velocityY = 4;
  } else {
    p.velocityY = 0;
  }
 
  if (keyDown("right")) {
    p.velocityX = 4;
  } else if (keyDown("left")) {
    p.velocityX = -4;
  } else {
    p.velocityX = 0;
  }
 
  // Player 2 movement
  if (keyDown("w")) {
    it.velocityY = -4;
  } else if (keyDown("s")) {
    it.velocityY = 4;
  } else {
    it.velocityY = 0;
  }
 
  if (keyDown("d")) {
    it.velocityX = 4;
  } else if (keyDown("a")) {
    it.velocityX = -4;
  } else {
    it.velocityX = 0;
  }
  if (it.isTouching(p)) {
    background("black");
    log.visible = false;
    log2.visible = false;
    log3.visible = false;
    b.visible = false;
    it.visible = false;
    p.visible = false;
    fill("teal");
    textSize(70);
    text("Tagged!", 80, 180);
  }
 
  p.x = constrain(p.x, 20, 380);
  p.y = constrain(p.y, 20, 380);
 
  it.x = constrain(it.x, 20, 380);
  it.y = constrain(it.y, 20, 380);
 
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
