// 원시자료형 = 값 복사
// 객체자료형 = 값 참조 (= 참조자료형) 값을 가리킨다!

// 객체는 클래스의 인스턴스이다
// '객체'와 '객체자료형'은 다른 것이다! 자바스크립트의 모든 것은 객체이다

// 클로져 closure
// : 테크닉. 폐쇄된 공간 (ex 함수 스코프) 의 데이터에 접근하기 위한 테크닉
function myFunction(){

    var val1 = "hello";
    
    return {getVal1 : function(){return val1}}
}

let result = myFunction();
// 'hello'

// 변수 혼동을 줄이기 위해, 변수를 보호하기 위해 함수로 감싸준 것! 

// 랜덤함수
Math.random();
// 0이상 1미만 숫자를 반환
Math.random()*10;
// 정수로 바꿔
Math.floor(Math.random()*10);
// 소수점 이하는 x.에 영향을 미치면 안되기 때문에 floor를 사용해서 버림
Math.floor(Math.random()*5);
// 5미만만 반환
Math.floor(Math.random()*5+2);
// 2이상 7미만 반환을 원한 것이지만 5+2가 되어서 최대값이 7이 되어버림 
function randomNum(min, max){
    return Math.floor(Math.random()*(max)+min);
}
// 그래서~ 맥스에 미니멈을 빼준다!
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

// || : 마지막 폴시(falsy) 값 혹은 처음 만난 투루시(truthy) 값을 반환합니다.
// && : 마지막 투루시(truthy) 값 혹은 처음 만난 마지막 폴시(falsy) 값을 반환합니다.

