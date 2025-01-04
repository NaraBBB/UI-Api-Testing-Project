import axios from "axios";
import { expect } from "chai";
import { faker } from '@faker-js/faker';

describe("POST API Request Tests", () => {
    it("Should successfully create a user WITH FAKER with name and job", async () => {
       const randomFname = faker.person.firstName(); 
       const randomJobTitle = faker.person.jobTitle()

        // Perform the POST request
        const response = await axios.post('https://reqres.in/api/users', {
            name: randomFname,
            job: randomJobTitle 
        });

        // Log the response for debugging
        console.log(response.data);

        // Assertions
        expect(response.status).to.equal(201); // Ensure status code is 201 (Created)
        expect(response.data).to.have.property("name").that.equals(randomFname); // Validate name
        expect(response.data).to.have.property("job").that.equals(randomJobTitle); // Validate job
        expect(response.data).to.have.property("id"); // Ensure an ID is returned
        expect(response.data).to.have.property("createdAt"); // Ensure a timestamp is returned
     

    });

        it("Should successfully create a user WITH GIVEN name and job ", async () => {
         
            // Perform the POST request
            const response = await axios.post('https://reqres.in/api/users', 
                {
                    "name": "morpheus",
                    "job": "zion resident"
                }
            );
            // Log the response for debugging
            console.log(response.data)
            expect(response.data).to.have.property("name").equals("morpheus");
            expect(response.data.job).equal("zion resident")
        });

});
//npx mocha 