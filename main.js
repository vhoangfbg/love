const btnCo = document.getElementById("btn_co");
const btnKhong = document.getElementById("btn_khong");
const lbl = document.getElementById("lbl")
btnCo.addEventListener("click", function () {
  lbl.textContent = "Chồm cũm yêu vợ nhiềuuuuuuuu❤️❤️❤️❤️❤️"
});

btnKhong.addEventListener("click", function () {
  const coSize = parseFloat(window.getComputedStyle(btnCo).width);
  const khongSize = parseFloat(window.getComputedStyle(btnKhong).width);

  btnCo.style.width = (coSize + 8   ) + "px";
  btnKhong.style.width = Math.max(khongSize - 8, 10) + "px"; 
});
