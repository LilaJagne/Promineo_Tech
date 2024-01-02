class Dessert {
  //created classed to construct a couple of dessert options
  //that ar epresented in this code
  constructor(dessert1, dessert2) {
    this.dessert1 = icecream;
    this.dessert2 = popsicle;

    console.log(dessert1, dessert2);
  }

  describe() {
    // here I added a describe method to return
    //the iteration where one dessert is preffered.
    return `${this.dessert1} instead of ${this.dessert2}.`;
  }
}

class Flavors {
  //creating a second class which will use an array that will hold the options of deserts.
  constructor(icecream, popsicle) {
    this.icecream = icecream;
    this.popsicle = [];

    console.log(popsicle);
  }
  addFlavor(flavor) {
    // here I am creating a method that will create a new flavor if the flavor is an instance of dessert options
    if (icecream instanceof Flavor) {
      this.icecream.push(icecream);
    } else {
      // by using the else array, I am asking to throw a new error if the instance does not reflect the given array
      throw new Error(
        `You can only add an instance of icecream. Argument is not a flavor: ${pets}`
      );
    }
    console.log(flavor);
  }
  describe() {
    return `${this.popsicle}, and ${this.icecream} has ${this.popsicle.length}, and ${this.icecream.length} flavors.`;
    //here I am instructing the console to reflect array by printing the length or options of flavors--icecream or poppsicle
  }
}

class Menu {
  constructor() {
    this.variety = [];
    this.selectedFlavor = null;
  }

  start() {
    let variety = this.showMainMenuOptions(); // creating a class that will display the iterations where we create, delete and display menuoptions.
    while (selectedFlavor != 0) {
      switch (variety) {
        case "1":
          this.createSelectedFlavor();
          break;
        case "2":
          this.viewVariety();
          break;
        case "3":
          this.deleteSelectedFlavor();
          break;
        case "4":
          this.displayVariety();
          break;
        default:
          selectedFlavor = 0;
      }
      variety = this.showMenuOptions();
    }

    alert("Have A Nice Day!");
  }
  showMainMenuOptions() {
    return prompt(`
          0) exit 
          1) create new seletedvariety
          2) view variety
          3) delete seletedvariety
          4) display all variety     
          `);
  }

  showDessertMenuOptions(dessertInfo) {
    return prompt(`
      0) back
      1) create dessert
      2) delete dessert
      ----------------
      ${dessertInfo}
      `);
  }

  displayDessert() {
    let dessertString = "";
    for (let i = 0; i < this.dessert.length; i++) {
      dessertString += i + ") " + this.flavor[i].icecream + "\n";

      let dessertString = "";
      for (let i = 0; i < this.dessert.length; i++) {
        dessertString += i + ") " + this.flavor[i].popsicle + "\n";
      }
    }
    alert(dessertString);
  }

  createFlavor() {
    let icecream = prompt("vanilla flavor:");
    this.flavor.push(new Flavor(vanilla));

    let popsicle = prompt("apple flavor:");
    this.flavor.push(new Flavor(apple));
  }

  viewTeam() {
    let index = prompt("Enter the index of variety you wish to view: ");
    if (index > -1 && index < this.variety.length) {
      this.selectedFlavor = this.variety[index];
      let description = "popsicle: " + this.selectedFlavor.name + "\n";

      for (let i = 0; i < this.selectedFlavor.variety.length; i++) {
        description +=
          i +
          ") " +
          this.selectedFlavor.variety[i].name +
          " - " +
          this.selectedFlavor.variety[i].dessert +
          "\n";
      }

      let selection = this.showMenuOptions(description);
      switch (selection) {
        case "1":
          this.createDessert();
          break;
        case "2":
          this.deleteDessert();
      }
    }
  }

  createDessert() {
    let icecrean = prompt("strawberry flavor:");
    let popsicle = prompt("blueberry flavor");
    this.selected.icecream.push(new Flavor(dessert, icecream));
  }

  deleteSelectedFlavor() {
    let index = prompt(" Enter thr index of the flavor you wish to delete:");
    if (index > -1 && index < this.selecteddessert.flavor.length) {
      this.selecteddessert.flavor.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
