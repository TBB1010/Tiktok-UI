import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PoperWrapper } from '@/components/Poper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import {useEffect, useState} from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, onClick }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else if (item.separate) {
                            onClick();
                            localStorage.setItem(
                                'user-login',
                                JSON.stringify({
                                    name: '',
                                    password: '',
                                }),
                            );
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PoperWrapper className={cx('menu-poper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBackMenu} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PoperWrapper>
        </div>
    );

    // Reset first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    useEffect(()=>{
        setHistory([{data: items}])
    },[items])

    return (
        <HeadlessTippy
            interactive
            delay={[0, 700]}
            offset={[12, 6]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
