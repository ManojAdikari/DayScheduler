// Get today date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// saveBtn click 
$(document).ready(function () {
  
  $(".saveBtn").on("click", function () {
      var description = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id"); 
      localStorage.setItem(time, description);
  })
 
var hour8=localStorage.getItem("hour-8");
var hour9=localStorage.getItem("hour-9");
var hour10=localStorage.getItem("hour-10");
var hour11=localStorage.getItem("hour-11");
var hour12=localStorage.getItem("hour-12");
var hour13=localStorage.getItem("hour-13");
var hour14=localStorage.getItem("hour-14");
var hour15=localStorage.getItem("hour-15");
var hour16=localStorage.getItem("hour-16");
var hour17=localStorage.getItem("hour-17");
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


Gettimeframe();
})

// set time frame and  dividing to the category
function Gettimeframe() {

var timeNow = moment().hour();


$(".work-time").each(function () {
  var worktime = parseInt($(this).attr("id").split("hour-")[1]);

  
  if (worktime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  }
  else if (worktime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  }
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

  }
})
}