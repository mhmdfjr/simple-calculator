
// Deklarasi Variabel
let currentInput = document.querySelector(`.current-input`);
let answerScreen = document.querySelector(`.answer-screen`);
let buttons = document.querySelectorAll(`.button`);
let erasebtn = document.querySelector(`#erase`);
let clearbtn = document.querySelector(`#clear`);
let evaluate = document.querySelector(`#evaluate`);
let realTimeScreenValue = []

// Clear Button
clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [``];
    answerScreen.innerHTML = 0;
    currentInput.className = `current-input`;
    answerScreen.className = `answer-screen`;
    answerScreen.getElementsByClassName.color = rgba(150, 150, 150, 0.8);
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match(`erase`)) {
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join(``);
            if (btn.classList.contains(`num-btn`)) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(``));
            }
        }
        
        if(btn.id.match(`erase`))  {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join(``);
            answerScreen.innerHTML =  eval(realTimeScreenValue.join(``));
        }
        
        if(btn.id.match(`evaluate`)) {
            currentInput.className = `answer-screen`;
            answerScreen.className = `current-input`;
            answerScreen.style.color = "white";
        }
        
        if(typeof eval(realTimeScreenValue.join('')) == `undefined`) {
            answerScreen.innerHTML = 0
        }
        
    })
})