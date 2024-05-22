import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import images from '../../assets/images';
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Button from '../Button';
import Search from '../Search';
import { useSelector } from 'react-redux';
import { Popover } from 'antd';

const cx = classNames.bind(styles);

function Header({ isHiddenSearch = false, isHiddenCart = false }) {
    const user = useSelector((state) => state.user);
    console.log(user);

    const content = (
        <div>
            {user?.isAdmin === 'ADMIN' ? (
                <Link to="/admin">
                    <p style={{ fontSize: '1.3rem', paddingTop: '5px', paddingBottom: '10px' }}>Quản lí bán hàng</p>
                </Link>
            ) : null}
        </div>
    );

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Logo" />
                    </div>
                </Link>

                {/* Search */}
                {!isHiddenSearch && <Search />}
                {user.name ? (
                    <Popover content={content} trigger="click">
                        <div className={cx('action')}>
                            <span style={{ fontSize: '20px', marginRight: '20px' }}>
                                <UserOutlined />
                            </span>
                            {user.name}
                        </div>
                    </Popover>
                ) : (
                    <div className={cx('action')}>
                        <Link to="/sign-in">
                            <Button primary>Đăng nhập</Button>
                        </Link>
                    </div>
                )}
                {/* Cart */}
                {!isHiddenCart && (
                    <div className={cx('cart')}>
                        <Link to="/cart">
                            <ShoppingCartOutlined />
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
