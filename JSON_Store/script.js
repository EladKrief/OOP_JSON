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
