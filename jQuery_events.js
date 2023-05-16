//normal way in javascript

// function func1() {
//   document.getElementById("img1").style.width = "500px";
// }

//jquery way on events

// $("button").click(func1);
// function func1() {
//   $("#img1").css("width", "500px");
// }

//you can also use enornimous function or arrow function in place of creating the long way as the above

// $("button").click(() => {
//   $("#img1").css("width", "500px");
// });

//jQuery events examples
// 1

// $("document").ready(() => {
//   $("#img1").mouseenter(() => {
//     $("#img1").css("width", "300px");
//   });
// });

// $("document").ready(() => {
//   $("#img1").mouseleave(() => {
//     $("#img1").css("width", "250px");
//   });
// });

// 2

$("#img1").hover(func1, func2);
function func1() {
  $("#img1").css("width", "300px");
}
function func2() {
  $("#img1").css("width", "250px");
}
