const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building(600, `feet`);
  });
  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });
    it("should have properties for hieght and unit", () => {
      expect(building.hasOwnProperty("height")).to.equal(true);
      expect(building.hasOwnProperty("unit")).to.equal(true);
    });
    it(`should have methods to convert height in feet, to hieght in inches`, () => {
      expect(Building.prototype.heightInches).to.exist;
    });
    it(`should give a summary of the buildings height`, () => {
      expect(Building.prototype.heightSummary).to.exist;
    });
  });
});
