class TypesOfTea {
    constructor(teaname, type) {
        this.teaname = teaname;
        this.type = type;
    }
    describe() {
        return `${this.teaname} is ${this.strength}.`;
    }
}

class TeaVariety {
    constructor(name) {
        this.name = name;
        this.varieties = [];
    }

    addTypesOfTea(variety) {
       if (variety instanceof TypesOfTea) {
        this.varieties.push(variety);
       } else {
        throw new Error(`You can only add varieties of tea we own. This is not a variety of tea we have: ${variety}`);
       }
    }
    describe() {
        return `${this.teaname} has ${this.varieties.length} variety entries.`;
    }
}

class Menu {
    constructor() {
        this.teas = [];
        this.selectedTeaVariety = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createTeaVariety();
                    break;
                case "2":
                    this.viewTeaVariety();
                    break;
                case "3":
                    this.deleteTeaVariety();
                    break;
                case "4":
                    this.displayTeaVarieties();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert("No tea for you!");
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new tea variety
            2) view a tea variety
            3) delete a tea variety
            4) display all tea varieties
        `);
    }

    showTeaVarietyMenuOptions(teatypesInfo) {
        return prompt(`
        0) back
        1) create
        2) delete
        ------------------
        ${teatypesInfo}
        `);
    }
    
    displayTeaVarieties() {
        let teatypesString = "";
        for (let i = 0; i < this.teas.length; i++) {
            teatypesString += i + ') ' + this.teas[i].name + "\n";
        }
        alert(teatypesString);
    }
    createTeaVariety() {
        let name = prompt(`Enter name for new tea variety:`);
        this.teas.push(new TeaVariety(name));
    }

    viewTeaVariety() {
        let index = prompt(`Enter the index of the tea variety you wish to view:`);
        if (index > -1 && index < this.teas.length) {
           this.selectedTeaVariety = this.teas[index];
           let description = "Tea Name: " + this.selectedTeaVariety.name + "\n";

           for (let i = 0; i < this.selectedTeaVariety.varieties.length; i++) {
            description += i + ") " + this.selectedTeaVariety.varieties[i].name 
              + "-" + this.selectedTeaVariety.varieties[i].type + "\n";
           }
           let selection = this.showTeaVarietyMenuOptions(description);
           switch (selection) {
            case "1":
                this.createStrengthofTea();
                break;
            case "2":
                this.deleteStrengthofTea();
           }
        }
    }
}

let menu = new Menu();
menu.start();