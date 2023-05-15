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
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PoperWrapper>
                <AccountPreview />
            </PoperWrapper>
        </div>
    );

    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-10, 2]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nick-name')}>
                            <span>{data.full_name}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('name')}>{data.nickname}</span>
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
