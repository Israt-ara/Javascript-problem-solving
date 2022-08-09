let car =
{
    brand: 'Tesla',
    model: 3,
    weight: '980kg',
    sitting: 5,
    start() {
        console.log("car is starting");
    }


}
// dot notation
console.log(car.weight);

// brackets notation
console.log(car['brand']);

// change the value from an object
car.model = 4;
car.brand = "Tesla4"
console.log(car);
