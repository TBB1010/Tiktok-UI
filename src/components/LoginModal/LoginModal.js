import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import styles from './LoginModal.module.scss';
import Info from '@/components/LoginModal/components/Info';
import Login from '@/components/LoginModal/components/Login';

const cx = classNames.bind(styles);

function LoginModal({ onLogin }) {
    const [close, setClose] = useState(true);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setClose(!close);
    };

    const handleSubmit = () => {
        setShow(!show);
    };

    const handleBack = () => {
        setShow(!show);
    };

    return (
        close && (
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div>
                        <FontAwesomeIcon onClick={handleClick} className={cx('btn-close')} icon={faClose} />
                    </div>
                    {show ? <Info onClick={handleSubmit} /> : <Login onLogin={onLogin} onBack={handleBack} />}
                    <div className={cx('footer')}>
                        <span>Don't have an account?</span>
                        <span className={cx('footer-text')}>Sign up</span>
                    </div>
                </div>
            </div>
        )
    );
}

// LoginModal.propTypes = {
//     onclick: PropTypes.func,
// };

export default LoginModal;
