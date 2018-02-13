var images = [], x = 0;
images[1] = "images/avatar.jpg";  
images[0] = "images/bg.jpg";  
images[3] = "images/Coffee.png";  
images[2] = "images/1.png"; 


function changeImage() {    
	var img = document.getElementById("image1");
    img.src = images[x];
    x++;
    if(x >= images.length){
        x = 0;
    }
}

/* 概念發想 */

// 一開始是 default -> (fadeOut first -> ChangeImage -> fadeIn) Loop
function fade_Out(img) {
	img.fadeOut(1000);
}

function fade_In(img) {
	img.fadeIn(1000);
}