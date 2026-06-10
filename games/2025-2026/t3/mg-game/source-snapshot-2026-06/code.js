

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6043ff4e-a0a6-46a0-b8d6-1b288bded237","f160c948-edc2-43a7-a2ae-b921267b6f90","2530797a-a6a1-4f68-8f60-2e0013ff6dd4","adab2a8a-9cfe-4c63-9859-fc3572f66881","ab1e86f0-58bc-4fa8-92ad-4e96a31c1d59","72fc09d4-85a0-43a4-b7bd-78d22b160bd4"],"propsByKey":{"6043ff4e-a0a6-46a0-b8d6-1b288bded237":{"name":"sports_scoccer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"f160c948-edc2-43a7-a2ae-b921267b6f90":{"name":"sigmatom-yara-yara-phonk (2).png_1","sourceUrl":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/f160c948-edc2-43a7-a2ae-b921267b6f90.png","frameSize":{"x":371,"y":498},"frameCount":1,"looping":true,"frameDelay":4,"version":"hBnzl.bHWIrDKLbnNNqQSHYU5aH3Cr32","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":371,"y":498},"rootRelativePath":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/f160c948-edc2-43a7-a2ae-b921267b6f90.png"},"2530797a-a6a1-4f68-8f60-2e0013ff6dd4":{"name":"soccer_field_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"EEAOddmZAjXREvdioaEfucnUC67ftVQe","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2530797a-a6a1-4f68-8f60-2e0013ff6dd4.png"},"adab2a8a-9cfe-4c63-9859-fc3572f66881":{"name":"play","sourceUrl":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/adab2a8a-9cfe-4c63-9859-fc3572f66881.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"IU5idC88XqquOm6AcSw.Md3g6BY_cfqq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/adab2a8a-9cfe-4c63-9859-fc3572f66881.png"},"ab1e86f0-58bc-4fa8-92ad-4e96a31c1d59":{"name":"c25e43d66f6f5b098b51265a91c3a2cf.jpg_1","sourceUrl":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/ab1e86f0-58bc-4fa8-92ad-4e96a31c1d59.png","frameSize":{"x":236,"y":426},"frameCount":1,"looping":true,"frameDelay":4,"version":"5ncd_FaSbQW2ePg1nSD1ZzA0LNRYnvES","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":426},"rootRelativePath":"assets/v3/animations/769f9362-868a-48b5-b544-dfd20eb45f14/ab1e86f0-58bc-4fa8-92ad-4e96a31c1d59.png"},"72fc09d4-85a0-43a4-b7bd-78d22b160bd4":{"name":"soccer_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
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

var player;
var player = createSprite(200, 200);
player.setAnimation("sigmatom-yara-yara-phonk (2).png_1");
player.visible = false;
var bg1;
var bg1 = createSprite(200, 200);
bg1.setAnimation("soccer_field_1");
bg1.visible = false;
var ball;
var ball = createSprite(200, 200);
ball.setAnimation("soccer_blue_1");
ball.visible = false;
var bg2;
var bg2 = createSprite(200, 200);
bg2.setAnimation("sports_scoccer_1");
bg2.visible = false;
var playbutton;
test = randomNumber(1, 2);
function Background() {
  
}
function draw() {
  background(rgb(0, 0, 0));
  textFont("Times New Roman");
  textSize(52);
  text("Soccer game", 60, 140);
  var playbutton = createSprite(200, 250);
  playbutton.setAnimation("play");
  playbutton.scale = 0.8;
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
