// utils/dataGenerator.js
import { faker } from "@faker-js/faker";


function generateUserData() {
  return {
    email: faker.internet.email(),
    password: faker.string.uuid(),
    // firstName: faker.person.firstName(),
    // lastName: faker.person.lastName(),
  };
}

export default new generateUserData;


//https://opensource-demo.orangehrmlive.com/web/index.php/auth/login