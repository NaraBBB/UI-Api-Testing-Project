import { expect } from 'chai'; // Correctly import `expect`
import HelperPage from '/helper.methods'



describe('Random jokes', () => {
    it('should return a new joke upon each request', async () => {
        const response1 = await HelperPage.getRandomJoke();
        const response2 = await HelperPage.getRandomJoke();

        // Assert the status code is 200
        expect(response1.status).to.equal(200); // Correctly access the status
        expect(response2.status).to.equal(200);

        // Assert the jokes are different
        expect(response1.data.value).to.not.equal(response2.data.value);
    });

    it('should get 200 status code response', async () => {
        const response = await HelperPage.getRandomJoke();

        // Assert the status code is 200
        expect(response.status).to.equal(200); // Correctly access the status
    });
});
