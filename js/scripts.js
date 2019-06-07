$(document).ready(function() {

  $("#quiz").submit(function(event) {
    event.preventDefault();
    $(".hidden").hide();
    $("#match").show();
    var result = parseInt($("input:radio[name=question1]:checked").val());
    result += parseInt($("input:radio[name=question2]:checked").val());
    console.log(result)
    result += parseInt($("input:radio[name=question3]:checked").val());
    result += parseInt($("input:radio[name=question4]:checked").val());
    console.log(result)
    if ($("input:radio[name=end]:checked").val() === "frontend") {
      if (result >= 2){
        $(".Csharp").show();
      }
      else if (result < 2 && result > -2) {
        $(".Java").show();
      }
      else {
        $(".Python").show();
      }
    }
    else if ($("input:radio[name=end]:checked").val() === "backend") {
      if (result >= 2){
        $(".GO").show();
      }
      else if (result < 2 && result > -2) {
        $(".Java").show();
      }
      else {
        $(".Rust").show();
      }
    }
    else {
      $(".Ruby").show();
    }
  });
  // var score = parseInt(value)
});
