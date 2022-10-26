const currentDayEl = document.querySelector("#currentDay");



setInterval(function() {
    currentDayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)