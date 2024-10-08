const start = document.querySelector(".start");
const message = document.querySelector("p");
const reset = document.querySelector(".reset");
const boxes = document.querySelectorAll(".boxes");
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnX = true;

function checkWinning() {
  for (const winner of winningCondition) {
    const pos1 = boxes[winner[0]].innerText;
    const pos2 = boxes[winner[1]].innerText;
    const pos3 = boxes[winner[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        message.innerText = `Winner is ${pos1}`;
      }
    }
  }
}

start.addEventListener("click", () => {
  message.style.display = "block";
  start.style.display = "none";
  reset.style.display = "block";
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnX) {
        box.innerText = "X";
        turnX = false;
      } else {
        box.innerText = "O";
        turnX = true;
      }
      box.disabled = true;
      checkWinning();
    });
  });
});

reset.addEventListener("click", () => {
  message.style.display = "none";
  start.style.display = "block";
  reset.style.display = "none";

  boxes.forEach((box)=>{
    box.innerText = "";
    box.disabled = "false";
  })
});
