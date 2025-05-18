// let btn1 = document.querySelector('#first');
// let btn2 = document.querySelector('#second');
// let btn3 = document.querySelector('#third');

function HelloWorld() {
    console.log('Hello, World!')
}

// btn1.addEventListener('click', HelloWorld);
// btn2.addEventListener('click', HelloWorld);
// btn3.addEventListener('click', HelloWorld);

let btns = document.querySelectorAll('.nums');

for (let btn of btns) {
    btn.addEventListener('click', function () {
        btn.textContent = Number(btn.textContent) + 1;
    })
};

let displayer = document.querySelector('.displayer');
let stealth = document.querySelector('.stealth');

displayer.addEventListener('click', function () {
    if (displayer.textContent == "Отобразить") {
        stealth.className = 'example beauty';
        displayer.textContent = "Скрыть";
    }else{
        stealth.className = 'example stealth';
        displayer.textContent = "Отобразить";
    }
})

stealth.addEventListener('click', function () {
    for (let btn of btns) {
        btn.textContent = Number(btn.textContent) + 1000;
    };
})