import classNames from 'classnames/bind';
import styles from './InfoSignUp.module.scss';
import {
    FacebookIcon,
    GoogleIcon,
    InstargramIcon,
    KakaoTalkIcon,
    LineIcon,
    TwitterIcon,
    UserIcon,
} from '@/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function InfoSignUp({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <h2 className={cx('title')}>Sign up for TikTok</h2>
                <button className={cx('btn')}>
                    <UserIcon className={cx('icon')} />
                    <span onClick={onClick} className={cx('info')}>
                        Use phone or email
                    </span>
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
            <div className={cx('footer')}>
                <span>
                    By continuing, you agree to TikTok’s <span className={cx('text')}>Terms of Service</span> and
                    confirm that you have read TikTok’s <span className={cx('text')}>Privacy Policy</span>
                </span>
            </div>
        </div>
    );
}

export default InfoSignUp;
