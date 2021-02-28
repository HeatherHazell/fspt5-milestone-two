/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/
//create a class named building
class Building {
  constructor(height, unit) {
    //add two properites
    this.height = height;
    this.unit = unit;
    if (unit !== `feet`) {
      return "Unsupported Unit";
    }
  }
  //add two methods
  heightInches() {
    if (this.unit == `feet`) {
      return this.height * 12;
    }
  }
  heightSummary() {
    return `This building is ${this.height} ${this.unit} tall.`;
  }
}

// const building = new Building(600, `feet`)
// console.log(building.heightSummary())

module.exports = Building;
