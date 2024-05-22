import React from 'react';
// import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import {
    WrapperCartInner,
    WrapperCartInnerLeft,
    WrapperCartInnerRight,
    WrapperCartName,
    WrapperCartContainer,
    WrapperCartPrice,
    WrapperInputNumber,
    WrapperCartRemove,
} from './style';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { WrapperQualityProduct } from '../ProductDetailComponent/style';
import { useSelector } from 'react-redux';

const CartItem = ({ product, onRemove, onIncrease, onDecrease }) => {
    // Calculate total price for the product

    const order = useSelector((state) => state.order);
    console.log(order);
    const { id_product, nameProduct, price, url_picture, quantity } = product;
    const url = url_picture?.data;
    const imageUrl = url
        ? String.fromCharCode(...url)
        : 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_19.png';
    const formatted_price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    console.log(imageUrl);

    return (
        <WrapperCartContainer>
            <WrapperCartInner>
                <WrapperCartInnerLeft>
                    <Image preview={false} style={{ width: '70px', height: '70px' }} src={imageUrl} />
                    <WrapperCartName>{nameProduct} </WrapperCartName>
                </WrapperCartInnerLeft>
                <WrapperCartInnerRight>
                    <WrapperCartPrice>{formatted_price}</WrapperCartPrice>
                    <WrapperQualityProduct>
                        <button
                            onClick={() => onDecrease(id_product)}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                fontSize: '10px',
                            }}
                        >
                            <MinusOutlined style={{ color: '#000', fontSize: '15px' }} />
                        </button>
                        <WrapperInputNumber value={quantity} defaultValue={1} min={1} size="small" />
                        <button
                            onClick={() => onIncrease(id_product)}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                fontSize: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <PlusOutlined style={{ color: '#000', fontSize: '15px' }} />
                        </button>
                    </WrapperQualityProduct>
                    <button onClick={() => onRemove(product.id)}>
                        <WrapperCartRemove>
                            <DeleteOutlined />
                        </WrapperCartRemove>
                    </button>
                </WrapperCartInnerRight>
            </WrapperCartInner>
        </WrapperCartContainer>
    );
};

export default CartItem;
