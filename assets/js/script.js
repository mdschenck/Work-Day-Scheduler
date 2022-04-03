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

console.log(todayIs);

currentDay.textContent = todayIs;

// *****NEED TO FIX ARRAY ???
var schedHours = [
  `
    {
    hour: 8,
    task: ""
    },
    { 
    hour: 9,
    task: ""
    },
    {
    hour:10,
    task: ""
    },
    {
    hour: 11,
    task: ""
    },
    {
    hour: 12,
    task: ""
    },
    {
    hour: 13,
    task: ""
    },
    {
    hour: 14,
    task: ""
    },
    {
    hour: 15,
    task: ""
    },
    {
    hour: 16:00,
    task:
    },
    {
    hour: 17,
    task: ""
    },
    {
    hour: 18,
    task: ""
    },
    {
    hour: 19,
    task: ""
    },
    {
    hour: 20,
    task: ""
    },
    {
    hour: 21,
    task: ""
    },
    {
    hour: 22,
    task: ""
    }`,
];

//ON-LOAD EVENT?
var loadCalendar = function (event) {
  schedHours.foreach(function (element) {
    var currentHour = moment().format("H");
    var displayHour = moment(element.hour, "HH").format("LT");
    var pastPresentFuture = "";
    if (element.hour < currentHour) {
      rowColor = "past";
    } else if (element.hour > currentHour) {
      rowColor = "future";
    } else {
      rowColor = "present";
    }
    var calendarRowEl = document.createElement("tr");
    calendarRowEl.classlist.add(rowColor);
    calendarRowEl.innerHTML = `
    <td id="hour-${element.hour}" class="col-1" scope="row">${displayHour}</td><td class="editable col-10" contentEditable="true">${element.task}</td><td class="col-1"><button class="saveBtn btn save" type="button"></button></td><tr>
    `;
    schedulerContainer.append(calendarRowEl);
  });
};

var saveTask = function (event) {};

loadCalendar();

// saveBtn.addEventListener("click", saveTask);
