import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import Image from '@/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PoperWrapper } from '@/components/Poper';
import AccountPreview from '@/components/SuggestedAccounts/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = () => (
        <PoperWrapper>
            <AccountPreview data={data} />
        </PoperWrapper>
    );

    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-10, 2]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.fullName} className={cx('avatar')} />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nick-name')}>
                            <span>{data.fullName}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('name')}>{data.nickName}</span>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
