import selectFileUploadPage from "../pages/selectFileUpload.page";

describe("File uplaod tests", () => {
  beforeEach(function () {
    cy.visit("/index.html");
  });

  it("Successfully uploaded image", () => {
selectFileUploadPage.uploadFile.selectFile('cypress/fixtures/imageForUpload.webp');

//first way to vaidate uploaded file was successfully selected(USING FULL PATH WITH FAKERPATH)
selectFileUploadPage.uploadFile.should('have.value', 'C:\\fakepath\\imageForUpload.webp' )

//SECOND WAY TO VALIDATE UPLOADED FILE SUCCESSFULLY SELECTED (USING INVOKE('VAL) COMMAND)
selectFileUploadPage.uploadFile.invoke('val').should('include', 'imageForUpload.webp')
  });
});
