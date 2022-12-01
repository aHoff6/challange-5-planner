const currentDayEl = $("#currentDay");
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
const currentHour = moment().hour();
console.log(currentHour);



setInterval(function() {
    currentDayEl.text(currentTime);
}, 1000)
    
    


$(".saveBtn").click(function() {
    var id = $(this).data("id")
    var inputText = $(this).parent().siblings().find("input").val()
    localStorage.setItem(id, inputText)
    console.log(inputText);
});
//need to work on local storage 
// URL for help https://stackoverflow.com/questions/71813574/how-do-i-get-my-text-input-field-to-remember-previously-entered-data-by-using-lo
function getlocalStorage() {
    let inputval = JSON.parse(localStorage.getItem(inputText))
    if(true){
     
     var text= $("").text(inputval)
     console.log(inputval)
    }
  }
