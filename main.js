const buttonStart = document.body.querySelector(".start");
const buttonReset = document.body.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0; // setne sekundy
let active = false;
let idInterval;

const startClock = () => {
    if (!active) {
        buttonStart.textContent = "Pauza";
        idInterval = setInterval(start, 10);

    } else {
        buttonStart.textContent = "Start";
        clearInterval(idInterval)
    }
    active = !active;
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const resetClock = () => {
    time = 0;
    panel.textContent = "---";
    clearInterval(idInterval)
    buttonStart.textContent = "Start";
    active = false;
}

buttonStart.addEventListener("click", startClock);
buttonReset.addEventListener("click", resetClock);