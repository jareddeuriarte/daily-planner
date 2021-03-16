var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$(document).ready(function () {

    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // Grabbing the values from text area and hour
        var comment = $(this).siblings(".description").val()
        var hour = $(this).siblings(".hour").text()
        localStorage.setItem(hour, comment);
    })

    //Retriving from localstorage and the printing the textarea value in textarea. 
    $("#comment9").val(localStorage.getItem("9:00"));
    $("#comment10").val(localStorage.getItem("10:00"));
    $("#comment11").val(localStorage.getItem("11:00"));
    $("#comment12").val(localStorage.getItem("12:00"));
    $("#comment13").val(localStorage.getItem("13:00"));
    $("#comment14").val(localStorage.getItem("14:00"));
    $("#comment15").val(localStorage.getItem("15:00"));
    $("#comment16").val(localStorage.getItem("16:00"));
    $("#comment17").val(localStorage.getItem("17:00"));


    // get current number of hours
    var currentHour = moment()
    console.log(currentHour)

    //Each timeblock is color coded to indicate whether it is in the past, present, or future
    $(".time-block").each(function(){
        var hour = $(this).find(".hour").text()
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


// Not sure if i need this after momemnt() on line 27
// .format('HHmm')