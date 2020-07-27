let points = localStorage.points || 0;
document.getElementById("score").innerHTML = points;

function playagain() {
  location.reload();
}
function rules() {
  document.getElementsByClassName("modal")[0].style.visibility = "visible";
  if (window.innerWidth <= 786) {
    document.getElementsByClassName("xs-size")[0].style.visibility = "visible";
  }
}
function closeModal() {
  document.getElementsByClassName("modal")[0].style.visibility = "hidden";
  if (window.innerWidth <= 786) {
    document.getElementsByClassName("xs-size")[0].style.visibility = "hidden";
  }
}
function picked(n) {
  let tie = false;
  let win = false;
  let yourPick = n;
  document.getElementsByClassName("game")[0].classList.toggle("hide");
  document.getElementsByClassName("pick")[0].classList.toggle("hide");
  document
    .getElementsByClassName("you-picked")[0]
    .children[n].classList.toggle("hide");
  let housePick = Math.floor(Math.random() * 3) + 1;

  setTimeout(() => {
    console.log(housePick);
    document.getElementsByClassName("blank")[0].classList.toggle("hide");
    document
      .getElementsByClassName("house-picked")[0]
      .children[housePick].classList.toggle("hide");

    if (yourPick === housePick) {
      tie = true;
    } else {
      switch (yourPick) {
        case 1:
          if (housePick === 2) {
            win = false;
            break;
          } else {
            win = true;
            break;
          }
        case 2:
          if (housePick === 3) {
            win = false;
            break;
          } else {
            win = true;
            break;
          }
        case 3:
          if (housePick === 1) {
            win = false;
            break;
          } else {
            win = true;
            break;
          }
        default:
          console(yourPick + "is not matched any case condition");
      }
    }
    if (tie) {
      setTimeout(() => {
        if (window.innerWidth <= 786) {
          document
            .getElementsByClassName("xs-result")[0]
            .classList.remove("hide");
        } else {
          document.getElementsByClassName("result")[0].classList.remove("hide");
        }
        document.getElementsByClassName("winloosetie")[0].innerHTML = "TIE";
        document.getElementsByClassName("winloosetie")[1].innerHTML = "TIE";
        document
          .getElementsByClassName("playagain")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("playagain")[1]
          .classList.remove("hide");
      }, 500);
    } else if (win) {
      setTimeout(() => {
        if (window.innerWidth <= 786) {
          document
            .getElementsByClassName("xs-result")[0]
            .classList.remove("hide");
        } else {
          document.getElementsByClassName("result")[0].classList.remove("hide");
        }
        document
          .getElementsByClassName("you-picked")[0]
          .children[yourPick].classList.add("win");
        document.getElementsByClassName("winloosetie")[0].innerHTML = "YOU WIN";
        document.getElementsByClassName("winloosetie")[1].innerHTML = "YOU WIN";
        document
          .getElementsByClassName("playagain")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("playagain")[1]
          .classList.remove("hide");
        points = 1 + parseInt(points);
        localStorage.points = points;
        document.getElementById("score").innerHTML = points;
      }, 500);
    } else {
      setTimeout(() => {
        if (window.innerWidth <= 786) {
          document
            .getElementsByClassName("xs-result")[0]
            .classList.remove("hide");
        } else {
          document.getElementsByClassName("result")[0].classList.remove("hide");
        }
        document
          .getElementsByClassName("house-picked")[0]
          .children[housePick].classList.add("win");
        document.getElementsByClassName("winloosetie")[0].innerHTML =
          "YOU LOOSE";
        document.getElementsByClassName("winloosetie")[1].innerHTML =
          "YOU LOOSE";
        document
          .getElementsByClassName("playagain")[0]
          .classList.remove("hide");
        document
          .getElementsByClassName("playagain")[1]
          .classList.remove("hide");
        document
          .getElementsByClassName("playagain")[0]
          .classList.add("loose-text");
        document
          .getElementsByClassName("playagain")[1]
          .classList.add("loose-text");
        points = points - 1;
        localStorage.points = points;
        document.getElementById("score").innerHTML = points;
      }, 500);
    }
  }, 1000);
  console.log(yourPick);
}
