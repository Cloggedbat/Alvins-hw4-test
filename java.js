

// set so that when the page loads so does the JS file, this way it is more seemless when you use the program
$(document).ready(function () {

    // I want to play with the idea of hiding my cards. with this i have hidden my 5th jumbotron 
    $('div#fun2,#fun3,#fun4,#fun5,#fun6,#fun7,#fun8,#fun9,#fun10,#fun11,#endGame').hide();
    // this is a working alert tied to the start Btn

    let scoreup = 0


    // these are my button functions to hide and show the questions
    // start button known as #tryme
    $('#tryme').on('click', function () {
        $('#fun1').hide(); $('#fun2').show();
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
    $("#looser1,#looser5").on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun3').show(); $("#fun2").hide();
        console.log("#looser1")
    });

    // second question button known as #winner 2

    $('#winner2').on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun4').show(); $('#fun3').hide();
        console.log(scoreup)
    });
    $("#looser2,#looser6").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun4').show(); $("#fun3").hide();
        console.log("Hlooser2")
    });

    // third question button known as #winner 3

    $('#winner3').on('click', function () {
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun5').show(); $('#fun4').hide();
    });

    $("#looser3,#looser7").on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun5').show(); $("#fun4").hide();
        console.log("#looser1")
    });


    // forth question button known as #winner 4

    $('#winner4').on('click', function () {
        scoreup = scoreup + 1;
        $('#score').html(scoreup);
        $('#fun6').show(); $('#fun5').hide();
    });

    $("#looser4,#looser8").on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun6').show(); $("#fun5").hide();
        console.log("#looser1")
    });
 // this is home
//  question five
    $('#winner5').on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun7').show(); $('#fun6').hide();
        console.log(scoreup)
    });
    $("#looser9,#looser10").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun7').show(); $("#fun6").hide();
        console.log("Hlooser2")
    });
    // question 6
    $('#winner6').on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun8').show(); $('#fun7').hide();
        console.log(scoreup)
     });
    $("#looser12,#looser11").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun8').show(); $("#fun7").hide();
        console.log("Hlooser2")
    });
    // question 7
    $('#winner7').on('click', function () {
        secondsLeft = secondsLeft - 10
        $('#time').html(secondsLeft);
        scoreup = scoreup + 1
        $('#score').html(scoreup);
        $('#fun9').show(); $('#fun8').hide();
        console.log(scoreup)
    });
    $("#looser13,#looser14").on('click', function () {
        scoreup = scoreup - 1
        $('#score').html(scoreup);
        $('#fun9').show(); $("#fun8").hide();
        console.log("Hlooser2")
    });
// question 8
  

  // fith question button known as #endgame  
  $('#reset').on('click', function () {
    $('#fun1').show();$('#endGame').hide();
});

    // the timer is now put on the back burner
    // classic dont know where to start so im going to build a timer 
    var timeEl = document.querySelector("#time");
    // var mainEl = document.getElementById("main");

    var secondsLeft = 1000;
    console.log('mark')
    // a working button ya thats right
    var click = document.querySelector("#tryme");
    click.addEventListener("click", function () {

        let timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.innerText = secondsLeft + " seconds left till ";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage("Time is up");
            }

            // this is the speed of the clock not the intervals
        }, 1000);

    })
    console.log(click)
});
click = document.querySelector("#reset");
click.addEventListener('click', function () {
 // keep this at the end of the JS/JQ
})

// a working button ya thats right