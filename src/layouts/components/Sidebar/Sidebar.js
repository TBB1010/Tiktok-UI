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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
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
            <SuggestedAccounts label="Suggested accounts" see="See all" />
            <SuggestedAccounts label="Following accounts" see="See more" />
        </aside>
    );
}

export default Sidebar;
