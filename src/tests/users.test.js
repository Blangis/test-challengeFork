// You already have the methods imported
/*
import { default as expect } from "expect";
import { getUser, getUsers, getUsuario } from "../users";
*/

const users = require("../data.js");

const expect = require("expect").default;
const { 
    getUser,
    getUsers,
    getUsuario,
} = require("../users.js");


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe("getUser", () => {
    it("It should retrieve the correct user for a given ID", async () => {
        const user = users[0];
        expect(getUsuario(1)).toEqual(user); 
    });
    it("It should retrieve the correct data for a given ID", async () =>{
        const userId = 1;
        const expectedUser ={
            id: 1,
            username: "hpLover4",
            email: "sirious90@gmail.com",
            password: "hArrydotCom",

        };
        const user = await getUser(userId);
        expect(user).toEqual(expectedUser);

    });
    it("should return an error for an invalid ID", async () => {
        const fakeID= 8;

        try {
            await getUser(fakeID);
            fail("getUser should throw a mistake for invalid ID");
        } catch (error) {
            expect(error.message).toBe("User not found");
        }
    });

});
