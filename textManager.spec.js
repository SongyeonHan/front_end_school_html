describe('텍스트 관리자입니다.', () => {

    let textManager;
    // beforEach: it 함수 호출 직전에 실행
    beforeEach(() => {
        textManager = new TextManager();
    })

    it ('텍스트 값을 전달합니다.', () => {
        // beforeEach로 리팩토링
        // const textManager = new TextManager();
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    it ('텍스트 값을 수정합니다.', () => {
        // const textManager = new TextManager();
        const newText = {data: 'Hello Zebras'};
        textManager.setValue(newText);

        expect(textManager.getValue()).toBe(newText.data);
    })
})