

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7be79933-1631-4a52-a07a-4b31a81d3cb4","6e0ed9db-f969-4b10-97b4-310037e98596","29e06ef0-2f82-493f-ac23-037ff1415af3","f22412b5-3fc6-4e7c-91fc-4992dccd56b7","0315940b-b013-4a56-b596-767d4324e7e9","f5e6abfc-6259-45cf-beeb-33c33d337efe","c013be76-6bd4-40b0-8ac3-b8e4f47ef25f","bbb612ed-e893-42d8-a3bf-2a17c07dcaf3","b9d72579-6ba4-4c5c-a1bc-b5a5d350eb61","ead5bbb8-5d79-4b7c-a240-2bddf2edb536","d7277855-734f-4d71-827b-49a70cffc269","801c3567-167e-42ce-86cb-40ee80334dc6","8da5964d-26fa-4a8b-9284-e103a8242e90","399bb60c-31de-491a-86eb-4ea47c30050e","ab0a21d7-f835-4dd6-84c9-46b29de92601","6c50d989-9059-449f-b125-ee70b82f5fc2","0d491f0e-fb06-4d54-9a7b-f102777ad4d7","a2709218-cf01-4414-b8be-4a79ed38d0c0","0855695c-e3e3-453b-9416-fc765fe92770","515b4800-8ae4-42af-a9f2-aff19d0e4ab5","771e4b05-f742-43eb-8a6c-fc6f18f25876","196b6f9b-1cb1-4256-a596-1807b63e65ca"],"propsByKey":{"7be79933-1631-4a52-a07a-4b31a81d3cb4":{"name":"lifepoint","sourceUrl":null,"frameSize":{"x":57,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"wSPax3iRghQLpNWo3dgt6q2qtbmEKRcS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":57,"y":76},"rootRelativePath":"assets/7be79933-1631-4a52-a07a-4b31a81d3cb4.png"},"6e0ed9db-f969-4b10-97b4-310037e98596":{"name":"lifeShroud","sourceUrl":null,"frameSize":{"x":55,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"lnyniKVJQ7UaMRRh0hzLHz2FvWN_d.gz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":76},"rootRelativePath":"assets/6e0ed9db-f969-4b10-97b4-310037e98596.png"},"29e06ef0-2f82-493f-ac23-037ff1415af3":{"name":"playerWalkRight","sourceUrl":null,"frameSize":{"x":51,"y":110},"frameCount":9,"looping":true,"frameDelay":5,"version":"6oTHoTLbn7mzpFSlzbeYA48JsYwaFNur","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":330},"rootRelativePath":"assets/29e06ef0-2f82-493f-ac23-037ff1415af3.png"},"f22412b5-3fc6-4e7c-91fc-4992dccd56b7":{"name":"playerWalkLeft","sourceUrl":null,"frameSize":{"x":51,"y":110},"frameCount":9,"looping":true,"frameDelay":5,"version":"3UJxVWbNhKh3oHOSKKf3OqSaZCwgQEtK","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":330},"rootRelativePath":"assets/f22412b5-3fc6-4e7c-91fc-4992dccd56b7.png"},"0315940b-b013-4a56-b596-767d4324e7e9":{"name":"playerRunRight","sourceUrl":null,"frameSize":{"x":71,"y":107},"frameCount":6,"looping":true,"frameDelay":3,"version":"iSYvAuAah1v3WVgD2.N_eGy.HG0IiQr_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":214},"rootRelativePath":"assets/0315940b-b013-4a56-b596-767d4324e7e9.png"},"f5e6abfc-6259-45cf-beeb-33c33d337efe":{"name":"playerRunLeft","sourceUrl":null,"frameSize":{"x":71,"y":107},"frameCount":6,"looping":true,"frameDelay":3,"version":"ubu4HECGYd4WpouIa6Moosw3U4Iotqo4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":214},"rootRelativePath":"assets/f5e6abfc-6259-45cf-beeb-33c33d337efe.png"},"c013be76-6bd4-40b0-8ac3-b8e4f47ef25f":{"name":"dashRight","sourceUrl":null,"frameSize":{"x":91,"y":107},"frameCount":7,"looping":true,"frameDelay":2,"version":"LHjl2hZ2wi6cu5THEKkYmAt5RPvnyW0K","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":273,"y":321},"rootRelativePath":"assets/c013be76-6bd4-40b0-8ac3-b8e4f47ef25f.png"},"bbb612ed-e893-42d8-a3bf-2a17c07dcaf3":{"name":"dashLeft","sourceUrl":null,"frameSize":{"x":91,"y":107},"frameCount":7,"looping":true,"frameDelay":2,"version":"maVF05nbeJTKDV0FF9jFXSMx0H5wnK0T","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":273,"y":321},"rootRelativePath":"assets/bbb612ed-e893-42d8-a3bf-2a17c07dcaf3.png"},"b9d72579-6ba4-4c5c-a1bc-b5a5d350eb61":{"name":"playerIdol","sourceUrl":null,"frameSize":{"x":50,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"7KItm_yia3y7D9tE7XRy394tdKc1PDD6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":109},"rootRelativePath":"assets/b9d72579-6ba4-4c5c-a1bc-b5a5d350eb61.png"},"ead5bbb8-5d79-4b7c-a240-2bddf2edb536":{"name":"bossfight","sourceUrl":null,"frameSize":{"x":823,"y":460},"frameCount":1,"looping":true,"frameDelay":12,"version":"p3YEZX79ly5nuoDTDbKaDp6FdQjbkfX_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":933,"y":466},"rootRelativePath":"assets/ead5bbb8-5d79-4b7c-a240-2bddf2edb536.png"},"d7277855-734f-4d71-827b-49a70cffc269":{"name":"hornetRunRight","sourceUrl":null,"frameSize":{"x":75,"y":129},"frameCount":8,"looping":true,"frameDelay":5,"version":"2nyMDrdsWx6s84mrv.Ujml3VXwv9tB7b","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":258},"rootRelativePath":"assets/d7277855-734f-4d71-827b-49a70cffc269.png"},"801c3567-167e-42ce-86cb-40ee80334dc6":{"name":"hornetRunLeft","sourceUrl":null,"frameSize":{"x":75,"y":129},"frameCount":8,"looping":true,"frameDelay":12,"version":"_2Fq8smJ1OC7UnvC1FUMtrzQGmO_pjVT","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":258},"rootRelativePath":"assets/801c3567-167e-42ce-86cb-40ee80334dc6.png"},"8da5964d-26fa-4a8b-9284-e103a8242e90":{"name":"hornetIdolRight","sourceUrl":null,"frameSize":{"x":69,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"aaK06NuzO.E.4Gt20vUz6TdrgKAgMLbj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":123},"rootRelativePath":"assets/8da5964d-26fa-4a8b-9284-e103a8242e90.png"},"399bb60c-31de-491a-86eb-4ea47c30050e":{"name":"hornetIdolLeft","sourceUrl":null,"frameSize":{"x":69,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"rFSAHgYooQ9L.BZ0.E2phLj.el5hsLOc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":123},"rootRelativePath":"assets/399bb60c-31de-491a-86eb-4ea47c30050e.png"},"ab0a21d7-f835-4dd6-84c9-46b29de92601":{"name":"hornetJumpRight","sourceUrl":null,"frameSize":{"x":64,"y":128},"frameCount":4,"looping":true,"frameDelay":4,"version":"sHzvgCrguiy.3tcCwNbthS8lyGc3Lf7Y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":256},"rootRelativePath":"assets/ab0a21d7-f835-4dd6-84c9-46b29de92601.png"},"6c50d989-9059-449f-b125-ee70b82f5fc2":{"name":"hornetJumpLeft","sourceUrl":null,"frameSize":{"x":64,"y":128},"frameCount":4,"looping":true,"frameDelay":4,"version":"6N2CCU.i6Jryu82Go0J3YGGumm292dgn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":256},"rootRelativePath":"assets/6c50d989-9059-449f-b125-ee70b82f5fc2.png"},"0d491f0e-fb06-4d54-9a7b-f102777ad4d7":{"name":"hornetDashRight","sourceUrl":null,"frameSize":{"x":90,"y":113},"frameCount":5,"looping":true,"frameDelay":5,"version":"t.fsA2FL09km6T4IrAR4CrmX65jP.hWr","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":226},"rootRelativePath":"assets/0d491f0e-fb06-4d54-9a7b-f102777ad4d7.png"},"a2709218-cf01-4414-b8be-4a79ed38d0c0":{"name":"hornetDashLeft","sourceUrl":null,"frameSize":{"x":90,"y":113},"frameCount":5,"looping":true,"frameDelay":12,"version":"WDUX0RBVogEfHTNCwuN2pP_RToCguGv8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":226},"rootRelativePath":"assets/a2709218-cf01-4414-b8be-4a79ed38d0c0.png"},"0855695c-e3e3-453b-9416-fc765fe92770":{"name":"swordR","sourceUrl":null,"frameSize":{"x":120,"y":91},"frameCount":5,"looping":true,"frameDelay":2,"version":"2BPIFpph0EsnwpnGMYZyE_OL.ZoRBvz6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":273},"rootRelativePath":"assets/0855695c-e3e3-453b-9416-fc765fe92770.png"},"515b4800-8ae4-42af-a9f2-aff19d0e4ab5":{"name":"swordL","sourceUrl":null,"frameSize":{"x":120,"y":91},"frameCount":5,"looping":true,"frameDelay":2,"version":"qZ5pXlse56Hncu4AwlPFzs1_lXTHSI5s","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":273},"rootRelativePath":"assets/515b4800-8ae4-42af-a9f2-aff19d0e4ab5.png"},"771e4b05-f742-43eb-8a6c-fc6f18f25876":{"name":"playerDeath","sourceUrl":null,"frameSize":{"x":77,"y":121},"frameCount":17,"looping":true,"frameDelay":4,"version":"LGGpVk80WvjJECQpiRsxA7rCNdZ0xb_V","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":484},"rootRelativePath":"assets/771e4b05-f742-43eb-8a6c-fc6f18f25876.png"},"196b6f9b-1cb1-4256-a596-1807b63e65ca":{"name":"cardBack_blue3_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ/category_board_games_and_cards/cardBack_blue3.png","frameSize":{"x":140,"y":190},"frameCount":1,"looping":true,"frameDelay":2,"version":"wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":190},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wK_xikN23MfezuX3qYzeGKtIHqMrF2eJ/category_board_games_and_cards/cardBack_blue3.png"}}};
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

// =========================================================================
// Sprite Initialization
// Creates the main game objects (sprites) and sets their initial properties.
// =========================================================================

var background1 = createSprite(200, 170);
background1.setAnimation("bossfight");
background1.scale = 0.9;
var player = createSprite(200, 300);
player.setAnimation("playerIdol");
player.scale = 0.45;
var hornet = createSprite(-200, 200);
hornet.setAnimation("hornetIdolRight");
hornet.scale = 0.6;
var sword = createSprite(player.x, player.y);
sword.setAnimation("swordR");
sword.scale = 0.5;
sword.visible = false; // Sword starts hidden
var box1 = createSprite(570, 260); // Invisible boundary for the right side
box1.visible = false;

box1.setAnimation("cardBack_blue3_1");
var box2 = createSprite(-250, 260); // Invisible boundary for the left side
box2.setAnimation("cardBack_blue3_1");
box2.visible = false;

// ---

// =========================================================================
// Core Game Variables and Mechanics
// Defines speeds, gravity, cooldowns, and status flags for combat and movement.
// =========================================================================

// Hornet Movement/Attack Variables
var hornetSpeed = 4;
var hornetAttackSpeed = 7;
var hornetJump = -12;
var hornetAttacking = false; // Flag to check if Hornet is currently executing an attack
var hornetAttackCooldown = 1500; // Cooldown time in milliseconds (1.5 seconds)
var lastHornetAttack = 0; // Timestamp of the last attack
var playerHealth = 5; // (Unused, replaced by playerHP)
var maxHealth = 5; // (Unused, replaced by playerHP)
var hornetGravity = 0.6
var hornetJumpSpeedX = 2; // horizontal movement during jump
var hornetDashSpeed = 16; // horizontal speed for dash attack
var hornetDashUpSpeed = -5; // Vertical speed for the upward part of a dash (currently unused in hornetAttack)

// Player World & Status Variables
var startGame = false; // Flag to determine if the game has started
var gravity = 1; // Player vertical acceleration
var ground = 320; // Y position of the ground
var moving = false; // (Unused)
var dashing = false; // Flag to check if player is currently dashing

// Player Dash Variables
var dashStartTime = 0;
var dashDuration = 250; // Dash length in milliseconds
var hornetDashDownSpeed = 10; // Vertical speed for the downward part of Hornet's dash

var dashStartSpeed = 18;
var dashEndSpeed = 5;
var hornetGround = 307; // Hornet's standing Y position

var facing = 1; // Player facing direction (1=Right, -1=Left)
var hornetFacing = 1; // Hornet facing direction
var attackActive = false; // Flag to check if player attack is currently active
var attackDuration = 180; // Attack animation duration in milliseconds
var attackStartTime = 0;

// Player Attack Variables
var attackCooldown = 300; // Delay between player attacks in milliseconds
var lastAttackTime = 0;

// Health and Life Status
var hornetHP = 6; // Hornet's current health points
var playerHP = 5; // Player's current health points
var alive = true; // Player life status
var dashCoolDown = 600;
var lastDashTime = -dashCoolDown;

// Hornet Invincibility variables (used after taking damage)
var hornetInvincibleTime = 500; // 0.5 seconds of invincibility
var hornetLastHitTime = 0;
var hornetHitRegistered = false; // Flag to ensure damage is only applied once per swing

// ---

// =========================================================================
// Player Health Display Initialization
// Creates the sprites for the player's health GUI (shrouds and life points).
// =========================================================================

var lifeshroud1 = createSprite(player.x + -170, player.y + -350);
lifeshroud1.setAnimation("lifeShroud");
lifeshroud1.scale = 0.5;
var lifepoint1 = createSprite(lifeshroud1.x, lifeshroud1.y);
lifepoint1.setAnimation("lifepoint");
lifepoint1.scale = 0.42;
var lifeshroud2 = createSprite(player.x + -130, player.y + -350);
lifeshroud2.setAnimation("lifeShroud");
lifeshroud2.scale = 0.5;
var lifepoint2 = createSprite(lifeshroud2.x, lifeshroud2.y);
lifepoint2.setAnimation("lifepoint");
lifepoint2.scale = 0.42;

var lifeshroud3 = createSprite(player.x + -90, player.y + -350);
lifeshroud3.setAnimation("lifeShroud");
lifeshroud3.scale = 0.5;
var lifepoint3 = createSprite(lifeshroud3.x, lifeshroud3.y);
lifepoint3.setAnimation("lifepoint");
lifepoint3.scale = 0.42;

var lifeshroud4 = createSprite(player.x + -50, player.y + -350);
lifeshroud4.setAnimation("lifeShroud");
lifeshroud4.scale = 0.5;
var lifepoint4 = createSprite(lifeshroud4.x, lifeshroud4.y);
lifepoint4.setAnimation("lifepoint");
lifepoint4.scale = 0.42;

var lifeshroud5 = createSprite(player.x + -10, player.y + -350);
lifeshroud5.setAnimation("lifeShroud");
lifeshroud5.scale = 0.5;
var lifepoint5 = createSprite(lifeshroud5.x, lifeshroud5.y);
lifepoint5.setAnimation("lifepoint");
lifepoint5.scale = 0.42;

// ---

// =========================================================================
// Draw Function (Main Game Loop)
// Everything inside draw() runs repeatedly (usually 30 or 60 times per second).
// =========================================================================

background("black");

function draw() {
background("black");
player.bounceOff(box1); // Player collision with right boundary
player.bounceOff(box2); // Player collision with left boundary

//Game Over Check
if (playerHP == 0) {
alive = false;
player.setAnimation("playerDeath");
player.velocityX = 0;
player.velocityY = 0;
hornet.velocityX = 0;
hornet.velocityY = 0;
drawSprites();
}

// Start Screen Logic
if (startGame == false && alive == true) {
if (keyWentDown("0")) {
startGame = true;
}
textSize(40);
text("Welcome", 120, 70);
textSize(15);
text("Press 0 To Start", 145, 100);
textSize(15);
text("Space to Jump", 60, 150);
text("A to Move Left", 260, 150);
text("D to Move Right", 60, 200);
text("Hold C to Sprint", 260, 200);
text("Left Click to Attack", 60, 250);
text("Shift to Dash", 260, 250);
}

// Main Game Running Logic
if (startGame == true && alive == true) {
// Update Player Health Display Visibility
if (playerHP <= 4) { lifepoint5.visible = false; } else { lifepoint5.visible = true; }
if (playerHP <= 3) { lifepoint4.visible = false; } else { lifepoint4.visible = true; }
if (playerHP <= 2) { lifepoint3.visible = false; } else { lifepoint3.visible = true; }
if (playerHP <= 1) { lifepoint2.visible = false; } else { lifepoint2.visible = true; }
if (playerHP <= 0) { lifepoint1.visible = false; } else { lifepoint1.visible = true; }

// Manage Hornet Invincibility (Blinking effect)
if (millis() - hornetLastHitTime < hornetInvincibleTime) {
hornet.visible = (Math.floor(millis() / 50) % 2 === 0);
} else {
hornet.visible = true;
}

// Call Core Game Functions
playerAttack();
hornetMove();
hornetAttack();
hornetDamagePlayer();

// Camera and UI Positioning (Fixed relative to the player)
camera.y = player.y - 145;
camera.x = player.x;

lifeshroud1.x = player.x - 160; lifeshroud1.y = player.y - 300; lifepoint1.x = lifeshroud1.x; lifepoint1.y = lifeshroud1.y;
lifeshroud2.x = player.x - 120; lifeshroud2.y = player.y - 300; lifepoint2.x = lifeshroud2.x; lifepoint2.y = lifeshroud2.y;
lifeshroud3.x = player.x - 80; lifeshroud3.y = player.y - 300; lifepoint3.x = lifeshroud3.x; lifepoint3.y = lifeshroud3.y;
lifeshroud4.x = player.x - 40; lifeshroud4.y = player.y - 300; lifepoint4.x = lifeshroud4.x; lifepoint4.y = lifeshroud4.y;
lifeshroud5.x = player.x; lifeshroud5.y = player.y - 300; lifepoint5.x = lifeshroud5.x; lifepoint5.y = lifeshroud5.y;

// Apply Gravity and Check Ground Collision
player.velocityY += gravity;
if (player.y >= ground) {
player.y = ground;
player.velocityY = 0;
}

// Player Jump Logic
if (player.y == ground && keyDown("space")) { player.velocityY = -12; }

// Direction Facing (Horizontal Input)
if (!dashing) {
if (keyDown("d")) facing = 1;
if (keyDown("a")) facing = -1;
}

// Dash Start Logic
if (keyWentDown("shift") && !dashing && (millis() - lastDashTime >= dashCoolDown)) {
if (facing == 1) player.setAnimation("dashRight");
else player.setAnimation("dashLeft");
dashing = true;
dashStartTime = millis();
lastDashTime = millis();
}

// Dash Movement and Duration
if (dashing) {
var t = millis() - dashStartTime;
var pct = t / dashDuration;
var speed = lerp(dashStartSpeed, dashEndSpeed, pct);
player.velocityX = speed * facing;
player.velocityY = 0;
if (t > dashDuration) {
dashing = false;
player.velocityX = 0;
player.setAnimation("playerIdol");
}
}

// Player Movement (Walk and Run)
if (keyDown("a") && !keyDown("c")) { if (!dashing) player.setAnimation("playerWalkLeft"); moving = true; player.x -= 3.2; } // Left Walk
if (keyDown("d") && !keyDown("c")) { if (!dashing) player.setAnimation("playerWalkRight"); moving = true; player.x += 3.2; } // Right Walk
if (keyDown("c") && keyDown("d")) { if (!dashing) player.setAnimation("playerRunRight"); moving = true; player.x += 5; } // Right Run
if (keyDown("c") && keyDown("a")) { if (!dashing) player.setAnimation("playerRunLeft"); moving = true; player.x -= 5; } // Left Run

// Stop Movement (Return to Idle)
if (keyWentUp("c") && keyWentUp("d")) player.setAnimation("playerIdol");
if (keyWentUp("c") && keyWentUp("a")) player.setAnimation("playerIdol");
if (keyWentUp("d")) player.setAnimation("playerIdol");
if (keyWentUp("a")) player.setAnimation("playerIdol");

 drawSprites();
}
}

// ---

// =========================================================================
// Player Attack Function
// Handles sword positioning, attack activation, animation, and damage detection.
// =========================================================================

function playerAttack() {
 // Position sword relative to the player
 if (facing == 1) { sword.x = player.x + 20; sword.y = player.y; }
else { sword.x = player.x - 20; sword.y = player.y;

 }

// Start Attack on Left Click
if (mouseWentDown("leftButton") && !attackActive && (millis() - lastAttackTime >= attackCooldown)) {
attackActive = true;
attackStartTime = millis();
lastAttackTime = millis();
hornetHitRegistered = false; // Reset hit flag at start of new attack
if (facing == 1) { sword.setAnimation("swordR"); player.setAnimation("dashRight"); }
else { sword.setAnimation("swordL"); player.setAnimation("dashLeft"); }
sword.visible = true;
}

// Check if Hornet dies
if (hornetHP <= 0) {
hornet.destroy();
}

if (attackActive) {
// Attack duration runs out
if (millis() - attackStartTime >= attackDuration) {
attackActive = false;
sword.visible = false;
if (player.y < ground) player.setAnimation("playerWalkRight");
else player.setAnimation("playerIdol")
} else {
// DAMAGE LOGIC: Only apply damage on sword contact (overlap) AND if not recently hit
if (sword.overlap(hornet) && !hornetHitRegistered && (millis() - hornetLastHitTime > hornetInvincibleTime)) {
hornetHP = hornetHP - 1;
hornetHitRegistered = true; // Damage applied once per swing
hornetLastHitTime = millis(); // Start invincibility timer

// Trigger hit animation only once
hornet.setAnimation("hornetJumpRight"); // Use a placeholder animation for "hit reaction"
}
}
 }
}

// ---

// =========================================================================
// Hornet Movement Function
// Controls Hornet's gravity, horizontal movement, and jump actions outside of attack.
// =========================================================================

function hornetMove() {
  hornet.velocityY += hornetGravity;
  
  // Only move/jump if Hornet is NOT currently invincible
  if (millis() - hornetLastHitTime > hornetInvincibleTime) {
    
    if (!hornetAttacking) {
      hornet.velocityX = 0;
      
        // Reset to idle/movement animation after invincibility ends
        if (hornet.getAnimationLabel() == "hornetJumpRight") {
            hornet.setAnimation(hornetFacing == 1 ? "hornetIdolRight" : "hornetIdolLeft");
        }
        
      // Randomly start horizontal movement toward the player
      if (randomNumber(0, 100) < 1) {
        hornet.velocityX = (player.x > hornet.x ? hornetSpeed : -hornetSpeed);
        hornet.setAnimation(player.x > hornet.x ? "hornetRunRight" : "hornetRunLeft");
      }
      // Randomly jump
      if (randomNumber(0, 50) < 1 && hornet.y >= hornetGround) {
        hornet.velocityY = hornetJump;
        hornet.setAnimation("hornetJumpRight");
      }
    }
  } else {
    // If invincible, clear velocity unless attacking
    if(!hornetAttacking) {
        hornet.velocityX = 0;
    }
  }
  
  // Hornet Ground Collision
  if (hornet.y > hornetGround) {
    hornet.y = hornetGround;
    hornet.velocityY = 0;
  }
}

var hornetAttackStartTime = 0;

// ---

// =========================================================================
// Hornet Attack Function
// Controls the timing and phases of Hornet's dash attack.
// =========================================================================

function hornetAttack() {
 if (hornetAttacking) {
    var t = millis() - hornetAttackStartTime;
    // Phase 1: Small jump up
    if (t < 250) { hornet.velocityY = hornetJump; hornet.velocityX = 0; hornet.setAnimation(hornetFacing === 1 ? "hornetDashRight" : "hornetDashLeft"); }
    // Phase 2: Dash forward and down
    else if (t < 700) { hornet.velocityX = hornetFacing * hornetDashSpeed; hornet.velocityY = hornetDashDownSpeed; hornet.setAnimation(hornetFacing === 1 ? "hornetDashRight" : "hornetDashLeft"); }
    // Phase 3: End attack, return to idle
    else { hornetAttacking = false; hornet.velocityX = 0; hornet.setAnimation(hornetFacing === 1 ? "hornetIdolRight" : "hornetIdolLeft"); }
    return;
 }
 // Start Attack Cooldown Check
 if (millis() - lastHornetAttack >= hornetAttackCooldown && randomNumber(0, 100) < 5) {
    hornetAttacking = true;
    hornetFacing = (player.x > hornet.x ? 1 : -1); // Face the player
    hornetAttackStartTime = millis();
    lastHornetAttack = millis();
 }
}

// ---

// =========================================================================
// Hornet Damage Player Function
// Checks for collision between Hornet and the Player and applies damage/invincibility.
// =========================================================================

function hornetDamagePlayer() {
 if (hornet.overlap(player)) {
    if (!player.invincible) {
      playerHP -= 1;
      player.invincible = true;
      player.invincibleStart = millis();
    }
 }
 // End player invincibility after timer runs out
 if (player.invincible && millis() - player.invincibleStart >= 500) {
    player.invincible = false;
    if (player.y == ground) player.setAnimation("playerIdol");
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
