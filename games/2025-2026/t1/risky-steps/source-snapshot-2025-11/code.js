

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["89991af5-f75a-47d2-904b-0e7fe9637e5e","421b8ef4-ace0-4514-af4c-aee5200668ba","855bd443-4305-4708-820a-7b49cb4f534a","bc0a26e6-de05-48cf-8306-263e5f44b83e"],"propsByKey":{"89991af5-f75a-47d2-904b-0e7fe9637e5e":{"name":"Deer","sourceUrl":"assets/api/v1/animation-library/gamelab/SJBcmXy6L3aKE98.ktqsPP.bdB.8ouvN/category_animals/cuteanimals_deer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"SJBcmXy6L3aKE98.ktqsPP.bdB.8ouvN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SJBcmXy6L3aKE98.ktqsPP.bdB.8ouvN/category_animals/cuteanimals_deer.png"},"421b8ef4-ace0-4514-af4c-aee5200668ba":{"name":"Fox","sourceUrl":"assets/api/v1/animation-library/gamelab/oBVab82Jmd5wod9DzCjNRnpG_.p1jjEC/category_animals/cuteanimals_fox.png","frameSize":{"x":398,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"oBVab82Jmd5wod9DzCjNRnpG_.p1jjEC","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oBVab82Jmd5wod9DzCjNRnpG_.p1jjEC/category_animals/cuteanimals_fox.png"},"855bd443-4305-4708-820a-7b49cb4f534a":{"name":"Bear","sourceUrl":"assets/api/v1/animation-library/gamelab/.iTEvM0QBoFsdi5LW6a0.CK.WYwvllES/category_animals/cuteanimals_bear.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".iTEvM0QBoFsdi5LW6a0.CK.WYwvllES","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.iTEvM0QBoFsdi5LW6a0.CK.WYwvllES/category_animals/cuteanimals_bear.png"},"bc0a26e6-de05-48cf-8306-263e5f44b83e":{"name":"Cat","sourceUrl":"assets/api/v1/animation-library/gamelab/gCv6Hluz7pO7UAxCulwnYh0XdTYdOaFh/category_animals/cuteanimals_cat_hello.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"gCv6Hluz7pO7UAxCulwnYh0XdTYdOaFh","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gCv6Hluz7pO7UAxCulwnYh0XdTYdOaFh/category_animals/cuteanimals_cat_hello.png"}}};
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

var deer=createSprite(85,320);
deer.scale=0.25;
deer.setAnimation("Deer");
var fox=createSprite(155,330);
fox.scale=0.20;
fox.setAnimation("Fox");
var bear=createSprite(240,320);
bear.scale=0.25;
bear.setAnimation("Bear");
var cat=createSprite(315,320);
cat.scale=0.21;
cat.setAnimation("Cat");
var players=[deer,fox,bear,cat];
var names=["Deer (YOU)","Fox","Bear","Cat"];
var choices=[0,0,0,0];
var moveText=[];
var revealed=false;
var roundActive=false;
var gameStarted=false;
var stepHeight=25;
var totalSteps=10;
var goalY=120;
var message="";
var winner="";
function draw(){
  background(135,206,250);
  if(!gameStarted){
    drawStartScreen();
    return;
  }
  draw3DStairs();
  drawSprites();
  fill("black");
  textAlign(CENTER,TOP);
  textSize(22);
  text("🎲 Risky Steps 🎲",200,10);
  textSize(16);
  if(!roundActive&&!revealed){
    text("Choose a number (1–5) to move!",200,40);
  }
  if(message!==""){
    drawMessageBox();
  }
  if(revealed){
    drawRevealPanel();
  }
  if(winner!==""){
    fill("white");
    stroke("black");
    rect(40,160,320,80,10);
    noStroke();
    fill("black");
    textSize(26);
    textAlign(CENTER,CENTER);
    text(winner+" Wins! 🏆",200,200);
  }
}
function drawStartScreen(){
  fill(255);
  stroke("black");
  rect(30,40,340,290,15);
  noStroke();
  fill("black");
  textAlign(CENTER,TOP);
  textSize(26);
  text("🎲Risky Steps🎲 ",200,55);
  textSize(16);
  text("Inspired by Wii Party - 'Strategy Steps'. \n You're the DEER!!\n How to Play:",200,145);
  textSize(15);
  text("- Pick a number 1–5.\n- If it's the same as someone else = NO MOVE.\n- Unique number = you move that amount of steps.\n- First to the top wins.",200,205);
  textSize(18);
  fill("blue");
  text("Press SPACE to start",200,300);
}
function drawMessageBox(){
  fill("white");
  stroke("black");
  rect(40,65,320,40,10);
  noStroke();
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(18);
  text(message,200,85);
}
function drawRevealPanel(){
  fill(0,0,0,220);
  rect(0,0,400,400);
  fill("white");
  stroke("black");
  rect(40,60,320,320,15);
  noStroke();
  fill("black");
  textAlign(CENTER,TOP);
  textSize(20);
  text("Round Results",200,75);
  textAlign(LEFT,TOP);
  textSize(16);
  var y=115;
  text("Choices:",60,y);
  y+=28;
  for(var i=0;i<players.length;i++){
    text(names[i]+": "+choices[i],80,y);
    y+=22;
  }
  y+=18;
  text("Results:",60,y);
  y+=28;
  for(var j=0;j<moveText.length;j++){
    text(moveText[j],80,y);
    y+=22;
  }
}
function draw3DStairs(){
  var x=60;
  var y=360;
  var widthStep=280;
  var heightStep=25;
  for(var i=0;i<totalSteps;i++){
    fill(220-i*10);
    stroke(100);
    rect(x,y-i*heightStep,widthStep,heightStep);
  }
}
function keyPressed(){
  if(!gameStarted&&key===" "){
    gameStarted=true;
    return;
  }
  if(!roundActive&&key>="1"&&key<="5"){
    var choice=parseInt(key);
    choices[0]=choice;
    message="You chose "+choice+"!";
    roundActive=true;
    setTimeout(aiChoose,1000);
  }
}
function aiChoose(){
  for(var i=1;i<players.length;i++){
    choices[i]=randomChoice([1,2,3,4,5]);
  }
  message="All players have chosen...";
  setTimeout(revealChoices,1500);
}
function revealChoices(){
  revealed=true;
  message="";
  moveText=[];
  var counts={};
  for(var i=0;i<choices.length;i++){
    counts[choices[i]]=(counts[choices[i]]||0)+1;
  }
  for(var j=0;j<players.length;j++){
    var num=choices[j];
    if(counts[num]===1){
      players[j].y-=num*stepHeight;
      moveText.push(names[j]+" moves "+num+" steps!");
    }else{
      moveText.push(names[j]+" stays!");
    }
  }
  setTimeout(nextRound,3000); 
}
function nextRound(){
  revealed=false;
  roundActive=false;
  message="";
  choices=[0,0,0,0];
  moveText=[];
  checkWinner();
}
function checkWinner(){
  for(var i=0;i<players.length;i++){
    if(players[i].y<=goalY){
      winner=names[i];
      break;
    }
  }
}
function randomChoice(arr){
  return arr[Math.floor(Math.random()*arr.length)];
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
