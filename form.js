let finish = document.querySelector('#finish');
let win = document.querySelector('#win');
let button = document.querySelector('button');
let scoreOur = document.querySelector('#score');
let oponentScore = document.querySelector('#scoreOponent');
let bombers = document.querySelector('#bombers');
let archers = document.querySelector('#archers');
bombers.addEventListener('change', () => {
  let value = bombers.value;
  if (value > 0 && value < 6) {
    archers.setAttribute('max', 5 - value);
  }
});

finish.addEventListener('change', function () {
  if (this.checked) {
    win.checked = true;
    score();
  }
});

win.addEventListener('change', () => {
  score();
});
oponentScore.addEventListener('change', () => {
  score();
});

function score() {
  if (win.checked) {
    if (oponentScore.value > scoreOur.value) {
      alert(
        `We could only win by scoring more points than our opponent. You set our score to ${scoreOur.value} and their to ${oponentScore.value}.`
      );
      win.checked = false;
      finish.checked = false;
    }
  }
}
