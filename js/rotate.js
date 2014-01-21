
function rotate(newX,newY){
    var x = parseInt(document.querySelector('#rx').value,10) + (newX || 0),
        y = parseInt(document.querySelector('#ry').value,10) + (newY || 0),
    cardContainer = document.getElementById('container');

    cardContainer.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    cardContainer.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"
}

