let btns = document.querySelectorAll('.nums');
let exampleTimeOutID;
let displayer = document.querySelector('.displayer');
let stealth = document.querySelector('.stealth');
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');

function displayOff() {
    stealth.className = 'example stealth';
}

// for (let btn of btns) {
//     btn.addEventListener('click', function () {
//         btn.textContent = Number(btn.textContent) + 1;
//     });
// };

first.addEventListener('click', function () {
    first.textContent = Number(first.textContent) + 1;
});

second.addEventListener('click', function () {
    first.textContent = Number(first.textContent) + 10;
    second.textContent = Number(second.textContent) + 10;
});

third.addEventListener('click', function () {
    first.textContent = Number(first.textContent) + 100;
    second.textContent = Number(second.textContent) + 100;
    third.textContent = Number(third.textContent) + 100;
});

displayer.addEventListener('click', function () {
    if (displayer.textContent == "Отобразить") {
        stealth.className = 'example beauty animate__animated animate__zoomInRight';
        displayer.textContent = "Скрыть";
    }else{
        stealth.className = 'example beauty animate__animated animate__zoomOutRight';
        setTimeout(displayOff, 1000);
        displayer.textContent = "Отобразить";
    };
});

stealth.addEventListener('click', function () {
    for (let btn of btns) {
        btn.textContent = Number(btn.textContent) + 1000;
    };
});