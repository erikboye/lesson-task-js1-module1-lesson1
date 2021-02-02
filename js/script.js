// Q1

const instrument = "guitar";
console.log(instrument);

// Q2

const button = document.querySelector("button.login");
console.log(button);

//Q3

const instruments = [
  {
    type: "guitar",
    colour: "red",
  },
  {
    type: "piano",
    colour: "black",
  },
];

console.table(instruments);

//Q4

const name = "Percival";
const age = 13;

console.log(name, age);

//Q5

let total = 0;
total = total + 10;

console.log(total);

//Q6

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//Q7

const firstName = "Florence";
const introduction = `Hello, my name is, ${firstName}
`;

console.log(introduction);

//Q8

const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!
This  ${title} is starting today
Have a  ${whatToHave} ! 
`;

console.log(welcome);

//Q9

const car = {
  paintColour: "red",
  numberOfWheels: 3,
};

console.log(car.paintColour, car.numberOfWheels);

//Q10

const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
  getExpired: function () {
    if (this.expired) {
      console.log(`This ${this.name} is not expired`);
    } else {
      console.log(`This ${this.name} is expired`);
    }
  },
};

product.getExpired();
