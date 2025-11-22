// Polyfill for Code.org functions when running externally
if (typeof timedLoop === 'undefined') {
    window.timedLoop = function(interval, callback) {
        setInterval(callback, interval);
    };
}

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["32dcb9b7-92b0-4634-8107-4187a8d11c4e","6bdb00b3-07b8-4d0c-9553-8818a7839864","6c7b3925-d68e-4a89-a65b-19b57c7307bf","fbd2e5a6-f6e3-4d6a-baa6-81a99730a9f8","584fbc40-fb12-4c6c-88c9-c1141bf2d8cf","59d71ee0-221c-44f8-8ce5-4de228ec6152","86d1e5bc-f471-4e81-b4a5-4a70e5e1c3cf","36d4c36c-e2a6-476c-bfbe-1b0ce3878dc5","70d08c62-c974-4079-b5b9-11946497406f","240d3ae9-8011-4324-931e-212278c041d0","35b8dd99-3eac-41ed-87be-6c5c43a48c9b","8a23a5b1-fbca-4c21-a729-93c0a86c0e1a","ef12bf48-4d03-45b5-93df-6db6774fb9cd","39e57465-5a61-46db-8e8d-2009711b40ce","877d2cca-7024-40c8-a812-697352493328","ea76c89c-4292-4931-8bd2-d7a7c486e115","227076b7-c007-4ed6-acae-3ee4fb31df4c","60849c30-8a45-49a7-a349-f8e652ebfd11","31153cf8-02c6-4271-93aa-a3faee58255b","727f8909-7736-45f3-a8a7-bd1491464a2c","14f3fa46-fd97-44ba-a549-0a0cbae7caff","bb4b3b4e-ed79-4f7b-8836-ec0b1f3c3205"],"propsByKey":{"32dcb9b7-92b0-4634-8107-4187a8d11c4e":{"name":"player","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"vXGXWPsJuUolQlu0jHtNRWPLS_2IFlN3","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/32dcb9b7-92b0-4634-8107-4187a8d11c4e.png"},"6bdb00b3-07b8-4d0c-9553-8818a7839864":{"name":"blueSoul","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"EQhO3RiyJqSzRshG76qsUG4XxebjqcO4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/6bdb00b3-07b8-4d0c-9553-8818a7839864.png"},"6c7b3925-d68e-4a89-a65b-19b57c7307bf":{"name":"blueSouliFrames","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":5,"version":"poqalS.hV8rTcN44MhaCw_8jICaYv_2K","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/6c7b3925-d68e-4a89-a65b-19b57c7307bf.png"},"fbd2e5a6-f6e3-4d6a-baa6-81a99730a9f8":{"name":"playerIFrames","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":5,"version":"r9._lYCpvBAnXqA19vDDtvFtwdEWNC.5","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/fbd2e5a6-f6e3-4d6a-baa6-81a99730a9f8.png"},"584fbc40-fb12-4c6c-88c9-c1141bf2d8cf":{"name":"67kid","sourceUrl":null,"frameSize":{"x":467,"y":420},"frameCount":1,"looping":true,"frameDelay":12,"version":"YemUXCuGRD0IXcKvZgBx8TYpDZ3G9FWM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":467,"y":420},"rootRelativePath":"assets/584fbc40-fb12-4c6c-88c9-c1141bf2d8cf.png"},"59d71ee0-221c-44f8-8ce5-4de228ec6152":{"name":"67kidAngry","sourceUrl":null,"frameSize":{"x":467,"y":420},"frameCount":6,"looping":true,"frameDelay":1,"version":"Bq6vZ0PUpWaAhka59eOSR0KjdCTXev87","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":934,"y":1260},"rootRelativePath":"assets/59d71ee0-221c-44f8-8ce5-4de228ec6152.png"},"86d1e5bc-f471-4e81-b4a5-4a70e5e1c3cf":{"name":"67kidDark","sourceUrl":null,"frameSize":{"x":473,"y":422},"frameCount":16,"looping":true,"frameDelay":2,"version":"hkrHnI6.Vk0UzwwTFW8tnWrG2Z.D90TT","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1892,"y":1688},"rootRelativePath":"assets/86d1e5bc-f471-4e81-b4a5-4a70e5e1c3cf.png"},"36d4c36c-e2a6-476c-bfbe-1b0ce3878dc5":{"name":"67kidBlack","sourceUrl":null,"frameSize":{"x":473,"y":422},"frameCount":1,"looping":true,"frameDelay":12,"version":"zuWwvdJwxgavXkEqzEOJAJydmU784OKm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":473,"y":422},"rootRelativePath":"assets/36d4c36c-e2a6-476c-bfbe-1b0ce3878dc5.png"},"70d08c62-c974-4079-b5b9-11946497406f":{"name":"67kidLaugh","sourceUrl":null,"frameSize":{"x":467,"y":432},"frameCount":2,"looping":true,"frameDelay":1,"version":"Z.8aUwtSQgIs5Y0JSBw4vNNJz3i6AmqJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":467,"y":864},"rootRelativePath":"assets/70d08c62-c974-4079-b5b9-11946497406f.png"},"240d3ae9-8011-4324-931e-212278c041d0":{"name":"67projectile","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"mFNQwhZFPKzgfCqGRMofIMLr3Tbxy8AJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/240d3ae9-8011-4324-931e-212278c041d0.png"},"35b8dd99-3eac-41ed-87be-6c5c43a48c9b":{"name":"67LeftHand","sourceUrl":null,"frameSize":{"x":78,"y":58},"frameCount":1,"looping":true,"frameDelay":12,"version":"uV6XsYmmErb8lBoMvEKi45F9uFJ3AbxI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":58},"rootRelativePath":"assets/35b8dd99-3eac-41ed-87be-6c5c43a48c9b.png"},"8a23a5b1-fbca-4c21-a729-93c0a86c0e1a":{"name":"67RightHand","sourceUrl":null,"frameSize":{"x":89,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"lbpDEuyPrAepgEErkb9BrxQ9dofRg7Jo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":69},"rootRelativePath":"assets/8a23a5b1-fbca-4c21-a729-93c0a86c0e1a.png"},"ef12bf48-4d03-45b5-93df-6db6774fb9cd":{"name":"handWarning","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":2,"version":"tIduR0.4t2Fpdje00edbqcw_ZQUDEUYe","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/ef12bf48-4d03-45b5-93df-6db6774fb9cd.png"},"39e57465-5a61-46db-8e8d-2009711b40ce":{"name":"spinWarning","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":2,"version":"QmdUhUbrKC8ZTKyxnyBeuER1rkxtiWKF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/39e57465-5a61-46db-8e8d-2009711b40ce.png"},"877d2cca-7024-40c8-a812-697352493328":{"name":"floorWarning","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":2,"version":"w8836n8mOb3My5CyAH0HnQ54RdSaqysp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/877d2cca-7024-40c8-a812-697352493328.png"},"ea76c89c-4292-4931-8bd2-d7a7c486e115":{"name":"67spin","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zEmzwFCJamuPfXpvLjJi0jr4GzNcAqUI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ea76c89c-4292-4931-8bd2-d7a7c486e115.png"},"227076b7-c007-4ed6-acae-3ee4fb31df4c":{"name":"67Hair","sourceUrl":"assets/v3/animations/JcM9PLF767X6DpG1lqvTlp-TQKYbLRdy5ldNqBpjddU/227076b7-c007-4ed6-acae-3ee4fb31df4c.png","frameSize":{"x":259,"y":194},"frameCount":1,"looping":true,"frameDelay":4,"version":"X6.V03_R26ziV5mYtac0xpx4.wIhvywS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":259,"y":194},"rootRelativePath":"assets/v3/animations/JcM9PLF767X6DpG1lqvTlp-TQKYbLRdy5ldNqBpjddU/227076b7-c007-4ed6-acae-3ee4fb31df4c.png"},"60849c30-8a45-49a7-a349-f8e652ebfd11":{"name":"bg2","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"},"31153cf8-02c6-4271-93aa-a3faee58255b":{"name":"fight","sourceUrl":null,"frameSize":{"x":361,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uv.pYT7J0a7H5t0fWSADxJtw0w6Mjbkb","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":361,"y":140},"rootRelativePath":"assets/31153cf8-02c6-4271-93aa-a3faee58255b.png"},"727f8909-7736-45f3-a8a7-bd1491464a2c":{"name":"fight?","sourceUrl":null,"frameSize":{"x":361,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"fxR3a1GSHAWVGCulBUmcWBa3nfgb7pGx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":361,"y":140},"rootRelativePath":"assets/727f8909-7736-45f3-a8a7-bd1491464a2c.png"},"14f3fa46-fd97-44ba-a549-0a0cbae7caff":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"UDc0YVEew7x4nO.euTWHi9z41ZNZ3xHz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/14f3fa46-fd97-44ba-a549-0a0cbae7caff.png"},"bb4b3b4e-ed79-4f7b-8836-ec0b1f3c3205":{"name":"gg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"clSDaUTilZZYv9n2ZwtzlFc0bY0Tlfmp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/bb4b3b4e-ed79-4f7b-8836-ec0b1f3c3205.png"}}};
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

/*
  This game is a 67 kid bossfight. It is NOT an easy game.
  
  If you've played Undertale then you already know how this works.
  
  You have to go through 67 kid's 5 attacks before you can defeat him.
  Good luck though, you only have 5 HP.
  
  Controls:
  Arrow Keys - Movement
  Z - Interact (Only needed at the end)
  
  Good Luck
*/

//Variables
var playerSpeed = 4;
var gameStarted = false;
var baseTime = Math.round(getTime()/100);
var timer = 0;
var attacking = false;
var attack;
var startingTime = 0;
var soulMode = "red";
var velocityY = 0;
var backdrop = 1;
var iFrames = 0;
var health = 5;
//gameStarted = true;
//attacking = true;
//Sprites

var backGround = createSprite(200,200);
backGround.visible = false;

//fight button at the end
var fight = createSprite(200,300);
fight.setAnimation("fight");
fight.scale = 0.3;
fight.visible = false;

//67 kid
var sixSevenKid = createSprite(200,-100);
sixSevenKid.setAnimation("67kid");
sixSevenKid.scale = 0.35;

//player (heart)
var player = createSprite(200,200);
player.setAnimation("player");
player.scale = 0.135;
player.width = 150;
player.setCollider("circle",0,0,57);

//repetitive sprites (i didnt use a for loop)
var projectile1 = createSprite(999,999);
projectile1.setAnimation("67projectile");
projectile1.setCollider("rectangle",0,0,100,20);
var projectile2 = createSprite(999,999);
projectile2.setAnimation("67projectile");
projectile2.setCollider("rectangle",0,0,100,20);
var projectile3 = createSprite(999,999);
projectile3.setAnimation("67projectile");
projectile3.setCollider("rectangle",0,0,100,20);
var projectile4 = createSprite(999,999);
projectile4.setAnimation("67projectile");
projectile4.setCollider("rectangle",0,0,100,20);
var projectile5 = createSprite(999,999);
projectile5.setAnimation("67projectile");
projectile5.setCollider("rectangle",0,0,100,20);
var projectile6 = createSprite(999,999);
projectile6.setAnimation("67projectile");
projectile6.setCollider("rectangle",0,0,100,20);

//hands for 67 motion
var leftHand = createSprite(-100,100);
leftHand.setAnimation("67LeftHand");
leftHand.setCollider("circle",0,0,29);
var rightHand = createSprite(500,100);
rightHand.setAnimation("67RightHand");
rightHand.setCollider("circle",0,0,35);

//attack warnings for attack 2
var warningOne = createSprite(67,200);
warningOne.setAnimation("handWarning");
warningOne.scale = 4;
var warningTwo = createSprite(333,200);
warningTwo.setAnimation("handWarning");
warningTwo.scale = 4;
warningOne.visible = false;
warningTwo.visible = false;

//things that warn for attack 3
var spinWarning = createSprite(200,200);
spinWarning.setAnimation("spinWarning");
spinWarning.scale = 4;
spinWarning.visible = false;

//floor warning for attack 4
var floorWarning = createSprite(200,355);
floorWarning.setAnimation("floorWarning");
floorWarning.scale = 4;
floorWarning.visible = false;

//winning background
var winBG = createSprite(200,200);
winBG.visible = false;
winBG.setAnimation("gg");

//text appearing when player dies
var gameOverText = createSprite(200,200);
gameOverText.setAnimation("gameOver");
gameOverText.alpha = 0;

//Draw Loop
function draw() {
  bg();
  gameStart();
  playerMove();
  antiOffset();
  attackSequence();
  playerHit();
  //get time relative to starting time
  timer = [Math.round(getTime()/100) - baseTime]/10 + startingTime;
  gameOver();
  drawSprites();
  healthBar();
}

//Functions
//change background based on variable called backdrop which changes in the code
function bg() {
  if (backdrop == 1) {
    background("black");
  }
  if (backdrop == 2){
    backGround.setAnimation("bg2");
    backGround.visible = true;
  }
  if (backdrop == 3){
    winBG.visible = true;
  }
}

//movement with both movement types
function playerMove() {
  if (gameStarted) {
    if (soulMode == "red") {
      //soul color
      if (iFrames == 0) {
        player.setAnimation("player");
      } else {
        player.setAnimation("playerIFrames");
      }
      //Moving
      if (keyDown("up")) {
        player.y = player.y - playerSpeed;
      }
      if (keyDown("down")) {
        player.y = player.y + playerSpeed;
      }
      if (keyDown("left")) {
        player.x = player.x - playerSpeed;
      }
      if (keyDown("right")) {
        player.x = player.x + playerSpeed;
      }
      //restraints
      if (player.y < 0) {
        player.y = player.y + playerSpeed;
      }
      if (player.y > 400) {
        player.y = player.y - playerSpeed;
      }
      if (player.x < 0) {
        player.x = player.x + playerSpeed;
      }
      if (player.x > 400) {
        player.x = player.x - playerSpeed;
      }
    }
    if (soulMode == "blue") {
      //change souls color
      if (iFrames == 0) {
        player.setAnimation("blueSoul");
      } else {
        player.setAnimation("blueSouliFrames");
      }
      //increase gravity and inflict it
      velocityY = velocityY + 1;
      player.y += velocityY;
      //dont go through the floor
      if (player.y > 350) {
        player.y = 350;
        velocityY = 0;
      }
      //if the player clicks space 
      if (keyDown("up")) {
       if (player.y == 350) {
         velocityY = -12;
       }
      }
      //blue soul left and right
      if (keyDown("left")) {
        player.x = player.x - playerSpeed;
      }
      if (keyDown("right")) {
        player.x = player.x + playerSpeed;
      }
      //blue soul x restraints
      if (player.x < 0) {
        player.x = player.x + playerSpeed;
      }
      if (player.x > 400) {
        player.x = player.x - playerSpeed;
      }
    }
  }
}

//Intro
function gameStart(){
  //flashing heart and move it down
  if (timer == 0.1) {
    player.visible = false;
    player.velocityY = 7;
  }
  if (timer == 0.2) {
    player.visible = true;
  }
  if (timer == 0.3) {
    player.visible = false;
  }
  if (timer == 0.4) {
    player.visible = true;
  }
  if (timer == 0.5) {
    player.visible = false;
  }
  if (timer == 0.6) {
    player.visible = true;
  }
  if (timer == 0.7) {
    player.visible = false;
  }
  if (timer == 0.8) {
    player.visible = true;
    player.velocityY = 0;
  }
  //67 kid appears and hands
  if (timer == 2) {
    sixSevenKid.velocityY = 2;
    sixSevenKid.setAnimation("67kidDark");
    leftHand.velocityX = 1.7;
    rightHand.velocityX = -1.7;
  }
  if (timer == 5) {
    sixSevenKid.velocityY = 0;
    sixSevenKid.setAnimation("67kidBlack");
    leftHand.velocityX = 0;
    rightHand.velocityX = 0;
  }
  //67 hand movement
  if (timer == 7) {
    sixSevenKid.setAnimation("67kidLaugh");
    leftHand.velocityY = -6;
    rightHand.velocityY = 6;
  }
  if (timer == 7.5) {
    leftHand.velocityY = 12;
    rightHand.velocityY = -12;
  }
  if (timer == 8) {
    leftHand.velocityY = -12;
    rightHand.velocityY = 12;
  }
  if (timer == 8.5) {
    leftHand.velocityY = 12;
    rightHand.velocityY = -12;
  }
  if (timer == 9) {
    leftHand.velocityY = -12;
    rightHand.velocityY = 12;
  }
  if (timer == 9.5) {
    leftHand.velocityY = 0;
    rightHand.velocityY = 0;
    leftHand.velocityY = 6;
    rightHand.velocityY = -6;
  }
  //move them up
  if (timer == 10){
    sixSevenKid.setAnimation("67kid");
    gameStarted = true;
    sixSevenKid.velocityY = -10;
    rightHand.velocityY = -10;
    leftHand.velocityY = -10;
  }
  //stop the velocity
  if (timer == 11){
    sixSevenKid.velocityY = 0;
    rightHand.velocityY = 0;
    leftHand.velocityY = 0;
  }
}

//projectile manager
function antiOffset() {
  if (attacking) {
    //if within the time, set them back
    if (timer < 30) {
        if (projectile1.x > 455) {
        projectile1.x = -55;
        projectile1.y = randomNumber(20,180);
        projectile1.velocityX = randomNumber(6,9);
      }
      if (projectile2.x > 455) {
        projectile2.x = -55;
        projectile2.y = randomNumber(200,380);
        projectile2.velocityX = randomNumber(6,9);
      }
      if (projectile3.x < -55) {
        projectile3.x = 455;
        projectile3.y = randomNumber(20,180);
        projectile3.velocityX = randomNumber(-9, -6);
      }
      if (projectile4.x < -55) {
        projectile4.x = 455;
        projectile4.y = randomNumber(200,380);
        projectile4.velocityX = randomNumber(-9, -6);
      }
      if (projectile5.y > 455) {
        projectile5.x = randomNumber(20,200);
        projectile5.y = -55;
        projectile5.velocityY = randomNumber(6,9);
      }
      if (projectile6.y > 455) {
        projectile6.x = randomNumber(200,380);
        projectile6.y = -55;
        projectile6.velocityY = randomNumber(6,9);
      }
    }
    //Attack 2 manager
    if (timer >= 30 && timer < 55) {
      //hands
      if (leftHand.y >= 350) {
        leftHand.velocityY = -20;
        rightHand.velocityY = 20;
      }
      if (leftHand.y <= 50) {
        leftHand.velocityY = 20;
        rightHand.velocityY = -20;
      }
      //projectiles - ice cream hair wall
      if (projectile1.x > 530) {
        projectile1.x = -50;
        projectile1.y = randomNumber(-90,150);
      }
      if (projectile2.x > 530) {
        projectile2.x = -50;
        projectile2.y = projectile1.y + 340;
      }
      if (projectile3.x > 530) {
        projectile3.x = -50;
        projectile3.y = randomNumber(-90,150);
      }
      if (projectile4.x > 530) {
        projectile4.x = -50;
        projectile4.y = projectile3.y + 340;
      }
    }
    //Attack 3 manager
    if (timer >= 66 && timer < 85) {
      //spin
      projectile5.rotation = projectile5.rotation + 2;
      //projectile
      if (projectile6.y > 450) {
        projectile6.x = randomNumber(0,400);
        projectile6.y = -25;
        projectile6.velocityY = 5;
      }
    }
    //Attack 4 manager
    if (timer >= 93 && timer < 120) {
      if (leftHand.x >= 350) {
        leftHand.velocityX = -10;
        rightHand.velocityX = 10;
      }
      if (leftHand.x <= 50) {
        leftHand.velocityX = 10;
        rightHand.velocityX = -10;
      }
    }
    //Attack 5 barrage manager
    if (timer >= 125 && timer < 150) {
      if (projectile1.x > 455) {
        projectile1.x = -55;
        projectile1.y = randomNumber(20,180);
        projectile1.velocityX = randomNumber(9,12);
      }
      if (projectile2.x > 455) {
        projectile2.x = -55;
        projectile2.y = randomNumber(200,380);
        projectile2.velocityX = randomNumber(9,12);
      }
      if (projectile3.x < -55) {
        projectile3.x = 455;
        projectile3.y = randomNumber(20,180);
        projectile3.velocityX = randomNumber(-12, -9);
      }
      if (projectile4.x < -55) {
        projectile4.x = 455;
        projectile4.y = randomNumber(200,380);
        projectile4.velocityX = randomNumber(-12, -9);
      }
    }
    //Attack 5 over, wating for player to attack
    if (timer > 160) {
      if (player.isTouching(fight)) {
        fight.setAnimation("fight?");
        if (keyWentDown("z")) {
          //GG YOU WIN
          backdrop = 3;
        }
      } else {
        fight.setAnimation("fight");
      }
    }
  }
}

//THE ATTACKS
function attackSequence() {
  //first attack, a barrage of 6 bullets
  if (timer == 11) {
    attacking = true;
    attack = 1;
    projectile1.x = 0;
    projectile1.y = randomNumber(20,180);
    projectile1.velocityX = randomNumber(6,9);
    projectile2.x = 0;
    projectile2.y = randomNumber(200,280);
    projectile2.velocityX = randomNumber(6,9);
    
    projectile3.x = 400;
    projectile3.y = randomNumber(20,180);
    projectile3.velocityX = randomNumber(-9, -6);
    projectile4.x = 400;
    projectile4.y = randomNumber(200,380);
    projectile4.velocityX = randomNumber(-9, -6);
    
    projectile5.x = randomNumber(20,200);
    projectile5.y = 0;
    projectile5.rotation = 90;
    projectile5.velocityY = randomNumber(6,9);
    projectile6.x = randomNumber(200,380);
    projectile6.y = 0;
    projectile6.rotation = 90;
    projectile6.velocityY = randomNumber(6,9);
  }
  //Warning for second attack
  if (timer == 28) {
    warningOne.visible = true;
    warningTwo.visible = true;
  }
  //second attack
  if (timer == 30){
    //hands
    warningOne.visible = false;
    warningTwo.visible = false;
    leftHand.x = 85;
    leftHand.y = 100;
    leftHand.scale = 1.5;
    leftHand.velocityY = 20;
    rightHand.x = 345;
    rightHand.y = 300;
    rightHand.scale = 1.3;
    rightHand.velocityY = -20;
    //projectiles for attack 2
    //earlier projectiles recycled into new attack
    projectile1.setAnimation("67Hair");
    projectile2.setAnimation("67Hair");
    projectile3.setAnimation("67Hair");
    projectile4.setAnimation("67Hair");
    projectile1.width = 100;
    projectile1.height = 300;
    projectile2.width = 100;
    projectile2.height = 300;
    projectile3.width = 100;
    projectile3.height = 300;
    projectile4.width = 100;
    projectile4.height = 300;
    projectile1.x = -50;
    projectile1.y = randomNumber(-90,150);
    projectile1.velocityX = 4;
    projectile2.x = -50;
    projectile2.y = projectile1.y + 340;
    projectile2.velocityX = 4;
    projectile3.x = -325;
    projectile3.y = randomNumber(-90,150);
    projectile3.velocityX = 4;
    projectile4.x = -325;
    projectile4.y = projectile3.y + 340;
    projectile4.velocityX = 4;
    
    projectile1.setCollider("rectangle",0,0,259,194);
    projectile2.setCollider("rectangle",0,0,259,194);
    projectile3.setCollider("rectangle",0,0,259,194);
    projectile4.setCollider("rectangle",0,0,259,194);
  }
  //stop previous attack & give a warning
  if (timer == 62) {
    projectile1.velocityX = 0;
    projectile2.velocityX = 0;
    projectile3.velocityX = 0;
    projectile4.velocityX = 0;
    rightHand.velocityY = 0;
    leftHand.velocityY = 0;
    spinWarning.visible = true;
  }
  //Third Attack
  if (timer == 65){
    //spinner attack
    spinWarning.visible = false;
    
    projectile5.rotation = 0;
    projectile5.x = 200;
    projectile5.y = 200;
    projectile5.velocityY = 0;
    projectile5.setAnimation("67spin");
    projectile5.scale = 5.5;
    projectile5.setCollider("rectangle", 0,0,5,100);
    //other projectiles
    projectile6.setAnimation("67kid");
    projectile6.x = randomNumber(0,400);
    projectile6.y = 0;
    projectile6.velocityY = 5;
    projectile6.setCollider("rectangle",0,0,467,420);
    projectile6.width = 200;
    projectile6.height = 40;
    projectile6.rotation = 0;
  }
  //stop previous attack and prepare for blue soul mode
  if (timer == 85) {
    projectile5.rotation = 0;
    projectile6.velocityY = 0;
    projectile5.x = 1000;
    projectile5.y = 1000;
    projectile6.x = 1000;
    projectile6.y = 1000;
    //BLUE SOUL
    soulMode = "blue";
  }
  //not an attack, but 67 kid coming into view once again
  if (timer == 87) {
    sixSevenKid.setAnimation("67kid");
    sixSevenKid.y = -100;
    sixSevenKid.velocityY = 10;
  }
  if (timer == 88) {
    sixSevenKid.velocityY = 0;
  }
  //make 67 kid angry and different background
  if (timer == 89) {
    sixSevenKid.setAnimation("67kidAngry");
    backdrop = 2;
  }
  //give a warning for the following attack
  if (timer == 91.5) {
    floorWarning.visible = true;
  }
  //attack 4 - a blue soul attack
  if (timer == 92) {
    floorWarning.visible = false;
    leftHand.scale = 1;
    rightHand.scale = 1;
    leftHand.x = 50;
    leftHand.y = 350;
    rightHand.x = 350;
    rightHand.y = 350;
    
    leftHand.velocityX = 10;
    rightHand.velocityX = -10;
  }
  //red soul
  if (timer == 122) {
    sixSevenKid.visible = false;
    soulMode = "red";
  }
  //Final attack
  if (timer == 125) {
    projectile1.setCollider("rectangle",0,0,100,20);
    projectile2.setCollider("rectangle",0,0,100,20);
    projectile3.setCollider("rectangle",0,0,100,20);
    projectile4.setCollider("rectangle",0,0,100,20);
    
    projectile1.x = 0;
    projectile1.y = randomNumber(20,180);
    projectile1.velocityX = randomNumber(9,12);
    projectile2.x = 0;
    projectile2.y = randomNumber(200,280);
    projectile2.velocityX = randomNumber(9,12);
    projectile1.setAnimation("67projectile");
    projectile2.setAnimation("67projectile");
    projectile1.scale = 1;
    projectile2.scale = 1;
    projectile1.width = 50;
    projectile1.height = 100;
    projectile2.width = 50;
    projectile2.height = 100;
    
    projectile3.x = 400;
    projectile3.y = randomNumber(20,180);
    projectile3.velocityX = randomNumber(-12, -9);
    projectile4.x = 400;
    projectile4.y = randomNumber(200,380);
    projectile4.velocityX = randomNumber(-12, -9);
    projectile3.setAnimation("67projectile");
    projectile4.setAnimation("67projectile");
    projectile3.scale = 1;
    projectile4.scale = 1;
    projectile3.width = 50;
    projectile3.height = 100;
    projectile4.width = 50;
    projectile4.height = 100;
  }
  //Attack 5 over
  if (timer == 155) {
    sixSevenKid.visible = true;
    sixSevenKid.setAnimation("67kid");
  }
  if (timer == 160) {
    fight.visible = true;
  }
}

//Player Hurt Function
function playerHit(){
  if (iFrames == 0) {
    if (player.isTouching(projectile1)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(projectile2)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(projectile3)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(projectile4)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(projectile5)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(projectile6)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(rightHand)) {
      iFrames = 1.5;
      health = health - 1;
    }
    if (player.isTouching(leftHand)) {
      iFrames = 1.5;
      health = health - 1;
    }
  }
}

//iFrames removal function
timedLoop(100, function(){
  if (iFrames > 0) {
    iFrames = iFrames - 0.1;
  }
  if (iFrames < 0) {
    iFrames = 0;
  }
});

//Health bar manager
function healthBar() {
  //red part
  noStroke();
  fill("red");
  rect(160,370,80,20);
  //yellow part
  fill("yellow");
  var healthWidth = (health/5) * 80;
  rect(160,370,healthWidth,20);
}

//Game Over function
function gameOver() {
  //if negative health, make it 0
  if (health < 0){
    health = 0;
  }
  //game over if player has 0 hp
  if (health == 0) {
    background("black");
    gameOverText.alpha = 1;
  }
}
//Wow thats a lot of lines

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
