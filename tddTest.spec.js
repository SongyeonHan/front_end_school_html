// 테스트 유닛들의 모음
describe('자스민 테스트', () => {
    // 테스트 유닛
    it('덧셈을 하는 함수', () => {
        let num = 10;

        // 실행할 함수의 결과 값을 인수로 전달
        expect(plusOne(num)).toBe(num + 1);
    })
})