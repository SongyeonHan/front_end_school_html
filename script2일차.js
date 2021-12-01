// string의 평균 값
let s = '5, 4, 10, 2, 5';
let splistS = s.split(',');
console.log(splistS);
// (5) ['5', ' 4', ' 10', ' 2', ' 5']

let 합계 = 0;

for (let i of splistS) {
    합계 += parseInt(i);
}
console.log(합계/splistS.length);

// array 각 자리수의 합
let data = [11, 22, 33, 111, 2];
let data2 = data + '';
// '11,22,33,111,2' 배열을 문자열로 바꿔준다
let data3 = data2.replace(/,/g,'');
// '1122331112' 문자열에서 , 를 빼준다
let 합계 = 0;

for (let i of data3){
    합계 += parseInt(i);
}
console.log(합계);

// 배열을 생성하는 여러가지 방법
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');

// Array 배열에서는 호출해서 바꿀 수 있지만 String 문자열에서는 바꿀 수 없다
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
과일[0] = '한라봉';
console.log(과일);
// (5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
let 사과 = 'apple';
사과[0] = 'b';
console.log(사과);
// apple

// 다차원배열에서 평균구하기
let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

let 총합 = 0;
let 더해진수 = 0;

for(let i=0; i < 2; i++){
    for(let j=0; j < 5; j++){
        총합 += 전교점수[0][i][j];
        더해진수++;
    }   
}
console.log(총합/더해진수)

// 배열 합치기
let 과일 = ['복숭아', '딸기', '바나나'];
let 제주과일 = ['귤', '한라봉', '천혜향'];

과일.concat(제주과일);
// ['복숭아', '딸기', '바나나', '귤', '한라봉', '천혜향']

// 배열 사전식으로 정리하기
let data = [10, 20, 30, 11, 22, 33];
data.sort()
// [10, 11, 20, 22, 30, 33]

// 배열 역순으로 정리하기
let data = [10, 20, 30, 11, 22, 33];
data.reverse()
[33, 22, 11, 30, 20, 10]

// 그렇다면 sort 해주고 난 후에 recerse를 하면 '역+정렬'이 된다!

// 
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    k += 10;
    console.log(k)
}
viewk() 
changek()
viewk()
// 10 20 20 여기서 k는 맨위의 k를 재할당

let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()
// 10 20 10 여기서 k는 맨위의 k와 다른 새롭게 선언된 k 

// Parameter 매개변수: 함수와 메서드 입력변수명 (선언)
// Argument 인자: 함수와 메서드 입력 값 (실행)
// ex) 파라미터: x,y 아규먼트: 10, 20

// 함수에서 default 값 설정
function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);
30
add(10);
210
add();
300
add(undefined,300);
400

// 호...이스팅...
console.log(add1(10, 20));
console.log(add2(10, 20));
// 호이스팅 되어서 위로 올라갑니다!
function add1(x, y) {
    return x + y;
}

console.log(mul(10, 20));
let mul = function (a, b) {
    return a * b;
}

function add2(x, y) {
    return x + y;
}

// 선언식 : function fname ( params ){} -> 호이스팅 O
// 표현식 : let fname = function (){} -> 호이스팅 X
// 호출식 : fname();