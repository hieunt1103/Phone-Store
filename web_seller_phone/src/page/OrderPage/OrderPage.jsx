import { useSelector } from 'react-redux';

function OrderPage() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return <h2>Order page</h2>;
}

export default OrderPage;
