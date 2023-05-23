import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './WatchVideo.module.scss';
import Image from '@/components/Image';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import AccountPreview from '@/components/SuggestedAccounts/AccountPreview';
import { Wrapper as PoperWrapper } from '@/components/Poper';

const cx = classNames.bind(styles);

function WatchVideo({ none, data }) {
    const [isActive, setIsActive] = useState(false);
    const [follow, setFollow] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive);
        const Accounts = localStorage.getItem('accounts');

        if (Accounts) {
            const account = JSON.parse(Accounts);

            // account.map((acc) => {
            //     if (data.id && acc.id) {
            //         localStorage.setItem(
            //             acc.id,
            //             JSON.stringify({
            //                 likes: [data.id],
            //                 follow: [],
            //             }),
            //         );
            //     }
            // });
        }
    };

    const handleFollow = () => {
        setFollow(!follow);
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
                            <span className={cx('name')}>{data.nickName}</span>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('body')}>
                    <span className={cx('text')}>{data.bio}</span>
                    <strong className={cx('hashtag')}>#chatgpt</strong>
                    <strong className={cx('hashtag')}>#aitools</strong>
                    <h4 className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span>{data.music}</span>
                    </h4>
                </div>
                <div className={cx('container')}>
                    <video className={cx('video')} controls autoPlay={false} src={data.video} />
                    <div className={cx('comment')}>
                        {isActive ? (
                            <FontAwesomeIcon onClick={handleClick} className={cx('active')} icon={faHeart} />
                        ) : (
                            <FontAwesomeIcon onClick={handleClick} className={cx('icon')} icon={faHeart} />
                        )}
                        <span className={cx('value')}>{data.likeCount}</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                        <span className={cx('value')}>{data.commentCount}</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                        <span className={cx('value')}>{data.shareCount}</span>
                    </div>
                </div>
                {follow ? (
                    <Button onClick={handleFollow} className={cx('follow-btn', { none })} outline>
                        Follow
                    </Button>
                ) : (
                    <Button onClick={handleFollow} className={cx('follow-btn', { none })} text>
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
