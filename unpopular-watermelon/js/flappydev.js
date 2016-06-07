//FlappyBird Phaser HTML5 Version
//Author: k3vl4r @ techmeout.tv
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update});
var bgtile;
var score = 0;
var scoreText;
var timer = 0;
var diva;
var flyUp = -100;
var pipe1;
var pipes = [];
var vertPipes = [];
var flap;
var text;
var prev = 0;
var current = Math.floor(Math.random() * (pipeArray.length-1));

var pipeArray = [];
var pipe01, pipe02, pipe03,pipe04, pipe05;

function randY(min, max) {
  return Math.random() * (max - min) + min;
}
function preload() {
    game.load.image('bird','assets/img/watermelon.png');
    //game.load.image('title','assets/img/fappyTitle.png');
    game.load.image('bgtile', 'assets/img/tilebg2.png');
    // game.load.image('pipe1', 'assets/img/pipe1.png');
    game.load.image('vertpipe', 'assets/img/top-knife04.png');
    //game.load.audio('flap', ['assets/audio/ff.mp3', 'ff.mp3']);
    game.load.audio('birdFX1', ['assets/audio/ff.mp3','ff.mp3']);
    game.load.audio('squakFX1',['assets/audio/Cat.mp3','Cat.mp3']);


    game.load.image('pipe01', 'assets/img/bottom-knife01.png');
    game.load.image('pipe02', 'assets/img/bottom-knife02.png');
    game.load.image('pipe03', 'assets/img/bottom-knife03.png');
    game.load.image('pipe04', 'assets/img/bottom-knife04.png');
    game.load.image('pipe05', 'assets/img/bottom-knife05.png');
    pipeArray = ['pipe01', 'pipe02', 'pipe03','pipe04','pipe05'];

    //game.load.image('top01', '')

}
function create() {

    //flapFX = game.add.audio('flap');
    //flapFX.volume = 0.03;
    birdFX1 = game.add.audio('birdFX1');
    birdFX1.volume = 0.1;
    //squakFX1 = game.add.audio('squakFX1');
    game.stage.backgroundColor = "#344e50";
    scoreText = game.add.text(16, 16, 'score: 0', { font: '24px arial', fill: '#fff' });
    //game.add.sprite(200,175,'title');
    bgtile = game.add.tileSprite(0,350,game.stage.bounds.width, game.cache.getImage('bgtile').height, 'bgtile');
    player = game.add.sprite(350,game.world.height-250,'bird');
    //pipe1 = game.add.sprite(randY(900,1200),randY(400,500), 'pipe1');
    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5,6,7,8], 10, true);
    cursors = game.input.keyboard.createCursorKeys();
    keyboard = game.input.keyboard;
    player.angle -= 0;
    player.body.gravity.y = 200;
}
function collision() {
    //squakFX1.play();
    // alert('Game Over. Final Score: ' +score);
    location.reload();
}
function update() {
    //console.log(player.y);
    if(player.y > 540) {
	//squakFX1.play();
	// alert('Game Over. Final Score: ' +score);
	 location.reload();
    } else {
	// if(pipes.length > 4) {
	//     pipes.shift();
	// }
	// if(vertPipes.length > 4 ) {
	//     vertPipes.shift();
	// }

	console.log(pipes.length);
	console.log(vertPipes.length);
        for (var i=0;i<pipes.length;i++) {
	    game.physics.collide(player,pipes[i],collision,null,this);
            pipes[i].x -= 1;
        }
        for (var i=0;i<vertPipes.length;i++) {
            game.physics.collide(player,vertPipes[i],collision,null,this);
            vertPipes[i].x -= 1;
        }
        //if(cursors.left.isDown) {
	//    player.body.velocity.x = -120;
        //} else if(cursors.right.isDown) {
	    //player.body.velocity.x = 120;
        if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
	    player.body.velocity.y = flyUp;
	    rand = Math.floor(randY(0,2));
	    console.log(rand);
	    if(rand == 0) {
	        //flapFX.play();
	    }
        }
	//else if(cursors.up.isDown) {
	   // player.body.velocity.y = -120;
	//} else if(cursors.down.isDown) {
	  //  player.body.velocity.y = 120;
	//} else {
	    //player.body.velocity.normalize();
	//}
        bgtile.tilePosition.x -= 2;
	//console.log(timer);
	if(timer/1000 % 1 == 0) {
	    birdFX1.play();
	}
	if(timer/400 % 1 == 0 && timer != 0) {
	    console.log('adding pipe...');
	    randX = randY(800,1200);
      while (prev == current){
        current=Math.floor(Math.random() * (pipeArray.length-1));

      }
      prev = current;
	    pipes[i] = game.add.sprite(randX,randY(300,500), pipeArray[current]);
	    vertPipes[i] = game.add.sprite(randX,randY(-75,0), 'vertpipe');
      var pos = pipes[i];
      // text = game.add.text(pos.x , pos.y, 'score: 0', { fontSize: '32px', fill: '#000' });

      // alert("hi");
	}
        timer++;
        if(timer/100 % 5 == 0) {
            score += 1;
            scoreText.content = 'score: ' + score;

        }
    }
}
