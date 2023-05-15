import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

// import video1 from '@/assets/videos/video-1.mp4';
// import video2 from '@/assets/videos/video-2.mp4';
import video3 from '@/assets/videos/video-3.mp4';
import styles from './WatchVideo.module.scss';
import Image from '@/components/Image';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/Button';
import AccountPreview from '@/components/SuggestedAccounts/AccountPreview';
import { Wrapper as PoperWrapper } from '@/components/Poper';

const cx = classNames.bind(styles);

function WatchVideo({ none, data }) {
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

    // const videos = [
    //     {
    //         id: 1,
    //         video: video1,
    //     },
    //     {
    //         id: 2,
    //         video: video2,
    //     },
    //     {
    //         id: 3,
    //         video: video3,
    //     },
    // ];

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
                            <strong className={cx('nickname')}>{data.full_name}</strong>
                            <span className={cx('name')}>{data.nickname}</span>
                        </div>
                    </HeadlessTippy>
                </div>
                <div className={cx('body')}>
                    <span className={cx('text')}>AI version of CANVA is INSANE! 🤯</span>
                    <strong className={cx('hashtag')}>#chatgpt</strong>
                    <strong className={cx('hashtag')}>#aitools</strong>
                    <h4 className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <span>Every Single Thing - Homeshake</span>
                    </h4>
                </div>
                <div className={cx('container')}>
                    <video className={cx('video')} controls src={video3} />
                    <div className={cx('comment')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                        <span className={cx('value')}>94.23M</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                        <span className={cx('value')}>87248.3k</span>
                        <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                        <span className={cx('value')}>34.4M</span>
                    </div>
                </div>
                <Button className={cx('follow-btn', { none })} outline>
                    Follow
                </Button>
            </div>
        </div>
    );
}

WatchVideo.propTypes = {
    data: PropTypes.object.isRequired,
    none: PropTypes.bool,
};

export default WatchVideo;
