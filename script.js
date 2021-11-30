// for of 와 for in 의 차이
let array = [10, 20, 30, 40, 50];

for (let value of array) {
    console.log(value);
}
for (let value in array){
    console.log(value);
}

// 평균 구하기
let result = 0;
let array = [10, 20, 30, 40, 50];

for (let value of array) {
    result += value;
}
console.log(result/array.length);

// 1-100 짝수의 합 구하기
let result = 0;
let i = 0;

while (i <= 100){
    result += i;
    i += 2;
}

console.log(result);

// 일단 do 한다 while 이 실행되는 동안
let num = 0;

do {
    console.log(num);
    num += 1;
} while (num < 11);

// for 문으로 구구단 만들기
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        document.write(`${i} X ${j} = ${i*j} <br>`);
    }
}

// while 문으로 구구단 만들기
let i = 2;
let j = 1;

while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    i++;
    // j를 다시 1로 초기화해주지 않으면 2단까지 밖에 안나옴 j가 9에서 끝나버리기 때문
    j = 1;
}

// 5단까지만 출력하기
let i = 2;
let j = 1;

while (i < 10){
    if (i == 6){
        break;
    }
    while (j < 10){
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    i++;
    j = 1;
}

// n*5 까지만 출력하기
let i = 2;
let j = 1;

while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i*j}`);
        if (j == 5){
            break;
        }
        j++;
    }
    i++;
    j = 1;
}

// let과 var의 차이
// 된다
var i = 3;
var i = 5;
var i = 7;
// 안된다
let i = 3;
let i = 5;
let i = 7;

// 선언과 할당의 차이 분명히하기
// 재선언
var a = 10;
var a = 20;
// 재할당
var a = 10;
    a = 20;
    // 재할당 여부는 var,let 과 const의 차이다 즉 재할당은 var, let 모두 가능 재선언에서 차이가 있는 것

// continue 는 아래 코드를 실행시키지 않기 때문에 log에 5가 빠진 채로 결과가 나옴
for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// 콜백함수? 함수의 이름을 전달하는 함수
function add(x, y) {
    return x + y;
}
function mul(x, y) {
    return x * y;
}
function cal (a, b){
    return a(10, 10) + b(10, 10);
}
cal(add, mul);


// 문자열 뒤집기

let s = 'Hello world';
let temp = '';

for (let i = 0; i <= 10; i++) {
    // temp를 뒤에 더해줌으로써 먼저 출력된 글자가 뒤로 밀리게
    temp = s[i] + temp;
}