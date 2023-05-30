/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SignUp({ onBack }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [info, setInfo] = useState(undefined);

    const handleUpdateUser = () => {
        const Accounts = JSON.parse(localStorage.getItem('accounts'));

        if (Accounts) {
            Accounts.map((acc) => {
                if (name === acc.name && password === acc.password) {
                    localStorage.setItem(
                        'user-login',
                        JSON.stringify({
                            name: name,
                            password: password,
                        }),
                    );
                    setName('');
                    setPassword('');
                } else {
                    setInfo(true);
                }
            });
        }
    };

    const handleFocus = () => {
        if (name && password) {
            return true;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
            </button>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Sign up</h2>
                <div className={cx('info')}>
                    <span className={cx('sub-title')}>Email </span>
                    <span className={cx('login')}>Sign up with phone</span>
                </div>
                <div>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className={cx('name')}
                        placeholder="Email or username"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className={cx('password')}
                        placeholder="Password"
                    />
                    {info && <span className={cx('note')}>Enter false information!</span>}
                </div>
                <div>
                    <Button
                        onClick={handleUpdateUser}
                        className={cx('btn', {
                            btnColor: handleFocus(),
                        })}
                    >
                        Sign up
                    </Button>
                </div>
                <div className={cx('footer')}>
                    <span>
                        By continuing, you agree to TikTok’s <span className={cx('text')}>Terms of Service</span> and
                        confirm that you have read TikTok’s <span className={cx('text')}>Privacy Policy</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
