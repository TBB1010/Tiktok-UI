/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { Menu, MenuItem } from './Menu';
import config from '@/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '@/components/Icons';
import SuggestedAccounts from '@/components/SuggestedAccounts';
import { actions, useStore } from '@/store';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const [state, dispatch] = useStore();

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('wrapper-scroll')}>
                <Menu className={cx('menu')}>
                    <MenuItem
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                        title="For You"
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                        title="Following"
                    ></MenuItem>
                    <MenuItem
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                        title="Live"
                    ></MenuItem>
                </Menu>
                {!state.currentUser.logIn && (
                    <div className={cx('login')}>
                        <span className={cx('title')}>
                            Log in to follow creators, like <br /> videos, and view comments.
                        </span>
                        <Button className={cx('btn')} outline onClick={() => dispatch(actions.showLogin())}>
                            Log in
                        </Button>
                    </div>
                )}
                <SuggestedAccounts label="Suggested accounts" see="See all" />
                {state.currentUser.logIn && <SuggestedAccounts label="Following accounts" see="See more" />}
            </div>
        </aside>
    );
}

export default Sidebar;
