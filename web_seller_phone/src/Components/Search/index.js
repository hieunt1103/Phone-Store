import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchRequest } from '../../apiService/apiService';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../redux/slides/searchSlice';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from '../Search/Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    // const [resultSearch, setResultSearch] = useState([]);
    const [value, setValue] = useState('');
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!value.trim()) {
            // setLoading(false); // Không có gì để tải, nên đặt loading là false

            return;
        }
        const fetchApi = async () => {
            try {
                // setLoading(true); // Bắt đầu tải dữ liệu, đặt loading là true

                const result = await searchRequest(value);
                dispatch(setSearchResults(result.products));
                // setLoading(false);
            } catch (error) {
                // setLoading(false);
                dispatch(setSearchResults([]));

                console.error('Error fetching product:', error);
            }
        };

        fetchApi();
        // console.log(resultSearch);
    }, [value]);
    return (
        <div className={cx('search')}>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                type="text"
                placeholder="Tìm kiếm"
            />
            {value && (
                <button
                    onClick={() => {
                        setValue('');
                        dispatch(setSearchResults([]));

                        // setResultSearch([]);
                    }}
                    className={cx('clear')}
                >
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faCircleXmark} />
                </button>
            )}
            {/* {!loading && value && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} */}
            <Link to="/search">
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </Link>
        </div>
    );
}

export default Search;
