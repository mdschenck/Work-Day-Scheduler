var schedulerContainer = document.querySelector(".container");
var saveBtn = document.querySelector(".saveBtn");
var futureBlocks = document.querySelector(".future");
var presentBlocks = document.querySelector(".present");
var pastBlocks = document.querySelector(".past");
var hourBlocks = document.querySelector(".hour");
var scheduleRows = document.querySelector(".row");
var timeBlocks = document.querySelector(".time-block");
var descriptionBlocks = document.querySelector(".description");
var jumbotron = document.querySelector(".jumbotron");
var currentDay = document.querySelector("#currentDay");

var todayIs = moment().format("dddd, MMMM Do YYYY");
var schedHours = [];

console.log(todayIs);

currentDay.textContent = todayIs;

var hour8 = { hour: "8am", task: "" };
var hour9 = { hour: "9am", task: "" };
var hour10 = { hour: "10am", task: "" };
var hour11 = { hour: "11am", task: "" };
var hour12 = { hour: "12pm", task: "" };
var hour13 = { hour: "1pm", task: "" };
var hour14 = { hour: "2pm", task: "" };
var hour15 = { hour: "3pm", task: "" };
var hour16 = { hour: "4pm", task: "" };
var hour17 = { hour: "5pm", task: "" };
var hour18 = { hour: "6pm", task: "" };
var hour19 = { hour: "7pm", task: "" };
var hour20 = { hour: "8pm", task: "" };
var hour21 = { hour: "9pm", task: "" };
var hour22 = { hour: "10pm", task: "" };

schedHours = [
  hour8,
  hour9,
  hour10,
  hour11,
  hour12,
  hour13,
  hour14,
  hour15,
  hour16,
  hour17,
  hour18,
  hour19,
  hour20,
  hour21,
  hour22,
];

// schedHours = JSON.parse(localStorage.getItem("calendarList")) || [];
localStorage.setItem("calendarList", JSON.stringify(schedHours));
console.log(schedHours);

//ON-LOAD EVENT?
var loadCalendar = function (event) {
  //   schedHours.foreach(function (element)
  for (i = 0; i < 15; i++) {
    var currentHour = moment().format("H");
    console.log(currentHour);
    var pastPresentFuture = "";
    if (i < currentHour - 8) {
      rowColor = "past";
    } else if (i > currentHour - 8) {
      rowColor = "future";
    } else {
      rowColor = "present";
    }
    var calendarRowEl = document.createElement("tr");
    calendarRowEl.setAttribute("class", "row");
    calendarRowEl.innerHTML = `
    <td id="hour${i + 8}" class="col-1 time-block hour" scope="row">${
      schedHours[i].hour
    }</td><td class="editable col-10 ${rowColor}" contentEditable="true">${
      schedHours[i].task
    }</td><td class="col-1"><button class="saveBtn btn save bi bi-save" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
  </svg></button></td><tr>
    `;
    schedulerContainer.append(calendarRowEl);
  }
};

// var saveTask = function (event) {};

loadCalendar();

// saveBtn.addEventListener("click", saveTask);
