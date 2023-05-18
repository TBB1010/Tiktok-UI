import WatchVideo from '@/components/WatchVideo/WatchVideo';
// import video1 from '@/assets/videos/video-1.mp4';
// import video2 from '@/assets/videos/video-2.mp4';
// import video3 from '@/assets/videos/video-3.mp4';
import { useEffect, useState } from 'react';

function Home() {
    const [home, setHome] = useState([]);
    // const [video, setVideo] = useState(video3);

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

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=l&type=less')
            .then((res) => res.json())
            .then((res) => {
                setHome(res.data);
            });
    }, []);

    return home.map((result,index) => <WatchVideo key={result.id} data={result} index={index}/>);
}

export default Home;
