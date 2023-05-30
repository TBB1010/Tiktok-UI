import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { listUser } from '@/components/ListUser/ListUser';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, see }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {listUser.map((user) => {
                return <AccountItem key={user.id} data={user} />;
            })}
            <p className={cx('more-btn')}>{see}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    see: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
