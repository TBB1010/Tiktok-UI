import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, see }) {
    const [suggested, setSuggested] = useState([]);

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=le&type=less')
            .then((res) => res.json())
            .then((res) => {
                setSuggested(res.data);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggested.map((result, index) => (
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
