// This section logs the current date to the header of the page
var today = dayjs();

$("#currentDay").text(today.format("dddd, MMMM D YYYY,"));

// This click function logs any input in the time slot to the local storage, and prevents it from dissapearing till manually removed.
$(".btn").on("click", function (event) {
  event.preventDefault();
  var inputValue = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, inputValue);
});



//this function creates color changes for each time block based on the time of day, and if it's past, resent or uture
$(".time-block").each(function () {

  var pageTime = $(this).attr("id").split("-")[1];
  var currentTime = dayjs().hour();

  if (pageTime == currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");

  } else if (pageTime > currentTime) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

  } else if (pageTime < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");


    // grabs input from local storage and displays it on the correct time block
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
    $("#hour-21 .description").val(localStorage.getItem("hour-21"));

  
}});
 
