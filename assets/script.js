// This displays the current date in the page header
var currentDate = moment().format("dddd, MMMM Do");
$('#currentDay').text(currentDate);

// Collects all the description boxes and stores them in an array
// var descriptionListEl = $('.description');

// Creates save buttons array
var saveButtons = $('.saveBtn');

function handleFormSubmit(event) {
  event.preventDefault();
  var scheduleId = $(this).siblings('.description').attr("id");
  var scheduleItem = $(this).siblings('.description').val()
  // var scheduleItem = $('input[name="task-input"]').val();
  // console.log(scheduleId, scheduleItem)

  // descriptionListEl.textContent = scheduleItem;
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

  var task1 = localStorage.getItem("1");
  var task1Box = $("#1");
  task1Box.val(task1);

  var task2 = localStorage.getItem("2");
  var task2Box = $("#2");
  task2Box.val(task2);

  var task3 = localStorage.getItem("3");
  var task3Box = $("#3");
  task3Box.val(task3);

  var task4 = localStorage.getItem("4");
  var task4Box = $("#4");
  task4Box.val(task4);

  var task5 = localStorage.getItem("5");
  var task5Box = $("#5");
  task5Box.val(task5);
}

renderSavedTasks();
saveButtons.on('click', handleFormSubmit);


