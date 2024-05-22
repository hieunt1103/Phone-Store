import Cart from '../../model/Cart.js';
import CartItem from '../../model/CartItem.js';
import Order from '../../model/order.js';
import OrderItem from '../../model/OrderItem.js';
import Product from '../../model/ProductModel.js';
const createOrderFromCartService = async (id_user, address, phone_number,username) => {
    const cart = await Cart.findOne({
        where: { id_user },
        include: [
            {
                model: CartItem,
                include: [Product], // Bao gồm sản phẩm để tính tổng số tiền
            },
        ],
    });

    if (!cart) {
        throw new Error('Giỏ hàng không được tìm thấy.'); // Xử lý khi không tìm thấy giỏ hàng
    }

    const totalAmount = cart.CartItems.reduce(
        (sum, item) => sum + item.quantity * item.Product.price, // Tính tổng số tiền
        0,
    );

    const order = await Order.create({
        id_user,
        address,
        phone_number,
        username,
        total_amount: totalAmount,
    });

    await Promise.all(
        cart.CartItems.map((cartItem) =>
            OrderItem.create({
                id_order: order.id_order,
                id_product: cartItem.id_product,
                quantity: cartItem.quantity,
            }),
        ),
    );

    await CartItem.destroy({
        where: { id_cart: cart.id_cart }, // Xóa giỏ hàng sau khi tạo đơn hàng
    });

    return order; // Trả về đơn hàng vừa tạo
};

const getAllOrders = async () => {
    try {
        const orders = await Order.findAll();
        return {
            status: 'OK',
            message: 'Successfully fetched all orders',
            data: orders,
        };
    } catch (error) {
        return {
            status: 'ERR',
            message: 'Error fetching orders',
            error: error.message,
        };
    }
};

const deleteOrderById = async (orderId) => {
    try {
      await OrderItem.destroy({
        where: {
          id_order: orderId,
        },
      });
      await Order.destroy({
        where: {
          id_order: orderId,
        },
      });
    } catch (error) {
      throw error; 
    }
  };
export default {
    createOrderFromCartService,getAllOrders,deleteOrderById
};