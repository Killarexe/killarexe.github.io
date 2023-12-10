const menu = document.getElementById("menu");
const background = document.getElementById("menu-background-pattern");

Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
  item.onmouseover = () => {
    background.style.backgroundPosition = "0% " + (index * -25 + -25) + "%";
  }
});
