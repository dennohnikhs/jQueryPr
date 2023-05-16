$("document").ready(function () {
  $("#btn1").click(() => {
    $("#img1").hide(2000);
  });
  $("#btn2").click(() => {
    $("#img1").show(2000);
  });
  $("#btn3").click(() => {
    $("#img1").toggle(3000);
  });
  $("#btn4").click(() => {
    $("#img1").fadeIn(2000);
  });
  $("#btn5").click(() => {
    $("#img1").fadeOut(2000);
  });
  $("#btn6").click(() => {
    $("#img1").fadeToggle(2000);
  });
  $("#btn7").click(() => {
    $("#img1").slideUp(2000);
  });
  $("#btn8").click(() => {
    $("#img1").slideDown(3000);
  });
  $("#btn9").click(() => {
    $("#img1").slideToggle(2000);
  });
  $("#btn10").click(() => {
    $("#img1").stop(2000);
  });
});
