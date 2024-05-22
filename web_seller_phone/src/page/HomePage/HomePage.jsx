import SliderComponent from '../../Components/SliderComponent';
import CardComponent from '../../Components/CardComponents/CardComponent';
import { WrapperCartComponent } from './style';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import { useEffect, useState } from 'react';
import { getAllProductRequest, filterRequest } from '../../apiService/apiService';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import TypePage from '../../Components/TypePage/TypePage';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const [hasFilteredProducts, setHasFilteredProducts] = useState(true); // Thêm biến state

    // xử lí hiển thị tất cả sản phẩm
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAllProductRequest();
            setProducts(result.data);
        };
        fetchApi();
    }, []);
    // xử lí lọc sản phẩm

    useEffect(() => {
        if (!searchParams.toString()) {
            const fetchApi = async () => {
                const result = await getAllProductRequest();
                setProducts(result.data);
                setHasFilteredProducts(true); // Đặt trạng thái đã lọc sản phẩm
            };
            fetchApi();
        } else {
            let paramsObject = {};
            for (let [key, value] of searchParams.entries()) {
                paramsObject[key] = value;
            }
            if (Object.keys(paramsObject).length === 0 && paramsObject.constructor === Object) {
                return;
            }
            console.log(paramsObject);
            const fetchApi = async () => {
                try {
                    const result = await filterRequest(paramsObject);
                    setProducts(result.products);
                    setHasFilteredProducts(result.products.length > 0); // Cập nhật trạng thái của biến state
                } catch (e) {
                    console.error('Error when fetching filtered products:', e);
                    setHasFilteredProducts(false); // Đặt trạng thái không có sản phẩm lọc
                }
            };
            fetchApi();
        }
    }, [searchParams]);

    return (
        <div style={{ height: '2000px' }}>
            <TypePage> </TypePage>

            <SliderComponent />
            <ProductFilter></ProductFilter>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#f5f5fa',
                    borderRadius: '40px',
                }}
            >
                <WrapperCartComponent>
                    <div style={{ width: '100% ', height: '40px' }}>
                        <div
                            style={{
                                width: '300px ',
                                height: '100%',
                                padding: '5px 0',
                                marginLeft: '70px',
                                backgroundColor: '#00483d',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center ',
                            }}
                        >
                            <p style={{ fontWeight: '600', color: 'var(--primary-color)' }}>GỢI Ý DÀNH CHO BẠN</p>
                        </div>
                    </div>

                    {hasFilteredProducts ? (
                        products.map((item) => (
                            <Link key={item.id_product} to={`/product/${item.id_product}`}>
                                <CardComponent data={item}></CardComponent>
                            </Link>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', padding: '20px' }}>Không tìm thấy sản phẩm phù hợp</p>
                    )}
                </WrapperCartComponent>
            </div>
        </div>
    );
}

export default HomePage;
