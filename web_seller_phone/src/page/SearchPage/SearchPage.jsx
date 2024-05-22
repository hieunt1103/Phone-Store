import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardComponent from '../../Components/CardComponents/CardComponent.jsx';
import { WrapperCartComponent } from '../../page/HomePage/style.js';
import { selectSearchResults } from '../../redux/slides/searchSlice.js';

function SearchPage() {
    const searchResults = useSelector(selectSearchResults);
    console.log(searchResults);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#f5f5fa',
                borderRadius: '40px',
                padding: '30px',
            }}
        >
            {searchResults.length !== 0 && (
                <p style={{ fontSize: '15px', fontWeight: '500', display: 'flex' }}>
                    Có
                    <span style={{ margin: '0 4px' }}>
                        <p style={{ color: 'red' }}>{searchResults.length} </p>
                    </span>
                    kết quả với từ khoá tìm kiếm
                </p>
            )}
            <WrapperCartComponent>
                <div style={{ width: '100%', height: '40px' }}></div>

                {searchResults.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>Không tìm thấy kết quả.</p>
                ) : (
                    searchResults.map((item) => (
                        <Link key={item.id_product} to={`/product/${item.id_product}`}>
                            <CardComponent data={item}></CardComponent>
                        </Link>
                    ))
                )}
            </WrapperCartComponent>
        </div>
    );
}

export default SearchPage;
