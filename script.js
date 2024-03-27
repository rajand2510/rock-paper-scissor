let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let newdiv=document.querySelector("#newdiv");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

let pl1 = document.querySelector("#pl1");
let pl2 = document.querySelector("#pl2");
let result = document.querySelector("#result");

pl1.innerText = 0;
pl2.innerText = 0;

function applyStylesToElement(element,bgColor) {
    element.style.backgroundColor = bgColor; 
}
function whoWin(pla1, pla2) {
    if ((pla1 == "Rock" && pla2 == "Scissor") || (pla1 == "Paper" && pla2 == "Rock") || (pla1 == "Scissor" && pla2 == "Paper")) {
        pl1.innerText = parseInt(pl1.innerText) + 1; // Increment pl1's score
        result.innerHTML = `<p>You Select <b>${pla1}</b> computer Select <b>${pla2}</b><p>`;
        newdiv.innerHTML="<p>You Win!!</P>";
        applyStylesToElement(newdiv,"green");
       
    } else if ((pla1 == "Rock" && pla2 == "Paper") || (pla1 == "Paper" && pla2 == "Scissor") || (pla1 == "Scissor" && pla2 == "Rock")) {
        pl2.innerText = parseInt(pl2.innerText) + 1; // Increment pl2's score
        result.innerHTML = `<p>You Select <b>${pla1}</b> computer Select <b>${pla2}</b><p>`;
        newdiv.innerHTML="<p>You lose!!</P>";
        applyStylesToElement(newdiv,"red");
    } else {
        result.innerHTML = `<p>You Select <b>${pla1}</b> computer Select <b>${pla2}</b><p>`;
        newdiv.innerHTML = "<p>Draw</p>";
        applyStylesToElement(newdiv,"grey"); 
    }
}

rock.addEventListener("click", () => {
    let you = "Rock";
    let computer = getComputerChoice();
    whoWin(you, computer);
});

paper.addEventListener("click",()=>{
    let you="Paper";
    let computer = getComputerChoice();
    whoWin(you,computer);
});
//
scissor.addEventListener("click",()=>{
   let you="Scissor";
   let computer = getComputerChoice();
   whoWin(you,computer);
});

