// 객체지향

// 객체를 반환하는 함수: 이름 첫글자 대문자로 작성
// 1. 모듈패턴 (값을 은닉하기 위해 사용)
function Person(){
    
    let age = 35;

    return{
        getAge: function(){return age},
        setAge: function(data){age = data}
    }
}

const person = Person();
person.getAge();
// 답 35

// 2. 사용자 정의 타입 패턴 class 이전 기법 생성자 함수 (값을 은닉할 수는 없음)
function PersonType(){
    this.age = 35;
}

PersonType.prototype.getAge = function(){
    return this.age
}

const instancePerson = new PersonType();
instancePerson.getAge();
// 답 35