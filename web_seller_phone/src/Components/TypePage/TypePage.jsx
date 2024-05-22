import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TypePage() {
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            path: '/',
        },
        {
            label: <Link to="/about">About</Link>,
            key: 'about',
            path: '/about',
        },
        {
            label: <Link to="/contact">Contact us</Link>,
            key: 'contact',
            path: '/contact',
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default TypePage;
