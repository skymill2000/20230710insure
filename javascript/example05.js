console.log("---none---");
let cars = ["소나타", "그랜저", "포르쉐", "피아트", "페라리"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

console.log("---for---");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log("---of---");
for (car of cars) {
  console.log(car);
}
console.log("---map---");
cars.map((car) => {
  console.log(car);
});
