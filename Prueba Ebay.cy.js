describe('Búsqueda y oferta en eBay', () => {
  it('debería buscar, filtrar y hacer una oferta', () => {
    cy.visit('https://www.catawiki.com/en')
    //Aceptar las cookies
    cy.get('.udJCGCMln7r0fWrosDqD').first().click();
    cy.get('.fe-cookie-form').contains('Save cookie settings').click();

    //Iniciar sesión
    cy.get('[data-react-component-assets="LoggedOutMenu"] > :nth-child(1) > .u-hide-s').click();
    cy.get('.u-flex--align-items-start > :nth-child(1) > .c-text-field__wrapper > .c-text-field__input-wrapper').type('jorgevg0994@gmail.com');
    cy.get(':nth-child(2) > .c-text-field__wrapper > .c-text-field__input-wrapper').type('Jmax0052**');
    cy.get('.u-p-xl').contains('Sign in').click();

    
    //Buscar el producto deseado
    cy.get('[data-react-component-assets="Search"] > .c-search-field > :nth-child(2) > .c-text-field > .c-text-field__wrapper').type('Gameboy{enter}')
    cy.contains('Nintendo - Gameboy Color - lime green - Video game console + games - With reprobox').should('be.visible').click({force: true});
    
    // Hacer una oferta mayor a la actual de forma automatica
    cy.get('.LotBidStatusSection_bid-amount__bWWF4.u-typography-h2').invoke('text').then((price) => {
      const priceValue = parseFloat(price.replace(/[^0-9.]/g, ''));
      const bidAmount = priceValue + 10;
      cy.get('#field«rf»').type(bidAmount.toString());
      cy.get(':nth-child(1) > .LotCoreBiddingPanel_container__w0OHt > .u-g-xxl-2 > .LotBiddingBlock_actions__REkgT > :nth-child(2) > [data-sentry-component="LotBidActions"] > form > .u-flex > .LotBid_buttons-block__6twhx > .c-button--secondary > .c-button__overlay').click();
    })



  }  
)}
)