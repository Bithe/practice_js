class Owner{
    ownerName = 'rayaan';
    ownerAge = 9;

    ownerInfo(){
        console.log(`owner name: ${this.ownerName}`);
    }
}


class Animal extends Owner {
    name;
    color;

    constructor(petName, petColor) {
      this.name = petName;
      this.color = petColor;
    }
  
    showInfo() {
      console.log(`name: ${this.color}`);
    }
  }

  