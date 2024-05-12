let ourImage = document.getElementById(testImage);

let imageInput = document.getElementById(imageInput);

let imageButton= document.getElementById(imageButton);

imageButton.addEventListener('click', function (){

// Getting the value of the input field
let newImageUrl = imageInput.ariaValueMax;

//Changing the src attribute of the image
testImage.src = newImageUrl;
}
);