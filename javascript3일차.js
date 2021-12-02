// 재귀함수
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1

function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1

function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'
// 다시 위로 올라가는 과정이 있음을 생각

// 콤마찍기
function comma(text) {
    text += ''
    if(text.length <= 3) {
        return text
    }
    return comma(text.slice(0, text.length-3)) + ',' + text.slice(text.length - 3);
}

// 1, 1, 2, 3, 5, 8, 13, 21
function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!! 메모리 효율이 급격히 떨어지기 시작
// fib(2) == 2

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
    // in은 인덱스!! n이 1, 0이 되기 전가지는 fibo_cache에 저장된 값이 없으니까 통과한다
    if (n in fibo_cache) {
        return fibo_cache[n]
    }
    fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
    return fibo_cache[n]
}
// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 1

// 이것이 맞다고 함... 나중에 확인
// (n <= 2)
// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 2
// console.log(fib(3)); // 3
// (n <= 1)
// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2

// 즉시 실행 함수 변수가 함수 안에서만 쓰이고 휘발되기 때문에(function scope) 메모리 절약 가능(메모리효율)
// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 바깥에서 실행했을 때 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// map
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

console.log(data.map(x => x.중간고사점수))
console.log(data.map(x => [x.이름,x.중간고사점수]))

let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newData = data.map(a => a.map(n => n * 2));
console.log(newData)
// (3) [Array(3), Array(3), Array(3)]
// 0: (3) [2, 4, 6]
// 1: (3) [8, 10, 12]
// 2: (3) [14, 16, 18]

// filter
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
let result = x.filter( z => z > 5);
console.log(result);

let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}];


// 1번 남자인 사람
회원정보.filter(el => el.성별 === '남');

// 2번 남자이면서 2021년도에 가입한 사람
// 2.1
회원정보.filter(el => el.성별 === '남' && el.가입연도.split('-')[0] === '2021');
// 2.2
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0, 4) === '2021');

// 3번 아이디가 jjang인 사람
// filter와 finde의 차이: filter는 전체를 다 훑지만 find는 찾으면 즉시 멈춘다 즉, 메모리 효율에서 더 좋다!
회원정보.find(user => user.아이디 === 'jjang');

// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
id : 1,
title : 'title1',
content : 'content1',
section : '일상'
}, {
id : 2,
title : 'title2',
content : 'content2',
section : '취미'
}, {
id : 3,
title : 'title3',
content : 'content3',
section : '개발'
}, {
id : 4,
title : 'title4',
content : 'content4',
section : '개발'
}];

// 개발이라는 키워드를 검색했을 때? 참이면 : 거짓이면;
let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;

// map과 set
// 우선 알고 있어야할 것 이렇게 만들어주는 것 뿐!
let n = new Number(5);
let a = new Array([1, 2, 3]);
let m = new Map();