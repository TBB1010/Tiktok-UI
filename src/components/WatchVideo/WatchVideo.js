/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import styles from './WatchVideo.module.scss';
import Image from '@/components/Image';
import { faBookmark, faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import AccountPreview from '@/components/SuggestedAccounts/AccountPreview';
import { Wrapper as PoperWrapper } from '@/components/Poper';
import { actions, useStore } from '@/store';

const cx = classNames.bind(styles);

function WatchVideo({ none, data, onchange, oldVolume, setOldVolume, volumeValue, setVolume }) {
    const [state, dispatch] = useStore();
    const [isActive, setIsActive] = useState(false);
    const [follow, setFollow] = useState(true);
    const accounts = JSON.parse(localStorage.getItem('accounts'));
    const userLogin = JSON.parse(localStorage.getItem('user-login'));

    const handleClickActive = () => {
        setIsActive(!isActive);
        accounts.map((account) => {
            if (account.name === userLogin.name && account.password === userLogin.password) {
                account.liked.splice(account.liked.indexOf(data.video.id), 1);
                localStorage.setItem('accounts', JSON.stringify(accounts));
            }
        });
    }; 

    const handleClickIcon = () => {
        if (state.currentUser.logIn) {
            setIsActive(!isActive);
            accounts.map((account) => {
                if (account.name === userLogin.name && account.password === userLogin.password) {
                    account.liked.push(data.video.id);
                    localStorage.setItem('accounts', JSON.stringify(accounts));
                }
            });
        } else {
            dispatch(actions.showLogin());
        }
    };

    const handleFollow = () => {
        if (state.currentUser.logIn) {
            setFollow(!follow);
            accounts.map((account) => {
                if (account.name === userLogin.name && account.password === userLogin.password) {
                    account.following.push(data.id);
                    localStorage.setItem('accounts', JSON.stringify(accounts));
                }
            });
        } else {
            dispatch(actions.showLogin());
        }
    };

    const handleFollowing = () => {
        setFollow(!follow);
        accounts.map((account) => {
            if (account.name === userLogin.name && account.password === userLogin.password) {
                account.following.splice(account.following.indexOf(data.id), 1);
                localStorage.setItem('accounts', JSON.stringify(accounts));
            }
        });
    };

    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PoperWrapper>
                <AccountPreview />
                <div>
                    <span className={cx('bio')}>
                        🚀 Review Websites /Apps #1 🎯
                        <br />
                        👇🏻 Website để thuê các freelancers 👇🏻
                    </span>
                </div>
            </PoperWrapper>
        </div>
    );

    const refVideo = useRef(null);

    const handelPlayVideo = () => {
        refVideo.current.play();
    };

    const handelStopVideo = () => {
        refVideo.current.pause();
    };

    useEffect(() => {
        if (state.currentUser.logIn) {
            state.currentUser.liked.includes(data.video.id) ? setIsActive(true) : setIsActive(false);
            state.currentUser.following.includes(data.id) ? setFollow(false) : setFollow(true);
        } else {
            setIsActive(false);
            setFollow(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.currentUser.logIn]);

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('content')}>
                <div>
                    <HeadlessTippy
                        interactive
                        delay={[800, 0]}
                        offset={[-80, 35]}
                        placement="bottom-start"
                        render={renderPreview}
                    >
                        <div className={cx('title')}>
                            <strong className={cx('nickname')}>{data.fullName}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            <span className={cx('name')}>{data.nickName}</span>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('body')}>
                    <span className={cx('text')}>{data.video.bio}</span>
                    <strong className={cx('hashtag')}>#chatgpt</strong>
                    <strong className={cx('hashtag')}>#aitools</strong>
                    <h4 className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span>{data.video.music}</span>
                    </h4>
                </div>
                <div className={cx('container')}>
                    <video
                        loop
                        ref={refVideo}
                        className={cx('video')}
                        src={data.video.video}
                        onMouseEnter={handelPlayVideo}
                        onMouseLeave={handelStopVideo}
                    />
                    <div className={cx('comment')}>
                        {isActive ? (
                            <FontAwesomeIcon onClick={handleClickActive} className={cx('active')} icon={faHeart} />
                        ) : (
                            <FontAwesomeIcon onClick={handleClickIcon} className={cx('icon')} icon={faHeart} />
                        )}
                        <span className={cx('value')}>{data.video.likeCount}</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                        <span className={cx('value')}>{data.video.commentCount}</span>
                        {isActive ? (
                            <FontAwesomeIcon onClick={handleClickActive} className={cx('bookmark')} icon={faBookmark} />
                        ) : (
                            <FontAwesomeIcon onClick={handleClickIcon} className={cx('icon')} icon={faBookmark} />
                        )}
                        <span className={cx('value')}>{data.video.bookmarkCount}</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                        <span className={cx('value')}>{data.video.shareCount}</span>
                    </div>
                </div>
                {follow ? (
                    <Button onClick={handleFollow} className={cx('follow-btn', { none })} outline>
                        Follow
                    </Button>
                ) : (
                    <Button onClick={handleFollowing} className={cx('follow-btn', { none })} text>
                        Following
                    </Button>
                )}
            </div>
        </div>
    );
}

WatchVideo.propTypes = {
    data: PropTypes.object.isRequired,
    none: PropTypes.bool,
};

export default WatchVideo;
