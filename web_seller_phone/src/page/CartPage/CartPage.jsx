import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../Components/CartComponent/CartItem';
import InputForm from '../../Components/InputForm/InputForm';
import { CloseOutlined } from '@ant-design/icons';
import Button from '../../Components/Button';
import {
    getCartItemRequest,
    increaseItemRequest,
    decreaseItemRequest,
    deleteItemRequest,
    orderItemRequest,
} from '../../apiService/apiService';
import { success } from '../../Components/Message/Message';

const CartPage = () => {
    const user = useSelector((state) => state.user);
    const [cartItems, setCartItems] = useState([]);
    const [isShowCheckout, setIsShowCheckout] = useState(false);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const fetchCartItems = async () => {
        try {
            const cart = await getCartItemRequest(user.id, user.access_token);
            setCartItems(cart.data);
        } catch (error) {
            console.error('Failed to fetch cart items:', error);
        }
    };

    // Fetch cart items when the user changes or initially loads the page
    useEffect(() => {
        if (user && user.id && user.access_token) {
            fetchCartItems();
        }
    }, [user]);

    // Calculate the total price of the cart
    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    };

    // Handlers for cart item quantity adjustments
    const handleIncrease = async (productId) => {
        if (!user || !user.id || !user.access_token) {
            console.error('User authentication details are missing');
            return;
        }
        try {
            const response = await increaseItemRequest(user.id, productId, user.access_token);
            if (response.message) {
                fetchCartItems();
            } else {
                console.error('Failed to increase quantity:', response.message);
            }
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const handleDecrease = async (productId) => {
        if (!user || !user.id || !user.access_token) {
            console.error('User authentication details are missing');
            return;
        }

        try {
            const response = await decreaseItemRequest(user.id, productId, user.access_token);
            if (response.message) {
                fetchCartItems();
            } else {
                console.error('Failed to increase quantity:', response.message);
            }
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const handleRemove = async (id_cart_item) => {
        if (!user || !user.id || !user.access_token) {
            console.error('User authentication details are missing');
            return;
        }

        try {
            const response = await deleteItemRequest(id_cart_item, user.access_token);
            if (response.message) {
                fetchCartItems();
            } else {
                console.error('Failed to increase quantity:', response.message);
            }
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    // Handler for checkout process
    const handleCheckout = () => {
        setIsShowCheckout(true);
    };
    console.log(user);

    const handleOrder = async () => {
        const data = {
            id_user: user.id,
            username: user.name,
            address,
            phone_number: phone,
        };
        if (!user || !user.id || !user.access_token) {
            console.error('User authentication details are missing');
            return;
        }

        try {
            const response = await orderItemRequest(data, user.access_token);
            fetchCartItems();
            setIsShowCheckout(false);
            success('Đặt hàng thành công');
        } catch (error) {
            error(error);
        }
    };

    return (
        <div style={{ backgroundColor: '#f5f5fa', display: 'flex', flexDirection: 'column', minHeight: '2000px' }}>
            <div style={{ margin: '40px', fontWeight: 'bold', fontSize: '15px' }}>Giỏ hàng</div>
            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Giỏ hàng của bạn trống</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <CartItem
                            key={index}
                            product={item}
                            onIncrease={() => handleIncrease(item.id_product)}
                            onDecrease={() => handleDecrease(item.id_product)}
                            onRemove={() => handleRemove(item.id_cart_item)}
                        />
                    ))}
                    <div style={{ marginTop: '100px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            Tổng tiền: <h4 style={{ marginLeft: '5px' }}> {calculateTotalPrice()}</h4>
                        </div>
                        <div>Phí vận chuyển: Miễn phí</div>
                        <button
                            onClick={handleCheckout}
                            style={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                padding: '10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                cursor: 'pointer',
                                fontSize: '15px',
                            }}
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            )}

            {isShowCheckout && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <div
                        style={{
                            background: '#fff',
                            width: '500px',
                            padding: 20,
                            borderRadius: 5,
                            textAlign: 'center',
                            position: 'relative',
                        }}
                    >
                        <CloseOutlined
                            onClick={() => setIsShowCheckout(false)}
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '7px',
                                padding: '5px',
                                cursor: 'pointer',
                            }}
                        />
                        <h3>Thông tin đặt hàng</h3>
                        <InputForm
                            onChange={setPhone}
                            value={phone}
                            style={{ padding: '10px', marginBottom: '20px' }}
                            placeholder="Số điện thoại"
                        />
                        <InputForm
                            onChange={setAddress}
                            value={address}
                            style={{ padding: '10px', marginBottom: '40px' }}
                            placeholder="Địa chỉ"
                        />
                        <Button onClick={handleOrder} disable={!phone || !address ? true : false} rounded>
                            Xác nhận và đặt hàng
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;