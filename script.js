$(document).ready(new function(){
	var text = "<li><img src='b1.jpg'></img></li>";
	$("#images").append(text);	
	$("img").attr("height", $("img").parent().css("height"));
	$("img").attr("width", "100%");
	
	text = "<li><img src='b2.jpg'></img></li>";
	$("#images").append(text);
	$("img").attr("height", $("img").parent().css("height"));
	$("img").attr("width", "100%");
	
	text = "<li><img src='b3.jpg'></img></li>";
	$("#images").append(text);
	$("img").attr("height", $("img").parent().css("height"));
	$("img").attr("width", "100%");
	
	text = "<li><img src='b4.jpg'></img></li>";
	$("#images").append(text);
	$("img").attr("height", $("img").parent().css("height"));
	$("img").attr("width", "100%");

	text = "<li><img src='b5.jpg'></img></li>";
	$("#images").append(text);
	$("img").attr("height", $("img").parent().css("height"));
	$("img").attr("width", "100%");
	
	$("#images").css("-webkit-transform", "translate(0,0)");
	$("#images").css("-moz-transform", "translate(0,0)");

});

var framenum = 5;
var turn = 1;

function next(){
	if(turn < framenum){
		$("#images").css("-webkit-transform", "translate(-" + (100/framenum) * turn +"%,0)");
		$("#images").css("-moz-transform", "translate(-" + (100/framenum * turn) +"%,0)");
		turn++;
	}
	else {
		$("#images").css("-webkit-transform", "translate(0,0)");
		$("#images").css("-moz-transform", "translate(0,0)");
		turn =1;
	}
	
}

function back() {
	if(turn > 1){
		$("#images").css("-webkit-transform", "translate(-" + (100/(framenum) * (turn-2)) +"%,0)");
		$("#images").css("-moz-transform", "translate(-" + (100/(framenum) *(turn-2)) +"%,0)");
		turn--;
	}
	else {
		console.log("dulo" + " " + turn +" " + framenum);
		$("#images").css("-webkit-transform", "translate(-" + (100- 100/(framenum)) + "%,0)");
		$("#images").css("-moz-transform", "translate(-" + (100- 100/(framenum)) + "%,0)");
		turn = framenum;
	}

}