// Today's day and date

var todaysDate = moment().format("dddd, MMM Do YYYY", "");
var currentTime = moment().format("HH:mm:ss");

$("#currentDay").html(todaysDate + currentTime);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    console.log("it worked");
  });
});
