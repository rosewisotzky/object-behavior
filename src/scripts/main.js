// const myPet = {
//     species: "Dog",
//     nickname: "brisket",
//     age: 100
// }
// console.log(myPet)

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one 
// argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the 
// order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrder: function () {
        return this.orders
    },
    orders: [],
}


const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"

}

const burgerMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "large"
}

// Place an order


// Invoke the function to return the list of all orders
restaurant.placeOrder(chickenComboMeal)
// Output all orders to the console using console.table()
console.table(restaurant.getOrder())