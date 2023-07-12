// Objectives: Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//              Use at least one array.
//              Use at least two classes.
//              Your menu should have the options to create, view, and delete elements.



// The goal is to make a main menu for customers to order bubble tea.
// Customers should be able to add to order (create), view order (view), & delete order (delete elements)

//  class Order {
//      constructor(size, temperature, flavor) {
//      this.size = size
//      this.temperature = temperature
//      this.flavor = flavor
//      }
//    
//      placeOrder() {
//          `Hello! I would like to order a ${this.size}, ${this.temperature} ${this.flavor}`
//      }
//  }

//let myOrder = new Order("Large","Hot","BlackTea");
//console.log(myOrder.placeOrder())

//class Toppings extends Order

class AddToCart {

}


class DrinkSize {
    constructor() {
        this.size = []
    }
    selectSize() {
        return prompt(
            1.
        )
    }
}


class DrinkOrder {
    constructor(size, temp, flavor) {
        this.size = size
        this.temp = temp
        this.flavor = flavor
    }
    placeOrder() {
       console.log(`Hello! I would like to order a ${this.size}, ${this.temp} ${this.flavor}`i)
    }
}

let myOrder = new DrinkOrder ("Large", "Iced", "Milk Tea")
myOrder.placeOrder()

class Menu {
    constructor() {
        this.size = [];
        this.temp = []
        this.flavor = []
    }
    
    start() {
    let selection = this.displayMainMenuOptions();

    while (selection != 0) {
        switch (selection) {
            case "1":
                this.addToCart();
                break;
            case "2":
                this.viewCart();
                break;
            case "3":
                this.removeFromCart()
            default:
                selection = 0;     
        }
        selection = this.displayMainMenuOptions();
    }

     alert("Sorry to see you go :(")
    }

    displayMainMenuOptions() {
        return prompt(`
        0. exit
        1. add to cart
        2. view cart
        3. remove from cart
        `)
    }

    displaySize() {
        
    }
           
}
