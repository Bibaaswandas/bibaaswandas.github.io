const question = document.querySelector(".question");
const button = document.querySelector(".button");
const button2 = document.querySelector(".button2");
let questionNumber = 0;
let output = document.querySelector(".output");
let checkinstant = document.querySelector(".checkinstant");
let questionHInt = 0;
let reply = document.querySelector(".reply");
let scoretext = document.querySelector(".score");
let score = 0;
const input = document.querySelector(".input");
const play = document.querySelector(".play");
var music = new Audio("music.mp3");
let playtrue = false;
var ting = new Audio("ting.mp3");
var wrong = new Audio("wrong.mp3");
<<<<<<< HEAD
let mode = "easy";
let modeButton = document.querySelector(".mode");
let submitisPressedBool = false;
let currentQuestionNumber;

if (mode == "suicide") {
  modeButton.innerText = "Suicide";
} else if (mode == "hard") {
  modeButton.innerText = "Hard";
} else if (mode == "medium") {
  modeButton.innerText = "Medium";
} else if (mode == "easy") {
  modeButton.innerText = "Easy";
}
=======
>>>>>>> parent of 4617e9c (Modes added)

button.addEventListener("click", initNextQuestion);
button2.addEventListener("click", checkAnswer);
play.addEventListener("click", playMusic);
music.volume = 0.2;

function playMusic() {
  music.play();
  if (playtrue === false) {
    playtrue = true;
    play.classList.remove("fa-volume-mute");
    play.classList.add("fa-volume-up");
  } else if (playtrue === true) {
    playtrue = false;
    play.classList.remove("fa-volume-up");
    play.classList.add("fa-volume-mute");
  }
  music.addEventListener("ended", function () {
    music.currentTime = 0;
    music.play();
  });
  console.log(playtrue);
  stopMusic();
}
function stopMusic() {
  if (playtrue === false) {
    console.log("musicshouldstopnow");
    music.pause();
  }
}
function checkAnswer() {
  checkinstant.innerText = "submitispressed";
  output.innerText = document.getElementById("input").value;

  console.log(submitisPressedBool, questionNumber, currentQuestionNumber);

  if (submitisPressedBool == false && questionNumber != currentQuestionNumber) {
    if (questionHInt === 1) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == sum) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score += 1;
          scoretext.innerText = "Score: " + score;
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 2 || questionHInt === 8) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == x + y) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 3) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == sum - y) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score += 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");

          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 4) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == mx * my) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 5) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == x) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 6) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == x) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score += 1;
          scoretext.innerText = "Score: " + score;
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 7) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == sum - x) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 9) {
      if (checkinstant.innerText === "submitispressed") {
        if (output.innerText == x * 100 + y) {
          ting.play();
          reply.classList.add("green");
          reply.classList.remove("red");
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        wrong.play();
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }

    if (questionHInt === 10) {
      if (checkinstant.innerText === "submitispressed") {
        if (x % output.innerText == 0) {
          reply.classList.add("green");
          reply.classList.remove("red");
          ting.play();
          score = score + 1;
          scoretext.innerText = "Score: " + score;
          console.log("YOu are correct");
          reply.innerText = "You are Correct!";
          output.innerText = "";
        }
      } else if (output.innerText > 0) {
        score = score - 1;
        scoretext.innerText = "Score: " + score;
        wrong.play();
        reply.classList.remove("green");
        reply.classList.add("red");
        console.log("YOu are wrong");
        reply.innerText = "You are Wrong";
        output.innerText = "";
      } else {
        console.log("value is null");
        output.innerText = "";
      }
    }
    submitisPressedBool = true;
  }
}

function initNextQuestion() {
  button2.classList.remove("inv");
  reply.innerText = "";
  checkinstant.innerText = "submitisnotpressed";
  button2.innerText = "Submit Answer";
  output.innerText = document.getElementById("input").value;
  button.innerText = "Next Question >";
  currentQuestionNumber = questionNumber;
  questionNumber += 1;
  questionHInt = Math.round(Math.random(1, 5) * 10);
<<<<<<< HEAD
  submitisPressedBool = false;
  if (mode == "suicide") {
    x = Math.round(Math.random() * 100000);
    y = Math.round(Math.random() * 100000);
    mx = Math.round(Math.random() * 1000000);
    my = Math.round(Math.random() * 10000);
    sum = x + y;
    modeButton.innerText = "Suicide";
  } else if (mode == "hard") {
    x = Math.round(Math.random() * 10000);
    y = Math.round(Math.random() * 10000);
    mx = Math.round(Math.random() * 100000);
    my = Math.round(Math.random() * 1000);
    sum = x + y;
    modeButton.innerText = "Hard";
  } else if (mode == "medium") {
    x = Math.round(Math.random() * 1000);
    y = Math.round(Math.random() * 1000);
    mx = Math.round(Math.random() * 10000);
    my = Math.round(Math.random() * 100);
    sum = x + y;
    modeButton.innerText = "Medium";
  } else if (mode == "easy") {
    x = Math.round(Math.random() * 100);
    y = Math.round(Math.random() * 100);
    mx = Math.round(Math.random() * 1000);
    my = Math.round(Math.random() * 10);
    sum = x + y;
    modeButton.innerText = "Easy";
  }
=======
  x = Math.round(Math.random() * 100);
  y = Math.round(Math.random() * 100);
  mx = Math.round(Math.random() * 1000);
  my = Math.round(Math.random() * 10);
  sum = x + y;
>>>>>>> parent of 4617e9c (Modes added)
  if (questionHInt === 1) {
    question.innerText =
      questionNumber + ") " + "Which is greater " + sum + " or " + y;
  } else if (questionHInt === 2) {
    question.innerText = questionNumber + ") " + "What is " + x + " + " + y;
  } else if (questionHInt === 3) {
    question.innerText = questionNumber + ") " + "What is " + sum + " - " + y;
  } else if (questionHInt === 4) {
    question.innerText = questionNumber + ") " + "What is " + mx + " x " + my;
  } else if (questionHInt === 5) {
    question.innerText =
      questionNumber + ") " + "What is " + my * x + " ÷ " + my;
  } else if (questionHInt === 6) {
    question.innerText =
      questionNumber + ") " + "Which is lesser " + sum + " or " + x;
  } else if (questionHInt === 7) {
    question.innerText = questionNumber + ") " + x + " before " + sum + " is";
  } else if (questionHInt === 8) {
    question.innerText = questionNumber + ") " + x + " after " + y + " is";
  } else if (questionHInt === 9) {
    question.innerText =
      questionNumber +
      ") " +
      "How many cents is " +
      x +
      " dollars and " +
      y +
      " cents";
  } else if (questionHInt === 10) {
    question.innerText = questionNumber + ") " + "Write a factor of " + x;
  }
}
