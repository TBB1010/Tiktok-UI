import WatchVideo from '@/components/WatchVideo/WatchVideo';
import { useEffect, useState } from 'react';
import video1 from '@/assets/videos/video-1.mp4';
import video2 from '@/assets/videos/video-2.mp4';
import video3 from '@/assets/videos/video-3.mp4';

function Following() {
    const [following, setFollowing] = useState([]);

    const videos = [
        {
            id: 1,
            video: video1,
        },
        {
            id: 2,
            video: video2,
        },
        {
            id: 3,
            video: video3,
        },
    ];

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=m&type=less')
            .then((res) => res.json())
            .then((res) => {
                setFollowing(res.data);
            });
    }, []);

    return following.map((result) => videos.map((video) => <WatchVideo key={video.id} none data={result} video={video} />));
}

export default Following;
