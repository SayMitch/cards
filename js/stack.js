// function stack(){
// 	$('#stack-button').click(function(){
// 		$('.a').animate({
// 			transform: 'rotateX(90deg)translate3d(50px,-100px,22px);'
// 		},3000);
// 	});
// }


function stack() {
	event.preventDefault();
	$('#container').toggleClass('stacked', 'scattered');
}
