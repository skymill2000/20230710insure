let car = {
  name: "sonata",
  ph: 200,
  start: function () {
    console.log("start!!");
  },
  stop: function () {
    console.log("stop!!");
  },
};

console.log(car.name);
console.log(car.ph);
// console.log(car.start);
// console.log(car.stop);
car.start();
car.stop();
