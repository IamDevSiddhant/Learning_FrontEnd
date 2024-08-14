/**
 * This project is color change scheme
 * whenever u click on any box out of 4 boxes, background color will get set according
 * to that box color
 */

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(`event triggered :${e} , color is :${e.target.id}`);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = "white";
    }
  });
});
