describe('로또 당첨 조회', () => {
  Cypress.Commands.add('input', (price) => {
    cy.get('.lotto-price-input').type(price);
  });

  Cypress.Commands.add('submit', () => {
    cy.get('form').contains('확인').click();
  });

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.input(50000);
    cy.submit();
  });

  it('중복된 값이 입력되어있을 때 "로또 번호에는 중복된 숫자를 입력할 수 없습니다." 알림', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('.winning-number').each(($input, index) => {
      cy.get($input).type(`0${index + 1}`);
    });

    cy.get('.bonus-number').type(6);
    cy.get('form')
      .contains('결과 확인하기')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('로또 번호에는 중복된 숫자를 입력할 수 없습니다.');
      });
  });

  it('결과 확인하기 버튼 클릭 시 모달 창 출력', () => {});

  it('다시 하기 버튼을 클릭했을 때 초기화', () => {});
});
