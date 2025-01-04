
//! DELETING EXISTING USER

import axios from "axios";
import { expect } from "chai";

describe("DELETE API Request Tests", () => {

    it("SHOUDL BE ABLE TO DELETE A USER", async()=>{
const deleteResponse = await axios.delete("https://reqres.in/api/users/2")// end bid user 2-g delete hiij bna

console.log(deleteResponse.data);

expect(deleteResponse.status).equal(204)
})
    })


