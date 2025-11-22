

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["21128ece-6f10-4160-a092-732b12ba5aed","c9d6a37f-39fe-44c2-b161-33305c9e8484","023f0c4a-21d8-4e8f-b3fc-0ff09efe5fbf","d4bba3a5-36b4-49dd-ae00-91923dd50dfc","7fb39bff-334f-41ff-aa51-4fb1c4b4d1ad"],"propsByKey":{"21128ece-6f10-4160-a092-732b12ba5aed":{"name":"bee_1","sourceUrl":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"N602_cNy0LoPLXkwaUfCp2XJWPo86SUw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png"},"c9d6a37f-39fe-44c2-b161-33305c9e8484":{"name":"rock","sourceUrl":null,"frameSize":{"x":54,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"VYILnNqGUH3yMRlaDl8rDdikuZ0CrkKj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":56},"rootRelativePath":"assets/c9d6a37f-39fe-44c2-b161-33305c9e8484.png"},"023f0c4a-21d8-4e8f-b3fc-0ff09efe5fbf":{"name":"rock_2","sourceUrl":null,"frameSize":{"x":54,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"b2nF_vQVF4bVbVPmieIbXN3ueirHTdJu","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":55},"rootRelativePath":"assets/023f0c4a-21d8-4e8f-b3fc-0ff09efe5fbf.png"},"d4bba3a5-36b4-49dd-ae00-91923dd50dfc":{"name":"coal","sourceUrl":null,"frameSize":{"x":62,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":".8WujJbBqiyzmRXpksMXjTf51BeJ4GEY","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":60},"rootRelativePath":"assets/d4bba3a5-36b4-49dd-ae00-91923dd50dfc.png"},"7fb39bff-334f-41ff-aa51-4fb1c4b4d1ad":{"name":"gold","sourceUrl":null,"frameSize":{"x":26,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"11uabhmB.Ael0IbG.tgArJ8H48KXT7.f","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":24},"rootRelativePath":"assets/7fb39bff-334f-41ff-aa51-4fb1c4b4d1ad.png"}}};
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

var bee = createSprite(200, 200);
function draw() {
  background("white");
  if (keyDown("right")) {
      bee.x = bee.x + 5;
    }
  if (keyDown("left")) {
      bee.x = bee.x - 5;
    }
  if (keyDown("down")) {
      bee.y = bee.x +5;
    }
  if (keyDown("up")) {
      bee.y = bee.y -5;
    }
  if (bee.isTouching(gold)) {
    background("green");
    textSize(45);
    text("YOU WIN", 200, 200);
  }
  drawSprites();
  rock.velocityX = +3;
  if (rock.x > 400 || rock.x < 0) {
    rock.velocityX = -400;
  }
  coal.velocityX = +4;
  if (coal.x > 400 || coal.x < 0) {
    coal.velocityX = -400;
  }
  rock2.velocityX = +2;
  if (rock2.x > 400 || rock2.x < 0) {
    rock2.velocityX = -400;
  }
  if (rock.isTouching(bee)) {
    bee.visible = -100;
    background("red");
    textSize(45);
    text("you died", 100, 220);
  }
  if (rock2.isTouching(bee)) {
    background("red");
    textSize(45);
    text("you died", 100, 220);
  }
  if (coal.isTouching(bee)) {
    background("red");
    textSize(45);
    text("you died", 100, 220);
  }
  text(" w,a,s,d to move", 300, 22);
}


// Create your sprites here
bee. setAnimation("bee_1");
var rock = createSprite(50, 40);
rock.setAnimation("rock");
var rock2 = createSprite(0, 200);
rock2.setAnimation("rock_2");
var coal = createSprite(0, 322);
coal.setAnimation("coal");
var gold = createSprite(randomNumber(10, 350), randomNumber(10, 350));
gold.setAnimation("gold");
drawSprites();
  // draw background

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
