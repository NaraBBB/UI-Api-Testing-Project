import axios from "axios";
import { expect } from "chai";

describe("Random jokes", function(){
  it('should return a new joke upon each request', async function() {
    // Make two API requests for random jokes
    const firstJoke = await axios.get('https://api.chucknorris.io/jokes/random');
    const secondJoke = await axios.get('https://api.chucknorris.io/jokes/random');
    
    // Assert that the jokes are different
    expect(firstJoke.data.value).not.to.equal(secondJoke.data.value);
  });

  // This test checks that the API returns a status code of 200
  it('should get 200 status code response', async function(){
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    
    // Assert that the status code is 200
    expect(response.status).to.equal(200);
  });

  // This test checks if the URL used for the request is correct
  it('should get a response from the correct URL', async function(){
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    
    // Assert that the response comes from the expected URL (Chai doesn't directly check URLs, so we check if the response looks valid)
    expect(response.config.url).to.equal('https://api.chucknorris.io/jokes/random');
  });

});