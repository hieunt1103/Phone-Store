import { Table, Button, Modal } from 'antd';
import { useState, useEffect } from 'react';
import { getAllOderRequest, deleteOrderRequest } from '../../apiService/apiService'; // Import hàm xóa
import { useSelector } from 'react-redux';

function AdminOrder() {
    const user = useSelector((state) => state.user);
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const fetchApi = async () => {
        const data = await getAllOderRequest(user.access_token);
        console.log(data);
        setOrder(data); 
      };
      fetchApi();
    }, [user]);
    console.log(user);
    const handleDelete = async (orderId) => {
        try {
          setIsLoading(true);
          await deleteOrderRequest(orderId, user.access_token);
          setOrder(order.filter((item) => item.id_order !== orderId)); // Cập nhật dữ liệu sau khi xóa
          setIsLoading(false);
        } catch (error) {
          console.error('Error deleting order:', error);
          setIsLoading(false);
        }
      };
    const columns = [
        {
            title: 'id_user',
            dataIndex: 'id_user',
            key: '1',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'id_order',
            dataIndex: 'id_order',
            key: '2',
        },

        {
            title: 'username',
            key: '3',
            dataIndex: 'username',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
            title: 'address',
            key: '4',
            dataIndex: 'address',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
            title: 'phone_number',
            key: '5',
            dataIndex: 'phone_number',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
            title: 'total_amount',
            key: '6',
            dataIndex: 'total_amount',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
            title: 'createdAt',
            key: '7',
            dataIndex: 'createdAt',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
            title: 'updatedAt',
            key: '8',
            dataIndex: 'updatedAt',
            render: (text) => (
                <div>
                    <h5>{text}</h5>
                </div>
            ),
        },
        {
          title: 'Hành động',
          key: '9',
          render: (_, record) => (
            <Button
              type="danger"
              onClick={() => {
                Modal.confirm({
                  title: 'Xóa đơn hàng?',
                  content: 'Bạn có chắc muốn xóa đơn hàng này?',
                  okText: 'Xóa',
                  okType: 'danger',
                  onOk: () => handleDelete(record.id_order), // Gọi hàm xóa khi xác nhận
                  cancelText: 'Hủy',
                });
              }}
            >
              Xóa
            </Button>
          ),
        },
    ];
    const data = order
        ? order.map((item, index) => {
              return {
                  key: index,
                  id_user: item.id_user,
                  id_order: item.id_order,
                  username: item.username,
                  address: item.address,
                  phone_number: item.phone_number,
                  total_amount: item.total_amount,
                  createdAt: item.createdAt,
                  updatedAt: item.updatedAt,
              };
          })
        : [];
    return (
        <div>
            <h4 style={{ marginBottom: '50px', marginTop: '20px' }}> Danh sách đơn hàng </h4>
            <div>
                <Table style={{ width: '1000px', height: '100%' }} columns={columns} dataSource={data} />
            </div>
        </div>
    );
}

export default AdminOrder;
