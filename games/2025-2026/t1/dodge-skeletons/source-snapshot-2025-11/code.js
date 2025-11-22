

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e67999c9-672e-4ec9-9f2d-e0434c2128bd","4afba2ac-2a53-4059-8b2b-8ec2b405f82b","dfa9f2b6-c4be-4941-a994-957385b34abf","c91b055a-7253-4509-9669-c4506d62210a","b41f507a-c821-4bc2-bba9-1d1adb6c7d3d","0647378b-21f2-49d4-920e-faab0d5931d0","288fc397-0693-4797-86e7-d617cf5dc598","7201f336-16f5-4187-b4e4-1f6a2c19aa4b","3dbc5ea4-6095-4164-97f6-670a7dd0139c","97c1c697-492d-49a8-9542-c1b737e85ae4","4ed063a1-50f1-48ce-bab2-bf5974d4eeb3","ec97d41d-8aa9-4587-aca3-780ec1becaf7","c2deb142-8ac0-4f3b-b636-a26639ff659f","4cb53e15-0d5e-4e39-b94b-e01a6c00ee71","a3f1fafe-0122-4fc1-8961-ebc3ba881232","c65b0d68-f928-4ff6-804a-519c3dfb6d9b","12760cff-49d0-4bc8-98d0-9fb339691dfe"],"propsByKey":{"e67999c9-672e-4ec9-9f2d-e0434c2128bd":{"name":"mini_pekka","sourceUrl":null,"frameSize":{"x":462,"y":383},"frameCount":1,"looping":true,"frameDelay":12,"version":"4shz9NFKx9X1jHTMyuRlcuEh1OWlSUM5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":462,"y":383},"rootRelativePath":"assets/e67999c9-672e-4ec9-9f2d-e0434c2128bd.png"},"4afba2ac-2a53-4059-8b2b-8ec2b405f82b":{"name":"skeleton","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png","frameSize":{"x":628,"y":397},"frameCount":1,"looping":true,"frameDelay":4,"version":"V350oIe4KiLFg7YOVoEkjbJ8Lw_.XZJs","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":628,"y":397},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png"},"dfa9f2b6-c4be-4941-a994-957385b34abf":{"name":"skeleton1","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png","frameSize":{"x":628,"y":397},"frameCount":1,"looping":true,"frameDelay":4,"version":"Q6wNe8fLRA9JsfIjPeEayphY3zNuoYKo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":628,"y":397},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png"},"c91b055a-7253-4509-9669-c4506d62210a":{"name":"skeleton2","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png","frameSize":{"x":628,"y":397},"frameCount":1,"looping":true,"frameDelay":4,"version":"Q6wNe8fLRA9JsfIjPeEayphY3zNuoYKo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":628,"y":397},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png"},"b41f507a-c821-4bc2-bba9-1d1adb6c7d3d":{"name":"skeleton3","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png","frameSize":{"x":628,"y":397},"frameCount":1,"looping":true,"frameDelay":4,"version":"Q6wNe8fLRA9JsfIjPeEayphY3zNuoYKo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":628,"y":397},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4afba2ac-2a53-4059-8b2b-8ec2b405f82b.png"},"0647378b-21f2-49d4-920e-faab0d5931d0":{"name":"XP","sourceUrl":null,"frameSize":{"x":383,"y":359},"frameCount":1,"looping":true,"frameDelay":12,"version":"P4E8TkX_leE73i3ggTxsXYYmdjPH1hsp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":359},"rootRelativePath":"assets/0647378b-21f2-49d4-920e-faab0d5931d0.png"},"288fc397-0693-4797-86e7-d617cf5dc598":{"name":"XP1","sourceUrl":null,"frameSize":{"x":383,"y":359},"frameCount":1,"looping":true,"frameDelay":12,"version":"L2UxcPk5r0bi74wuykcbCoDm7IyHqUdl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":359},"rootRelativePath":"assets/288fc397-0693-4797-86e7-d617cf5dc598.png"},"7201f336-16f5-4187-b4e4-1f6a2c19aa4b":{"name":"XP2","sourceUrl":null,"frameSize":{"x":383,"y":359},"frameCount":1,"looping":true,"frameDelay":12,"version":"6zJHCHt74aldutH6z6QuP9QVtxyE_eTJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":359},"rootRelativePath":"assets/7201f336-16f5-4187-b4e4-1f6a2c19aa4b.png"},"3dbc5ea4-6095-4164-97f6-670a7dd0139c":{"name":"XP3","sourceUrl":null,"frameSize":{"x":383,"y":359},"frameCount":1,"looping":true,"frameDelay":12,"version":"lfXZySle3ecWmX3hOrrII9sWeDruhOXg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":359},"rootRelativePath":"assets/3dbc5ea4-6095-4164-97f6-670a7dd0139c.png"},"97c1c697-492d-49a8-9542-c1b737e85ae4":{"name":"pekka","sourceUrl":null,"frameSize":{"x":437,"y":502},"frameCount":1,"looping":true,"frameDelay":12,"version":"_bZm534owVNZ48s8IHyuEAlYsJ2CXsYo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":437,"y":502},"rootRelativePath":"assets/97c1c697-492d-49a8-9542-c1b737e85ae4.png"},"4ed063a1-50f1-48ce-bab2-bf5974d4eeb3":{"name":"evo_pekka","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4ed063a1-50f1-48ce-bab2-bf5974d4eeb3.png","frameSize":{"x":295,"y":194},"frameCount":1,"looping":true,"frameDelay":4,"version":"lFnF7Dw_eF6bN1d3sGcf1Zbu4WsYwEAN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":295,"y":194},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/4ed063a1-50f1-48ce-bab2-bf5974d4eeb3.png"},"ec97d41d-8aa9-4587-aca3-780ec1becaf7":{"name":"mega_knight","sourceUrl":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/ec97d41d-8aa9-4587-aca3-780ec1becaf7.png","frameSize":{"x":555,"y":449},"frameCount":1,"looping":true,"frameDelay":4,"version":"cyyC_HzV4Tx2MVlE7GNqTh3i56pA9CT7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":555,"y":449},"rootRelativePath":"assets/v3/animations/L35fDVJ0NcbKUmQOLePyWiTkvHySllLAYHKHMZmeWNc/ec97d41d-8aa9-4587-aca3-780ec1becaf7.png"},"c2deb142-8ac0-4f3b-b636-a26639ff659f":{"name":"golem","sourceUrl":null,"frameSize":{"x":547,"y":456},"frameCount":1,"looping":true,"frameDelay":12,"version":"QBBuom9tNaNsFoBuydFT7RqCEotspopU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":547,"y":456},"rootRelativePath":"assets/c2deb142-8ac0-4f3b-b636-a26639ff659f.png"},"4cb53e15-0d5e-4e39-b94b-e01a6c00ee71":{"name":"chest","sourceUrl":null,"frameSize":{"x":495,"y":474},"frameCount":1,"looping":true,"frameDelay":12,"version":"n9nrKuZhyk5jCOEOHmsl.Fc6Sz1TYrrB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":495,"y":474},"rootRelativePath":"assets/4cb53e15-0d5e-4e39-b94b-e01a6c00ee71.png"},"a3f1fafe-0122-4fc1-8961-ebc3ba881232":{"name":"mighty_miner","sourceUrl":null,"frameSize":{"x":379,"y":560},"frameCount":1,"looping":true,"frameDelay":12,"version":"hGB9.ZoSSSTHTWTkyQexiGtjEIN_ipv6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":560},"rootRelativePath":"assets/a3f1fafe-0122-4fc1-8961-ebc3ba881232.png"},"c65b0d68-f928-4ff6-804a-519c3dfb6d9b":{"name":"bg","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"U88uARENbGjNzg003t8x65z1HIssB0xa","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c65b0d68-f928-4ff6-804a-519c3dfb6d9b.png"},"12760cff-49d0-4bc8-98d0-9fb339691dfe":{"name":"coins","sourceUrl":null,"frameSize":{"x":209,"y":265},"frameCount":1,"looping":true,"frameDelay":12,"version":"IbLz55lUuFkUeC.ayroQfbOrHVJl4Gzz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":209,"y":265},"rootRelativePath":"assets/12760cff-49d0-4bc8-98d0-9fb339691dfe.png"}}};
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

var health = 5;
var score = 0;

// Background and characters
var bg = createSprite(1000, 1000);
bg.setAnimation("bg");
bg.scale = 5;

var chest = createSprite(1000, 1000);
chest.setAnimation("chest");
chest.scale = 0.3;
var mighty_miner = createSprite(1000, 1000);
mighty_miner.setAnimation("mighty_miner");
mighty_miner.scale = 0.4;
var coins = createSprite(1000, 1000);
coins.setAnimation("coins");

var mini_pekka = createSprite(200, 200);
mini_pekka.setAnimation("mini_pekka");
mini_pekka.scale = 0.2;

// Skeleton enemies
var skeleton = createSprite(0, randomNumber(5, 400));
skeleton.setAnimation("skeleton");
skeleton.scale = 0.1;

var skeleton3 = createSprite(0, randomNumber(5, 400));
skeleton3.setAnimation("skeleton3");
skeleton3.scale = 0.1;

var skeleton2 = createSprite(randomNumber(5, 400), 0);
skeleton2.setAnimation("skeleton2");
skeleton2.scale = 0.1;

var skeleton1 = createSprite(randomNumber(5, 400), 0);
skeleton1.setAnimation("skeleton1");
skeleton1.scale = 0.1;

// XP orbs
var XP = createSprite(0, randomNumber(5, 400));
XP.setAnimation("XP");
XP.scale = 0.1;

var XP1 = createSprite(0, randomNumber(5, 400));
XP1.setAnimation("XP1");
XP1.scale = 0.1;

var XP2 = createSprite(randomNumber(5, 400), 0);
XP2.setAnimation("XP2");
XP2.scale = 0.1;

var XP3 = createSprite(randomNumber(5, 400), 0);
XP3.setAnimation("XP3");
XP3.scale = 0.1;

var evo_pekka = createSprite(1000, 500);
evo_pekka.setAnimation("evo_pekka");
evo_pekka.scale = 2;

// Flags for XP collection (so score only increases once)
var xpCollected = false;
var xp1Collected = false;
var xp2Collected = false;
var xp3Collected = false;

function draw() {
  background("white");
  movement();
  skeletons();
  experience();
  lives();
  scoring();
  
  drawSprites();
  text("Score: " + score, 10, 15);
  text("Health: " + health, 10, 30);
}

function movement() {
  if (keyDown("up")) {
    mini_pekka.y -= 3;
  }
  if (keyDown("down")) {
    mini_pekka.y += 3;
  }
  if (keyDown("right")) {
    mini_pekka.x += 3;
  }
  if (keyDown("left")) {
    mini_pekka.x -= 3;
  }
}

function skeletons() {
  skeleton1.y += 2;
  skeleton2.y += 2;
  skeleton.x += 2;
  skeleton3.x += 2;
  
  if (skeleton1.y >= 400) {
    skeleton1.y = 0;
    skeleton1.x = randomNumber(5, 400);
    skeleton1.visible = true;
  }
  if (skeleton2.y >= 400) {
    skeleton2.y = 0;
    skeleton2.x = randomNumber(5, 400);
    skeleton2.visible = true;
  }
  if (skeleton.x >= 400) {
    skeleton.x = 0;
    skeleton.y = randomNumber(5, 400);
    skeleton.visible = true;
  }
  if (skeleton3.x >= 400) {
    skeleton3.x = 0;
    skeleton3.y = randomNumber(5, 400);
    skeleton3.visible = true;
  }
}

function experience() {
  XP3.y += 2;
  XP2.y += 2;
  XP.x += 2;
  XP1.x += 2;
  
  if (XP.x >= 400) {
    XP.x = 0;
    XP.y = randomNumber(5, 400);
    XP.visible = true;
  }
  if (XP1.x >= 400) {
    XP1.x = 0;
    XP1.y = randomNumber(5, 400);
    XP1.visible = true;
  }
  if (XP2.y >= 400) {
    XP2.y = 0;
    XP2.x = randomNumber(5, 400);
    XP2.visible = true;
  }
  if (XP3.y >= 400) {
    XP3.y = 0;
    XP3.x = randomNumber(5, 400);
    XP3.visible = true;
  }
}

function scoring() {
  // Score-based evolution
  if (score > 14) {
    mini_pekka.setAnimation("pekka");
    background("purple");
  }
  if (score > 29) {
    mini_pekka.setAnimation("evo_pekka");
    background("green");
  }
  if (score > 44) {
    mini_pekka.setAnimation("mega_knight");
    background("purple");
  }
  if (score > 59) {
    mini_pekka.setAnimation("golem");
    background("grey");
  }
  
  // Win condition
  if (score > 64) {
    skeleton.visible = false;
    skeleton1.visible = false;
    skeleton2.visible = false;
    skeleton3.visible = false;
    XP.visible = false;
    XP1.visible = false;
    XP2.visible = false;
    XP3.visible = false;
    mini_pekka.visible = false;
    chest.x = 200;
    chest.y = 200;
    if (mousePressedOver(chest)) {
      chest.visible = false;
      coins.x = 200;
      coins.y = 200;
    }
    if (mousePressedOver(coins)) {
      console.log("message");
      coins.visible = false;
      mighty_miner.x = 200;
      mighty_miner.y = 200;
    }
  }
  
  // --- XP collection (only add 1 point per pickup) ---
  if (mini_pekka.isTouching(XP) && !xpCollected && XP.visible) {
    score++;
    xpCollected = true;
    XP.visible = false;
  }
  if (!mini_pekka.isTouching(XP)) {
    xpCollected = false;
  }
  
  if (mini_pekka.isTouching(XP1) && !xp1Collected && XP1.visible) {
    score++;
    xp1Collected = true;
    XP1.visible = false;
  }
  if (!mini_pekka.isTouching(XP1)) {
    xp1Collected = false;
  }
  
  if (mini_pekka.isTouching(XP2) && !xp2Collected && XP2.visible) {
    score++;
    xp2Collected = true;
    XP2.visible = false;
  }
  if (!mini_pekka.isTouching(XP2)) {
    xp2Collected = false;
  }
  
  if (mini_pekka.isTouching(XP3) && !xp3Collected && XP3.visible) {
    score++;
    xp3Collected = true;
    XP3.visible = false;
  }
  if (!mini_pekka.isTouching(XP3)) {
    xp3Collected = false;
  }
  
  // Game over if health runs out
  if (health <= 0) {
    background("black");
    skeleton.visible = false;
    skeleton1.visible = false;
    skeleton2.visible = false;
    skeleton3.visible = false;
    XP.visible = false;
    XP1.visible = false;
    XP2.visible = false;
    XP3.visible = false;
    mini_pekka.visible = false;
    bg.x = 200;
    bg.y = 200;
  }
}

function lives() {
  // Lose health once per touch
  if (mini_pekka.isTouching(skeleton) && skeleton.visible) {
    health--;
    skeleton.visible = false;
  }
  if (mini_pekka.isTouching(skeleton1) && skeleton1.visible) {
    health--;
    skeleton1.visible = false;
  }
  if (mini_pekka.isTouching(skeleton2) && skeleton2.visible) {
    health--;
    skeleton2.visible = false;
  }
  if (mini_pekka.isTouching(skeleton3) && skeleton3.visible) {
    health--;
    skeleton3.visible = false;
  }
  
  // (Optional) gain health if touching invisible skeletons
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
