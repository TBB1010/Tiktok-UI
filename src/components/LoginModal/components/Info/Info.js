import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    FacebookIcon,
    GoogleIcon,
    InstargramIcon,
    KakaoTalkIcon,
    LineIcon,
    QRcodeIcon,
    TwitterIcon,
    UserIcon,
} from '@/components/Icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function Info({onClick}) {
    return (
        <div className={cx('modal-scroll')}>
            <div className={cx('body')}>
                <h2 className={cx('title')}>Log in to TikTok</h2>
                <button className={cx('btn')}>
                    <QRcodeIcon className={cx('icon')} />
                    <span className={cx('info')}>Use QR code</span>
                </button>
                <button className={cx('btn')}>
                    <UserIcon className={cx('icon')} />
                    <span onClick={onClick} className={cx('info')}>Use phone / email / username</span>
                </button>
                <button className={cx('btn')}>
                    <FacebookIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with Facebook</span>
                </button>
                <button className={cx('btn')}>
                    <GoogleIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with Google</span>
                </button>
                <button className={cx('btn')}>
                    <TwitterIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with Twitter</span>
                </button>
                <button className={cx('btn')}>
                    <LineIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with LINE</span>
                </button>
                <button className={cx('btn')}>
                    <KakaoTalkIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with KakaoTalk</span>
                </button>
                <button className={cx('btn')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faApple} />
                    <span className={cx('info')}>Continue with Apple</span>
                </button>
                <button className={cx('btn')}>
                    <InstargramIcon className={cx('icon')} />
                    <span className={cx('info')}>Continue with Instargram</span>
                </button>
            </div>
        </div>
    );
}

export default Info;
