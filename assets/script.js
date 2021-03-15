// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar ✅
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));



// WHEN I view the timeblocks for that day
// THEN 

$()




$(document).ready(function () {

    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // Grabbing the values from text area and hour
        var comment = $(this).siblings(".description").val()
        // console.log(comment)
        var hour = $(this).siblings(".hour").text()
        // console.log(hour)
        localStorage.setItem(hour, comment);
    })

    //Retriving from localstorage and the setting value for 9:00 am in the text area
    console.log(localStorage.getItem("9:00 AM"));
    $("#comment9am").val(localStorage.getItem("9:00 AM"));
    $("#comment10am").val(localStorage.getItem("10:00 AM"));

    // get current number of hours
    var currentHour = moment().format("h:mm A");
    console.log(currentHour)

    //Each timeblock is color coded to indicate whether it is in the past, present, or future
    $(".time-block").each(function(){
        var hour = $(this).find(".hour").text()
        console.log(hour)
        if (hour < currentHour) {
            $(this).addClass('past');
          } else if (hour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
            

    })

    
});







// // Store
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// // $( "button" ).on( "click", textarea.val(), function( event ) {
// //     event.preventDefault();
// //     console.log( $( this ).text("did this work?") );
// // });

// // $(document).ready(function(){
// //     $("button").click(function(){
// //         var comment = $.trim($("#comment9am").val());
// //         if(comment != ""){
// //             // Show alert dialog if value is not blank
// //             alert(comment);
// //         }
// //     });
    
// // });
    












// WHEN I refresh the page
// THEN the saved events persist