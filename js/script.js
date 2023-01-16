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
 
})