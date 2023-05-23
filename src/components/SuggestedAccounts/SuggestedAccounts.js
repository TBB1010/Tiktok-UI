import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import {videos} from "@/components/Videos/video";
// import { useDebounce } from '@/hooks';
// import * as searchServices from '@/services/searchService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, see }) {
    // const [suggested, setSuggested] = useState([]);
    //
    // useEffect(() => {
    //     fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=le&type=less')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setSuggested(res.data);
    //         });
    // }, []);

    // const debounceValue = useDebounce('le', 0);

    // useEffect(() => {
    //     if (!debounceValue.trim()) {
    //         setSuggested([]);
    //         return;
    //     }
    //     const fetchApi = async () => {
    //         const result = await searchServices.search(debounceValue);
    //         setSuggested(result);
    //     };
    //     fetchApi();
    // }, [debounceValue]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {videos.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
            <p className={cx('more-btn')}>{see}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    see: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
