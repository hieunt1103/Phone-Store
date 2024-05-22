import orderService from '../services/Order/OrderService.js';

const createOrderFromCartController = async (req, res) => {
    const { id_user, address, phone_number, username } = req.body;

    try {
        const order = await orderService.createOrderFromCartService(
            id_user,
            address,
            phone_number,
            username,
        );
    
        return res.status(201).json({
            message: 'Đơn hàng được tạo thành công.',
            orderId: order.id_order,
        });
    } catch (err) {
        console.error('Error creating order:', err); // Ghi log chi tiết về lỗi
        return res.status(500).json({ message: 'Không thể tạo đơn hàng.' });
    }
};

const getAllOrder = async (req, res) => {
    const result = await orderService.getAllOrders();

    if (result.status === 'OK') {
        res.json(result.data);
    } else {
        res.status(500).json({ message: result.message });
    }
};
const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
  
    try {
      await orderService.deleteOrderById(orderId);
      res.status(200).send({ message: 'Order deleted successfully' }); // Phản hồi thành công
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
export default {
    createOrderFromCartController,getAllOrder,deleteOrder
};