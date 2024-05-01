// получаем элементы с которыми будем работать

const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const total = document.getElementById("count");

// создаем функцию которая будет генерировать целые числа в заданном диапозоне
function getRandomInt(start, end){
    return Math.floor(Math.random() * (start - end + 1)) + start;
}

// получаем целое число
const randomInt = Math.abs(getRandomInt(1, 100));
console.log(randomInt);

// счетчик попыток
let count = 0;


// обработка действия по нажатию на кнопку
submit.addEventListener('click', ()=>{
    if (answer.value == randomInt){
        result.innerHTML = "<h3>Ты угадал число!</h3>";
    }else if (answer.value > randomInt){
        result.innerHTML = "<h3>Много</h3>";
        count++;
    }else if (answer.value < randomInt){
        result.innerHTML = "<h3>Мало</h3>";
        count++;
    }
    total.innerHTML = `<h4>Количество попыток = ${count}</h4>`;
});