import mocha from "../assets/images/mocha.jpg";
import flatWhite from "../assets/images/flat-white.jpg";
import latte from "../assets/images/latte.jpg";
import americano from "../assets/images/americano.jpg";

export const categories = ["All Coffee", "Machiato", "Latte", "Americano"];

const description =
  "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. A cappuccino is traditionally served in a ceramic cup and topped with a thick layer of foamed milk.";

export const coffees = [
  { id: 1, name: "Caffe Mocha", type: "Deep Foam", price: 4.53, rating: 4.8, image: mocha, category: "Machiato", description },
  { id: 2, name: "Flat White", type: "Espresso", price: 3.53, rating: 4.8, image: flatWhite, category: "Latte", description },
  { id: 3, name: "Caffe Latte", type: "With Oat Milk", price: 4.2, rating: 4.7, image: latte, category: "Latte", description },
  { id: 4, name: "Americano", type: "Black Coffee", price: 3.2, rating: 4.6, image: americano, category: "Americano", description },
];