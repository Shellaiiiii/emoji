var backgroundColors = ['#FFD1D1', '#FF9494'];
var currentColorIndex = 0;

function changeImage() {
    let displayImage = document.getElementById('image1');
    let body = document.body;
    
    if (displayImage.src.match("https://pngimg.com/uploads/smiley/smiley_PNG43.png")) {
        displayImage.src = "http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1480481019";
    } else {
        displayImage.src = "https://pngimg.com/uploads/smiley/smiley_PNG43.png";
    }

    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    body.style.backgroundColor = backgroundColors[currentColorIndex];
}
