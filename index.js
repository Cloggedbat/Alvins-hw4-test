

// set so that when the page loads so does the JS file, this way it is more seemless when you use the program
$(document).ready(function () {

    // I want to play with the idea of hiding my cards. with this i have hidden my 5th jumbotron 
    $('div#fun2,#fun3,#fun4,#fun5,#endGame').hide();
    // this is a working alert tied to the start Btn

    let scoreup = 0
    let scoredown = 0

    // these are my button functions to hide and show the questions
    // start button known as #tryme
    $('#tryme').on('click', function () {
        $('#fun1').hide();
    });
    $('#tryme').on('click', function () {
        $('#fun2').show();
    });

    // first question button known as #winner 1
    $('#winner1').on('click', function () {
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun3').show(); $('#fun2').hide();
        console.log('winner1')
        console.log(scoreup)
    });
    // losses will be move you to the next question
    $("#looser1").on('click', function () {
        scoredown = scoreup - 1
        $('#score').html(scoreup);
        $('#fun3').show(); $("#fun2").hide();
        console.log("#looser1")
    });

    // looser buttons must be added for each


    // second question button known as #winner 2

    $('#winner2').on('click', function () {
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun4').show(); $('#fun3').hide();
        console.log(scoreup)
    });
    $("#looser2").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun4').show(); $("#fun3").hide();
        console.log("#looser1")
    });



    // third question button known as #winner 3

    $('#winner3').on('click', function () {
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun5').show(); $('#fun4').hide();
    });

    $("#looser3").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun5').show(); $("#fun4").hide();
        console.log("#looser1")
    });


    // forth question button known as #winner 4

    $('#winner4').on('click', function () {
        scoreup = scoredownr + 1
        $('#score').html(scoreup);
        $('#endGame').show(); $('#fun5').hide();
    });

    $("#looser4").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#endGame').show(); $("#fun5").hide();
        console.log("#looser1")
    });

    // fith question button known as #endgame  
    $('#reset').on('click', function () {
        $('#fun1').show();
    });
    $('#reset').on('click', function () {
        $('#endGame').hide();
    });


    // $('#tryme').click(function(){
    //     alert('this works');
    // })


    // keep this at the end of the JS/JQ
});

// the timer is now put on the back burner
// classic dont know where to start so im going to build a timer 
var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("main");

var secondsLeft = 45;

// a working button ya thats right
var click = document.querySelector("#tryme");
click.addEventListener("click", function () {
    console.log('mark')
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.innerText = secondsLeft + " seconds left till ";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
        // this is the speed of the clock not the intervals
    }, 1000);
})
console.log(click)



// a working button ya thats right

