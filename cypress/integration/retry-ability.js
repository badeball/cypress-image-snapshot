it('should retry snapshot matching until it succeeds', () => {
  cy.visit('./animation.html');
  cy.get('body > div').matchImageSnapshot();
});
