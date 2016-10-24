var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

$("#create").on("click", function(){
	$("#xForY").append('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
})

$("#save").on("click", function(){
	var favorites = [];
	favorites.push('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	console.log(favorites);
})

$("#print").on("click", function(){
	$("#favorites").append(favorites);
})
