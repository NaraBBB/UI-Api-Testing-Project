

describe("Testing then() command", () => {
    beforeEach(function () {
      cy.visit("/index.html");
    });

    it('Юмыг дуусгаж хариуг нь авсны дараа би ямар нэг юм хийхийг хүсч байна" гэсэн логикыг хангана.', ()=>{
        cy.get('#timestamp').then((inputBoxElement)=>{
            const value = inputBoxElement[0].innerText //Энэ нь JavaScript-д DOM (Document Object Model)-оос авсан элементүүдийн жагсаалт эсвэл массив (Array) байх болно.
            cy.get('#code').type(value)

            cy.contains('button', 'Submit').click()

            cy.contains('span', "Congrats! You've entered the correct code.").should('be.visible')
        })
    })
})