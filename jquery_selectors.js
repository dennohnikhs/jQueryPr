//JQUERY ELEMENT SELECTORS
//selectors include id,class,element name

// dollar sign is simply an expression to get element by maybe id ,classname or tagname
//you cannot use same id for diffrent elements ...ids must be unique for each element in jquery

function func1() {
  //   $("#img1").fadeToggle(3000);
  //   $("div").css("background-color", "orange");
  //   $("#p1").css("font-style", "italic");
  //   $(".p1").css("font-style", "italic");
  //   $("#div1,li").css("background-color", "red");
  //   $("div>p").fadeToggle();
  //   $("p:first").fadeToggle();
  $("li:even").fadeToggle();
}
