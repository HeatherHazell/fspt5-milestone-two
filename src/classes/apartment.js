/*------------------
NOTE: Do not work on this class until
after you have completed the Building class!

You will be equally evaluated on the
quality of tests you write for this!

1. A class named Apartment has been created, exported, and imported into the test file. 
2. Add the proper code so that this class
extends the Building class. Test it!
3. Add one additional property (your choice) to Apartment and test it.
4. Add one additional method (your choice) to Apartment and test it.
------------------*/

const Building = require("./building");
//add property code so this class extends the Building class
class Apartment extends Building {
  constructor(floors) {
    super(height, unit);
    this.floors = floors;
    this.height = 10 * floors;
    this.unit = `feet`;
  }
  aptSummary() {
    return (
      this.heightSummary() + `It is an Appartment with ${this.floors} floors`
    );
  }
}

// apt = new Apartment(10)
// console.log(apt.aptSummary())

module.exports = Apartment;
