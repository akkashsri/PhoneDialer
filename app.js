//Creating 'count' variable to prevent the digitbers from exceeding
var count = 0;

$(".grid-item").on('click',function(){
    var digit = ($(this).clone().children().remove().end().text()); // 'digit' variable will store the digit of the dialpad
    if(count<10)
    $('#field').append('<span>'+digit.trim()+'</span>'); // adding the stored digit in the digitbers field inside a span tag
    count++; // count variable will increase everytime we click the button to display a digitber
})

$('#back').on('click', function() {
    $('#field span:last-child').remove(); // removing the last span tag everytime user click backspace button
    count--;
  });

