const TextManager = (() => {
    // 여기서 value 의 값을 객체가 아니라 원시값으로 만들면 값공유가 불가능합니다.
    let value = {data: 'Hello Lions'};

    function innerTextManager(){}

    innerTextManager.prototype.getValue = function(){
        return value.data;
    }

    innerTextManager.prototype.setValue = function(newValue){
        value = newValue;
    }

    return innerTextManager;
})();
