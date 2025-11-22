

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59bd29e3-5f58-4b96-bd56-f1373525a6f2","faa7b60c-6bc5-4c88-bdd8-72f8f4674aca","5b8a444c-41e7-4dd2-84ac-2791fb09ba0d","6e11a102-9d1a-4c7b-af53-4defbae01a0c","acd4abd4-3a41-4cc9-b1d0-c10ebae2564c","8d0ed124-8a0d-4db5-aa89-0b68cc041304","dc2678b8-1ee9-4cf7-a5f6-6c59006ab532","0b7051f6-c1a2-4b2d-8ff6-83c05588c308","3132aaa3-59ba-4cda-992d-0818097c07c8","e9aad4e3-34da-4a6b-86a4-8563c989b50f","1b512810-b861-49a7-9765-1a9e8adcd9b7","85eb6570-fca3-4e18-bc31-79e987ceb972","74587d3f-7f8d-494b-89ce-31d0844d9cfc"],"propsByKey":{"59bd29e3-5f58-4b96-bd56-f1373525a6f2":{"name":"cash","sourceUrl":null,"frameSize":{"x":512,"y":341},"frameCount":1,"looping":true,"frameDelay":12,"version":"z18hg9NbZ2VjkFiOV1slZijOWt4yzdX_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":341},"rootRelativePath":"assets/59bd29e3-5f58-4b96-bd56-f1373525a6f2.png"},"faa7b60c-6bc5-4c88-bdd8-72f8f4674aca":{"name":"hotdog","sourceUrl":null,"frameSize":{"x":315,"y":436},"frameCount":1,"looping":true,"frameDelay":12,"version":"EQ7us9TYJBnxDpeR4pv0BLJ_rNFcm6J0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":315,"y":436},"rootRelativePath":"assets/faa7b60c-6bc5-4c88-bdd8-72f8f4674aca.png"},"5b8a444c-41e7-4dd2-84ac-2791fb09ba0d":{"name":"truck","sourceUrl":null,"frameSize":{"x":412,"y":411},"frameCount":1,"looping":true,"frameDelay":12,"version":"_wW10ovd5RTstYmrinhOv866cvoFtQW.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":411},"rootRelativePath":"assets/5b8a444c-41e7-4dd2-84ac-2791fb09ba0d.png"},"6e11a102-9d1a-4c7b-af53-4defbae01a0c":{"name":"shop","sourceUrl":null,"frameSize":{"x":436,"y":418},"frameCount":1,"looping":true,"frameDelay":15,"version":"2jLzd5scTxM7G27v0Iu9OunLW6sdUY37","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":436,"y":418},"rootRelativePath":"assets/6e11a102-9d1a-4c7b-af53-4defbae01a0c.png"},"acd4abd4-3a41-4cc9-b1d0-c10ebae2564c":{"name":"bestbackround","sourceUrl":"assets/v3/animations/VbRc8V2mCeQjdaxWUALw2KUsL844QI650cUBaBMGkbg/acd4abd4-3a41-4cc9-b1d0-c10ebae2564c.png","frameSize":{"x":611,"y":382},"frameCount":1,"looping":true,"frameDelay":4,"version":"lKfIWrpu9_x_yHZm42Y9w9qAJ.ou_U96","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":611,"y":382},"rootRelativePath":"assets/v3/animations/VbRc8V2mCeQjdaxWUALw2KUsL844QI650cUBaBMGkbg/acd4abd4-3a41-4cc9-b1d0-c10ebae2564c.png"},"8d0ed124-8a0d-4db5-aa89-0b68cc041304":{"name":"gold","sourceUrl":null,"frameSize":{"x":193,"y":138},"frameCount":1,"looping":true,"frameDelay":12,"version":"wjK1JBs59tSVyu.k18Tx.8iLW6yl_d6q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":193,"y":138},"rootRelativePath":"assets/8d0ed124-8a0d-4db5-aa89-0b68cc041304.png"},"dc2678b8-1ee9-4cf7-a5f6-6c59006ab532":{"name":"xxx","sourceUrl":null,"frameSize":{"x":432,"y":403},"frameCount":1,"looping":true,"frameDelay":12,"version":"K7GzhS_gu2IWOzJ9gvA3XP0JGSAA1sKl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":432,"y":403},"rootRelativePath":"assets/dc2678b8-1ee9-4cf7-a5f6-6c59006ab532.png"},"0b7051f6-c1a2-4b2d-8ff6-83c05588c308":{"name":"sil","sourceUrl":"assets/api/v1/animation-library/gamelab/_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX/category_board_games_and_cards/coin_silver.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX/category_board_games_and_cards/coin_silver.png"},"3132aaa3-59ba-4cda-992d-0818097c07c8":{"name":"sil2","sourceUrl":"assets/api/v1/animation-library/gamelab/_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX/category_board_games_and_cards/coin_silver.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_uKGcbvaqQejHJM.le8ktb5eJJWUm7JX/category_board_games_and_cards/coin_silver.png"},"e9aad4e3-34da-4a6b-86a4-8563c989b50f":{"name":"bron","sourceUrl":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png","frameSize":{"x":60,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png"},"1b512810-b861-49a7-9765-1a9e8adcd9b7":{"name":"bron2","sourceUrl":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png","frameSize":{"x":60,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png"},"85eb6570-fca3-4e18-bc31-79e987ceb972":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"74587d3f-7f8d-494b-89ce-31d0844d9cfc":{"name":"coin2","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"}}};
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

var money = 0;
var fame = 0;
var cps = 0;
var moneySinceLastFame = 0;
var fameSinceLastProfit = 0;
var lastCpsTime = 0;

var hotdogCount = 0;
var hotdogCost = 75;
var truckCount = 0;
var truckCost = 100;
var shopCount = 0;
var shopCost = 1350;

var scrollOffset = 0;

var goldVisible = false;
var goldRespawnFrame = randomNumber(8100, 17500);
var goldBoostEndTime = 0;
var baseCps = 0;

// the code below down to bron2.scale = .6. draws sprites such as coins, shop items and the money in the center of the screen
var bestbackround = createSprite(200, 200);
bestbackround.setAnimation("bestbackround");
bestbackround.scale = .645;
bestbackround.height = 610;
bestbackround.visible = 0;
var cash = createSprite(170, 200);
cash.setAnimation("cash");
cash.scale = 0.25;
var gold = createSprite(randomNumber(10, 380), randomNumber(10, 380));
gold.setAnimation("gold");
gold.scale = .42;
gold.visible = false;
var xxx = createSprite(38, 312);
xxx.setAnimation("xxx");
xxx.scale = .13;
var hotdog = createSprite(300, 100);
hotdog.setAnimation("hotdog");
hotdog.scale = 0.18;
var truck = createSprite(300, 230);
truck.setAnimation("truck");
truck.scale = 0.18;
var shop = createSprite(300, 350);
shop.setAnimation("shop");
shop.scale = 0.21;
var coin = createSprite(120, 15);
coin.setAnimation("coin");
coin.scale = .6;
var coin2 = createSprite(210, 220);
coin2.setAnimation("coin2");
coin2.scale = .6;
var sil = createSprite(40, 120);
sil.setAnimation("sil");
sil.scale = .6;
var sil2 = createSprite(140, 150);
sil2.setAnimation("sil2");
sil2.scale = .6;
var bron = createSprite(100, 220);
bron.setAnimation("bron");
bron.scale = .6;
var bron2 = createSprite(200, 90);
bron2.setAnimation("bron2");
bron2.scale = .6;

coin.depth = 1;
coin2.depth = 1;
sil.depth = 1;
sil2.depth = 1;
bron.depth = 1;
bron2.depth = 1;



function handleScrolling() {
  if (keyDown("up")) {
    scrollOffset += 5;
  }
  if (keyDown("down")) {
    scrollOffset -= 5;
  }
}

function moveItems() {
  hotdog.y = 100 + scrollOffset;
  truck.y = 230 + scrollOffset;
  shop.y = 350 + scrollOffset;
}

function handlePurchases() {
  // the code in this function block allows the games cash per second to go up and subtract money for buying shop items
  if (mousePressedOver(hotdog) && mouseWentDown("leftButton")) {
    if (money >= hotdogCost) {
      money -= hotdogCost;
      cps += 1.5;
      hotdogCost = Math.round(hotdogCost * 1.1);
      hotdogCount += 1;
    } else {
      console.log("Not enough money!");
    }
  }

  if (mousePressedOver(truck) && mouseWentDown("leftButton")) {
    if (money >= truckCost) {
      money -= truckCost;
      cps += 8;
      truckCost = Math.round(truckCost * 1.1);
      truckCount += 1;
    } else {
      console.log("Not enough money!");
    }
  }

  if (mousePressedOver(shop) && mouseWentDown("leftButton")) {
    if (money >= shopCost) {
      money -= shopCost;
      cps += 45;
      shopCost = Math.round(shopCost * 1.1);
      shopCount += 1;
    } else {
      console.log("Not enough money!");
    }
  }
}

function updateCpsAndFame() {
  if (millis() - lastCpsTime >= 1000) {
    money += cps;
    lastCpsTime = millis();
  }

  if (moneySinceLastFame >= 10) {
    fame += 1;
    fameSinceLastProfit += 1;
    moneySinceLastFame = 0;
  }

  if (fameSinceLastProfit >= 35) {
    money += 200;
    fameSinceLastProfit = 0;
  }
}

function drawUI() {
  // this drawUI block adds the backround and shapes to the games including backround color, gray rectangles, and text appear
  fill("gray");
  rect(2, 260, 246, 137);
  fill("black");
  textSize(20);
  text("PROJECTS", 10, 280);

  fill("gray");
  rect(250, 3, 147, 394);
  fill("black");
  text("UPGRADES", 265, 27);

  textSize(18);
  text("Hotdog Stand", 265, 50);
  text("Cost: " + hotdogCost, 265, 160);
  text("Amt: " + hotdogCount, 335, 75);

  textSize(20);
  text("Food Truck", 265, 185);
  text("Cost: " + truckCost, 265, 290);
  textSize(18);
  text("Amt: " + truckCount, 335, 210);

  textSize(20);
  text("Coffee Shop", 265, 315);
  textSize(18);
  text("Cost: " + shopCost, 345, 350, 45, 40);
  text("Amt: " + shopCount, 335, 345);

  fill("green");
  textSize(20);
  text("Money: " + money, 5, 20);
  text("Fame: " + fame, 5, 40);
  text("CPS: " + cps, 5, 60);
}


function draw() {
  // these velocity codes make the different coins on the screen move
  coin.velocityX = 2;
  coin.velocityY = -1;
  coin2.velocityX = 4;
  coin2.velocityY = -1;
  sil.velocityX = 6;
  sil.velocityY = -1;
  sil2.velocityX = 8;
  sil2.velocityY = -1;
  bron.velocityX = 5;
  bron.velocityY = -1;
  bron2.velocityX = 7;
  bron2.velocityY = -1;

  if (money > 7000) {
    background("blue");
  } else if (money > 3000) {
    background("gold");
  } else {
    background("black");
  }

  if (410 < sil.x) {
    sil.x = randomNumber(-10, -30);
    sil.y = randomNumber(100, 300);
  }
  if (410 < sil2.x) {
    sil2.x = randomNumber(-10, -30);
    sil2.y = randomNumber(100, 300);
  }
  if (410 < coin.x) {
    coin.x = randomNumber(-10, -30);
    coin.y = randomNumber(100, 300);
  }
  if (410 < coin2.x) {
    coin2.x = randomNumber(-10, -30);
    coin2.y = randomNumber(100, 300);
  }
  if (410 < bron.x) {
    bron.x = randomNumber(-10, -30);
    bron.y = randomNumber(100, 300);
  }
  if (410 < bron2.x) {
    bron2.x = randomNumber(-10, -30);
    bron2.y = randomNumber(100, 300);
  }
  if (coin.isTouching(coin2)) {
    coin.bounce(coin2);
  }
  if (sil.isTouching(sil2)) {
    sil.bounce(sil2);
  }
  if (bron.isTouching(bron2)) {
    bron2.bounce(bron2);
  }
  if (bron.isTouching(sil)) {
    coin.bounce(coin2);
  }
  if (bron.isTouching(coin)) {
    sil.bounce(sil2);
  }
  if (bron.isTouching(bron2)) {
    bron2.bounce(bron2);
  }
  handleScrolling();
  moveItems();
  handlePurchases();
  updateCpsAndFame();

  if (mousePressedOver(cash) && mouseWentDown("leftButton")) {
    cash.scale = 0.27;
    money += 1;
    moneySinceLastFame += 1;
  } else {
    cash.scale = 0.25;
  }

  if (!goldVisible && World.frameCount >= goldRespawnFrame) {
    gold.x = randomNumber(10, 380);
    gold.y = randomNumber(10, 380);
    gold.visible = true;
    goldVisible = true;
  }

  if (goldVisible && mousePressedOver(gold) && mouseWentDown("leftButton")) {
    gold.visible = false;
    goldVisible = false;
    goldRespawnFrame = World.frameCount + 8100;  
    baseCps = cps;
    cps = cps * 2;
    goldBoostEndTime = millis() + 120000;  
  }

  if (goldBoostEndTime > 0 && millis() > goldBoostEndTime) {
    cps = baseCps;
    goldBoostEndTime = 0;
  }


  drawUI();
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
