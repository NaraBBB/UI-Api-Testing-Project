import { XMLParser } from "fast-xml-parser";

describe("API Test for Creating a Pet", () => {
  let petId;
  let petName;
  let petStatus;
  it("Should  id is usually generated automatically by the API", () => {
    const xmlPayload =
      "<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>";

    cy.api({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: xmlPayload,
      headers: {
        "Content-Type": "application/xml",
        "Accept": "application/xml",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Parse XML response
      const parser = new XMLParser();
      const jsonData = parser.parse(response.body);

      // Log the parsed response
      cy.log(JSON.stringify(jsonData));

      // Extract values from response
      petId = jsonData.Pet.id;
      petName = jsonData.Pet.name;
      petStatus = jsonData.Pet.status;

      // Assertions to verify that the API returned the expected values
      expect(petName).to.eq("doggie");
      expect(petStatus).to.eq("available");
    });
  });
});
