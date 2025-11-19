

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7e509cb5-4f64-4d96-9895-3bdd1b343f3d","8655f69d-f750-40a8-a938-4d58c1f33246","15fedd64-1d8e-4dee-82b3-502577cce72f","503742d5-2ecb-4c66-95ec-d78d81c236bd","b0df69e2-e4e9-463f-9940-8a26ecb7bd44","a4f987ed-1d04-4b3b-b87f-5eb239858b36","7229b371-d36c-4cda-b120-4b35d4e0a346","4a5a5088-b083-4c15-9a11-a31d6f3cb391","42e1f493-7786-4a81-b833-a13fb567b7fc","11ea001b-ef45-44ef-a0b6-0f8642a91cf3","01c7dd9c-7f0e-4cf7-bf00-ace78afbf19f","e24f319d-3336-4a3a-a1da-c94948ca9adb","1ec0754a-b522-4e3d-8d91-4e25c5a7a670","d5ddef8a-d96b-4954-8ab3-c8e82d492f85","35e93e6a-748f-48ca-a83e-dfe26e5edfa2","711e5786-2aec-4fa4-9009-ddab31c68b3a","525a4612-4af5-4fe7-bbb5-14264be28281","c30f8dbd-bd36-4511-b0a3-47326403b505","d26549b8-252c-4ab0-8a80-bb535138bf5a","73819eb2-0a92-405a-99ed-5a1b239d4cfa"],"propsByKey":{"7e509cb5-4f64-4d96-9895-3bdd1b343f3d":{"name":"swordfl","sourceUrl":null,"frameSize":{"x":600,"y":781},"frameCount":1,"looping":true,"frameDelay":12,"version":"LzzkYE_hbjcI9VJ7iKtMrCFC.SCD9v_d","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":781},"rootRelativePath":"assets/7e509cb5-4f64-4d96-9895-3bdd1b343f3d.png"},"8655f69d-f750-40a8-a938-4d58c1f33246":{"name":"sword","sourceUrl":null,"frameSize":{"x":600,"y":781},"frameCount":1,"looping":true,"frameDelay":12,"version":"uz7X8Z9EyqrL2I.fiZFFnDWRfRFQumP0","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":781},"rootRelativePath":"assets/8655f69d-f750-40a8-a938-4d58c1f33246.png"},"15fedd64-1d8e-4dee-82b3-502577cce72f":{"name":"Axe","sourceUrl":null,"frameSize":{"x":200,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"e_w6goN5dRHNplYohKqFyRBsDcqhDNF7","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":260},"rootRelativePath":"assets/15fedd64-1d8e-4dee-82b3-502577cce72f.png"},"503742d5-2ecb-4c66-95ec-d78d81c236bd":{"name":"Axe2","sourceUrl":null,"frameSize":{"x":200,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"5lOTi_AEzYXTdSYSTKjmnPOrgFKOBPDy","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":260},"rootRelativePath":"assets/503742d5-2ecb-4c66-95ec-d78d81c236bd.png"},"b0df69e2-e4e9-463f-9940-8a26ecb7bd44":{"name":"Axefl","sourceUrl":null,"frameSize":{"x":260,"y":228},"frameCount":1,"looping":true,"frameDelay":12,"version":"yy3KiXdeTnHt9JUnopxvWniRCDOBdNrz","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":228},"rootRelativePath":"assets/b0df69e2-e4e9-463f-9940-8a26ecb7bd44.png"},"a4f987ed-1d04-4b3b-b87f-5eb239858b36":{"name":"Axefl2","sourceUrl":null,"frameSize":{"x":260,"y":228},"frameCount":1,"looping":true,"frameDelay":12,"version":"40g6KGDzsC7ZLk4NuY7IQOrQ7QmluLXv","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":228},"rootRelativePath":"assets/a4f987ed-1d04-4b3b-b87f-5eb239858b36.png"},"7229b371-d36c-4cda-b120-4b35d4e0a346":{"name":"Axeh","sourceUrl":null,"frameSize":{"x":305,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"aQCVS3rzd.38oN5Of33mSMa52iHkK0GS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":305,"y":397},"rootRelativePath":"assets/7229b371-d36c-4cda-b120-4b35d4e0a346.png"},"4a5a5088-b083-4c15-9a11-a31d6f3cb391":{"name":"Axeh2","sourceUrl":null,"frameSize":{"x":305,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"WD4894w9OzLUltSXBv0wtck1PS4ok9xw","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":305,"y":397},"rootRelativePath":"assets/4a5a5088-b083-4c15-9a11-a31d6f3cb391.png"},"42e1f493-7786-4a81-b833-a13fb567b7fc":{"name":"swordh","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"11ea001b-ef45-44ef-a0b6-0f8642a91cf3":{"name":"p1","sourceUrl":null,"frameSize":{"x":466,"y":466},"frameCount":1,"looping":true,"frameDelay":12,"version":"p_pQ0v1UlFSkEPNjCxvDaZImwfhEwvrp","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":466},"rootRelativePath":"assets/11ea001b-ef45-44ef-a0b6-0f8642a91cf3.png"},"01c7dd9c-7f0e-4cf7-bf00-ace78afbf19f":{"name":"p1f","sourceUrl":null,"frameSize":{"x":466,"y":466},"frameCount":1,"looping":true,"frameDelay":12,"version":"yUDE2KUjVzXGABNb_hWDoHEwit1VHS_R","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":466},"rootRelativePath":"assets/01c7dd9c-7f0e-4cf7-bf00-ace78afbf19f.png"},"e24f319d-3336-4a3a-a1da-c94948ca9adb":{"name":"p2","sourceUrl":null,"frameSize":{"x":466,"y":466},"frameCount":1,"looping":true,"frameDelay":12,"version":"XA3YKMMUxZp8oINOCtgNCQm5HgvHvwsO","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":466},"rootRelativePath":"assets/e24f319d-3336-4a3a-a1da-c94948ca9adb.png"},"1ec0754a-b522-4e3d-8d91-4e25c5a7a670":{"name":"p2f","sourceUrl":null,"frameSize":{"x":466,"y":466},"frameCount":1,"looping":true,"frameDelay":12,"version":"dfpqv6hFwNK4z_wjWwD2LuoEn5bdUeE2","loadedFromSource":true,"saved":true,"sourceSize":{"x":466,"y":466},"rootRelativePath":"assets/1ec0754a-b522-4e3d-8d91-4e25c5a7a670.png"},"d5ddef8a-d96b-4954-8ab3-c8e82d492f85":{"name":"p2sfl","sourceUrl":null,"frameSize":{"x":600,"y":850},"frameCount":1,"looping":true,"frameDelay":12,"version":"4gz01bjT4SjuIiaDou8QKxZ9BGfo1byd","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":850},"rootRelativePath":"assets/d5ddef8a-d96b-4954-8ab3-c8e82d492f85.png"},"35e93e6a-748f-48ca-a83e-dfe26e5edfa2":{"name":"p2s","sourceUrl":null,"frameSize":{"x":600,"y":850},"frameCount":1,"looping":true,"frameDelay":12,"version":"fXWd7v_IgOPObFJ.kPPydvtLc.QsLQEM","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":850},"rootRelativePath":"assets/35e93e6a-748f-48ca-a83e-dfe26e5edfa2.png"},"711e5786-2aec-4fa4-9009-ddab31c68b3a":{"name":"p2sh","sourceUrl":null,"frameSize":{"x":278,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"HkCGpcKXl8rseYdoOXV3SShL2OipjwR1","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":394},"rootRelativePath":"assets/711e5786-2aec-4fa4-9009-ddab31c68b3a.png"},"525a4612-4af5-4fe7-bbb5-14264be28281":{"name":"p2g","sourceUrl":"assets/api/v1/animation-library/gamelab/on_n5nYApK0zhlPP5IRPqG168hwGRaeo/category_video_games/gameplayadventure_02.png","frameSize":{"x":359,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"on_n5nYApK0zhlPP5IRPqG168hwGRaeo","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":359,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/on_n5nYApK0zhlPP5IRPqG168hwGRaeo/category_video_games/gameplayadventure_02.png"},"c30f8dbd-bd36-4511-b0a3-47326403b505":{"name":"p1g","sourceUrl":"assets/api/v1/animation-library/gamelab/on_n5nYApK0zhlPP5IRPqG168hwGRaeo/category_video_games/gameplayadventure_02.png","frameSize":{"x":359,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"on_n5nYApK0zhlPP5IRPqG168hwGRaeo","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":359,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/on_n5nYApK0zhlPP5IRPqG168hwGRaeo/category_video_games/gameplayadventure_02.png"},"d26549b8-252c-4ab0-8a80-bb535138bf5a":{"name":"p1gh","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"73819eb2-0a92-405a-99ed-5a1b239d4cfa":{"name":"p2gh","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"}}};
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

var p1si = 2;
// detects if player one sword is active
var p1xi = 2;
// decects if player one axe is active
var p2si = 2;
// decects if player two sword is active
var p2xi = 2;
// decects if player two axe is active
var p2hp = 10;
// player two hp value
var p1hp = 10;
// player one hp value
var sword_d = 2;
// player one sword direction
var p2s_d = 1;
// player two sword direction
var gameover = false;
// detects if the game is running
var bg3s = 0;
// the size of background 3's pulsing circle
var bg = randomNumber(1, 3);
// what background will be selected
var bg1canheal = true;
// says if bg1's heal square can heal
var candrawhealsquare = false;
// says if you can draw bg1's heal square
var isgoingtoheal = 0;
// says if bg1's heal squre is going to heal
var healsquaretimeoffset = randomNumber(200, 10000);
// amount of time to the heal square to be made
var healsquarehashealed = false;
// detects if the heal square has healed
var axe = createSprite(320, 200);
axe.setAnimation("Axeh");
axe.setCollider("circle", -75, -80, 55);
// making p1's axe
var axe2 = createSprite(80, 200);
axe2.setAnimation("Axeh2");
axe2.setCollider("circle", 75, -80, 55);
// making p2's axe
var p1 = createSprite(320, 200);
p1.setAnimation("p1f");
// making p1
var p2 = createSprite(80, 200);
p2.setAnimation("p2");
// making p2
var sword = createSprite(305, 200);
sword.setAnimation("swordh");
// making p1's sword
var p2s = createSprite(90, 200);
p2s.setAnimation("p2sh");
// making p2's sword
sword.scale = 0.17;
p2s.scale = 0.17;
p1.scale = 0.1;
p2.scale = 0.1;
axe.scale = 0.75;
axe2.scale = 0.75;

// for p1 use i,j,k,l for movement and u and y for sword and axe attacks.

// for p2 use i,j,k,l for movement and u and y for sword and axe attacks.

// the sword is your basic attack
// the axe deals more damage but has a longer cooldown
// you cant move when attacking with the axe

// the main draw loop
function draw() {
 // gameover code for p2
 if (p2hp <= 0) {
    GameOver();
    fill("blue");
    text("P1 Won", 140, 200);
  }
  // gameover code for p1
 if (p1hp <= 0) {
    GameOver();
    fill("red");
    text("P2 Won", 140, 200);
  }
  // all background code
  // every time you run a random background is selected
 if (gameover == false) {
    if (bg == 1) {
    // background 1 code
    drawb1();
    }
    if (bg == 2) {
      // background 2 code
      drawb2();
    }
    if (bg == 3) {
      // background 3 code
      drawb3();
    }
  }
 if (gameover == false) {
    // all code below this only activeates if gameover is not true
    // background 3's healing square code
    if (bg==1) {
      if (bg1canheal == true) {
        if (p1hp<=5&&p2hp<=5) {
         if (healsquarehashealed == false) {
           candrawhealsquare = true;
           setTimeout(function() {         
           if (165 <= p1.x && p1.x <= 235 && 165 <= p1.y && p1.y <= 235) {
              setTimeout(function() {if (165 <= p1.x && p1.x <= 235 && 165 <= p1.y && p1.y <= 235)isgoingtoheal = 1}, 0);
              console.log("p1heal");
              setTimeout(function() {candrawhealsquare = false;}, 1000);
            }
           if (165 <= p2.x && p2.x <= 235 && 165 <= p2.y && p2.y <= 235) {
              setTimeout(function() {if (165 <= p2.x && p2.x <= 235 && 165 <= p2.y && p2.y <= 235)isgoingtoheal = 2}, 0);
              setTimeout(function() {candrawhealsquare = false;}, 1000);
              console.log("p2heal");
            }}, healsquaretimeoffset);
         }
         fill("orange");
         rect(175, 175, 50, 50);
        }
        if (isgoingtoheal == 1) {
          p1hp=p1hp+3;
          bg1canheal = false;
          candrawhealsquare = false;
          healsquarehashealed = false;
          fill("orange");
          rect(175, 175, 50, 50);
        }
        if (isgoingtoheal == 2) {
          p2hp=p2hp+3;
          bg1canheal = false;
          candrawhealsquare = false;
          healsquarehashealed = false;
          fill("orange");
          rect(175, 175, 50, 50);
        }
      }
      if (candrawhealsquare == true) {
        fill("green");
        rect(175, 175, 50, 50);
      }
    }
    //hp text code
    fill("white");
    textSize(20);
    // p1 hp code
    text(p1hp, p1.x + -12, p1.y + -30);
    // p2 hp code
    text(p2hp, p2.x + -12, p2.y + -30);
    // damage code for p1's sword
    if (sword.isTouching(p2) && p1si == 1) {
        p2hp = p2hp - 1;
        p1si = 0;
    }
    // damage code for p2's sword
    if (p2s.isTouching(p1) && p2si == 1) {
        p1hp = p1hp - 1;
        p2si = 0;
    }
    // damage code for p1's axe
    if (axe.isTouching(p2) && p1xi == 1) {
        p2hp = p2hp - 3;
        p1xi = 0;
    }
    // damage code for p2's axe
    if (axe2.isTouching(p1) && p2xi == 1) {
        p1hp = p1hp - 3;
        p2xi = 0;
    }
    // p1's movement code
    //p1's right movement code
    if (380 > p1.x) {
      if (sword_d == 1) {
        if (keyDown("j") && p1xi!=1) {
           sword.x = sword.x + -15;
         }
      }
      if (keyDown("l") && p1xi!=1) {
         p1.x = p1.x + 10;
         sword_d = 1;
         p1.setAnimation("p1");
         axe.x = p1.x + 10;
         sword.x = p1.x + 10;
       }
    }
    //p1's left movement code
    if (p1.x > 20) {
      if (sword_d == 1) {
        if (keyDown("j") && p1xi!=1) {
           sword.x = sword.x + -15;
         }
      }
      if (keyDown("j") && p1xi!=1) {
         p1.x = p1.x + -10;
         sword_d = 2;
         p1.setAnimation("p1f");
         sword.x = sword.x + -10;
         axe.x = p1.x + -10;
       }
    }
    //p1's down movement code
    if (p1.y < 380) {
      if (keyDown("k")&& p1xi != 1) {
        p1.y = p1.y + 10;
        sword.y = p1.y + 0;
        axe.y = p1.y + 0;
      }
    }
    // p1's up movement code
    if (p1.y > 29) {
      if (keyDown("i") && p1xi !=1) {
        p1.y = p1.y + -10;
        sword.y = p1.y + 0;
        axe.y = p1.y + 0;
      }
    }
    // p1's sword attack code
    // p1's sword attack code while facing left
    if (keyWentDown("u")) {
      if (((sword_d==2) && p1si !=1) && p1si != 0){
        // enable the sword to deal damage
        p1si = 1;
        sword.setAnimation("swordfl");
        // animates the sword
        setTimeout(function() {
          sword.rotation = -10;}, 20);
        setTimeout(function() {
          sword.rotation = -15;}, 40);
        setTimeout(function() {
          sword.rotation = -25;}, 60);
        setTimeout(function() {
          sword.rotation = -40;}, 90);
        setTimeout(function() {
          sword.rotation = -65;}, 110);
        setTimeout(function() {
          sword.rotation = -85;}, 130);
        setTimeout(function() {
          sword.rotation = -115;}, 150);
        setTimeout(function() {
          sword.rotation = -140;}, 170);
        setTimeout(function() {
          sword.rotation = -115;}, 190);
        setTimeout(function() {
          sword.rotation = -85;}, 210);
        setTimeout(function() {
          sword.rotation = -60;}, 230);
        setTimeout(function() {
          sword.rotation = -40;}, 250);
        setTimeout(function() {
          sword.rotation = -25;}, 270);
        setTimeout(function() {
          sword.rotation = -15;}, 290);
        setTimeout(function() {
          sword.rotation = -10;}, 310);
        setTimeout(function() {sword.setAnimation("swordh");}, 311);
        // makes it so the sword can't deal damage
        setTimeout(function() {p1si = 0;}, 310);
        // puts the sword on cooldown
        setTimeout(function() {p1si = 2;}, 550);
      } else {
        // p1's sword attack code while facing right
        if ((sword_d==1 && p1si != 1)&& p1si != 0){
          // enables the sword to deal damage
          p1si = 1;
          sword.setAnimation("sword");
          // animates the sword
          setTimeout(function() {
            sword.rotation = 10;}, 20);
          setTimeout(function() {
            sword.rotation = 15;}, 40);
          setTimeout(function() {
            sword.rotation = 25;}, 60);
          setTimeout(function() {
            sword.rotation = 40;}, 90);
          setTimeout(function() {
            sword.rotation = 60;}, 110);
          setTimeout(function() {
            sword.rotation = 85;}, 130);
          setTimeout(function() {
            sword.rotation = 115;}, 150);
          setTimeout(function() {
            sword.rotation = 140;}, 170);
          setTimeout(function() {
            sword.rotation = 115;}, 190);
          setTimeout(function() {
            sword.rotation = 85;}, 210);
          setTimeout(function() {
            sword.rotation = 60;}, 230);
          setTimeout(function() {
            sword.rotation = 40;}, 250);
          setTimeout(function() {
            sword.rotation = 25;}, 270);
          setTimeout(function() {
            sword.rotation = 15;}, 290);
          setTimeout(function() {
            sword.rotation = 10;}, 310);
          setTimeout(function() {sword.setAnimation("swordh");}, 311);
          // makes it so that the sword can't deal damage
          setTimeout(function() {p1si = 0;}, 310);
          // puts the sword on cooldown
          setTimeout(function() {p1si = 2;}, 550);
        }
      }
    }
        // p1 axe attack code
    if (keyWentDown ("y")) {
    if ((sword_d==2 && p1xi !=0) && p1xi !=1) {
      // enables axe to deal damage
      p1xi = 1;
      // animates the axe
      axe.setAnimation("Axe");
      setTimeout(function() {
        axe.rotation = -10;}, 10);
      setTimeout(function() {
        axe.rotation = -21;}, 40);
      setTimeout(function() {
        axe.rotation = -33;}, 70);
      setTimeout(function() {
        axe.rotation = -46;}, 100);
      setTimeout(function() {
        axe.rotation = -60;}, 130);
      setTimeout(function() {
        axe.rotation = -75;}, 170);
      setTimeout(function() {
        axe.rotation = -91;}, 210);
      setTimeout(function() {
        axe.rotation =-108;}, 240);
      setTimeout(function() {
        axe.rotation = -117;}, 270);
      setTimeout(function() {axe.setAnimation("Axeh");}, 271);
      // disables the axe to deal damage
      setTimeout(function() {p1xi = 0;}, 271);
      // puts the axe on cooldown
      setTimeout(function() {p1xi = 2;}, 3750);
    } else {
      // same as before but activates when facing the other way
      if((sword_d==1 && p1xi !=0) && p1xi !=1) {
      // enables the axe to deal damage
      p1xi = 1;
      // animates the axe
      axe.setAnimation("Axefl");
      setTimeout(function() {
        axe.rotation = 10;}, 10);
      setTimeout(function() {
        axe.rotation = 21;}, 40);
      setTimeout(function() {
        axe.rotation = 33;}, 70);
      setTimeout(function() {
        axe.rotation = 46;}, 100);
      setTimeout(function() {
        axe.rotation = 60;}, 130);
      setTimeout(function() {
        axe.rotation = 75;}, 170);
      setTimeout(function() {
        axe.rotation = 91;}, 210);
      setTimeout(function() {
        axe.rotation = 108;}, 240);
      setTimeout(function() {
        axe.rotation = 117;}, 270);
      setTimeout(function() {axe.setAnimation("Axeh");}, 271);
      // disables the axe to deal damage
      setTimeout(function() {p1xi = 0;}, 271);
      // puts the axe on cooldown
      setTimeout(function() {p1xi = 2;}, 3750);
      }
    }
    }
    // p2 movement code
    if (380 > p2.x) {
      // p2 right movement code
      if (keyDown("d") && p2xi!=1) {
         p2.x = p2.x + 10;
         p2s_d = 1;
         p2.setAnimation("p2");
         axe2.x = p2.x + 10;
         p2s.x = p2.x + 10;
       }
    }
    // p2 left movement code
    if (p2.x > 20) {
      if (p2s_d == 1) {
        if (keyDown("a") && p2xi!=1) {
           p2s.x = p2s.x + -15;
         }
      }
      if (keyDown("a") && p2xi!=1) {
         p2.x = p2.x + -10;
         p2s_d = 2;
         p2.setAnimation("p2f");
         p2s.x = p2s.x + -10;
         axe2.x = p2.x + -10;
       }
    }
    // p2 down movement code
    if (p2.y < 380) {
      if (keyDown("s")&& p2xi != 1) {
        p2.y = p2.y + 10;
        p2s.y = p2s.y + 10;
        axe2.y = p2.y + 0;
      }
    }
    // p2 up movement code
    if (p2.y > 29) {
      if (keyDown("w") && p2xi !=1) {
        p2.y = p2.y + -10;
        p2s.y = p2.y + 0;
        axe2.y = p2.y + 0;
      }
    }
    // p2 sword attack code
    // same attack code as p1
    if (keyWentDown("e")) {
    if ((p2s_d==2&& p2si !=0) && p2si !=1) {
      // enables the sword to deal damage
      p2si = 1;
      // animates the sword
      p2s.setAnimation("p2sfl");
      setTimeout(function() {
        p2s.rotation = -10;}, 20);
      setTimeout(function() {
        p2s.rotation = -15;}, 40);
      setTimeout(function() {
        p2s.rotation = -25;}, 60);
      setTimeout(function() {
        p2s.rotation = -40;}, 90);
      setTimeout(function() {
        p2s.rotation = -60;}, 110);
      setTimeout(function() {
        p2s.rotation = -85;}, 130);
      setTimeout(function() {
        p2s.rotation = -115;}, 150);
      setTimeout(function() {
        p2s.rotation = -140;}, 170);
      setTimeout(function() {
        p2s.rotation = -115;}, 190);
      setTimeout(function() {
        p2s.rotation = -85;}, 210);
      setTimeout(function() {
        p2s.rotation = -60;}, 230);
      setTimeout(function() {
        p2s.rotation = -40;}, 250);
      setTimeout(function() {
        p2s.rotation = -25;}, 270);
      setTimeout(function() {
        p2s.rotation = -15;}, 290);
      setTimeout(function() {
        p2s.rotation = -10;}, 310);
      setTimeout(function() {p2s.setAnimation("p2sh");}, 311);
      // makes it so the sword can't deal damage
      setTimeout(function() {p2si = 0;}, 310);
      // puts the sword on cooldown
      setTimeout(function() {p2si = 2;}, 550);
    } else {
      // same as above but facing the other way
      if (((p2s_d==1) && p2si !=0) && p2si !=1) {
      // enables the sword to deal damage
      p2si = 1;
      // animates the sword
      p2s.setAnimation("p2s");
      setTimeout(function() {
        p2s.rotation = 10;}, 20);
      setTimeout(function() {
        p2s.rotation = 15;}, 40);
      setTimeout(function() {
        p2s.rotation = 25;}, 60);
      setTimeout(function() {
        p2s.rotation = 40;}, 90);
      setTimeout(function() {
        p2s.rotation = 60;}, 110);
      setTimeout(function() {
        p2s.rotation = 85;}, 130);
      setTimeout(function() {
        p2s.rotation = 115;}, 150);
      setTimeout(function() {
        p2s.rotation = 140;}, 170);
      setTimeout(function() {
        p2s.rotation = 115;}, 190);
      setTimeout(function() {
        p2s.rotation = 85;}, 210);
      setTimeout(function() {
        p2s.rotation = 60;}, 230);
      setTimeout(function() {
        p2s.rotation = 40;}, 250);
      setTimeout(function() {
        p2s.rotation = 25;}, 270);
      setTimeout(function() {
        p2s.rotation = 15;}, 290);
      setTimeout(function() {
        p2s.rotation = 10;}, 310);
      setTimeout(function() {p2s.setAnimation("p2sh");}, 311);
      // makes it so the sword can't deal damage
      setTimeout(function() {p2si = 0;}, 310);
      // puts the sword on cooldown
      setTimeout(function() {p2si = 2;}, 550);
      }
    }
    }
      // p2 axe attack code
      // same as p1 axe attack code
    if (keyWentDown ("r")) {
    if ((p2s_d==2 && p2xi !=0) && p2xi !=1) {
        // enables the axe to deal damage
        p2xi = 1;
        // animates the axe
        axe2.setAnimation("Axe2");
        setTimeout(function() {
          axe2.rotation = -10;}, 10);
        setTimeout(function() {
          axe2.rotation = -21;}, 40);
        setTimeout(function() {
          axe2.rotation = -33;}, 70);
        setTimeout(function() {
          axe2.rotation = -46;}, 100);
        setTimeout(function() {
          axe2.rotation = -60;}, 130);
        setTimeout(function() {
          axe2.rotation = -75;}, 170);
        setTimeout(function() {
          axe2.rotation = -91;}, 210);
        setTimeout(function() {
          axe2.rotation =-108;}, 240);
        setTimeout(function() {
          axe2.rotation = -117;}, 270);
        setTimeout(function() {axe2.setAnimation("Axeh2");}, 271);
        // makes it so the axe can't deal damage
        setTimeout(function() {p2xi = 0;}, 271);
        // puts the axe on cooldown
        setTimeout(function() {p2xi = 2;}, 3750);
      } else {
        // same as before but only activates while facing the other way
        if(((p2s_d==1) && p2xi !=0) && p2xi !=1) {
        // enables the axe to deal damage
        p2xi = 1;
        // animates the axe
        axe2.setAnimation("Axefl2");
        setTimeout(function() {
          axe2.rotation = 10;}, 10);
        setTimeout(function() {
          axe2.rotation = 21;}, 40);
        setTimeout(function() {
          axe2.rotation = 33;}, 70);
        setTimeout(function() {
          axe2.rotation = 46;}, 100);
        setTimeout(function() {
          axe2.rotation = 60;}, 130);
        setTimeout(function() {
          axe2.rotation = 75;}, 170);
        setTimeout(function() {
          axe2.rotation = 91;}, 210);
        setTimeout(function() {
          axe2.rotation = 108;}, 240);
        setTimeout(function() {
          axe2.rotation = 117;}, 270);
        setTimeout(function() {axe2.setAnimation("Axeh2");}, 271);
        // makes it so the axe can't deal damage
        setTimeout(function() {p2xi = 0;}, 271);
        // puts the axe on cooldown
        setTimeout(function() {p2xi = 2;}, 3750);
        }
      }
      }
  }
 drawSprites();
}
function drawb1() {
  // drawing the first background
  background("purple");
  fill("orange");
  rect(25, 25, 350, 350);
  fill("purple");
  rect(50, 50, 300, 300);
  fill("orange");
  rect(75, 75, 250, 250);
  fill("purple");
  rect(100, 100, 200, 200);
  fill("orange");
  rect(125, 125, 150, 150);
  fill("purple");
  rect(150, 150, 100, 100);
  fill("orange");
  rect(175, 175, 50, 50);
}
function drawb2() {
  // drawing the second background
  background("green");
  fill("red");
  ellipse(200, 200, 550, 550);
  fill("green");
  ellipse(200, 200, 500, 500);
  fill("red");
  ellipse(200, 200, 450, 450);
  fill("green");
  ellipse(200, 200, 400, 400);
  fill("red");
  ellipse(200, 200, 350, 350);
  fill("green");
  ellipse(200, 200, 300, 300);
  fill("red");
  ellipse(200, 200, 250, 250);
  fill("green");
  ellipse(200, 200, 200, 200);
  fill("red");
  ellipse(200, 200, 150, 150);
  fill("green");
  ellipse(200, 200, 100, 100);
  fill("red");
  ellipse(200, 200, 50, 50);
}
function drawb3() {
  // drawing the 3rd background
  background("blue");
  //randomizes the size of background's pulsing circle
  bg3s = randomNumber(250, 350);
  fill("purple");
  ellipse(200, 200, bg3s, bg3s);
}
// game over code
function GameOver() {
  //makes screen black
  background("black");
    // disables all player actions
  gameover = true;
  textSize(32);
  // makes p1 and p2 invisible
  p2.visible = false;
  p1.visible = false;
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
