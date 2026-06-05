

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d86249b-2c9d-43a5-91cd-d7b1e284be7c","ce26699c-ee49-46b2-a57c-24b74da88717","f4a3e1fe-9629-4492-9e64-93363aa1b175","72b6dcb3-22f4-4571-848d-0fcff9896b90","be6d713b-c455-4c96-8165-d53757e17645","4731bcec-391d-441c-80c9-595dee89f9fc","d2874025-177a-4b04-b205-5d6d85578cf5","225fc42b-c896-4aaa-bc55-235fac61c45d","f111b648-cf7a-4a05-af32-298c38347e4a","64b6ec65-abd4-44d4-8493-ceb093f0a3aa"],"propsByKey":{"7d86249b-2c9d-43a5-91cd-d7b1e284be7c":{"name":"dimon.jpg_1","sourceUrl":null,"frameSize":{"x":92,"y":92},"frameCount":4,"looping":true,"frameDelay":3,"version":"IhvVT.cEKKHTlzxNFrRdzSy_8wT7hoyc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":184},"rootRelativePath":"assets/7d86249b-2c9d-43a5-91cd-d7b1e284be7c.png"},"ce26699c-ee49-46b2-a57c-24b74da88717":{"name":"BFP1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uAPFwSs0P3mV3oREZj3d3eAzQGhlnixQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ce26699c-ee49-46b2-a57c-24b74da88717.png"},"f4a3e1fe-9629-4492-9e64-93363aa1b175":{"name":"oh.jpg_1","sourceUrl":null,"frameSize":{"x":183,"y":183},"frameCount":1,"looping":true,"frameDelay":12,"version":"E5iy3Ckio96lIqmdQlcQvNeTtYCh1E6r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":183,"y":183},"rootRelativePath":"assets/f4a3e1fe-9629-4492-9e64-93363aa1b175.png"},"72b6dcb3-22f4-4571-848d-0fcff9896b90":{"name":"Ye","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"nepRUVzpdIqQ41LVdOAOLI.P3zxydJDZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/72b6dcb3-22f4-4571-848d-0fcff9896b90.png"},"be6d713b-c455-4c96-8165-d53757e17645":{"name":"Or","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UKgJJonnv6uzvWvvQxX8RnNSmQuYRtO_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/be6d713b-c455-4c96-8165-d53757e17645.png"},"4731bcec-391d-441c-80c9-595dee89f9fc":{"name":"Blu","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"..K40LvxCVAVVlrGo8OD191jePsgXIok","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4731bcec-391d-441c-80c9-595dee89f9fc.png"},"d2874025-177a-4b04-b205-5d6d85578cf5":{"name":"Gre","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"V_mzY3Jz4E18tzdivZMVR9naVLuJgACx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d2874025-177a-4b04-b205-5d6d85578cf5.png"},"225fc42b-c896-4aaa-bc55-235fac61c45d":{"name":"less.png_1","sourceUrl":null,"frameSize":{"x":160,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"HCqwx6wC098b6IX..zQdk1IaDxrrd8ka","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":120},"rootRelativePath":"assets/225fc42b-c896-4aaa-bc55-235fac61c45d.png"},"f111b648-cf7a-4a05-af32-298c38347e4a":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"63OwWs8DyKS2cmoayuSLFfczXu6exM9a","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f111b648-cf7a-4a05-af32-298c38347e4a.png"},"64b6ec65-abd4-44d4-8493-ceb093f0a3aa":{"name":"gold.jpg_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"7MzK1Ox7Foyf_mztnvL6DNdffmPKbW.U","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/64b6ec65-abd4-44d4-8493-ceb093f0a3aa.png"}}};
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

// Create your sprites here
var Background = createSprite(200, 200);
var Iron = createSprite(350, 50);
var Player = createSprite(50, 300);
var Boss = createSprite(200, 200);
var P1 = createSprite(300, 390);
var P2 = createSprite(200, 10);
var P3 = createSprite(100, 390);
var P4 = createSprite(390, 300);
var P5 = createSprite(10, 200);
var P6 = createSprite(390, 100);
Speed();
Iron.setAnimation("gold.jpg_1");
Player.setAnimation("dimon.jpg_1");
Background.setAnimation("BFP1");
Boss.setAnimation("oh.jpg_1");
P1.setAnimation("less.png_1");
P2.setAnimation("less.png_1");
P3.setAnimation("less.png_1");
P4.setAnimation("less.png_1");
P5.setAnimation("less.png_1");
P6.setAnimation("less.png_1");
Player.displace(P1);
Player.displace(P2);
Player.displace(P3);
Player.displace(P4);
Player.displace(P5);
Player.displace(P6);
Player.scale = 0.35;
Background.scale = 5;
Player.bounciness = 1;
Boss.scale = 0.8;
P1.scale = 0.3;
P2.scale = 0.3;
P3.scale = 0.3;
P4.scale = 0.3;
P5.scale = 0.3;
P6.scale = 0.3;
P6.scale = 0.3;
Iron.scale = 0.2;
var Health = 100;
var Score = 0;

function draw() {
  Player.bounceOff(Boss);
  Player.bounceOff(P1);
  Player.bounceOff(P2);
  Player.bounceOff(P3);
  Player.bounceOff(P4);
  Player.bounceOff(P5);
  Player.bounceOff(P6);

  // update sprites
  if (Player.isTouching(Boss)) {
    Health = Health - 5;
  }
  if (Player.isTouching(P1)) {
    Health = Health - 1;
  }
  if (Player.isTouching(P2)) {
    Health = Health - 1;
  }
  if (Player.isTouching(P3)) {
    Health = Health - 1;
  }
  if (Player.isTouching(P4)) {
    Health = Health - 1;
  }
  if (Player.isTouching(P5)) {
    Health = Health - 1;
  }
  if (Player.isTouching(P6)) {
    Health = Health - 1;
  }
  if (Player.isTouching(Iron)) {
    Score = Score + 5;
    Iron.x = randomNumber(50, 350);
    Iron.y = randomNumber(50, 350);
  }
  if (keyDown("up")) {
    Player.velocityY = -7;
  }
  if (keyDown("down")) {
    Player.velocityY = 7;
  }
  if (keyDown("right")) {
    Player.velocityX = 7;
  }
  if (keyDown("left")) {
    Player.velocityX = -7;
  }
  if (Player.y > 400) {
    Player.y = 390;
  }
  if (Player.y < 0) {
    Player.y = 10;
  }
  if (Player.x > 400) {
    Player.x = 390;
  }
  if (Player.x < 0) {
    Player.x = 10;
  }
  if (P1.y <0) {
    P1.y = 390;
  }
  if (P2.y >400){
    P2.y = 10;
  }
  if (P3.y <0) {
    P3.y = 390;
  }
  if (P4.x <0) {
    P4.x = 390;
  }
  if (P5.x >400){
    P5.x = 10;
  }
  if (P6.x <0) {
    P6.x = 390;
  }
  drawSprites();
  textSize(20);
  fill("black");
  text("Score: " + Score, 10, 20);
  text("Health: " + Health, 10, 50);
  text("Collect Iron To Get Points", 125, 20);
  text("Dodge the Gold", 125, 50);
  if (Health < 0) {
    background("white");
    textSize(30);
    text("GAME OVER", 100, 200);
    textSize(20);
  }
  if (Score > 75) {
    background("white");
    textSize(30);
    text("YOU WIN", 100, 200);
    textSize(20);
  }
  if (Score == 10) {
    P1.velocityY = -5;
    P2.velocityY = 5;
    P3.velocityY = -5;
    P4.velocityX = -5;
    P5.velocityX = 5;
    P6.velocityX = -5;
    Background.setAnimation("Ye");
  }
  if (Score == 20) {
    P1.velocityY = -6;
    P2.velocityY = 6;
    P3.velocityY = -6;
    P4.velocityX = -6;
    P5.velocityX = 6;
    P6.velocityX = -6;
    Background.setAnimation("Or");
  }
  if (Score == 30) {
    P1.velocityY = -7;
    P2.velocityY = 7;
    P3.velocityY = -7;
    P4.velocityX = -7;
    P5.velocityX = 7;
    P6.velocityX = -7;
    Background.setAnimation("Gre");
  }
  if (Score == 40) {
    P1.velocityY = -8;
    P2.velocityY = 8;
    P3.velocityY = -8;
    P4.velocityX = -8;
    P5.velocityX = 8;
    P6.velocityX = -8;
    Background.setAnimation("Blu");
  }

}
function Speed() {
  P1.velocityY = -4;
  P2.velocityY = 4;
  P3.velocityY = -4;
  P4.velocityX = -4;
  P5.velocityX = 4;
  P6.velocityX = -4;
}
// Create your functions here

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
