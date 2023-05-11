import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, icon, title, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
