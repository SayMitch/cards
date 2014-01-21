// function stack(){
// 	$('#stack-button').click(function(){
// 		$('.a').animate({
// 			transform: 'rotateX(90deg)translate3d(50px,-100px,22px);'
// 		},3000);
// 	});
// }
function stack() {
	singleCard = document.getElementsByClassName('x2');

	$('#stack-button').click(function(){
		$(singleCard).animate({
			
		}, 3000);
	});

}
