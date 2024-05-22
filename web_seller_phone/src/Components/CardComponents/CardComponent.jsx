import React from 'react';
// import { Card } from 'antd';
import { StyleNameProduct } from './style';
import { WrapperReportText } from './style';
import { WrapperPriceText } from './style';
import { AnimatedCard } from './style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = ({ data }) => {
    const {
        nameProduct,
        price,
        stock_quantity,
        url_picture = 'https://tabletplaza.vn/images/thumbnails/450/320/detailed/25/15pb_z3tl-8o_v43s-qd_fjxg-42_s6g9-q4.jpg',
    } = data;
    const imageUrl = String.fromCharCode(...url_picture.data);
    const formatted_price = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    return (
        <div style={{ margin: '40px 20px' }}>
            <AnimatedCard
                hoverable
                style={{ width: '200px', height: '330px' }}
                cover={<img alt="example" src={imageUrl} />}
            >
                <StyleNameProduct>{nameProduct}</StyleNameProduct>
                <WrapperReportText>
                    <span>
                        4.96
                        <StarFilled style={{ color: 'rgb(253,216,54)', margin: '0 2px' }} />
                    </span>
                    <span>| đã bán {stock_quantity}+</span>
                </WrapperReportText>
                <WrapperPriceText>{formatted_price}</WrapperPriceText>
            </AnimatedCard>
        </div>
    );
};
export default CardComponent;
