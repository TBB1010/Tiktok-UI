import classNames from "classnames/bind";
import styles from './Following.module.scss'
import Follow from "@/components/SuggestFollow";
import {videos} from "@/components/Videos/video";

const cx = classNames.bind(styles);

function Following() {


    // useEffect(() => {
    //     fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=l&type=less')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setHome(res.data);
    //         });
    // }, []);

    return <div className={cx('wrapper')}>
        {videos.map((video, index) => <Follow key={video.id} data={video}/>)}

    </div>

}

export default Following;
