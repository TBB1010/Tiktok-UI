import classNames from "classnames/bind";
import styles from './Follow.module.scss'
import Image from "@/components/Image";
import Button from "@/components/Button";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Follow({data}) {
    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('content')}>
                <video className={cx('video')} width="100%" height="100%" src={data.video}/>
            </div>
            <div className={cx('info')}>
                <Image src={data.avatar} className={cx('avatar')}/>
                <h5 className={cx('fullName')}>{data.fullName}</h5>
                <span>
                    <span className={cx('nickName')}>{data.nickName}</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </span>
                <Button className={cx('btn')} primary>Follow</Button>
            </div>
        </div>
    </div>)
}

export default Follow;