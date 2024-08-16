// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );
// //above images is parent Node
// //below is child
// //in js there is concept called event propogation -> 2 types
// //1. event bubbling event will propgate from child to parent, 1st owl will be triggered then images
// //2. event capturing its from parent to child, 1st images then owl, we can pass 3 rd param inside addEVentListener method as true
// // we can block event propogation by adding stopPropagation method
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");
//   },
//   false
// );

//remove images from ul

document.querySelector("#images").addEventListener("click", function (e) {
  //console.log(e.target.id);
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    let removeImg = e.target.parentNode;
    removeImg.remove();
  }
});
