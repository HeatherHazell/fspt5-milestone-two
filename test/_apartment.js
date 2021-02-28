const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment(10);
  });
});
describe("Apartment", () => {
  expect(apartment.aptSummary()).to.equal(
    this.heightSummary() + `It is an Appartment with ${this.floors} floors`
  );
});
