const btn = document.getElementById("btn");
const mainImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("small_img");

btn.onclick = function addToCart() {
  alert("Product added to the cart!");
};

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};
