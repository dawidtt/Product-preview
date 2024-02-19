const myImage = document.getElementById("product-image");
const container = document.querySelector("body");

function imageChange() {
  let container = document.querySelector("body");
  console.log(innerWidth);
  if (window.innerWidth > 576) {
    myImage.src = "./images/image-product-desktop.jpg";
  } else {
    myImage.src = "./images/image-product-mobile.jpg";
  }
}
imageChange();
window.onresize = imageChange;
