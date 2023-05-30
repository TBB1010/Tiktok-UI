/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Follow from '@/components/SuggestFollow';
import { listUser } from '@/components/ListUser/ListUser';
import WatchVideo from '@/components/WatchVideo';
import { useStore } from '@/store';

const cx = classNames.bind(styles);

function Following() {
    const [state, dispatch] = useStore();
    return (
        <div className={cx('wrapper')}>
            {listUser.map((video) =>
                state.currentUser.logIn ? (
                    <WatchVideo key={video.id} data={video} none />
                ) : (
                    <Follow key={video.id} data={video} />
                ),
            )}
        </div>
    );
}

export default Following;
