
// Coffee itself, size selection
//class Coffee {
//    constructor(size) {
//        this.size = size;
//    }
//    describe() {
//        return `You selected ${this.size} Coffee`
//    }
//}


// Each order and its order number
// name should display the name of the person who is placing the order






class Order {
    constructor(size) {
        this.size = size;
        this.orderArray = [];
        let sizeOne = "Small";
        let sizeTwo = "Medium";
        let sizeThree = "Large";
    }
    addOrder(sizes) {
        let selection = ""
        if (selection = "1") {
            this.orderArray.push(sizeOne)
        } else if (selection = "2") {
            this.orderArray.push(sizeTwo)
        } else if (selection = "3") {
            this.orderArray.push(sizeThree)
        } else {
            alert(`Invalid selection. Please try entering 1, 2, or 3.`)
        }
    }
    describe() {
        return `${this.size} was added to your order`
    }
    
}

class Menu {
    constructor() {
        this.orderArray = []
        this.selectedOrder = null
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1": 
                    this.viewOrder();
                    break;
                case "2":
                    this.removeItemFromOrder();
                    break;
                case "3":
                    this.addNewItemToOrder();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();
        }

        alert(`Sorry to see you go :(`);
    }

    showMainMenuOptions() {
        return prompt(`
        0. Exit
        1. View Order
        2. Remove Item From Order
        3. Add New Item To Order`)
    }

    viewOrder() {
        let orderList = "";
        for (let i = 0; i < this.orderArray.length; i++) {
            orderList += i + "." + this.orderArray[i] + "\n";
        }
        alert(orderList);
    }

    removeItemFromOrder() {

    }

    showSizeOptions() {
        let selection = this.showSizeOptions(this.selectedOrder)
        switch(selection) {
            case "1":
                this.orderArray.push("Small")
                break;
            case "2":
                this.orderArray.push("Medium")
                break;
            case "3":
                this.orderArray.push("Large")
            default:
                alert(`index entered is not a valid size.`)    
        }
    }

    addNewItemToOrder() {
        
        let selectedOrder = prompt(`Enter index of desired size:
        1. Small
        2. Medium
        3. Large`)

     //this array is the one pushing the information to the array    
        let selection = ""
        this.orderArray.push(new Order (selectedOrder));
        
    }
}


let menu = new Menu
menu.start();