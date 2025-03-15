import { XMLParser } from "fast-xml-parser";

describe("API Test with XML Response", () => {
  const xmlPayload =
    "<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>string</name> 	</Category> 	<name>doggie</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>";

  let petId;
  it("CREATING PET", () => {
    cy.api({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: xmlPayload,
      headers: {
        "Content-Type": "application/xml",
        "accept": "application/xml",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Parse XML response
      const parser = new XMLParser();
      const jsonData = parser.parse(response.body);
      petId = jsonData.Pet.id;
    });
  });
});
