import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'antd';
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { addCartItemRequest } from '../../apiService/apiService';
import {
    WrapperStyleImageSmall,
    WrapperStyleColImage,
    WrapperStyleNameProduct,
    WrapperStyleTextSell,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperDesciptionProduct,
    WrapperQualityProduct,
    WrapperInputNumber,
} from './style';
import { success } from '../Message/Message';

function ProductDetailComponent({ data }) {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const [numProduct, setNumProduct] = useState(1);

    const { id_product, nameProduct, price, stock_quantity, descrip_product, url_picture } = data;
    const imageUrl = url_picture?.data
        ? String.fromCharCode(...url_picture.data)
        : 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_19.png';
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    const onChange = (value) => {
        setNumProduct(Number(value));
    };

    const handleOrder = async () => {
        if (!user || !user.id) {
            navigate('/sign-in', { state: { from: location.pathname } });
            return;
        }

        try {
            const result = await addCartItemRequest(
                {
                    id_user: user.id,
                    id_product,
                    quantity: numProduct,
                    nameProduct,
                    price,
                    url_picture: imageUrl,
                },
                user.access_token,
            );
            success('Sản phẩm đã được thêm vào giỏ hàng ');
        } catch (e) {
            console.error('Error when adding to cart:', e);
            alert('Error when adding to cart');
        }
    };

    return (
        <div>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height: '100%' }}>
                <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '20px' }}>
                    <Image src={imageUrl} preview={false} alt="Product Image" />
                    <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                        {[...Array(5)].map((_, index) => (
                            <WrapperStyleColImage key={index} span={4}>
                                <WrapperStyleImageSmall src={imageUrl} preview={false} alt="Product Thumbnail" />
                            </WrapperStyleColImage>
                        ))}
                    </Row>
                </Col>
                <Col span={14} style={{ padding: '70px 100px' }}>
                    <WrapperStyleNameProduct>{nameProduct}</WrapperStyleNameProduct>
                    <div>
                        {[...Array(4)].map((_, index) => (
                            <StarFilled key={index} style={{ color: 'rgb(253,216,54)' }} />
                        ))}
                        <WrapperStyleTextSell> | Đã bán {stock_quantity}+</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>{formattedPrice}</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperDesciptionProduct>
                        <span className="header-description">
                            <h4>Mô tả sản phẩm:</h4>
                        </span>
                        <p style={{ marginTop: '15px' }} className="body-description">
                            {descrip_product}
                        </p>
                    </WrapperDesciptionProduct>
                    <div
                        style={{
                            margin: '10px 0 20px',
                            padding: '10px 0',
                            borderTop: '1px solid #e5e5e5',
                            borderBottom: '1px solid #e5e5e5',
                        }}
                    >
                        <div>Số lượng</div>
                        <WrapperQualityProduct>
                            <button
                                onClick={() => setNumProduct(numProduct - 1)}
                                disabled={numProduct <= 1}
                                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                            >
                                <MinusOutlined style={{ color: '#000', fontSize: '15px' }} />
                            </button>
                            <WrapperInputNumber value={numProduct} onChange={onChange} min={1} size="small" />
                            <button
                                onClick={() => setNumProduct(numProduct + 1)}
                                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                            >
                                <PlusOutlined style={{ color: '#000', fontSize: '15px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <ButtonComponent
                        onClick={handleOrder}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                        textButton="Chọn mua"
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetailComponent;
