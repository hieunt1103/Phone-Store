import React, { useState } from 'react';
import { UserOutlined, ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import AdminOrder from '../../Components/AdminOrder/AdminOrder';
import AdminProduct from '../../Components/AdminProduct/AdminProduct';
import AdminUser from '../../Components/AdminUser/AdminUser';
function AdminPage() {
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('Quản lí bán hàng', 'sub1', null, [
            getItem('Người dùng', 'user', <UserOutlined />),
            getItem('Sản phẩm', 'product', <ProductOutlined />),
            getItem('Đơn hàng', 'order', <ShoppingCartOutlined />),
        ]),
    ];

    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        setCurrent(e.key);
    };
    console.log(current);

    const handleRenderPage = (type) => {
        switch (type) {
            case 'user':
                return <AdminUser />;

            case 'product':
                return <AdminProduct />;
            case 'order':
                return <AdminOrder />;
            default:
                return <></>;
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                        height: 1000,
                        position: 'fixed',
                        top: 60,
                        left: 0,
                    }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                />
            </>
            <div style={{ marginLeft: '350px', padding: '15px 0 15px 15px', flex: '1' }}>
                {handleRenderPage(current)}
            </div>
        </div>
    );
}

export default AdminPage;
