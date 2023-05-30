import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginModal.module.scss';
import Info from '@/components/LoginModal/components/Info';
import Login from '@/components/LoginModal/components/Login';
import InfoSignUp, { SignUp } from '@/components/LoginModal/components/SignUp';

const cx = classNames.bind(styles);

function LoginModal({ onLogin, onClick }) {
    const [show, setShow] = useState(true);
    const [showSignUp, setShowSignUp] = useState(true);
    const [showLogin, setShowLogin] = useState(true);

    const handleShow = () => {
        setShow(!show);
        handleBackSignUp();
        handleBackLogin();
    };

    const handleBackLogin = () => {
        setShowLogin(true);
    };

    const handleLogin = () => {
        setShowLogin(!showLogin);
    };

    const handleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    const handleBackSignUp = () => {
        setShowSignUp(true);
    };

    return show ? (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <FontAwesomeIcon onClick={onClick} className={cx('btn-close')} icon={faClose} />
                </div>
                {showLogin ? <Info onClick={handleLogin} /> : <Login onLogin={onLogin} onBack={handleBackLogin} />}
                <div className={cx('footer')}>
                    <span>Don't have an account?</span>
                    <span onClick={handleShow} className={cx('footer-text')}>
                        Log in
                    </span>
                </div>
            </div>
        </div>
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <FontAwesomeIcon onClick={onClick} className={cx('btn-close')} icon={faClose} />
                </div>
                {showSignUp ? <InfoSignUp onClick={handleSignUp} /> : <SignUp onBack={handleBackSignUp} />}
                <div className={cx('footer')}>
                    <span>Already have an account?</span>
                    <span onClick={handleShow} className={cx('footer-text')}>
                        Sign up
                    </span>
                </div>
            </div>
        </div>
    );
}

LoginModal.propTypes = {
    onclick: PropTypes.func,
    onLogin: PropTypes.func,
};

export default LoginModal;
