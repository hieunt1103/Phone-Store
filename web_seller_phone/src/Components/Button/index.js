import { Link } from 'react-router-dom';
import styles from '../Button/Button.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    primary = false,
    outline = false,
    rounded,
    text,
    size,
    className,
    leftIcon,
    rightIcon,
    disable = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        text,
        disable,
        [size]: size,
        [className]: className,
        ...passProps,
    });

    // xử lí cái nút mà người dùng không thể tương tác được
    // Cách 1: dùng css. Nhưng cách này không tối ưu vì người dùng có thể mở dev tool và tắt thuộc tính css này đi thì có thể tương tác được
    /* 
    .disabled-button {
    pointer-events: none; /* Ngăn chặn các sự kiện chuột */
    // opacity: 0.5; /* Làm mờ nút để chỉ ra rằng nó không khả dụng */

    // cách 2: dùng js

    // if (disable) {
    //     for (var key in props) {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     }
    // }
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]; // xóa một thuộc tính trong một obj
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <div className={cx('content')}>{children}</div>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
