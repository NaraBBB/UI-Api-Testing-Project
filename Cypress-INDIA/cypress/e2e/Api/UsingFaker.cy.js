
import { faker } from '@faker-js/faker';

describe("API Testing with Faker Data", () => {
    it("Should create a new user with a manually assigned ID", () => {
      const fakeId = faker.string.uuid(); // Generate a UUID for the ID
      const fakeStatus = faker.helpers.arrayElement(["active", "inactive", "pending"]);
      
        cy.request("POST", "https://jsonplaceholder.typicode.com/users", {
        //  id: fakeId,  // Manually assigning an ID
          name: faker.person.fullName(),
          email: faker.internet.email(),
          status: fakeStatus,
        }).then((response) => {
          expect(response.status).to.eq(201);
      
          // JSONPlaceholder ignores sent ID, so check if an ID exists
          expect(response.body).to.have.property("id").and.to.be.a("number");
          // Validate status
          expect(response.body).to.have.property("status", fakeStatus);
         
        });
      });
      
    
  });
  
  
