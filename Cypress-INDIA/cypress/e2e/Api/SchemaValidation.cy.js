const Ajv = require("ajv");
const ajv = new Ajv();
describe("Schema validation", () => {
  it("schema validation against response", () => {
    cy.api({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then((response) => {
      const mySchema = {
        $schema: "http://json-schema.org/draft-07/schema#",
        title: "Generated schema for Root",
        type: "array",
        properties: {
          id: {
            type: "number",
          },
          title: {
            type: "string",
          },
          price: {
            type: "number",
          },
          description: {
            type: "string",
          },
          category: {
            type: "string",
          },
          image: {
            type: "string",
          },
          rating: {
            type: "object",
            properties: {
              rate: {
                type: "number",
              },
              count: {
                type: "number",
              },
            },
            required: ["rate", "count"],
          },
        },
        required: [
          "id",
          "title",
          "price",
          "description",
          "category",
          "image",
          "rating",
        ],
      }; //!SCHEMA ENDS HERE
      const validate = ajv.compile(mySchema);
      const isValid = validate(response.body);
      if (!isValid) {
        console.log("Schema validation errors:", validate.errors);
      }
      expect(isValid).to.be.true;
      expect(isValid).to.be.true;
    });
  });
});
