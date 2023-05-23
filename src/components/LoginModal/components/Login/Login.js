import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login({ onBack, onLogin }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdateAccount = () => {
        const Accounts = localStorage.getItem('accounts');

        if (Accounts) {
            const account = JSON.parse(Accounts);

            account.map((acc) => {
                if (name === acc.name && password === acc.password) {
                    localStorage.setItem(
                        'user-login',
                        JSON.stringify({
                            name: name,
                            password: password,
                        }),
                    );
                    // localStorage.setItem(
                    //     acc.id,
                    //     JSON.stringify({
                    //         likes: [],
                    //         follow: [],
                    //     }),
                    // );
                }
            });
        }
    };

    const handleLogin = () => {
        // const userLogin = localStorage.getItem('user-login');
        // const user = JSON.parse(userLogin);
        handleUpdateAccount();

        const Accounts = localStorage.getItem('accounts');

        const account = JSON.parse(Accounts);
        account.map((acc) => {
            if (name === acc.name && password === acc.password) {
                onLogin();
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
