//
// rpg gamelogic using loop.js
//
//
//
//



// will contain complete logic, such as game mechanics, functions for objects and so on
document.getElementById('startButton').addEventListener('click', initRPG, false);
var gameLogic;


function initRPG(){

	var _height = $(document.getElementById('rpgContainer')).height();
	var _width = $(document.getElementById('rpgContainer')).width();
	

	document.getElementById('startButton').style.display = 'none';
	document.getElementById('rpgContainer').innerHTML = '<canvas style="float:left; height:' + _height + 'px; width:' + _width + 'px;" height="' + _height + 'px" width="' + _width + 'px" id="rpgCanvas">' +
	'If you see this, you fail! Get t3h new br0wzer!"' +
    '</canvas>';
	gameLogic = new GameLogic(document.getElementById('rpgCanvas'));
	gameLogic.start();
	document.getElementById('pauseButton').addEventListener('click', gameLogic.pause, false);
	console.log($(document.getElementById('rpgContainer')).width())
		console.log($(document.getElementById('rpgContainer')).height())
		
		
};

$(window).resize(function() {
		_height = $(document.getElementById('rpgContainer')).height();
		_width = $(document.getElementById('rpgContainer')).width();
		document.getElementById('rpgContainer').innerHTML = '<canvas style="float:left; height:' + _height + 'px; width:' + _width + 'px;" height="' + _height + 'px" width="' + _width  + 'px" id="rpgCanvas">' +
		'If you see this, you fail! Get t3h new br0wzer!"' +
		'</canvas>';
	});



function GameLogic(canvas){
	
	var _canvas = canvas;
	var	_context = canvas.getContext('2d');
	var _started = false;
	var _paused = false;
	var _showmenue = false;
	var _loop = new kk.Loop(canvas.getContext('2d'));
	
	
		
	this.start = function(){
		return this;
	};
	
	this.pause = function(){
		
		if(_paused == false){
		_paused = true;
		} else {
		_paused = false;
		}
	};
	
	this.tick = function(context, tickTimeDiff){
	
	  
	  
	  if(_paused == false){
		
		context.save();
		context.fillStyle = '#666';
		context.fillRect(0, 0, 10000, 10000);
		context.fill();
		context.beginPath();
		context.fillStyle = '#ff0';
		context.arc(20, 19, 5, 0, Math.PI / 2 * 360);
		context.fill();
		context.closePath();
		context.restore();
		
	  } else {
		context.save();
		context.font = 'italic, 40px'; 
		context.fillText('Menü', 30, 30);
		context.restore();
	  }
	  
	  
	  
	
	};
	
	
	var menue = function menue(showmenue){
	
	var _showmenue = showmenue;
	
	if(_showmenue == false){
	
		return;
	
	} else {
	 return;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
	}
	
	};
	
	_loop.frameRate(60);
	_loop.showInfo(true);
  
	_loop.push(this);
};


function StatObject () {

};

function MobObject () {

};