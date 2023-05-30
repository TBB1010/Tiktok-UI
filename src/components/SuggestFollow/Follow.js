/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import styles from './Follow.module.scss';
import Image from '@/components/Image';
import Button from '@/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { actions, useStore } from '@/store';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Follow({ data }) {
    const [state, dispatch] = useStore();
    const refVideo = useRef(null);

    const handelPlayVideo = () => {
        refVideo.current.play();
    };

    const handelStopVideo = () => {
        refVideo.current.pause();
    };

    const handleFollow = () => {
        if (state.currentUser.logIn) {
        } else {
            dispatch(actions.showLogin());
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <video
                        ref={refVideo}
                        muted
                        className={cx('video')}
                        width="100%"
                        height="100%"
                        src={data.video.video}
                        onMouseEnter={handelPlayVideo}
                        onMouseLeave={handelStopVideo}
                    />
                </div>
                <div className={cx('info')} onMouseEnter={handelPlayVideo} onMouseLeave={handelStopVideo}>
                    <Image src={data.avatar} className={cx('avatar')} />
                    <h5 className={cx('fullName')}>{data.fullName}</h5>
                    <span>
                        <span className={cx('nickName')}>{data.nickName}</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </span>
                    <Button className={cx('btn')} onClick={handleFollow} primary>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Follow;
