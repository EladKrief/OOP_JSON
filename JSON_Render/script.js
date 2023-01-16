// let users = [
//   {
//     name: "Elad",
//     age: 30,
//   },
//   {
//     name: "Lavi",
//     age: 4,
//   },
//   ,
// ];

// class Render {
//   usersHolder;
//   constructor() {
//     this.usersHolder = users;
//     localStorage.setItem("userName", JSON.stringify(this.usersHolder));
//   }
//   print() {
//     let a = JSON.parse(localStorage.getItem("userName")); //go back to JSON
//     users.forEach((element) => {
//       let newDiv = document.createElement("div");
//       let newText = document.createTextNode(`${element.name} ${element.age}`);
//       newDiv.appendChild(newText);
//       document.body.append(newDiv);
//       // DOM Styling:
//       document.body.style.color = "green";
//       document.body.style.fontFamily = "Helvetica";
//       document.body.style.backgroundColor = "#BBCBCB";
//     });
//   }
// }
// let c = new Render();
// c.print();

class Product {
  price;
  name;
  expDate;
  constructor(inputPrice, inputName, inputExpDate) {
    this.price = inputPrice;
    this.name = inputName;
    this.expDate = inputExpDate;
  }
}

class Store {
  products;
  constructor() {
    this.products = [];
    this.readStorage();
  }
  addProduct(item) {
    this.products.push(item);
    console.log(this.products);
    this.saveUpdateStorage();
  }
  saveUpdateStorage() {
    localStorage.setItem("techStore", JSON.stringify(this.products));
  }
  readStorage() {
    if (!localStorage.getItem("techStore")) {
      this.saveUpdateStorage();
    }
  }
}
let product1 = new Product(100, "phone", Date("01/ 12 / 2023"));
let product2 = new Product(250, "bike", Date("05/ 12 / 2024"));
let store = new Store();
store.addProduct(product1);
store.addProduct(product2);
