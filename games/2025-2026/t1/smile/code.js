

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4c55878f-81bb-4969-94a7-c409254b77f9","493ef068-ec88-4ef9-a8bc-0c2d5e6a3fd8","421fd2ef-65bf-4617-aa7c-c24ac2a6f08b","92fa57c9-81ed-4b24-a679-d2e5f858eff7","2db01a28-0f30-40aa-926f-3b1540e8ba58","588f369a-b2f7-4187-bce9-28d29bf98643","ca1bd942-573b-4684-9cce-c85f6dc9a072","d7ac0ebc-a6d6-4231-85f9-42bfbec696e1","9b615c9d-2d81-4335-ad70-8e135df9960e","cbd22eca-1e39-4c3b-911a-156158fe0946","5763d943-c22b-4c70-b08f-c329e2875eab","4415518d-9977-45cd-a817-726ad6a825b9","497ccdf3-d572-46ae-808d-f57c67e97445","9ab63bb9-4262-42d8-bc48-2fe60f854b38","8db6961e-bf90-4c63-8a14-363485fff372","18df0538-f278-48a4-ba94-42266a9a2626","1119b84a-ca6f-4157-bcee-dd6036bca6aa","9b11a68b-9cce-4fd4-a6e3-01ab5cf499e8","db4875c4-fad7-4894-bdb4-51df542a39c9","de816e97-3640-4d8d-91ac-1e6654a20cca","eda8214a-1ca8-4d7a-9a42-4c9131d43b08","e0d0507b-35b6-425e-b2eb-77eacaded092"],"propsByKey":{"4c55878f-81bb-4969-94a7-c409254b77f9":{"name":"human","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6k2hxwfoZSx2PtUJIOXzZX5HCo4s5SAO","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4c55878f-81bb-4969-94a7-c409254b77f9.png"},"493ef068-ec88-4ef9-a8bc-0c2d5e6a3fd8":{"name":"humanwalkright","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bMta7_g_tmwhjl1mTm842W1rhz0GrxRg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/493ef068-ec88-4ef9-a8bc-0c2d5e6a3fd8.png"},"421fd2ef-65bf-4617-aa7c-c24ac2a6f08b":{"name":"humanwalkleft","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"A4fNdlQnWrq1rPINJuOPfd6tPw7E9DVu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/421fd2ef-65bf-4617-aa7c-c24ac2a6f08b.png"},"92fa57c9-81ed-4b24-a679-d2e5f858eff7":{"name":"evilcrab","sourceUrl":null,"frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":12,"version":"uykEHKpzMdqodb1rSRwAg40a.1PJ.WN1","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/92fa57c9-81ed-4b24-a679-d2e5f858eff7.png"},"2db01a28-0f30-40aa-926f-3b1540e8ba58":{"name":"normgem","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"588f369a-b2f7-4187-bce9-28d29bf98643":{"name":"swordRIGHT","sourceUrl":null,"frameSize":{"x":390,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"l7.LOYA2ZD3J9i4iw1Wj6GGXf18iVk2p","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":394},"rootRelativePath":"assets/588f369a-b2f7-4187-bce9-28d29bf98643.png"},"ca1bd942-573b-4684-9cce-c85f6dc9a072":{"name":"swordLEFT","sourceUrl":null,"frameSize":{"x":390,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"_4bB59cMKYJED6qtQCymTF7FceNafApj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":394},"rootRelativePath":"assets/ca1bd942-573b-4684-9cce-c85f6dc9a072.png"},"d7ac0ebc-a6d6-4231-85f9-42bfbec696e1":{"name":"swordswingingLEFT","sourceUrl":null,"frameSize":{"x":390,"y":394},"frameCount":2,"looping":true,"frameDelay":12,"version":"0361Lw1XkrJCBycoaj8MyotjHzvJs4xO","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":788},"rootRelativePath":"assets/d7ac0ebc-a6d6-4231-85f9-42bfbec696e1.png"},"9b615c9d-2d81-4335-ad70-8e135df9960e":{"name":"swordswingingRIGHT","sourceUrl":null,"frameSize":{"x":390,"y":394},"frameCount":2,"looping":true,"frameDelay":12,"version":"0KQS0Q5X2TIsZA3jCgsb9bLaMOFYNNR1","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":788},"rootRelativePath":"assets/9b615c9d-2d81-4335-ad70-8e135df9960e.png"},"cbd22eca-1e39-4c3b-911a-156158fe0946":{"name":"texture_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07/category_backgrounds/texture_01.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uEAqWZ6DUSeUBR36NH5T5U.mGEmamW07/category_backgrounds/texture_01.png"},"5763d943-c22b-4c70-b08f-c329e2875eab":{"name":"heart100","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"gdLOtfGqZWXAfB_uEm.sq.J3FHw6TMA3","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/5763d943-c22b-4c70-b08f-c329e2875eab.png"},"4415518d-9977-45cd-a817-726ad6a825b9":{"name":"heart75","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"qSa2TEhbYNpLeb.hnQh8SsDL5tpkNqTU","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/4415518d-9977-45cd-a817-726ad6a825b9.png"},"497ccdf3-d572-46ae-808d-f57c67e97445":{"name":"heart50","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"rKAf0jvjNDx07cbz6JJXE1wCl_ZoIjX9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/497ccdf3-d572-46ae-808d-f57c67e97445.png"},"9ab63bb9-4262-42d8-bc48-2fe60f854b38":{"name":"heart25","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"QVuRt4mdQXEgGnZgt.sVrjQbabGL8DBS","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/9ab63bb9-4262-42d8-bc48-2fe60f854b38.png"},"8db6961e-bf90-4c63-8a14-363485fff372":{"name":"texture_02_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"PP2d1ekzVuy8PBs_ggQHSI6Yu1e2AvuO","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8db6961e-bf90-4c63-8a14-363485fff372.png"},"18df0538-f278-48a4-ba94-42266a9a2626":{"name":"texture_01_2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"0H8iWdRoTgteQUQWSxyW_CylY74n2CB_","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/18df0538-f278-48a4-ba94-42266a9a2626.png"},"1119b84a-ca6f-4157-bcee-dd6036bca6aa":{"name":"thesmiler","sourceUrl":null,"frameSize":{"x":374,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":".jp6Mv0ZYvLIMvJEGXSWGEgYbDET5L3Z","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":374,"y":397},"rootRelativePath":"assets/1119b84a-ca6f-4157-bcee-dd6036bca6aa.png"},"9b11a68b-9cce-4fd4-a6e3-01ab5cf499e8":{"name":"SMILERDEN","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"qfD2heW4YLpeok2AqRc76vM9v0b8d5r7","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9b11a68b-9cce-4fd4-a6e3-01ab5cf499e8.png"},"db4875c4-fad7-4894-bdb4-51df542a39c9":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KURAj3SiUfndfVKXEzsiWAipC6FNPul4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/db4875c4-fad7-4894-bdb4-51df542a39c9.png"},"de816e97-3640-4d8d-91ac-1e6654a20cca":{"name":"smilerattack1","sourceUrl":null,"frameSize":{"x":51,"y":87},"frameCount":1,"looping":true,"frameDelay":12,"version":"vJ9OnY.tIflt0EQ5EdLMPuu70ikUOBNZ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":87},"rootRelativePath":"assets/de816e97-3640-4d8d-91ac-1e6654a20cca.png"},"eda8214a-1ca8-4d7a-9a42-4c9131d43b08":{"name":"GAMEOVER","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"7fk9WWFzL6PT5zYY1lZIiNA96A1wG8sB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/eda8214a-1ca8-4d7a-9a42-4c9131d43b08.png"},"e0d0507b-35b6-425e-b2eb-77eacaded092":{"name":"WINESCREEN","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sh0AXddjEmRLyg3ZKVgVVRCI8SrNlVNL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e0d0507b-35b6-425e-b2eb-77eacaded092.png"}}};
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
var level1bg = createSprite(200,200);
var human = createSprite(200,350);
var sword = createSprite(100,100);
var monster1 = createSprite(350,34);
var gem1 = createSprite(350,350);
var PlayerJumped = false;
var lives = 7;
var score = 0;
var smilerhp = 1000;
var playerhp = 100 ;
var bosstimer = 0;
var heart = createSprite(340,39,100,100);
var monster1health = 100;
var smiler = createSprite(200,25);
var smilera1 = createSprite(100,100);
var gameover = createSprite(200,200,400,400);
var winscreen = createSprite(200,200,800,800)
winscreen.setAnimation("WINESCREEN")
gameover.setAnimation("GAMEOVER");
human.setAnimation("human");
sword.setAnimation("swordRIGHT");
monster1.setAnimation("evilcrab");
gem1.setAnimation("normgem");
level1bg.setAnimation("texture_01_1");
smiler.setAnimation("thesmiler");
heart.setAnimation("heart100");
smilera1.setAnimation("smilerattack1");
winscreen.scale = 4
winscreen.alpha = 0;
gameover.alpha = 0;
gameover.scale = 5
smilera1.scale = 0.5;
smiler.alpha = 0;
smiler.scale = 0.5;
heart.scale = 0.3;
human.scale = 1;
gem1.scale = 0.1;
sword.scale = 0.15;
monster1.scale = 0.5;
smilera1.alpha = 0;
human.rotateToDirection = true;

// Create your sprites here

function draw() {
 
 
  // draw background
  
 fill("black");
textSize(30);
text(score, 200, 200);
  sword.y = human.y - 2;
  sword.x = human.x + 50;


if (keyDown("d")) {
  human.x = human.x + 5;
human.setAnimation("humanwalkright");
sword.y = human.y + 15;
  sword.x = human.x + 50;
  if (mouseWentDown("leftButton")) {
    SwingBaseSwordLeft(); 
  }
}


if (keyDown("a")) {
  human.x = human.x - 5;
  human.setAnimation("humanwalkleft");
  sword.setAnimation("swordLEFT");
  sword.y = human.y + 15;
  sword.x = human.x - 50;
  if (mouseDown("leftButton")) {
    SwingBaseSwordRight();
  }
} else {
  human.setAnimation("humanwalkright");
  sword.setAnimation("swordRIGHT");
  
}


//MOVEMENT UP AND DOWN

if (keyDown("w")) {
  human.y = human.y - 5;
}


if (keyDown("s")) {
  human.y = human.y + 5;
}



  // update sprites
function SwingBaseSwordRight() {
  sword.setAnimation("swordswingingRIGHT");
  if (monster1.isTouching(sword)) {
    monster1health = monster1health - 10;
    if (monster1health == 0) {
      ResetMonster1();
      score = score + (randomNumber(25,100));
    }
  
  } else {
    
  }
}
 function SwingBaseSwordLeft() {
   sword.setAnimation("swordswingingLEFT");
   if (monster1.isTouching(sword)) {
     monster1health = monster1health - 10;
     if (monster1health == 0) {
       ResetMonster1();
       score = score + (randomNumber(25,100));
     }
   }
 }
 
 function ResetMonster1() {
  monster1health = 100;
  
   monster1.x = randomNumber(-100,500);
  monster1.y = randomNumber(-100,500);
  monster1.velocityX = randomNumber(0,5);
  monster1.velocityY = randomNumber(0,5);
  
 
}
 
 //SMILER BOSSFIGHT
 function SUMMONTHESMILER() {
   level1bg.setAnimation("SMILERDEN");
    bosstimer = bosstimer + 0.1;
    
   
   SMILERATTACK1();
   if (bosstimer >= 100 ) {
     SMILERATTACK2();
     bosstimer = 0;
   }
 }
 
 
 function SMILERATTACK1 () {
  smilera1.alpha = 1;
  monster1.alpha = 0;
   
   smilera1.velocityY = smilera1.velocityY + 0.05
   if (smilera1.y >= 400) {
     smilera1.y = -10;
     smilera1.x = randomNumber(1,400);
   }
     if (human.isTouching(smilera1)) {
       playerhp = playerhp - 14;
       console.log(playerhp);
        smilera1.y = -10;
     smilera1.x = randomNumber(1,400);
     
     SMILERTEXT = "Collect 2000 score before it's too late!"
     }
  if (smilera1.velocityY > 30) {
      SMILERATTACK2()
    }
     
   }
 
 
 
 function SMILERATTACK2 () {
   smilera1.alpha = 0;
   smilera1.velocityY = 0;
   smilera1.x = 0;
   smilera1.y = 0;
   winscreen.alpha = 1
   
 }

 if (human.isTouching(gem1)) {
   score = score + 50;
   gem1.x = randomNumber(1,400) ;
  gem1.y = randomNumber(1,400);
   
   monster1.velocityX = monster1.velocityX + 3
   monster1.velocityY = monster1.velocityY + 3
 }

 if (human.isTouching(monster1)) {
   playerhp = playerhp - 5
   ResetMonster1();
 }
 
 
 
 
  drawSprites();


  if ((monster1.y >= 501) || (monster1.y <= -101) || (monster1.x >= 501) || (monster1.x <= -101)) {
  
  
  ResetMonster1();
  
}

fill("black");
stroke("red");
strokeWeight(3);
textSize(15);
var textx = 0;
var texty = 50;
var SMILERTEXT = "....";

//SMILER TEXT SEQUENCE
if (score >= 100) {
  SMILERTEXT = "The wind chills your bones...";
}

if (score >= 250) {
  SMILERTEXT = "You start to have a uneasy feeling about this game. /n Maybe it isn't what it seems";
}

if (score >= 400) {
    SMILERTEXT = "Faint thumps and shrieks are heard in the distance...";
}

if (score >= 500) {
  SMILERTEXT = "THE SMILER DRAWS NEAR. HE SHALL STRIKE JUDGEMENT ON ALL THOSE WHO SIN";

  
  
}
if (score >= 666) {
  SUMMONTHESMILER();
}

//HEART SEQUENCE
if (playerhp === 100) {
  heart.setAnimation("heart100");
}
if (playerhp <= 75) {
  heart.setAnimation("heart75");
} 
if (playerhp <= 50) {
  heart.setAnimation("heart50");
}
if (playerhp <= 25) {
  heart.setAnimation("heart25");
}

fill("black");
stroke("red");
strokeWeight(3);
textSize(15);

textFont("Courier New");
text(SMILERTEXT, textx, texty);
textSize(30);
text(score, 30, 370);
function GAMEOVER() {

gameover.alpha = 1;
}


if (playerhp <= 0) {
  GAMEOVER();
  drawSprites();
}



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
