$("document").ready(() => {
  $("#btn").click(() => {
    $("#img1").animate(
      {
        left: "150px",
        opacity: "1",
        height: "400px",
        width: "400px",
      },
      "slow"
    );
  });
});
