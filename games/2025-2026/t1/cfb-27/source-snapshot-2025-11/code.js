

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4c4aca6c-a40c-4a7e-89da-23aa0bf3dbb1","9dcbdcac-9472-42b6-8f4b-ee37c92c6a3c","de7ad9a7-ebcf-4870-896d-f719e5038621"],"propsByKey":{"4c4aca6c-a40c-4a7e-89da-23aa0bf3dbb1":{"name":"wash","sourceUrl":null,"frameSize":{"x":519,"y":219},"frameCount":1,"looping":true,"frameDelay":12,"version":"sSSIb8ULWSkZpMrAwo0gmCMNbILYxvSV","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":519,"y":219},"rootRelativePath":"assets/4c4aca6c-a40c-4a7e-89da-23aa0bf3dbb1.png"},"9dcbdcac-9472-42b6-8f4b-ee37c92c6a3c":{"name":"wa","sourceUrl":"assets/v3/animations/oOA1W-Prh9IvnVJnsPKdD-G6i6hWAqQ1ZdmhMnNRRZA/9dcbdcac-9472-42b6-8f4b-ee37c92c6a3c.png","frameSize":{"x":576,"y":324},"frameCount":1,"looping":true,"frameDelay":4,"version":"dtwVUvs9lviOrE3KiGYiHkqudFYX2Foh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":576,"y":324},"rootRelativePath":"assets/v3/animations/oOA1W-Prh9IvnVJnsPKdD-G6i6hWAqQ1ZdmhMnNRRZA/9dcbdcac-9472-42b6-8f4b-ee37c92c6a3c.png"},"de7ad9a7-ebcf-4870-896d-f719e5038621":{"name":"seah","sourceUrl":"assets/v3/animations/oOA1W-Prh9IvnVJnsPKdD-G6i6hWAqQ1ZdmhMnNRRZA/de7ad9a7-ebcf-4870-896d-f719e5038621.png","frameSize":{"x":173,"y":199},"frameCount":1,"looping":true,"frameDelay":4,"version":"eaNbJlCEuQkJCwM6ICryVMDtsBozYpPx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":173,"y":199},"rootRelativePath":"assets/v3/animations/oOA1W-Prh9IvnVJnsPKdD-G6i6hWAqQ1ZdmhMnNRRZA/de7ad9a7-ebcf-4870-896d-f719e5038621.png"}}};
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
var wash = createSprite(200, 200);
wash.setAnimation("wash");
wash.scale = .8;
var seah = createSprite(200, 200);
seah.setAnimation("seah");

// Create your sprites here

function draw() {
  wash.setAnimation("wash");

  // update sprites

  drawSprites();
}
text("Washington 1", 30, 20);
text("Oregon", 40, 50);

// Create your functions here
if (seah) {
  seah.velocityX = 10;
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
