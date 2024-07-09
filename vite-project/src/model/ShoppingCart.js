import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    #cartItems = [];
    static #allCarts = [];

    constructor() {
        this.id = getId();
        ShoppingCart.#allCarts.push(this);
    }
    
    createItem(name, price) {
        const item = new CartItem(name, price);
        this.#cartItems.push(item);
        return item;
    }

    getItems() {
        return [...this.#cartItems];
    }

    removeItem(itemId) {
        this.#cartItems.splice(this.#cartItems.findIndex(({id}) => id === itemId), 1)
    }

    getTotal() {
        return this.#cartItems.reduce((acc, {price}) => acc += price, 0);
    }

    static listAll() {
        return [...ShoppingCart.#allCarts];
    }
    static findBy(cartId) {
        return ShoppingCart.#allCarts.find(({id}) => id === cartId); 
    }
}

export default ShoppingCart;