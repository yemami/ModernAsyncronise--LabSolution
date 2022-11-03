var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(" ".concat(this.name, " is saying: Toooooooooot!"));
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
