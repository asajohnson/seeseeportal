

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6b53e73d-b95f-40a4-9311-d33bcbb48c82","66645a07-53fa-42ab-9c91-e6051adcc6ce","75382405-e482-453e-ab0f-1708fb4027ce","69b4c5c6-399d-45e4-b062-a1c6241da496","45b3f743-4995-493a-97c0-900bb9478085","f614ce65-e69f-4787-b202-61e0f989038c","f36e3f2e-d5d9-4078-9422-68d014134d81","e6ff6f36-59e2-4edb-8c6a-fe641684f1f5","a78fd536-f4a0-4afb-bc92-1ba7452bf6ca","681a32d1-3359-4328-b105-c4d7eeb534ab","d2dec150-ab4e-4452-bb7e-d6be8acea7ee","a09ab240-3855-4ae5-a3f7-a6e0a715fd29","a2e64562-1965-4e98-b06f-3e2f1985be70","828965c7-1b3b-4f38-b051-beef6ad9ef02","8ac05de3-e656-4620-bb18-50e367dcf044","db961a12-01c6-4967-a60d-a41e2dcea699","4a77c218-025e-40d2-8459-285eae8cc15b","c34f863b-9e3e-4b71-a999-6528607deecd","93fa52b9-beef-4687-ad1e-0d644d4cd485"],"propsByKey":{"6b53e73d-b95f-40a4-9311-d33bcbb48c82":{"name":"backgroundone","sourceUrl":"assets/v3/animations/95a1fba4-9fa9-455a-833f-33717c86d72c/6b53e73d-b95f-40a4-9311-d33bcbb48c82.png","frameSize":{"x":684,"y":573},"frameCount":1,"looping":true,"frameDelay":4,"version":"aI6eZAMzwtEaij9UtZuDETki0RUnI9hK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":684,"y":573},"rootRelativePath":"assets/v3/animations/95a1fba4-9fa9-455a-833f-33717c86d72c/6b53e73d-b95f-40a4-9311-d33bcbb48c82.png"},"66645a07-53fa-42ab-9c91-e6051adcc6ce":{"name":"floatingisland1","sourceUrl":null,"frameSize":{"x":44,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"wj.7uWcKn6NGb_rXisj4b0NxpY73fbSO","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":20},"rootRelativePath":"assets/66645a07-53fa-42ab-9c91-e6051adcc6ce.png"},"75382405-e482-453e-ab0f-1708fb4027ce":{"name":"floatingisland2","sourceUrl":null,"frameSize":{"x":56,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"WXUIsjffWUZV3nmFYTuTasvmD9rGWnrC","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":29},"rootRelativePath":"assets/75382405-e482-453e-ab0f-1708fb4027ce.png"},"69b4c5c6-399d-45e4-b062-a1c6241da496":{"name":"floatingisland3","sourceUrl":null,"frameSize":{"x":42,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"rSfEn.zmeOaLXp8MQYEoNT6.P8OVbqVD","loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":18},"rootRelativePath":"assets/69b4c5c6-399d-45e4-b062-a1c6241da496.png"},"45b3f743-4995-493a-97c0-900bb9478085":{"name":"floatingisland4","sourceUrl":null,"frameSize":{"x":44,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"zM1hnEfsDt94N1EqhuEh6ooCkjlzjB8q","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":21},"rootRelativePath":"assets/45b3f743-4995-493a-97c0-900bb9478085.png"},"f614ce65-e69f-4787-b202-61e0f989038c":{"name":"floatingisland5","sourceUrl":null,"frameSize":{"x":62,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"D3OxQzXQ0LtzXUsKncb4WZfKipiaGyix","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":31},"rootRelativePath":"assets/f614ce65-e69f-4787-b202-61e0f989038c.png"},"f36e3f2e-d5d9-4078-9422-68d014134d81":{"name":"floatingisland6","sourceUrl":null,"frameSize":{"x":69,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"CSzmaiWJU0JrFjI8OOOR_9tP3TeQg69x","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":40},"rootRelativePath":"assets/f36e3f2e-d5d9-4078-9422-68d014134d81.png"},"e6ff6f36-59e2-4edb-8c6a-fe641684f1f5":{"name":"floatingisland7","sourceUrl":null,"frameSize":{"x":59,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"yBpjaHzZ8Zu0ldM5I_lb1j73LIodeS.p","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":31},"rootRelativePath":"assets/e6ff6f36-59e2-4edb-8c6a-fe641684f1f5.png"},"a78fd536-f4a0-4afb-bc92-1ba7452bf6ca":{"name":"floatingisland8","sourceUrl":null,"frameSize":{"x":46,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"NVTAfu5clROezRGoHAtApp3EqFY9v6FR","loadedFromSource":true,"saved":true,"sourceSize":{"x":46,"y":29},"rootRelativePath":"assets/a78fd536-f4a0-4afb-bc92-1ba7452bf6ca.png"},"681a32d1-3359-4328-b105-c4d7eeb534ab":{"name":"floatingisland9","sourceUrl":null,"frameSize":{"x":50,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"bp6ucK27dsKYRghtjQu.H4CPLj8nc2xH","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":27},"rootRelativePath":"assets/681a32d1-3359-4328-b105-c4d7eeb534ab.png"},"d2dec150-ab4e-4452-bb7e-d6be8acea7ee":{"name":"floatingisland10","sourceUrl":null,"frameSize":{"x":57,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":".u.0OEagkyyhoY8Sz9vaU3Oi6aRpJ8zw","loadedFromSource":true,"saved":true,"sourceSize":{"x":57,"y":18},"rootRelativePath":"assets/d2dec150-ab4e-4452-bb7e-d6be8acea7ee.png"},"a09ab240-3855-4ae5-a3f7-a6e0a715fd29":{"name":"floatingisland11","sourceUrl":null,"frameSize":{"x":40,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":".dgOvDF6HCNUq5uQPNd2UxE23sgRg5ew","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":12},"rootRelativePath":"assets/a09ab240-3855-4ae5-a3f7-a6e0a715fd29.png"},"a2e64562-1965-4e98-b06f-3e2f1985be70":{"name":"endisland","sourceUrl":null,"frameSize":{"x":75,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"jwJ0dzF22pRAwHDzGphzxTG3hW.lO.Ir","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":28},"rootRelativePath":"assets/a2e64562-1965-4e98-b06f-3e2f1985be70.png"},"828965c7-1b3b-4f38-b051-beef6ad9ef02":{"name":"startisland","sourceUrl":null,"frameSize":{"x":75,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"w3X2qjfMNN8bDStFaym7pwl_Y2kGn208","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":51},"rootRelativePath":"assets/828965c7-1b3b-4f38-b051-beef6ad9ef02.png"},"8ac05de3-e656-4620-bb18-50e367dcf044":{"name":"link","sourceUrl":null,"frameSize":{"x":47,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"U6yaoXgG2u4dHWrM3NMEPyg0rx1MXdFe","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":100},"rootRelativePath":"assets/8ac05de3-e656-4620-bb18-50e367dcf044.png"},"db961a12-01c6-4967-a60d-a41e2dcea699":{"name":"air","sourceUrl":null,"frameSize":{"x":100,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"rWRNzBN5y7rwg00.RmjlFFcicuMaJkYj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":1},"rootRelativePath":"assets/db961a12-01c6-4967-a60d-a41e2dcea699.png"},"4a77c218-025e-40d2-8459-285eae8cc15b":{"name":"youwon","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"a5oUpir5Mry3dZpIx39c_X1yaJz.zCGw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4a77c218-025e-40d2-8459-285eae8cc15b.png"},"c34f863b-9e3e-4b71-a999-6528607deecd":{"name":"instructions","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fCFYZWmG._fdHfrxohijCO7MqDKjo4fK","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c34f863b-9e3e-4b71-a999-6528607deecd.png"},"93fa52b9-beef-4687-ad1e-0d644d4cd485":{"name":"gameover","sourceUrl":"assets/v3/animations/95a1fba4-9fa9-455a-833f-33717c86d72c/93fa52b9-beef-4687-ad1e-0d644d4cd485.png","frameSize":{"x":263,"y":281},"frameCount":1,"looping":true,"frameDelay":4,"version":"wunqToWQAtQrZXx7ka982ywtOrLq0066","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":263,"y":281},"rootRelativePath":"assets/v3/animations/95a1fba4-9fa9-455a-833f-33717c86d72c/93fa52b9-beef-4687-ad1e-0d644d4cd485.png"}}};
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

//variables
var bg = createSprite(200, 200);
var air = createSprite(200, 260);
var startisland = createSprite(140, 300);
var floatingisland1 = createSprite(540, 300);
var floatingisland2 = createSprite(940, 300);
var floatingisland3 = createSprite(1340, 300);
var floatingisland4 = createSprite(1740, 300);
var floatingisland5 = createSprite(2140, 300);
var floatingisland6 = createSprite(2540, 300);
var floatingisland7 = createSprite(2940, 300);
var floatingisland8 = createSprite(3340, 300);
var floatingisland9 = createSprite(3740, 300);
var floatingisland10 = createSprite(4040, 300);
var floatingisland11 = createSprite(4440, 300);
var endisland = createSprite(4840, 300);
var link = createSprite(40, 190);

//animation
bg.setAnimation("backgroundone");
link.setAnimation("link");
air.setAnimation("air");
air.visible = 0;
air.scale = 5;
startisland.setAnimation("startisland");
startisland.scale = 3;
floatingisland1.setAnimation("floatingisland1");
floatingisland1.scale= 5;
floatingisland2.setAnimation("floatingisland2");
floatingisland2.scale = 4;
floatingisland3.setAnimation("floatingisland3");
floatingisland3.scale = 5;
floatingisland4.setAnimation("floatingisland4");
floatingisland4.scale = 5;
floatingisland5.setAnimation("floatingisland5");
floatingisland5.scale = 5;
floatingisland6.setAnimation("floatingisland6");
floatingisland6.scale = 5;
floatingisland7.setAnimation("floatingisland7");
floatingisland7.scale = 5;
floatingisland8.setAnimation("floatingisland8");
floatingisland8.scale = 5;
floatingisland9.setAnimation("floatingisland9");
floatingisland9.scale = 5;
floatingisland10.setAnimation("floatingisland10");
floatingisland10.scale = 5;
floatingisland11.setAnimation("floatingisland11");
floatingisland11.scale = 10;
endisland.setAnimation("endisland");
endisland.scale = 3;

//velocity
startisland.velocityX = -5;
floatingisland1.velocityX = -5;
floatingisland2.velocityX = -5;
floatingisland3.velocityX = -5;
floatingisland4.velocityX = -5;
floatingisland5.velocityX = -5;
floatingisland6.velocityX = -5;
floatingisland7.velocityX = -5;
floatingisland8.velocityX = -5;
floatingisland9.velocityX = -5;
floatingisland10.velocityX = -5;
floatingisland11.velocityX = -5;
endisland.velocityX = -5;

function draw() {
  // BACKGROUND
  floatingisland1.setCollider("rectangle");

  //jump
  link.velocityY = 3.5;
  function playercontrols() {
    link.velocityY = -5;
  }
  if (keyDown("space")) {
    playercontrols();
  }
  if (keyDown("up")) {
    playercontrols();
  }
  if (link.y < 100) {
    link.velocityY = 3;
  }
  if (link.isTouching(startisland)) {
    instructions.visible = 100;
  }
  if (link.isTouching(floatingisland1)) {
    instructions.visible = 100;
  }
  if (link.isTouching(floatingisland2)) {
    instructions.visible = 100;
  }
  if (link.isTouching(floatingisland3)) {
    instructions.visible = 100;
  }

  //ground
link.collide(startisland);
link.collide(floatingisland1);
link.collide(floatingisland2);
link.collide(floatingisland3);
link.collide(floatingisland4);
link.collide(floatingisland5);
link.collide(floatingisland6);
link.collide(floatingisland7);
link.collide(floatingisland8);
link.collide(floatingisland9);
link.collide(floatingisland10);
link.collide(floatingisland11);
link.collide(endisland);

var onGround =
  link.isTouching(startisland) ||
  link.isTouching(floatingisland1) ||
  link.isTouching(floatingisland2) ||
  link.isTouching(floatingisland3) ||
  link.isTouching(floatingisland4) ||
  link.isTouching(floatingisland5) ||
  link.isTouching(floatingisland6) ||
  link.isTouching(floatingisland7) ||
  link.isTouching(floatingisland8) ||
  link.isTouching(floatingisland9) ||
  link.isTouching(floatingisland10) ||
  link.isTouching(floatingisland11);
  //jump
if (keyWentDown("space") && onGround) {
  link.velocityY = -10;
}

  //you won
  if (link.isTouching(endisland)) {
    console.log("touch end island");
    youwon.visible = 100;
  }
  //falling
  if (link.isTouching(air)) { link.velocityY = 8; }
  //game over
  function showgameover() {
    gameover.visible = 100;
    gameover.scale = 2;
    instructions.visible = 0;
  }
  if (link.y > 400) {
    showgameover();
  }
  if (link.x < 0) {
    showgameover();
  }
  drawSprites();
}
var gameover = createSprite(200, 200);
gameover.setAnimation("gameover");
gameover.visible = 0;
var youwon = createSprite(200, 200);
youwon.setAnimation("youwon");
youwon.visible = 0;
var instructions = createSprite(200, 200);
instructions.setAnimation("instructions");
instructions.visible = 0;




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
