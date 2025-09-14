let user = 0;
let comp = 0;
let choices = document.querySelectorAll(".choices");
let userscr = document.getElementById("user");
let compscr = document.getElementById("comp");
let msg = document.querySelector(".msg");

let compcho = () => {
  let options = ["Rock", "Scissors", "Paper"];
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
};
let draw = () => {
  msg.innerHTML = "<p>Draw!!</p>";
  // msg.innerText = "Draw!!";
  msg.style.backgroundColor = "black";
};
const showwin = (userwin, userch, compch) => {
  if (userwin) {
    user++;
    userscr.innerText = user;
    // msg.innerText = `You Win ${userch} beats ${compch}`;
    msg.innerHTML = `<p>You Win!! ${userch} beats ${compch}</p>`;
    msg.style.backgroundColor = "green";
  } else {
    comp++;
    compscr.innerText = comp;
    msg.style.backgroundColor = "red";
    // msg.innerText = `You Lose ${compch} beats ${userch}`;
    msg.innerHTML = `<p>You Lose!! ${compch} beats ${userch}</p>`;
  }
};

const playgm = (userch) => {
  let compch = compcho();
  if (compch === userch) {
    draw();
    return;
  } else {
    let userwin = true;
    if (userch === "Rock") {
      userwin = compch === "Paper" ? false : true;
    } else if (userch === "Paper") {
      userwin = compch === "Scissors" ? false : true;
    } else {
      userwin = compch === "Rock" ? false : true;
    }
    showwin(userwin, userch, compch);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userch = choice.getAttribute("id");
    playgm(userch);
  });
});
