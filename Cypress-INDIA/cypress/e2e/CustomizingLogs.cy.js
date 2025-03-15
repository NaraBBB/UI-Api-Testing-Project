describe('My Log Test', () => {
    it('Here the log magic happens!', () => {
        cy.visit('https://www.markdownguide.org/cheat-sheet/');
        cy.log('This is a log message');
        cy.log('**This is a BOLD message**');
        cy.log('*This is a bit Italic text*');
        cy.log('That is so funny! 😄');
        cy.log('[Link to issue](http://example.com)');
    });
});
