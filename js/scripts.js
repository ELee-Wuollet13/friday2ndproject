$(document).ready(function() {

  $("#quiz").submit(function(event) {
    event.preventDefault();
    $(".hidden").hide();
    $("#match").show();
    var result = parseInt($("input:radio[name=question1]:checked").val());
    result += parseInt($("input:radio[name=question2]:checked").val());
    console.log(result)
    result += parseInt($("input:radio[name=question3]:checked").val());
console.log(result)
    if ($("input:radio[name=gender]:checked").val() === "male") {
      if (result >= 2){
        $(".george").show();
      }
      else if (result < 2 && result > -2) {
        $(".jerry").show();
      }
      else {
        $(".peter").show();
      }
    }
     else if ($("input:radio[name=gender]:checked").val() === "female") {
       if (result >= 2){
         $(".charlize").show();
       }
       else if (result < 2 && result > -2) {
         $(".jerry").show();
       }
       else {
         $(".cruella").show();
       }
    }
    else {
      $(".peter").show();
    }
  });
// var score = parseInt(value)
});
