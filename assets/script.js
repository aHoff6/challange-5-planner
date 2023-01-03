const currentDayEl = $("#currentDay");
const currentDayAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
// const currentHour = moment().format("HH");
// console.log(currentHour);

// const timeBlocks = [];





// getting local storage of user input
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
      $(`#text${key}`).text(value);
    }
  }
// rendering time blocks function
$(document).ready(function () {
   // inserting current date and time to the #currentDay element 
  currentDayEl.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  // looping through and building time blocks in the .container element
  const containerEl = $(".container");
  for (let i = 9; i < 18; i++) {
    const rowEl = $(`<div data-time=${i} id='${i}' class="row">`);

    const hourEl = $(
      `<div class="col-sm-2 hour"> <p class="hourtext">${AMPM(i)}</p>`
    );
    rowEl.append(hourEl);

    const eventEl = $(
      `<div class="col-sm-8 past" id="textbox"><textarea id=text${i} class="textarea"></textarea>`
    );
    rowEl.append(eventEl);

    const saveButtonEl = $(
      `<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`
    );
    rowEl.append(saveButtonEl);

    containerEl.append(rowEl);

    getLocalStorage(i);
  }

  // correcting 24hour format and setting am or pm for hour text
  function AMPM(hours) {
    let ampm = "am";
    if (hours >= 12) {
      hours -= 12;
      ampm = "pm";
    }
    if (hours === 0) {
      hours = 12;
    }
    return `${hours}${ampm}`;
  }

  // function to get color rendering
  function getColors() {
    const currentTime = new Date().getHours();
    for (let i = 9; i < 18; i++) {
      console.log(
        currentTime,
        $(`#${i}`).data("time")
      );
      if ($(`#${i}`).data("time") == currentTime) {
        $(`#text${i}`).addClass("present");
      } else if (currentTime < $(`#${i}`).data("time")) {
        $(`#text${i}`).addClass("future");
      }
    }
  }

  setInterval(getColors, 1000);
  // function to save user input into local storage 
  $(".saveBtn").on("click", function () {
    const eventId = $(this).attr("id");
    const eventText = $(this)
      .parent()
      .siblings()
      .children(".textarea")
      .val();
    localStorage.setItem(eventId, eventText);
  });
});
