class SelectesFileUploadPage{

    get uploadFile(){return cy.get('#file-upload')}
}
export default new SelectesFileUploadPage()