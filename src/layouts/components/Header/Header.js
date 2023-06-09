/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faPlus,
    faUser,
    faCoins,
    faGear,
    faSignIn,
    // faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import { Wrapper as PoperWrapper } from '@/components/Poper';
import styles from './Header.module.scss';
import images from '@/assets/images';
import Button from '@/components/Button';
import Menu from '@/components/Poper/Menu';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons';
import Image from '@/components/Image';
import Search from '@/layouts/components/Search';
import config from '@/config';
import LoginModal from '@/components/LoginModal';
// import { account } from '@/services/fakeApiAccount';
import { actions, useStore } from '@/store';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Campuchia',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Thái lan',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Lào',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Pháp',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Trung quốc',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const [state, dispatch] = useStore();
    const [currentUser, setCurrentUser] = useState(undefined);
    // localStorage.setItem('accounts', JSON.stringify(account));
    const userLogin = localStorage.getItem('user-login');
    const accounts = localStorage.getItem('accounts');

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // Handle change Language
                break;
            default:
        }
    };

    const handleLogout = () => {
        setCurrentUser(false);
        dispatch(actions.handleLogout());
    };

    useEffect(() => {
        const account = JSON.parse(accounts);
        account.map((acc) => {
            if (userLogin) {
                const user = JSON.parse(userLogin);

                if (user.name === acc.name && user.password === acc.password) {
                    setCurrentUser(true);
                }
            }
        });
    }, []);

    const handleLogin = () => {
        setCurrentUser(true);
        dispatch(actions.hideLogin());
    };

    const handleShow = () => {
        dispatch(actions.showLogin());
    };

    const handleHide = () => {
        dispatch(actions.hideLogin());
    };

    useEffect(() => {
        if (!state.currentUser.logIn && state.showModalLogin) {
            dispatch(actions.showLogin());
        }
    }, [state.showModalLogin]);

    const useMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tbb1010',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignIn} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logoTiktok')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>

                    <Search />

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 100]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>
                                    <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                    <span>Upload</span>
                                </Button>
                                <Button onClick={handleShow} primary>
                                    Log in
                                </Button>
                            </>
                        )}
                        <Menu
                            items={currentUser ? useMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                            onClick={handleLogout}
                        >
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/61e1ba7dd1b9118f19aacb7064660e45~c5_100x100.jpeg?x-expires=1683799200&x-signature=ii0d4krSwabcLl9YmJmam0gHRj8%3D"
                                    alt="Name"
                                    // fallback="https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s88-c-k-c0x00ffffff-no-rj"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
            {state.showModalLogin && <LoginModal onLogin={handleLogin} onClick={handleHide} className={cx('modal')} />}
        </>
    );
}

export default Header;
