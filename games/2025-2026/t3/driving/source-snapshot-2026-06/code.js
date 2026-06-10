

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["62fcae27-1f15-448e-8f95-f1dfc7893781","441ad089-263b-4129-a58c-ed613236dea6","34eda778-0af3-4656-877e-1aa1b8109aa6","8e9d57d7-3ded-44e2-aa29-93010373e908","56654840-fb64-4ba9-9e96-42081ea0cc50","2f7752a4-0b2f-4c80-b114-c5d69d3a0090","b60c4fb6-437e-45b5-833c-e7ce75948c72","3ef772cc-c49f-403c-acaa-e0da4441390a"],"propsByKey":{"62fcae27-1f15-448e-8f95-f1dfc7893781":{"name":"cars","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":5,"looping":false,"frameDelay":12,"version":"ib1pXjoojQEwoyoIZmwWVf5aV8UowU5g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":262},"rootRelativePath":"assets/62fcae27-1f15-448e-8f95-f1dfc7893781.png"},"441ad089-263b-4129-a58c-ed613236dea6":{"name":"player","sourceUrl":null,"frameSize":{"x":44,"y":99},"frameCount":3,"looping":true,"frameDelay":12,"version":"jg_Uy6lzkkYMhFJvgFCGU4vULSlGt_7n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":99},"rootRelativePath":"assets/441ad089-263b-4129-a58c-ed613236dea6.png"},"34eda778-0af3-4656-877e-1aa1b8109aa6":{"name":"night","sourceUrl":null,"frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"87DK7wXXlKFOIhy6OS5AIDgbk2y3aT0q","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/34eda778-0af3-4656-877e-1aa1b8109aa6.png"},"8e9d57d7-3ded-44e2-aa29-93010373e908":{"name":"bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":60,"version":"mWgYuyxC5eMwzGcz6IO9lLUYzzf_DeyI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/8e9d57d7-3ded-44e2-aa29-93010373e908.png"},"56654840-fb64-4ba9-9e96-42081ea0cc50":{"name":"live","sourceUrl":null,"frameSize":{"x":362,"y":336},"frameCount":2,"looping":true,"frameDelay":12,"version":"wN534cpdJiojDE7vYQw0aPj_69Y_besI","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":672},"rootRelativePath":"assets/56654840-fb64-4ba9-9e96-42081ea0cc50.png"},"2f7752a4-0b2f-4c80-b114-c5d69d3a0090":{"name":"buttons","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":12,"version":"4_tvTC96z2GEg.QF2sOt1haLZEPS3Rzt","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/2f7752a4-0b2f-4c80-b114-c5d69d3a0090.png"},"b60c4fb6-437e-45b5-833c-e7ce75948c72":{"name":"begin","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5qvSHvq4f3H0nBnwX79PRPoVPh919Ppb","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/b60c4fb6-437e-45b5-833c-e7ce75948c72.png"},"3ef772cc-c49f-403c-acaa-e0da4441390a":{"name":"coin_gold","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"}}};
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

// running on thoughts and prayers


var score = 0;
var bestscore = 0;
var lives = -1;
var gamestate = "menu";
var liveupgd = 3;
var accelerationupgd = 0;
var controlupgd = 0;
var coins = 15;
var cd=0;
var coincheck = true;
//background
textSize(25);
fill("white");
var bg = createSprite(200,200);
bg.setAnimation("bg");
bg.pause();
//player

//enemies
var enemy1 = createSprite(500, 90);
enemy1.setAnimation("cars");
enemy1.pause();
enemy1.setFrame(randomNumber(1,5));
enemy1.rotation = 90;
enemy1.scale = 0.75;
enemy1.velocityX = randomNumber(-1,-5);
enemy1.setCollider("rectangle",0,0,45,85);
var enemy2 = createSprite(500, 190);
enemy2.setAnimation("cars");
enemy2.pause();
enemy2.setFrame(randomNumber(1,5));
enemy2.rotation = 90;
enemy2.scale = 0.75;
enemy2.velocityX = randomNumber(-1,-5);
enemy2.setCollider("rectangle",0,0,45,85);
var enemy3 = createSprite(500, 290);
enemy3.setAnimation("cars");
enemy3.pause();
enemy3.setFrame(randomNumber(1,5));
enemy3.rotation = 90;
enemy3.scale = 0.75;
enemy3.velocityX = randomNumber(-1,-5);
enemy3.setCollider("rectangle",0,0,45,85);
var plr = createSprite(-200,200);
plr.setAnimation("player");
plr.pause();
plr.scale = 0.5;
var coinitem = createSprite(-300,300);
coinitem.setAnimation("coin_gold");
coinitem.velocityX = randomNumber(-1,-7);
coinitem.scale = 0.5;


//night overlay
var nighttime=createSprite(200,200);
nighttime.setAnimation("night");
nighttime.alpha = 0.5;
nighttime.visible = false;
//menu
var upgd1 = createSprite(-100,300);
upgd1.setAnimation("buttons");
upgd1.pause();
upgd1.setFrame(0);
var upgd2 = createSprite(-200,300);
upgd2.setAnimation("buttons");
upgd2.pause();
upgd2.setFrame(1);
var upgd3 = createSprite(-300,300);
upgd3.setAnimation("buttons");
upgd3.pause();
upgd3.setFrame(2);
var showlife = createSprite(350,50);
showlife.setAnimation("live");
showlife.pause();
showlife.scale = 0.15;
var beginbutton = createSprite(200,200);
beginbutton.setAnimation("begin");



// Create your sprites here



function draw() {
  drawSprites();
  gamerun();
  if (mousePressedOver(beginbutton)){
    gameinit();
  }
  if (gamestate == "menu"){
    menu();
  }
  if (lives<0.5){
    gamestate = "menu";
  }
  text("Coins: "+coins, 0, 15);
  text("Score: "+Math.round(score), 0, 35);
}

function menu(){

  if (coincheck == true){
    
  }else{
    coincheck = true;
    coins = coins + Math.round(score/50);
  }
  text("High Score: "+bestscore, 0, 55);
  text("W/A/S/D to move",0,75);
  if (score>bestscore){
    bestscore=Math.round(score);
  }
  fill("Black");
  beginbutton.x = 200;
  upgd1.x = 100;
  text(1+liveupgd,90,325);
  if (mouseWentDown("leftButton")&& mouseIsOver(upgd1) && coins>=1+liveupgd){
    coins = coins - (1+liveupgd);
    liveupgd = 1+liveupgd;
  }
  upgd2.x = 200;
  text(1+accelerationupgd,190,325);
  if (mouseWentDown("leftButton")&& mouseIsOver(upgd2) && coins>=1+accelerationupgd){
    coins = coins - (1+accelerationupgd);
    accelerationupgd = 1+accelerationupgd;
  }
  upgd3.x = 300;
  text(1+controlupgd,290,325);
    if (mouseWentDown("leftButton")&& mouseIsOver(upgd3) && coins>=1+controlupgd){
    coins = coins - (1+controlupgd);
    controlupgd = 1+controlupgd;
  }
  text(liveupgd,345,55);
  plr.velocityX = 0;
  plr.velocityY = 0;
  plr.rotation = 90;
  plr.x = -100;
  plr.y = 200;
  fill("white");
  nighttime.visible = true;
  coinitem.visible = false;
}
function gamerun(){
  if (gamestate == "game"){
  //show score and lives
  score = score + (accelerationupgd+1) * 0.05 + score/1000;
  text(lives,345,55);
  plr.velocityY = plr.velocityY + ((Math.random()/15)+score/1000)*randomNumber(-1,1)/(controlupgd+1);
  //movement
  if (keyDown("s")){
    plr.velocityY = plr.velocityY+0.175+((score/10000)/(controlupgd+1));
  }
  if (keyDown("w")){
    plr.velocityY = plr.velocityY-0.175-((score/10000)/(controlupgd+1));
  }
  if (keyDown("d")){
    plr.velocityX = plr.velocityX+0.15+((score/10000)/(controlupgd+1));
  }else{
    if (plr.x>100){
    plr.velocityX = plr.velocityX-0.25;
    }else{
      if(plr.x<90){
        plr.velocityX = plr.velocityX+0.25;
      }else{
        plr.velocityX=0;
        plr.x=100;
        }
      }
    }
  //death
  if (plr.isTouching(enemy1)&& cd==0 || plr.isTouching(enemy2)&& cd==0||plr.isTouching(enemy3)&& cd==0){
    cd = 16*liveupgd;
    lives = lives-1;
  }
  if (plr.isTouching(coinitem)){
    coinitem.x = 500;
    coinitem.velocityX = randomNumber(-1,-20)- score/(50-accelerationupgd);
    coinitem.y = randomNumber(50,350);
    coins = Math.round(coins + 1 + score/1000);
  }
  if (plr.x>450||plr.x<-50||plr.y>350||plr.y<50){
    cd = 16*liveupgd;
    lives = lives-1;
    plr.x = 100;
    plr.y=200;
    plr.velocityY=0;
    plr.velocityX=0;
  }
  if (cd>0){
    cd=cd-1;
    plr.alpha=0.5;
    showlife.setFrame(1);
  }else{
    plr.alpha = 1;
    showlife.setFrame(0);
  }
  }
  if (enemy1.x<-100){
    enemy1.x = 500;
    enemy1.velocityX = randomNumber(-1,-15) - score/(50-accelerationupgd);
    enemy1.y = 90 + randomNumber(-15,15);
  }
  if (enemy2.x<-100){
    enemy2.x = 500;
    enemy2.velocityX = randomNumber(-1,-15)- score/(50-accelerationupgd);
    enemy2.y = 190 + randomNumber(-15,15);
  }
  if (enemy3.x<-100){
    enemy3.x = 500;
    enemy3.velocityX = randomNumber(-1,-15)- score/(50-accelerationupgd);
    enemy3.y = 290 + randomNumber(-15,15);
  }
  if (coinitem.x<-100){
    coinitem.x = 500;
    coinitem.velocityX = randomNumber(-1,-20)- score/(50-accelerationupgd);
    coinitem.y = randomNumber(50,350);
  }
  plr.rotation = 90 + plr.velocityY*10;
  
  //desert
  if (score>50){
    bg.setFrame(1);
    
  }else{
    bg.setFrame(0);
  }
  if (score>75){
    nighttime.visible = true;
    
  }else{
    nighttime.visible = false;
  }
}
function gameinit(){
  score = 0;
  coincheck = false;
  beginbutton.x = -200;
  upgd1.x = -100;
  upgd2.x = -200;
  upgd3.x = -300;
  gamestate = "game";
  lives = liveupgd;
  enemy1.x = 500;
  enemy2.x = 500;
  enemy3.x = 500;
  plr.x = 100;
  plr.y = 200;
  cd = 0;
  coinitem.visible = true;
  enemy1.velocityX = randomNumber(-1,-7) - score/(50-accelerationupgd);
  enemy2.velocityX = randomNumber(-1,-7) - score/(50-accelerationupgd);
  enemy3.velocityX = randomNumber(-1,-7) - score/(50-accelerationupgd);
  
  plr.setFrame(randomNumber(0,2));
  nighttime.visible = false;
}
function debugcheck(x){
  enemy1.debug = x;
  enemy2.debug = x;
  enemy3.debug = x;
  plr.debug = x;
  coinitem.debug = x;
}
debugcheck(false); // debugmode
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
