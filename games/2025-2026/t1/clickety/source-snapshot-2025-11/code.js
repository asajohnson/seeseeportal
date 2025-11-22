

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f64e8617-2024-4745-9707-966d47a55bc8","4a9c296c-7b89-4d5c-a33a-dc10a769354a","129c56eb-e4ce-4fa0-b3fe-72b61cd4d5b1","1bbf7a24-3ddd-4801-9733-f2406be2a67e","25c986ca-616b-4b08-8590-ec950db2aebd","e419059f-3e3b-4bed-94a4-a9657288e13c","f012e412-825f-4ebc-9aee-40f962009745","4377b417-3b9d-4f2f-a80d-aba01bf65492","f9e060fb-bda9-460b-8afa-209d60d0a73e","9098821b-7461-466a-95ca-8fd9732c5126","e39ebcbf-3fb1-43d0-8b50-d9bbb36f2ec2","0cc8d82c-898d-4b7c-934f-0458f0f094f5","ca8d584b-0a92-4e91-902f-68a7f19f1d3f","c3244c72-fedb-47f8-98a4-0d55b7ce1e3c"],"propsByKey":{"f64e8617-2024-4745-9707-966d47a55bc8":{"name":"click","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f64e8617-2024-4745-9707-966d47a55bc8.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"abyL8mqiiBxpOGH4ymTi0_EPculpcRxf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f64e8617-2024-4745-9707-966d47a55bc8.png"},"4a9c296c-7b89-4d5c-a33a-dc10a769354a":{"name":"animation_4","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/4a9c296c-7b89-4d5c-a33a-dc10a769354a.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"gFx9GqACA6XPgdBnNcKnqfmEm6t6N4dO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/4a9c296c-7b89-4d5c-a33a-dc10a769354a.png"},"129c56eb-e4ce-4fa0-b3fe-72b61cd4d5b1":{"name":"shopkeep","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/129c56eb-e4ce-4fa0-b3fe-72b61cd4d5b1.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"Nm_I1UnkvzRGWS4ZXyBOayVHmV3nde5J","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/129c56eb-e4ce-4fa0-b3fe-72b61cd4d5b1.png"},"1bbf7a24-3ddd-4801-9733-f2406be2a67e":{"name":"shopkeep_hamma","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"vzC6HSbhtVilDSKSQq4Qoob63szwQkHi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/1bbf7a24-3ddd-4801-9733-f2406be2a67e.png"},"25c986ca-616b-4b08-8590-ec950db2aebd":{"name":"shopkeep_angy","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/25c986ca-616b-4b08-8590-ec950db2aebd.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"8iSAQBGMXP_N8EfaBd1saZKKe4cj0fbG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/25c986ca-616b-4b08-8590-ec950db2aebd.png"},"e419059f-3e3b-4bed-94a4-a9657288e13c":{"name":"prestige","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/e419059f-3e3b-4bed-94a4-a9657288e13c.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"4hlfL3Qjui_8oj91szujB4eh3FiCn0w1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/e419059f-3e3b-4bed-94a4-a9657288e13c.png"},"f012e412-825f-4ebc-9aee-40f962009745":{"name":"shopkeep_hair1","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f012e412-825f-4ebc-9aee-40f962009745.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"FO4_XzfyoyCDVHOVw1cxB5XZy9t1p_aB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f012e412-825f-4ebc-9aee-40f962009745.png"},"4377b417-3b9d-4f2f-a80d-aba01bf65492":{"name":"tutorial","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/4377b417-3b9d-4f2f-a80d-aba01bf65492.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"OB6cOTA3r4bQMleGMMvGFlwwKKyAXKMD","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/4377b417-3b9d-4f2f-a80d-aba01bf65492.png"},"f9e060fb-bda9-460b-8afa-209d60d0a73e":{"name":"animation_3","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f9e060fb-bda9-460b-8afa-209d60d0a73e.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"BFAzuLtpQOR4vWI_D6Ev2B3qXSNmlutz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/f9e060fb-bda9-460b-8afa-209d60d0a73e.png"},"9098821b-7461-466a-95ca-8fd9732c5126":{"name":"animation_1","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/9098821b-7461-466a-95ca-8fd9732c5126.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"iFqg5UvxBxDtcWWai1sUEKU46r_cLCi9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/9098821b-7461-466a-95ca-8fd9732c5126.png"},"e39ebcbf-3fb1-43d0-8b50-d9bbb36f2ec2":{"name":"shopkeep_hair2","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/e39ebcbf-3fb1-43d0-8b50-d9bbb36f2ec2.png","frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"88c3.pWrf1xis8yEiDoNSY3TcWIuRqd8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/e39ebcbf-3fb1-43d0-8b50-d9bbb36f2ec2.png"},"0cc8d82c-898d-4b7c-934f-0458f0f094f5":{"name":"bounce","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/0cc8d82c-898d-4b7c-934f-0458f0f094f5.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"WBn1sVn6DEYyVQFSOJAHTPmEIIzECWKr","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/0cc8d82c-898d-4b7c-934f-0458f0f094f5.png"},"ca8d584b-0a92-4e91-902f-68a7f19f1d3f":{"name":"pixilart-drawing (17).png_1","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/ca8d584b-0a92-4e91-902f-68a7f19f1d3f.png","frameSize":{"x":200,"y":165},"frameCount":1,"looping":true,"frameDelay":4,"version":"3wEeSDEtF6uqnEvUkC6GBTVne936QGRv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":165},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/ca8d584b-0a92-4e91-902f-68a7f19f1d3f.png"},"c3244c72-fedb-47f8-98a4-0d55b7ce1e3c":{"name":"animation_2","sourceUrl":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/c3244c72-fedb-47f8-98a4-0d55b7ce1e3c.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"DuCSwKjy1hXPN.r4hrTd2dvD9Hywhx5y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/pvRVNPd91SKA0o67bZxnBKg-ilNacd3wse1xAbn2Gk8/c3244c72-fedb-47f8-98a4-0d55b7ce1e3c.png"}}};
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

// Set up
var prestige1 = 0;
var lock = 0;
var backround = createSprite(200, 200);
var prestige = 0;
backround.setAnimation("pixilart-drawing (17).png_1");
var prestige = createSprite(50, 375);
prestige.setAnimation("animation_4");
prestige.visible = false;
var timer = 0;
var box1 = 0;
var box2 = 0;
var shop1 = createSprite(5000, 5000);
var shop2 = createSprite(5000, 5000);
shop1.setAnimation("animation_2");
shop2.setAnimation("animation_3");
shop1.visible = false;
shop2.visible = false;
var random1 = 0;
createEdgeSprites();
var p0int = 0;
var edge = createGroup();
edge.add(rightEdge);
edge.add(leftEdge);
edge.add(topEdge);
edge.add(bottomEdge);
var click = createSprite(200, 200);
click.setAnimation("click");
click.setCollider("rectangle", -1, -7, 71, 35);
click.scale = 2;
var bounce = createSprite(100, 100);
bounce.setAnimation("bounce");
bounce.velocityX=1.5;
bounce.velocityY=1.5;
bounce.scale=0.5;
var shopkeep = createSprite(5000, 5000);
shopkeep.visible = false;
shopkeep.setCollider("rectangle", 0, 15, 100, 170);
var tutorial = createSprite(200, 200);
tutorial.setAnimation("tutorial");
tutorial.scale = 2;
prestige.scale = 0.5;
tutorial.visible = true;
shopexit();
function draw() {
  background("white");
  tutoria1();
  // timer helps with auto click
  timer = timer + 1;
  drawSprites();
  bounce.bounceOff(edge);
  bounce.bounceOff(click);
  fill("black");
  textSize(30);
  text(p0int, 1, 30);
  if (timer % 100==0) {
    // auto click points
    p0int = p0int + box2;
  }
  if (mousePressedOver(bounce)&&mouseWentDown()){
    // shop trigger
  playSound("assets/category_digital/boing_2.mp3", false);
  if (click.visible === true) {
    shopenter();
  } else {
    shopexit();
  }
  }
  if (mousePressedOver(click)&&mouseWentDown()){
    // clicking the button
  p0int = p0int + 1 + 0.5*box1;
  }
  buystuff();
  if (mousePressedOver(shopkeep)&&mouseWentDown()){
  playSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3", false);
  }
  prestige2();
  
}
function shopenter() {
  bounce.setAnimation("animation_1");
  backround.setAnimation("shopkeep_angy");
  backround.scale = 10;
  shoprandom();
  shoprandom();
  if (prestige1 >= 1) {
    shop2.x = 300;
  }
  shopkeep.visible = true;
  click.visible = false;
  shop1.visible = true;
  shop2.visible = true;
  click.x = 5000;
  click.y = click.x;
  shopkeep.x = 200;
  shopkeep.y = shopkeep.x;
  shop1.x = 100;
  shop1.y = 100;
  shop2.y = shop1.y;
}
function shopexit() {
  backround.setAnimation("pixilart-drawing (17).png_1");
  backround.scale = 2.5;
  bounce.bounceOff(click);
  click.visible = true;
  shopkeep.visible = false;
  bounce.setAnimation("bounce");
  shop1.visible = false;
  shop2.visible = false;
  click.x = 200;
  click.y = click.x;
  shop1.x = 5000;
shop2.x = 5000;
shop1.y = 5000;
  shopkeep.x = 5000;
  shopkeep.y = shopkeep.x;
shop2.y = shop1.y;
}
function shoprandom() {
  // randomizes shopkeeper skin
  random1 = randomNumber(1, 4);
  if (random1===1) {
    shopkeep.setAnimation("shopkeep");
  }
  if (random1===2) {
    shopkeep.setAnimation("shopkeep_hamma");
  }
  if (random1===3) {
    shopkeep.setAnimation("shopkeep_hair2");
  }
  if (random1===4) {
    shopkeep.setAnimation("shopkeep_hair1");
  }
}
function buystuff() {
  // self explanitory - buys stuff
  if (mousePressedOver(shop1)&&mouseWentDown()){
  if (p0int >= 5) {
    p0int = p0int - 5;
    box1 = box1 + 1;
  } 
  
  
  }
  if (mousePressedOver(shop2)&&mouseWentDown()){
  if (p0int >= 10) {
    p0int = p0int - 10;
    box2 = box2 + 1;
  }
  
  
  }
}
function tutoria1() {
  // helps with tutorial and prestige alerts
  if (p0int >= 1000 + (1000*prestige1) && lock != 1) {
    tutorial.setAnimation("prestige");
    tutorial.visible = true;
    lock = 1;
    prestige.visible = true;
  }
  if (tutorial.visible == true) {
    click.x = 5000;
    click.y = click.x;
    bounce.visible = false;
    if (mousePressedOver(tutorial)&&mouseWentDown()){
    tutorial.visible = false;
    bounce.x = 100;
    bounce.x = bounce.y;
    bounce.velocityX = bounce.velocityY;
    click.x = 200;
    click.y = click.x;
    bounce.visible = true;
    
    }
  }
}
function prestige2() {
  // actual action of prestiging
  if (p0int >= 1000 + (1000*prestige1) && mousePressedOver(prestige)&& mouseWentDown()) {
    lock = 0;
    p0int = 0;
    prestige1 = prestige1 + 1;
    prestige.visible = false;
    box2 = 0;
    box1 = 0;
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
