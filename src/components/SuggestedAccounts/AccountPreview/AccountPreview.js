import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '@/components/Image';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src="https://www.tiktok.com/favicon.ico" />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <span>LeCongTo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>🆘tbb1010🆘</span>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>9.2 M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>78l.4 M</strong>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
