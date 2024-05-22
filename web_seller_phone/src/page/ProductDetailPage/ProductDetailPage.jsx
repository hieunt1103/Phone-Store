import ProductDetailComponent from '../../Components/ProductDetailComponent/ProductDetailComponent';
import { useParams } from 'react-router-dom';
import { getProductByIdRequest } from '../../apiService/apiService';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';

function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true); // Thêm state để xác định dữ liệu đã được tải hay chưa
    const { id } = useParams(); // Sử dụng destructuring để trích xuất id từ useParams

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await getProductByIdRequest(id);
                setProduct(result.product);
                setLoading(false); // Đánh dấu là dữ liệu đã được tải
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false); // Đánh dấu là dữ liệu đã được tải (dù có lỗi)
            }
        };

        fetchApi();
    }, [id]);

    // Hiển thị "Loading..." khi dữ liệu đang được tải

    return (
        <div>
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    background: '#f5f5fa',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* <h4>Trang chủ</h4> */}
                <div style={{ width: '1270px', height: '100%', marginTop: '140px' }}>
                    <ProductDetailComponent key={product.id_product} data={product} />
                </div>
            </div>
            {loading && (
                <div>
                    {loading && (
                        <div
                            style={{
                                background: '#f2f2f2',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                right: '0',
                                bottom: '0',
                            }}
                        >
                            <Spin />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ProductDetailPage;
