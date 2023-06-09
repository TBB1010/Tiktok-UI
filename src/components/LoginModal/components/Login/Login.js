/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { useState } from 'react';
import { actions, useStore } from '@/store';

const cx = classNames.bind(styles);

function Login({ onBack, onLogin }) {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStore();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [forgot, setForgot] = useState(false);

    const handleLogin = () => {
        const accounts = JSON.parse(localStorage.getItem('accounts'));
        const userLogin = JSON.parse(localStorage.getItem('user-login'));

        accounts.map((acc) => {
            if (
                acc.name === userLogin.name &&
                acc.password === userLogin.password &&
                name === userLogin.name &&
                password === userLogin.password
            ) {
                onLogin();
                dispatch(
                    actions.handleLogin({
                        liked: [...acc.liked],
                        following: [...acc.following],
                    }),
                );
            } else {
                setForgot(true);
            }
        });
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
                <h2 className={cx('title')}>Log in</h2>
                <div className={cx('info')}>
                    <span className={cx('sub-title')}>Email or username</span>
                    <span className={cx('login')}>Log in with phone</span>
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
                    {forgot && <span className={cx('note')}>Entered the wrong password!</span>}
                </div>
                <div>
                    <p className={cx('forgot')}>Forgot password?</p>
                    <Button
                        onClick={handleLogin}
                        className={cx('btn', {
                            btnColor: handleFocus(),
                        })}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
