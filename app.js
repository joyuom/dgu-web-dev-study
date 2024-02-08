let totalAdultYears;
let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading", 1, 2];
let job = { 
  title: "Developer", 
  place: "New York", 
  salary: 50000 
};

function caculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = caculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = caculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name:"Won", //property
  greet() { //method
    console.log("Hello");
  }
};

person.greet();