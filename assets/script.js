// This displays the current date in the page header
var currentDate = moment().format("dddd, MMMM Do");
$('#currentDay').text(currentDate);

// Identifies what hour it is currently 
var currentTime = moment().format("H");

// Creates save buttons array
var saveButtons = $('.saveBtn');

function handleFormSubmit(event) {
  event.preventDefault();

  // When each submit event occurs, the id at which it occurred and the text being saved are identified and saved
  var scheduleId = $(this).siblings('.description').attr("id");
  var scheduleItem = $(this).siblings('.description').val()

  localStorage.setItem(scheduleId, scheduleItem);
}

function renderSavedTasks() {
  // Retrieves all local storage from the boxes and sets them as values for their respective boxes
  var task9 = localStorage.getItem("9");
  var task9Box = $("#9");
  task9Box.val(task9);

  var task10 = localStorage.getItem("10");
  var task10Box = $("#10");
  task10Box.val(task10);

  var task11 = localStorage.getItem("11");
  var task11Box = $("#11");
  task11Box.val(task11);

  var task12 = localStorage.getItem("12");
  var task12Box = $("#12");
  task12Box.val(task12);

  var task13 = localStorage.getItem("13");
  var task13Box = $("#13");
  task13Box.val(task13);

  var task14 = localStorage.getItem("14");
  var task14Box = $("#14");
  task14Box.val(task14);

  var task15 = localStorage.getItem("15");
  var task15Box = $("#15");
  task15Box.val(task15);

  var task16 = localStorage.getItem("16");
  var task16Box = $("#16");
  task16Box.val(task16);

  var task17 = localStorage.getItem("17");
  var task17Box = $("#17");
  task17Box.val(task17);
}

renderSavedTasks();
saveButtons.on('click', handleFormSubmit);


