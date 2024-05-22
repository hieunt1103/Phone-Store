import CartService from '../services/Cart/CartService.js';

const addToCart = async (req, res) => {
    try {
        const { id_user, id_product, quantity,nameProduct , price, url_picture } = req.body;
        if (!id_user || !id_product || !quantity || !nameProduct || !price || !url_picture) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        await CartService.addToCart(id_user, id_product, quantity,nameProduct , price, url_picture ); // Thêm sản phẩm vào giỏ hàng
        res.status(200).json({ message: 'Product added to cart' }); // Phản hồi thành công
    } catch (error) {
        res.status(500).json({ message: error.message }); // Xử lý lỗi
    }
};

const getCartItems = async (req, res) => {
    try {
        const id_user = req.params.id_user;

        const response = await CartService.getCartItems(id_user);

        if (response.status === 'ERR') {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json(response); // Thành công
    } catch (error) {
        res.status(500).json({ message: error.message }); // Xử lý lỗi
    }
};

const increaseCartQuantity = async (req, res) => {
    try {
        const { id_user, id_product } = req.params;
        const result = await CartService.increaseQuantity(id_user, id_product);
        if (result.status === 'OK') {
            res.status(200).json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const decreaseCartQuantity = async (req, res) => {
    try {
        const { id_user, id_product } = req.params;
        const result = await CartService.decreaseQuantity(id_user, id_product);
        if (result.status === 'OK') {
            res.status(200).json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeProduct = async (req, res) => {
    const id_cart_item = req.params.id_cart_item;
    try {
        const result = await CartService.removeProductWithoutCart(id_cart_item);
        if (result.status === 'OK') {
            res.json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        console.error('Error removing item:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export { addToCart, getCartItems, increaseCartQuantity, decreaseCartQuantity, removeProduct };
