var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var favorites = [];
var random1, random2;

$("#create").on("click", function(){
	random1 = Math.floor((Math.random() * startupX.length));
	random2 = Math.floor((Math.random() * startupY.length));

	$("#xForY").html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
})

$("#save").on("click", function(){
	favorites.push('<li>A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '</li>');
	console.log(favorites);
})

$("#print").on("click", function(){
	$("#favorites").empty();
	for (var i = 0; i < favorites.length; i++) {
		$("#favorites").append(favorites[i]);
	}
})
