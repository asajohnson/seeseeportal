

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["228b116f-fb6f-4ca8-9884-f5d17366339f","4e367318-3b9c-42ec-918e-840814ab7af1","60d4a45e-1b93-41a9-bbb4-f573925c4d8a","604bd1d6-87e7-4b97-bb58-8dd2036116ef","1873b6a3-a06c-4a5d-b1c6-68c29149098f","9400c76e-d30a-4efe-b6d4-1850f0471ef5","87e4c42f-8c77-44a7-a8f5-96dede670475","07cf5314-310a-455c-aef7-63f7d3147b4d","f74033a3-8f03-4407-87eb-2e3773dd3b1d","f6fa75e2-2736-4208-af97-27a0e7e3ade6","d696cee3-2082-4911-9c3c-5a2d94c38094","71457ce2-9bc4-46f8-a669-1d3742448c56","05902832-e7c4-4b5b-bd7b-858a13980659","647eab80-6c7d-4257-af6e-6e2812d28514","25c54f24-0906-4daf-bff8-02aefd29c61d","8adfe8ec-6fe6-4b3c-83a9-472ea5a931fa","27019975-ddc5-44db-ac19-1a848c03f6aa","1a966578-45b6-4049-82e0-8f8e1fe64774","1f10aebb-2ed4-4b6f-bf14-4a0c43220e7b","ba7ff5f0-eca9-447e-a281-d5d2b89c5ea2","6bc79be9-562d-41ff-8a78-c23fb9dbef2a","a12741f0-704a-4c13-85f5-98fcfaaa4ced","c2f1a958-33f9-4178-a474-5cc383c372f7","a368fdc4-9d03-4be3-b6de-e26c38ef2ab5","8c98af52-78ae-4ae5-8329-385a1b8e41d7","7c0dbdae-bfd0-4afb-a7ad-d4ec23ff8d28","3fd19cb5-403b-498e-b131-f3ef58505871","04038756-b870-4876-a2df-b57fbc4ee2d5","d380a72d-cf0d-44ef-95f6-7ecb53c8bed0","f6ade323-dbbc-4aa4-a0a5-27fe6d2d77d3","9ebe7c20-ff8d-4571-94ad-4ded8c652bdb","1b995baa-e2c5-4a7f-8e0f-887a5aa63a5b","25242553-755b-4d16-8b31-3c9d4e99a690"],"propsByKey":{"228b116f-fb6f-4ca8-9884-f5d17366339f":{"name":"sniper","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"cArrE8zS.OJpTz7SHEQd6RIElEe4DBY0","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/228b116f-fb6f-4ca8-9884-f5d17366339f.png"},"4e367318-3b9c-42ec-918e-840814ab7af1":{"name":"speed","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ew64FkPr5aKLyUCLY5Ji2ykQTAxHf7A8","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/4e367318-3b9c-42ec-918e-840814ab7af1.png"},"60d4a45e-1b93-41a9-bbb4-f573925c4d8a":{"name":"firerate","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"JVjUx7RbkV_gqSg3r2YrMQDtH9GHAP1c","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/60d4a45e-1b93-41a9-bbb4-f573925c4d8a.png"},"604bd1d6-87e7-4b97-bb58-8dd2036116ef":{"name":"damage","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"b2H5YVH9rNq0yZvpQFtejjA1_gzFrsfa","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/604bd1d6-87e7-4b97-bb58-8dd2036116ef.png"},"1873b6a3-a06c-4a5d-b1c6-68c29149098f":{"name":"health","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"Vz7LKlZyfdAv95QFJxeBrDBTStRoiVtC","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/1873b6a3-a06c-4a5d-b1c6-68c29149098f.png"},"9400c76e-d30a-4efe-b6d4-1850f0471ef5":{"name":"fire","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nriz7BrvdTLNPx95Zxn8_n5BWriFAbMc","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/9400c76e-d30a-4efe-b6d4-1850f0471ef5.png"},"87e4c42f-8c77-44a7-a8f5-96dede670475":{"name":"water","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"rOQGnhpVZw3m9Tpahgom6_Dz7HYUUt4x","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/87e4c42f-8c77-44a7-a8f5-96dede670475.png"},"07cf5314-310a-455c-aef7-63f7d3147b4d":{"name":"lightning","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"2xo2nsfSSbr_kzfbwjazQrOEnIt6YtGc","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/07cf5314-310a-455c-aef7-63f7d3147b4d.png"},"f74033a3-8f03-4407-87eb-2e3773dd3b1d":{"name":"arc","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"S3h2vNb308Dvd0EFqFPGoOwiLjyQSMo6","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/f74033a3-8f03-4407-87eb-2e3773dd3b1d.png"},"f6fa75e2-2736-4208-af97-27a0e7e3ade6":{"name":"tank","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"7450WLCIfuxlwGTzSnNFXn9pqmcp2DBS","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/f6fa75e2-2736-4208-af97-27a0e7e3ade6.png"},"d696cee3-2082-4911-9c3c-5a2d94c38094":{"name":"knight","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rz0ghL5WiI3abUivRlVpd0mngo9vlhn4","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/d696cee3-2082-4911-9c3c-5a2d94c38094.png"},"71457ce2-9bc4-46f8-a669-1d3742448c56":{"name":"basic","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"t.Wl9GvINQzotJSjWet799HIcNfeVgau","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/71457ce2-9bc4-46f8-a669-1d3742448c56.png"},"05902832-e7c4-4b5b-bd7b-858a13980659":{"name":"heal","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"0TnnhcMhXB2SqM_0NTQP9e3ebus3oWub","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/05902832-e7c4-4b5b-bd7b-858a13980659.png"},"647eab80-6c7d-4257-af6e-6e2812d28514":{"name":"blank","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"adgbJhs5micVAIosmQsJ9kIpyoyEY29J","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/647eab80-6c7d-4257-af6e-6e2812d28514.png"},"25c54f24-0906-4daf-bff8-02aefd29c61d":{"name":"upgrade","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"bH2hflyZpAKSoeprNIMnRhh0w44FwTh6","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/25c54f24-0906-4daf-bff8-02aefd29c61d.png"},"8adfe8ec-6fe6-4b3c-83a9-472ea5a931fa":{"name":"elite","sourceUrl":null,"frameSize":{"x":4,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"nGAHtlU9o2Fka7OM8Fsd88Ctx30Jwl6i","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":15},"rootRelativePath":"assets/8adfe8ec-6fe6-4b3c-83a9-472ea5a931fa.png"},"27019975-ddc5-44db-ac19-1a848c03f6aa":{"name":"titan","sourceUrl":null,"frameSize":{"x":8,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"DnQWgIucpZR4uoZy2MXovHQxOJA8b3r0","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":30},"rootRelativePath":"assets/27019975-ddc5-44db-ac19-1a848c03f6aa.png"},"1a966578-45b6-4049-82e0-8f8e1fe64774":{"name":"portal","sourceUrl":null,"frameSize":{"x":400,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"iMXZFeinBNxatNmKWS9xVm9Rrz5jKNvo","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":34},"rootRelativePath":"assets/1a966578-45b6-4049-82e0-8f8e1fe64774.png"},"1f10aebb-2ed4-4b6f-bf14-4a0c43220e7b":{"name":"wall","sourceUrl":null,"frameSize":{"x":400,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"y_uscE4z_d9MABCpqTD0MwhOFXu1QSKb","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":21},"rootRelativePath":"assets/1f10aebb-2ed4-4b6f-bf14-4a0c43220e7b.png"},"ba7ff5f0-eca9-447e-a281-d5d2b89c5ea2":{"name":"iphone","sourceUrl":null,"frameSize":{"x":87,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"uSGeGDKwyV9uf83YJbJDDQ_n72fPNbAa","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":192},"rootRelativePath":"assets/ba7ff5f0-eca9-447e-a281-d5d2b89c5ea2.png"},"6bc79be9-562d-41ff-8a78-c23fb9dbef2a":{"name":"macbook","sourceUrl":null,"frameSize":{"x":197,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"EKuVIleYIuR_utnkmn.DNIDevLJ6uDF.","loadedFromSource":true,"saved":true,"sourceSize":{"x":197,"y":150},"rootRelativePath":"assets/6bc79be9-562d-41ff-8a78-c23fb9dbef2a.png"},"a12741f0-704a-4c13-85f5-98fcfaaa4ced":{"name":"siri","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"o4zk_kmjcMWSnFmVv5R2KBzUbxuoUv15","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":80},"rootRelativePath":"assets/a12741f0-704a-4c13-85f5-98fcfaaa4ced.png"},"c2f1a958-33f9-4178-a474-5cc383c372f7":{"name":"box","sourceUrl":null,"frameSize":{"x":23,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"mKsrTpmoUlv1y34fPjdEGseK2KH1_0je","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":13},"rootRelativePath":"assets/c2f1a958-33f9-4178-a474-5cc383c372f7.png"},"a368fdc4-9d03-4be3-b6de-e26c38ef2ab5":{"name":"bolt","sourceUrl":null,"frameSize":{"x":1,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"VzKx1b4KpjHG1TcvIZo4_dP0q9ID6Zjl","loadedFromSource":true,"saved":true,"sourceSize":{"x":1,"y":1},"rootRelativePath":"assets/a368fdc4-9d03-4be3-b6de-e26c38ef2ab5.png"},"8c98af52-78ae-4ae5-8329-385a1b8e41d7":{"name":"shot","sourceUrl":null,"frameSize":{"x":3,"y":1},"frameCount":1,"looping":true,"frameDelay":12,"version":"4kh9fNnbPjdhyjwgH6nexenvwwxGoxX7","loadedFromSource":true,"saved":true,"sourceSize":{"x":3,"y":1},"rootRelativePath":"assets/8c98af52-78ae-4ae5-8329-385a1b8e41d7.png"},"7c0dbdae-bfd0-4afb-a7ad-d4ec23ff8d28":{"name":"plasma","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"D960ZydEMrP1pSyGpm9efs0KDe4zSi36","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/7c0dbdae-bfd0-4afb-a7ad-d4ec23ff8d28.png"},"3fd19cb5-403b-498e-b131-f3ef58505871":{"name":"sword","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"M_ea9ERpeOTAfUIOicTcN7rozDptYeGR","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/3fd19cb5-403b-498e-b131-f3ef58505871.png"},"04038756-b870-4876-a2df-b57fbc4ee2d5":{"name":"glock","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tb5tTnluT2ZN6QwHag.iLmPO1QXAysff","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/04038756-b870-4876-a2df-b57fbc4ee2d5.png"},"d380a72d-cf0d-44ef-95f6-7ecb53c8bed0":{"name":"ar","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"dB_bRrl_FaeaW5oiHFNZjHypQ5N23cGc","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/d380a72d-cf0d-44ef-95f6-7ecb53c8bed0.png"},"f6ade323-dbbc-4aa4-a0a5-27fe6d2d77d3":{"name":"rpg","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"kWfN2WFQAclg.BP45kaWLvz4BDSVXjtg","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/f6ade323-dbbc-4aa4-a0a5-27fe6d2d77d3.png"},"9ebe7c20-ff8d-4571-94ad-4ded8c652bdb":{"name":"shotgun","sourceUrl":null,"frameSize":{"x":18,"y":18},"frameCount":1,"looping":true,"frameDelay":12,"version":"vekltGj0OI5csVD6cGGePiweow5X_1ku","loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":18},"rootRelativePath":"assets/9ebe7c20-ff8d-4571-94ad-4ded8c652bdb.png"},"1b995baa-e2c5-4a7f-8e0f-887a5aa63a5b":{"name":"gipsy_empty","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"QOryf_yI3f5r7OT4hQ5d1hx2.6gaJXl5","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/1b995baa-e2c5-4a7f-8e0f-887a5aa63a5b.png"},"25242553-755b-4d16-8b31-3c9d4e99a690":{"name":"gipsy","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"byJE6n_MLYyPLZALS3Gr7JeXndm7_Ypc","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/25242553-755b-4d16-8b31-3c9d4e99a690.png"}}};
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

World.frameRate = 30;
var stage = 0;
var hp = 20;
var maxhp = 20;
var loot = 0;
var basic_hp = 30;
//sprites
var glock = createSprite(50, 50);
var rpg = createSprite(150, 50);
var ar = createSprite(250, 50);
var shotgun = createSprite(350, 50);
var sword = createSprite(200, 50);
var gem1 = createSprite(1111, 300);
var gem2 = createSprite(1111, 300);
var gem3 = createSprite(1111, 300);
var sniper = createSprite(100, 100);
var knight = createSprite(200, 100);
var tank = createSprite(300, 100);
var blank = createSprite(200, 200);
var portal = createSprite(200, 385);
var wall = createSprite(1000, 1000);
var box = createSprite(250, 300);
ar.setAnimation("ar");
shotgun.setAnimation("shotgun");
rpg.setAnimation("rpg");
glock.setAnimation("glock");
sword.setAnimation("sword");
sniper.setAnimation("sniper");
knight.setAnimation("knight");
tank.setAnimation("tank");
blank.setAnimation("blank");
portal.setAnimation("portal");
wall.setAnimation("wall");
box.setAnimation("box");
function randomize() {
  loot = randomNumber(1, 8);
  if (loot == 1) {
    gem1.setAnimation("speed");
  } else if ((loot == 2)) {
    gem1.setAnimation("firerate");
  } else if ((loot == 3)) {
    gem1.setAnimation("fire");
  } else if ((loot == 4)) {
    gem1.setAnimation("water");
  } else if ((loot == 5)) {
    gem1.setAnimation("lightning");
  } else if ((loot == 6)) {
    gem1.setAnimation("arc");
  } else if ((loot == 7)) {
    gem1.setAnimation("damage");
  } else if ((loot == 8)) {
    gem1.setAnimation("health");
  }
  loot = randomNumber(1, 8);
  if (loot == 1) {
    gem2.setAnimation("speed");
  } else if ((loot == 2)) {
    gem2.setAnimation("firerate");
  } else if ((loot == 3)) {
    gem2.setAnimation("damage");
  } else if ((loot == 4)) {
    gem2.setAnimation("health");
  } else if ((loot == 5)) {
    gem2.setAnimation("arc");
  } else if ((loot == 6)) {
    gem2.setAnimation("fire");
  } else if ((loot == 7)) {
    gem2.setAnimation("water");
  } else if ((loot == 8)) {
    gem2.setAnimation("lightning");
  }
  loot = randomNumber(1, 8);
  if (loot == 1) {
    gem3.setAnimation("speed");
  } else if ((loot == 2)) {
    gem3.setAnimation("firerate");
  } else if ((loot == 3)) {
    gem3.setAnimation("damage");
  } else if ((loot == 4)) {
    gem3.setAnimation("health");
  } else if ((loot == 5)) {
    gem3.setAnimation("arc");
  } else if ((loot == 6)) {
    gem3.setAnimation("fire");
  } else if ((loot == 7)) {
    gem3.setAnimation("water");
  } else if ((loot == 8)) {
    gem3.setAnimation("lightning");
  }
  gem1.x = 200;
  gem2.x = 250;
  gem3.x = 300;
}
function collect() {
  if (blank.collide(gem1)) {
    gem1.x = 1111;
    gem2.x = 1111;
    gem3.x = 1111;
  }
  if (blank.collide(gem2)) {
    gem1.x = 1111;
    gem2.x = 1111;
    gem3.x = 1111;
  }
  if (blank.collide(gem3)) {
    gem1.x = 1111;
    gem2.x = 1111;
    gem3.x = 1111;
  }
}
function draw() {
  collect();
  background(rgb(196, 146, 94));
  blank.bounceOff(wall);
  if (hp == 0) {
    stage = 0;
  }
  //controls
  if (keyDown("w") || keyDown("up")) {
    blank.velocityY = -2;
  } else if ((keyDown("s") || keyDown("down"))) {
    blank.velocityY = 2;
  } else {
    blank.velocityY = 0;
  }
  if (keyDown("d") || keyDown("right")) {
    blank.velocityX = 2;
  } else if ((keyDown("a") || keyDown("left"))) {
    blank.velocityX = -2;
  } else {
    blank.velocityX = 0;
  }
  //class switching
  if (blank.collide(knight)) {
    blank.setAnimation("knight");
  }
  if (blank.collide(tank)) {
    blank.setAnimation("tank");
  }
  if (blank.collide(sniper)) {
    blank.setAnimation("sniper");
  }
  //start
  if (blank.collide(portal)) {
    tank.visible = 0;
    knight.visible = 0;
    sniper.visible = 0;
    tank.velocityX = 1000;
    knight.velocityX = 1000;
    sniper.velocityX = 1000;
    blank.x = 200;
    blank.y = 50;
    stage = 1;
  }
  if (blank.isTouching(box) || stage == 1) {
    box.x = 700;
    box.y = 600;
    randomize();
  }
  if (stage == 1) {
    wall.x = 200;
    wall.y = 350;
  }
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
