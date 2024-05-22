import React from 'react';
import { WrapperProductFilter, WrapperText } from './styles';
import { DownOutlined, ReloadOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

function ProductFilter() {
    // chuyển trang
    const navigate = useNavigate();
    // state
    const [typeSelected, setTypeSelected] = useState('');
    const [priceSelected, setPriceSelected] = useState('');
    const [category, setCategory] = useState({});

    // constant
    const types = ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Real me', 'Vivo', 'Nokia'];
    const prices = ['Dưới 1 triệu', '1 triệu đến 5 triệu', '5 triệu đến 10 triệu', 'Trên 10 triệu'];
    // handle function

    const handleChangeType = (item) => {
        setTypeSelected(item);
        setCategory((prev) => ({ ...prev, brand: item }));
    };
    const handleChangePrice = (item) => {
        setPriceSelected(item);
        setCategory((prev) => ({ ...prev, minPrice: calculateMinPrice(item), maxPrice: calculateMaxPrice(item) }));
    };
    // tính toán giá cả
    const calculateMinPrice = (price) => {
        switch (price) {
            case 'Dưới 1 triệu':
                return 0;

            case '1 triệu đến 5 triệu':
                return 1000000;
            case '5 triệu đến 10 triệu':
                return 5000000;
            case 'Trên 10 triệu':
                return 10000000;
            default:
                return 0;
        }
    };
    const calculateMaxPrice = (price) => {
        switch (price) {
            case 'Dưới 1 triệu':
                return 1000000;
            case '1 triệu đến 5 triệu':
                return 5000000;
            case '5 triệu đến 10 triệu':
                return 10000000;
            case 'Trên 10 triệu':
                return 100000000;
            default:
                return 20000000;
        }
    };
    const handleFilterProducts = () => {
        navigate({
            pathname: '/',
            search: `?${createSearchParams(category)}`,
        });
    };

    const handleResetProducts = () => {
        setTypeSelected('');
        setPriceSelected('');
        setCategory({});
        navigate({
            pathname: '/',
        });
    };

    // use search params
    useEffect(() => {
        handleFilterProducts();
    }, [category]);

    // item
    const items1 = types.map((item, index) => {
        return {
            key: `${index}`,
            label: (
                <button style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleChangeType(item)}>
                    {item}
                </button>
            ),
        };
    });

    const items2 = prices.map((item, index) => {
        return {
            key: `${index}`,
            label: (
                <button
                    style={{ padding: '5px', cursor: 'pointer' }}
                    onClick={() => {
                        handleChangePrice(item);
                    }}
                >
                    {item}
                </button>
            ),
        };
    });

    const overlayStyle = {
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const dropdownMargin = { marginRight: '60px' };

    return (
        <WrapperProductFilter>
            <WrapperText>
                Lọc sản phẩm :
                <span onClick={handleResetProducts} style={{ padding: '0 10px', color: 'gray' }}>
                    <ReloadOutlined />
                </span>
            </WrapperText>
            <div style={{ display: 'flex', flex: '2' }}>
                <div style={dropdownMargin}>
                    <Dropdown menu={{ items: items1 }} trigger={['hover']} overlayStyle={overlayStyle}>
                        <p>
                            {typeSelected ? typeSelected : 'Danh mục'}
                            <span style={{ marginLeft: '5px' }}>
                                <DownOutlined />
                            </span>
                        </p>
                    </Dropdown>
                </div>
                <div style={dropdownMargin}>
                    <Dropdown menu={{ items: items2 }} trigger={['hover']} overlayStyle={overlayStyle}>
                        <p>
                            {priceSelected ? priceSelected : 'Giá'}
                            <span style={{ marginLeft: '5x' }}>
                                <DownOutlined />
                            </span>
                        </p>
                    </Dropdown>
                </div>
            </div>
        </WrapperProductFilter>
    );
}

export default ProductFilter;
