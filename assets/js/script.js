// Today's date and time

var todaysDate = moment().format("dddd, MMM Do YYYY", "");
var currentTime = moment().format("HH:mm:ss");

$("#currentDay").html(todaysDate + currentTime);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var textEntry = $(this).siblings(".description").val();
    var timeOfEntry = $(this).parent().attr("id");

    localStorage.setItem(timeOfEntry, textEntry);
  });
});

function timeTracking() {
  var timeNow = moment().hour();

  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

timeTracking();
