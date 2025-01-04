import axios from "axios";
import { expect } from "chai";

describe("GET API Request Tests", () => {
    it("Should fetch the user list for page 2 with correct metadata", async () => {
        // Perform the GET request
        const response = await axios.get('https://reqres.in/api/users?page=2');
        const { data, page, per_page, total, total_pages } = response.data;

        // Log the response for debugging purposes
        console.log(response.data);

        // Assertions
        expect(response.status).to.equal(200); // Validate HTTP status code
        expect(page).to.equal(2); // Validate page number
        expect(per_page).to.equal(6); // Validate the number of users per page
        expect(data).to.be.an("array").that.is.not.empty; // Ensure the user list is an array and not empty
        expect(total).to.be.a("number").that.is.greaterThan(0); // Ensure total users exist
        expect(total_pages).to.be.a("number").that.is.greaterThan(0); // Validate total pages
    });
});

        // expect(getRequest.data.page).equal(1);
        // expect(getRequest.data.per_page).equal(6)
   
//npx mocha 