var imagePaths = [
    '../Static/Static Images/Image_1.jpg',
    '../Static/Static Images/Image_2.jpg',
    '../Static/Static Images/Image_3.jpg',
    '../Static/Static Images/Image_4.jpg',
    '../Static/Static Images/Image_5.jpg',
    '../Static/Static Images/Image_6.jpg',
    '../Static/Static Images/Image_7.jpg'
];
  
function changeBackgroundImage() {
    var body = document.querySelector('.body');
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
    var imagePath = imagePaths[randomIndex];
    // console.log("url('" + imagePath + "')")
    body.style.backgroundImage = "url('" + imagePath + "')";
}
  
function startBackgroundChange() {
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000);
}
  
startBackgroundChange(); 