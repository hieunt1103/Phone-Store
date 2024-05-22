import Cart from '../../model/Cart.js';
import CartItem from '../../model/CartItem.js';

class CartService {
    static async addToCart(id_user, id_product, quantity,nameProduct , price, url_picture ) {
        let cart = await Cart.findOne({ where: { id_user } });
        if (!cart) {
            cart = await Cart.create({ id_user }); 
        }
        const existingCartItem = await CartItem.findOne({ 
            where: { id_cart: cart.id_cart, id_product }, 
        }); 
        if (existingCartItem) { 
            await existingCartItem.update({ quantity: existingCartItem.quantity + quantity }); 
        } else { 
            await CartItem.create({ id_cart: cart.id_cart, id_product, quantity,nameProduct , price, url_picture  }); 
        } 
    }

    static async getCartItems(id_user) {
        const cart = await Cart.findOne({ where: { id_user } });
        if (!cart) {
            return { status: 'ERR', message: 'Cart not found' };
        }
        const cartItems = await CartItem.findAll({
            where: { id_cart: cart.id_cart },
        });
        return { status: 'OK', data: cartItems };
    }

    static async increaseQuantity(id_user, id_product) {
        try {
            const cart = await Cart.findOne({ where: { id_user } });
            if (!cart) {
                return { status: 'ERR', message: 'Cart not found' };
            }
            const cartItem = await CartItem.findOne({
                where: { id_cart: cart.id_cart, id_product },
            });
            if (!cartItem) {
                return { status: 'ERR', message: 'Product not found in cart' };
            }
            await cartItem.increment('quantity'); // Increment quantity by 1
            return { status: 'OK', message: 'Quantity increased successfully' };
        } catch (error) {
            return { status: 'ERR', message: error.message };
        }
    }

    static async decreaseQuantity(id_user, id_product) {
        try {
            const cart = await Cart.findOne({ where: { id_user } });
            if (!cart) {
                return { status: 'ERR', message: 'Cart not found' };
            }
            const cartItem = await CartItem.findOne({
                where: { id_cart: cart.id_cart, id_product },
            });
            if (!cartItem) {
                return { status: 'ERR', message: 'Product not found in cart' };
            }
            if (cartItem.quantity === 1) {
                await cartItem.destroy(); // If quantity is 1, remove the item from the cart
                return { status: 'OK', message: 'Product removed from cart' };
            } else {
                await cartItem.decrement('quantity'); // Decrement quantity by 1
                return { status: 'OK', message: 'Quantity decreased successfully' };
            }
        } catch (error) {
            return { status: 'ERR', message: error.message };
        }
    }

    static async removeProductWithoutCart(id_cart_item) {
        const item = await CartItem.findByPk(id_cart_item);
        if (!item) {
            return { status: 'ERR', message: 'Product not found' };
        }

        // If the item exists, you can delete it
        await item.destroy();
        return { status: 'OK', message: 'Product removed successfully' };
    }
}

export default CartService;