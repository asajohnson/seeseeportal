

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a339283-41b4-4c1a-a5c5-1c39d5540168","bfe7b770-8079-4153-a262-74b0bb077ba4","4601f656-ab31-4b3b-b69e-f9fef0f9cdeb","948b6f4d-310a-47fb-afbd-04dfbf8a5d97","6b27038d-1c88-47b5-ba2d-f2a188b8053f","a4995a91-b313-447c-9f35-8c1573c33d43","95527bb6-db7b-4652-9960-6f64c4a526c4","7f4fdb16-d6fd-456c-a4da-89144a1df78a","faf9ea05-37be-4fa1-8545-4f2a222db403","28611e9f-cc66-4aca-b8db-4aeb2f1fb4f1","d7d5c496-2365-4d3d-a6c1-38ea575c7bcc","a35e3e0a-f2c1-4982-94ec-b00944c88b5c","d150d6a2-e958-4c45-8117-4da0f3b90b69","8c837565-b161-4edd-9220-9172fa2f0950","1f527e31-1ea8-43ab-b441-f7351e929cfb","27c2c27a-6074-456b-acb3-2c8e4cdeeca5","36834d26-0b2f-4900-8d8d-db322244c145","f489622c-fb00-42c1-a968-07389cc57bde","69b596eb-571f-41df-b37e-a57800b9e4a7","c8de5017-7a21-4b61-aadd-f6349395d0b3","89d3ead6-dd49-486b-8429-cfe3e1c9e00d","6524db67-4246-42b5-b34e-d5d389446afc","f62859cb-e04c-48db-a87c-23bf6c93939e","d86bf1de-dffd-4f88-8eac-5c70fe67f428","41ec595e-4af0-41df-959a-d29372a1ac6d","3f8bd1d6-8053-4c44-9b59-bb3619a0ddf1","101b163c-4992-4396-a5b7-8c89bdd98fb3","e278f7c9-2367-4330-a3a8-06a1d4211fbf"],"propsByKey":{"9a339283-41b4-4c1a-a5c5-1c39d5540168":{"name":"shed","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":15,"version":"a8YRph_KkJjNjZayDHI4sbj6ypE7JtSQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9a339283-41b4-4c1a-a5c5-1c39d5540168.png"},"bfe7b770-8079-4153-a262-74b0bb077ba4":{"name":"shedTalk","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":3,"version":"TQ5MwBYyipgXewhoTYqRbbPNiKjxAc0j","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/bfe7b770-8079-4153-a262-74b0bb077ba4.png"},"4601f656-ab31-4b3b-b69e-f9fef0f9cdeb":{"name":"shedOminous","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GcaLJLOIVDwVxIU2NkJi8Tg3357BB9m.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4601f656-ab31-4b3b-b69e-f9fef0f9cdeb.png"},"948b6f4d-310a-47fb-afbd-04dfbf8a5d97":{"name":"shedBliss","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uTWP2C.PWdJXvdkizk8XOPXdrX_5GXTV","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/948b6f4d-310a-47fb-afbd-04dfbf8a5d97.png"},"6b27038d-1c88-47b5-ba2d-f2a188b8053f":{"name":"shedArt","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QkKpE0auWQfxlXTCIkfTHl7VftuFSrkW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6b27038d-1c88-47b5-ba2d-f2a188b8053f.png"},"a4995a91-b313-447c-9f35-8c1573c33d43":{"name":"shedBored","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ky5NJ8U1Pw1nb0SFpmFOJdPjCAnoDC8D","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a4995a91-b313-447c-9f35-8c1573c33d43.png"},"95527bb6-db7b-4652-9960-6f64c4a526c4":{"name":"shedAngry","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"JVJJLLko5Lu36MdH0JnV6H2Kq800F4Jv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/95527bb6-db7b-4652-9960-6f64c4a526c4.png"},"7f4fdb16-d6fd-456c-a4da-89144a1df78a":{"name":"shedHappyTalk","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":2,"version":"3t_qF2_cXiC6tC0_xWO8pPo9MlMfFfqr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/7f4fdb16-d6fd-456c-a4da-89144a1df78a.png"},"faf9ea05-37be-4fa1-8545-4f2a222db403":{"name":"shedHurt","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"uqdrRvHKr9adCh0hIXnJwIsvhaOZ21Tx","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/faf9ea05-37be-4fa1-8545-4f2a222db403.png"},"28611e9f-cc66-4aca-b8db-4aeb2f1fb4f1":{"name":"shedEat","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":4,"version":"mOGiSV_N2jwduKxuS3djh_Cb_2U79aFb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/28611e9f-cc66-4aca-b8db-4aeb2f1fb4f1.png"},"d7d5c496-2365-4d3d-a6c1-38ea575c7bcc":{"name":"shedOverhaul","sourceUrl":null,"frameSize":{"x":194,"y":259},"frameCount":1,"looping":true,"frameDelay":12,"version":"wD4MHy4XaICXjVfI7WpgABl0jdaEmgHC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":194,"y":259},"rootRelativePath":"assets/d7d5c496-2365-4d3d-a6c1-38ea575c7bcc.png"},"a35e3e0a-f2c1-4982-94ec-b00944c88b5c":{"name":"signPlay","sourceUrl":null,"frameSize":{"x":87,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"EUtLb89m6ChAW6S89Sj.7WYxlqdKEcSJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":51},"rootRelativePath":"assets/a35e3e0a-f2c1-4982-94ec-b00944c88b5c.png"},"d150d6a2-e958-4c45-8117-4da0f3b90b69":{"name":"signAnnoy","sourceUrl":null,"frameSize":{"x":87,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"_KhpV41MNvdfTsB1CfJa7DC6QuY3t3Qv","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":51},"rootRelativePath":"assets/d150d6a2-e958-4c45-8117-4da0f3b90b69.png"},"8c837565-b161-4edd-9220-9172fa2f0950":{"name":"signInsult","sourceUrl":null,"frameSize":{"x":87,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"znnUcPmk30zpYNjBHrqJVJK59OHfWFlD","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":51},"rootRelativePath":"assets/8c837565-b161-4edd-9220-9172fa2f0950.png"},"1f527e31-1ea8-43ab-b441-f7351e929cfb":{"name":"signAsk","sourceUrl":null,"frameSize":{"x":87,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"nZ6eTA1xiBq1LrIiHC309d2A_wpp87dT","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":51},"rootRelativePath":"assets/1f527e31-1ea8-43ab-b441-f7351e929cfb.png"},"27c2c27a-6074-456b-acb3-2c8e4cdeeca5":{"name":"signFeed","sourceUrl":null,"frameSize":{"x":87,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"3zTBLTMCys1OMV0ZiyWn7KAu8mtodI_8","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":51},"rootRelativePath":"assets/27c2c27a-6074-456b-acb3-2c8e4cdeeca5.png"},"36834d26-0b2f-4900-8d8d-db322244c145":{"name":"cursor","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CwVX7UON8wTkAbz1zNCV0SdwvQWq265x","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/36834d26-0b2f-4900-8d8d-db322244c145.png"},"f489622c-fb00-42c1-a968-07389cc57bde":{"name":"moodBar","sourceUrl":null,"frameSize":{"x":96,"y":54},"frameCount":1,"looping":true,"frameDelay":12,"version":"6_9Ry1OEAxxtzZkh98WGqNRN2PJdifRV","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":54},"rootRelativePath":"assets/f489622c-fb00-42c1-a968-07389cc57bde.png"},"69b596eb-571f-41df-b37e-a57800b9e4a7":{"name":"panel","sourceUrl":null,"frameSize":{"x":187,"y":190},"frameCount":1,"looping":true,"frameDelay":12,"version":"uFBfW7CSCCvt8ktKERD9HfhlaQZFzCVF","loadedFromSource":true,"saved":true,"sourceSize":{"x":187,"y":190},"rootRelativePath":"assets/69b596eb-571f-41df-b37e-a57800b9e4a7.png"},"c8de5017-7a21-4b61-aadd-f6349395d0b3":{"name":"check","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"nyM649BRdz.zZxy_QaJ1D64k1ddnElu4","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/c8de5017-7a21-4b61-aadd-f6349395d0b3.png"},"89d3ead6-dd49-486b-8429-cfe3e1c9e00d":{"name":"minished","sourceUrl":null,"frameSize":{"x":53,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"CfrO8nQ_tGq6_M7cjeVBqwAB2xo6bg2A","loadedFromSource":true,"saved":true,"sourceSize":{"x":53,"y":73},"rootRelativePath":"assets/89d3ead6-dd49-486b-8429-cfe3e1c9e00d.png"},"6524db67-4246-42b5-b34e-d5d389446afc":{"name":"insult1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FTNOPZ2oUxzCBcnp_VQi_lmccxC7kWf8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6524db67-4246-42b5-b34e-d5d389446afc.png"},"f62859cb-e04c-48db-a87c-23bf6c93939e":{"name":"insult2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jA3u9Txpe6pqQIpn1UBgc1RjK7N9.TwU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f62859cb-e04c-48db-a87c-23bf6c93939e.png"},"d86bf1de-dffd-4f88-8eac-5c70fe67f428":{"name":"insult3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"gPYENrJx6XVepMkatpADkHP9CKIh75wZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d86bf1de-dffd-4f88-8eac-5c70fe67f428.png"},"41ec595e-4af0-41df-959a-d29372a1ac6d":{"name":"insult4","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"rq7RQjRhHjN0Y80mZVNS.0Mqj_vSC0DI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/41ec595e-4af0-41df-959a-d29372a1ac6d.png"},"3f8bd1d6-8053-4c44-9b59-bb3619a0ddf1":{"name":"chicken","sourceUrl":null,"frameSize":{"x":16,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"rieCgaW.VwnKCNvUUusXp.T0CaV76j_S","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":36},"rootRelativePath":"assets/3f8bd1d6-8053-4c44-9b59-bb3619a0ddf1.png"},"101b163c-4992-4396-a5b7-8c89bdd98fb3":{"name":"brighteyes","sourceUrl":null,"frameSize":{"x":95,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"KIfLzuwUoQRUMLFVFcmg1_CDcPNKcyKL","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":27},"rootRelativePath":"assets/101b163c-4992-4396-a5b7-8c89bdd98fb3.png"},"e278f7c9-2367-4330-a3a8-06a1d4211fbf":{"name":"creation","sourceUrl":null,"frameSize":{"x":95,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"s1UDzYfV_0ORc1n.fOYHUpoVMtlktupJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":27},"rootRelativePath":"assets/e278f7c9-2367-4330-a3a8-06a1d4211fbf.png"}}};
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

//bobbing variables
var shedBobDir = 1;
var shedBobSpeed = 0;


//ALL of my sprites + basic variables
var responseVar = 0;

var shed = createSprite(125, 285);
shed.setAnimation("shed");
shed.scale = 2.5;
shed.setCollider("rectangle", -20, 20);

var moodBar = createSprite(125, 70);
moodBar.setAnimation("moodBar");
moodBar.scale = 2.25;

var checkButton = createSprite (220, 20);
checkButton.setAnimation("check");
checkButton.scale = 2;
checkButton.setCollider("circle");

var checkPanel = createSprite (125, 250);
checkPanel.setAnimation("panel");
checkPanel.visible = false;



var feed = createSprite(325, 40);
feed.setAnimation("signFeed");
feed.scale = 1.5;
feed.setCollider("rectangle");

var play = createSprite(325, 120);
play.setAnimation("signPlay");
play.scale = 1.5;
play.setCollider("rectangle");

var annoy = createSprite(325, 200);
annoy.setAnimation("signAnnoy");
annoy.scale = 1.5;
annoy.setCollider("rectangle");

var insult = createSprite(325, 280);
insult.setAnimation("signInsult");
insult.scale = 1.5;
insult.setCollider("rectangle");

var ask = createSprite(325, 360);
ask.setAnimation("signAsk");
ask.scale = 1.5;
ask.setCollider("rectangle");


var cursor = createSprite(World.mouseX, World.mouseY);
cursor.setAnimation("cursor");
cursor.scale = 1.5;

var hungerR = 0;
var hungerG = 255;
var happinessR = 0;
var happinessG = 255;


var randomTalk;
var randomFeed;
var randomAnnoy;
var randomPlay;
var randomInsult;

var randomAsk;

var wife = createSprite(50, 170);
wife.setAnimation("brighteyes");
wife.visible = false;
var oneex = createSprite(150, 170);
oneex.setAnimation("creation");
oneex.visible = false;

var randomSound;

var chickens = 15;

var insultAnim;

var mean = createSprite(200, 200);
mean.scale = 4;
mean.visible = false;

var time = 0;
var minutes = 0;

var bgr = randomNumber(0, 255);

var bgg = randomNumber(0, 255);

var bgb = randomNumber(0, 255);

textAlign(CENTER, TOP);
fill("black");
textSize(20);
noStroke();

playSound("24.-Damnation-(Lobby).mp3", true);

function draw() {
  background(rgb(bgr, bgg, bgb));
  
  //shed bobs up and down
  
  if (shedBobDir == 1){
    shedBobSpeed = shedBobSpeed + 0.1;
  }
  if (shedBobSpeed >= 1){
    shedBobDir = 2;
  }
  if (shedBobDir == 2){
    shedBobSpeed = shedBobSpeed - 0.1;
  }
  if (shedBobSpeed <= -1){
    shedBobDir = 1;
  }
  shed.velocityY = shedBobSpeed;
  
  time = time + 1;
  if (time >= 6000){
    minutes = minutes + 1;
    time = 0;
  }
  
  if (shedBobSpeed >= 1){
    shedBobSpeed = 1;
  }
  if (shedBobSpeed <= -1){
    shedBobSpeed = -1;
  }
  
  if  (shed.y <= 280){
    shed.y = 280;
  }
  if (shed.y >= 292){
    shed.y = 292;
  }
  
  
  
  
  //talk
  if (mouseIsOver(shed) && mouseWentDown("leftButton")) {
    happinessG = happinessG + 1;
    if(happinessG > 255){
      happinessG = 255;
      happinessR = happinessR - 1;
    }
  }
  if(mouseIsOver(shed)){
    if(mouseWentDown("leftButton"))
    randomTalk = randomNumber (1, 10);
    if (mousePressedOver(shed)) {
      shed.setAnimation("shedTalk");
      if(randomTalk == 1){
      text("yo", 120, 175);
      }
      if(randomTalk == 2){
        text("hey", 120, 175);
      }
      if(randomTalk == 3){
        text("whats up", 120, 175);
      }
      if(randomTalk == 4){
        text("sup", 120, 175);
      }
      if(randomTalk == 5){
        text("git gud, lulz", 120, 175);
      }
      if(randomTalk == 6){
        text("remember that time i totally", 120, 170);
        text("pwned you in sfoth?", 120, 185);
      }
      if(randomTalk == 7){
        text("blame john!", 120, 175);
      }
      if(randomTalk == 8){
        text("hiya", 120, 175);
      }
      if(randomTalk == 9){
        text("dinner", 120, 175);
      }
      if(randomTalk == 10){
        text("did you know [content deleted]", 120, 170);
        text("and [content deleted] used to #########?", 120, 185);
      }
    }
    if(mouseWentDown("leftButton")){
      randomSound = randomNumber (1, 3);
      if (randomSound == 1) {
        playSound("assets/Voicy_Hi.mp3", false);
      }
      if (randomSound == 2) {
        playSound("assets/Voicy_Laugh-.mp3", false);
      }
      }
    }
  
  
  //feed
  if (mouseIsOver(feed) && mouseWentDown("leftButton")) {
    if (chickens > 0) {
      randomFeed = randomNumber (1, 10);
      hungerG = hungerG + 1;
      if(hungerG > 255){
        hungerG = 255;
        hungerR = hungerR - 1;
      }
      chickens = chickens - 1;
    }
  }
  if(mousePressedOver(feed)){
    if (chickens > 0) {
      shed.setAnimation("shedEat");
    }
  }
  if(mousePressedOver(feed)){
    if (chickens > 0) {
      if(randomFeed == 1){
      text("yum", 120, 175);
      }
      if(randomFeed == 2){
        text("yummy", 120, 175);
      }
      if(randomFeed == 3){
        text("deeeelish", 120, 175);
      }
      if(randomFeed == 4){
        text("dinner", 120, 175);
      }
      if(randomFeed == 5){
        text("ooh fried chicken :D", 120, 175);
      }
      if(randomFeed == 6){
        text("sick", 120, 170);
      }
      if(randomFeed == 7){
        text("yummers", 120, 175);
      }
      if(randomFeed == 8){
        text("nomnomnom", 120, 175);
      }
      if(randomFeed == 9){
        text("mmm", 120, 175);
      }
      if(randomFeed == 10){
        text("numnumnum", 120, 175);
      }
      if(mouseWentDown("leftButton")){
        randomSound = randomNumber (1, 2);
        if (randomSound == 1) {
          playSound("assets/Voicy_Num-num.mp3", false);
        }
        }
    } else {
      text("*NOT ENOUGH CHICKENS!*", 120, 175);
    }
  }
  
  //annoy
    if (mouseIsOver(annoy) && mouseWentDown("leftButton")) {
    randomAnnoy = randomNumber (1, 9);
    happinessG = happinessG - 5;
    if(happinessG < 255){
      happinessG = 255;
      happinessR = happinessR + 5;
    }
  }
  if(mouseDown("leftButton") && mouseIsOver(annoy)){
    shed.setAnimation("shedAngry");
  }
  if(mousePressedOver(annoy)){
    if(randomAnnoy == 1){
    text("ow!", 120, 175);
    }
    if(randomAnnoy == 2){
      text("hey! >:(", 120, 175);
    }
    if(randomAnnoy == 3){
      text("jerk", 120, 175);
    }
    if(randomAnnoy == 4){
      text("git gud", 120, 175);
    }
    if(randomAnnoy == 5){
      text("ill pwn you!", 120, 175);
    }
    if(randomAnnoy == 6){
      text("ow", 120, 170);
    }
    if(randomAnnoy == 7){
      text("stop that!", 120, 175);
    }
    if(randomAnnoy == 8){
      text(">:(", 120, 175);
    }
    if(randomAnnoy == 9){
      text("*angry.mp4*", 120, 175);
    }
    if(mouseWentDown("leftButton")){
      randomSound = randomNumber (1, 3);
      if (randomSound == 1) {
        playSound("assets/Voicy_Grr.mp3", false);
      }
    }
  }

  
//play
  if (mouseIsOver(play) && mouseWentDown("leftButton")) {
     if(mouseIsOver(play)){
    if(mouseWentDown("leftButton"))
    randomPlay = randomNumber (1, 5);
    if (mousePressedOver(play)) {
      if(happinessG > 0){
      if(randomPlay == 1){
      text("*SHEDLETSKY FOUND A CHICKEN*", 120, 175);
      chickens = chickens + 5;
      }
      if(randomPlay == 2){
        text("*SHEDLETSKY IS FEELING GUD*", 120, 175);
      }
      if(randomPlay == 3){
        text("*SHEDLETSKY FOUND 2 CHICKENS*", 120, 175);
        chickens = chickens + 10;
      }
      if(randomPlay == 4){
        text("*SHEDLETSKY ATE A CHICKEN*", 120, 175);
        chickens = chickens - 1;
      }
      if(randomPlay == 5){
        text("*SHEDLETSKY FEELS PROUD OF HIMSELF*", 120, 175);
      }
    }
    if(happinessG == 0){
      if(randomPlay == 1){
      text("*SHEDLETSKY IS NOT IN THE MOOD FOR THAT.*", 120, 175);
      }
      if(randomPlay == 2){
        text("*SHEDLETSKY IS FEELING BAD.**", 120, 175);
      }
      if(randomPlay == 3){
        text("*SHEDLETSKY FOUND A CHICKEN*", 120, 175);
        chickens = chickens + 5;
      }
      if(randomPlay == 4){
        text("*SHEDLETSKY ATE A CHICKEN*", 120, 175);
        chickens = chickens - 2;
      }
      if(randomPlay == 5){
        text("*SHEDLETSKY FEELS HOPELESS.*", 120, 175);
      }
    }
    if(mouseWentDown("leftButton")){
      randomSound = randomNumber (1, 4);
      if (randomSound == 1) {
        playSound("assets/Voicy_Whoaa.mp3", false);
      }
      if (randomSound == 2) {
        playSound("assets/Voicy_Hmm.mp3", false);
      }
    }
      }
    }
  }
    
  
//insult
  if (mouseIsOver(insult) && mouseWentDown("leftButton")) {
    randomInsult = randomNumber (1, 10);
    insultAnim = randomNumber (1, 4);
    randomSound = randomNumber(1, 4);
    happinessG = happinessG - 5;
    if(happinessG < 255){
      happinessG = 255;
      happinessR = happinessR + 5;
    }
  } else {
    mean.visible = false;
  }
  if(mouseDown("leftButton") && mouseIsOver(insult)){
    shed.setAnimation("shedHurt");
  }
  if(mousePressedOver(insult)){
    if(randomInsult == 1){
    text("ow!", 120, 175);
    }
    if(randomInsult == 2){
      text("...", 120, 175);
    }
    if(randomInsult == 3){
      text("jerk", 120, 175);
    }
    if(randomInsult == 4){
      text("yowch", 120, 175);
    }
    if(randomInsult == 5){
      text("aw gee whiz", 120, 175);
    }
    if(randomInsult == 6){
      text("ow", 120, 170);
    }
    if(randomInsult == 7){
      text("dont blame me, blame john!", 120, 175);
    }
    if(randomInsult == 8){
      text("D:", 120, 175);
    }
    if(randomInsult == 9){
      text("aw...", 120, 175);
    }
    if (randomInsult == 10) {
      text(":(", 120, 175);
    }
    if(insultAnim == 1){
      mean.setAnimation("insult1");
      mean.visible = true;
    }
    if(insultAnim == 2){
      mean.setAnimation("insult2");
      mean.visible = true;
    }
    if(insultAnim == 3){
      mean.setAnimation("insult3");
      mean.visible = true;
    }
    if(insultAnim == 4){
      mean.setAnimation("insult4");
      mean.visible = true;
    }
    if (randomSound == 1) {
      playSound("assets/Voicy_Cry!.mp3", false);
    }
    if (randomSound == 2) {
      playSound("assets/Voicy_Gasp!.mp3", false);
    }
  
}

//ask
  if (mouseIsOver(ask) && mouseWentDown("leftButton")) {
    askShed();
}
    

 
  
//idle anim
  if (!mousePressedOver(shed)&&!mousePressedOver(feed)&&!mousePressedOver(annoy)&&!mousePressedOver(insult)&&!mousePressedOver(wife)&&!mousePressedOver(oneex)) {
   shed.setAnimation("shed");
 }
  
  //mood decrease
  hungerR = hungerR + 0.05;
  
  if (hungerR > 255){
    hungerR = 255;
    hungerG = hungerG - 0.05;
  }
  
  happinessR = happinessR + 0.05;
  
  if(happinessR > 255){
    happinessR = 255;
    happinessG = happinessG - 0.05;
  }
  cursor.x = World.mouseX;
  cursor.y = World.mouseY;
  drawSprites();
fill(rgb(hungerR, hungerG, 0));
stroke("black");
strokeWeight(1);
rect(40, 60, 130, 30);
fill("black");
text("HUNGER", 100, 70);
fill(rgb(happinessR, happinessG, 0));
rect(40, 90, 130, 30);
fill("black");
text("HAPPY", 100, 95);

 //check status
  if (mouseIsOver(checkButton) && mouseDown("leftButton")) {
    checkPanel.visible = true;
  if (happinessG == 255 && happinessR > 0 && happinessR < 120 && hungerG >= 255 && hungerR >= 0  && hungerR <= 120){
    text ("shedletsky feels great!", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 0 && happinessR < 120 && hungerG >= 255 && hungerR >= 120  && hungerR <= 255){
    text ("shedletsky feels well fed", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 0 && happinessR < 120 && hungerR >= 255 && hungerG >=  120 && hungerG <= 255){
    text ("shedletsky feels hungry", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 0 && happinessR < 120 && hungerR >= 255 && hungerG >=  0 && hungerG <= 120){
    text ("shedletsky is starving", 125, 250);
  }
  
  
  
  if (happinessG == 255 && happinessR > 120 && happinessR < 255 && hungerG >= 255 && hungerR >= 0 && hungerR <= 120) {
    text ("shedletsky feels well fed", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 120 && happinessR < 255 && hungerG >= 255 && hungerR >= 120 && hungerR <= 255) {
    text ("shedletsky feels satisfied", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 120 && happinessR < 255 && hungerR >= 255 && hungerG >= 120 && hungerG <= 255) {
    text ("shedletsky feels ok", 125, 250);
  }
  
  if (happinessG == 255 && happinessR > 120 && happinessR < 255 && hungerR >= 255 && hungerG >= 0 && hungerG <= 120) {
    text ("shedletsky feels very hungry", 125, 250);
  }
  
  
  
  if (happinessR == 255 && happinessG > 120 && happinessG < 255 && hungerG >= 255 && hungerR >= 0 && hungerR <= 120) {
    text ("shedletsky feels fine", 125, 250);
  }
  
  if (happinessR == 255 && happinessG > 120 && happinessG < 255 && hungerG >= 255 && hungerR >= 120  && hungerR <= 255) {
    text ("shedletsky feels down", 125, 250);
  }

  if (happinessR == 255 && happinessG > 120 && happinessG < 255 && hungerR >= 255 && hungerG >=  120 && hungerG <= 255) {
    text ("shedletsky feels not well", 125, 250);
  }
  
  if (happinessR == 255 && happinessG > 120 && happinessG < 255 && hungerR >= 255 && hungerG >=  0 && hungerG <= 120) {
    text ("shedletsky feels depressed", 125, 250);
  }
  
  
  
  if (happinessR == 255 && happinessG > 0 && happinessG < 120 && hungerG >= 255 && hungerR >= 0 && hungerR <= 120) {
    text ("shedletsky feels desperate", 125, 250);
  }
  
  if (happinessR == 255 && happinessG > 0 && happinessG < 120 && hungerG >= 255 && hungerR >= 120  && hungerR <= 255) {
    text ("shedletsky feels neglected", 125, 250);
  }
  
  if (happinessR == 255 && happinessG > 0 && happinessG < 120 && hungerR >= 255 && hungerG >=  120 && hungerG <= 255) {
    text ("shedletsky feels horrible", 125, 250);
  }
  
  if (happinessR == 255 && happinessG > 0 && happinessG < 120 && hungerR >= 255 && hungerG >=  0 && hungerG <= 120) {
    text ("shedletsky feels cooked", 125, 250);
  }
  
  
  } else {
  checkPanel.visible = false;
  }
  
  
if (hungerG <= 0) {
    loseGame();
  }
  if (happinessG <= 0) {
    loseGame();
  }
  if (responseVar == 1) {
    shedResponse();
  }
  if (mouseWentDown("right")) {
    playSound("assets/Voicy_freddy-nose-boop.mp3", false);
  }
}

    
  

function loseGame() {
  shed.visible = false;
  moodBar.visible = false;
  checkButton.visible = false;
  feed.visible = false;
  play.visible = false;
  insult.visible = false;
  annoy.visible = false;
  ask.visible = false;
  
  fill("black");
  rect(-10, -10, 500, 500);
  textSize(20);
  fill("red");
  stroke("white");
  strokeWeight(5);
  text("you lose :( git gud lol", 200, 200);
  //IM SO SMART FOR FIGURING THIS OUT
  text("kept shedletsky happy for " + minutes + "years", 200, 300);
  hungerG = -82347562983465293469254756927459238752987645237925874639527846528749528754298734529864528374625934876539847652943856290387652934765293847629538476259348652983476259834765;
  time = 0;
  drawSprites();
}
function askShed() {
  responseVar = 1;
  shedResponse();
  wife.visible = true;
  oneex.visible = true;
}
function shedResponse() {
  if (mouseIsOver(wife) && mouseWentDown("leftButton")) {
        randomAsk = randomNumber (1, 3);
      }
  if(mouseDown("leftButton") && mouseIsOver(wife)){
        shed.setAnimation("shedHappyTalk");
      }
  if(mousePressedOver(wife)){
        if(randomAsk == 1){
        text("oh, you mean brighteyes?", 120, 175);
        }
        if(randomAsk == 2){
          text("i miss her lol", 120, 175);
        }
        if(randomAsk == 3){
          text("havent seen her in a while but she chill", 120, 175);
}
  }
  
  
  if (mouseIsOver(oneex) && mouseWentDown("leftButton")) {
  randomAsk = randomNumber (1, 3);
    }
  if(mousePressedOver(oneex)){
  if(randomAsk == 1){
  shed.setAnimation("shedOminous");
  }
  if(randomAsk == 2){
    shed.setAnimation("shedBliss");
  }
  if(randomAsk == 3){
    shed.setAnimation("shedArt");
}
  }
  if (mouseIsOver(wife) && mouseWentUp("leftButton") || mouseIsOver(oneex) && mouseWentUp("leftButton")) {
    askEnd();
  }
}

function askEnd(){
  responseVar = 0;
  wife.visible = false;
  oneex.visible = false;
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
