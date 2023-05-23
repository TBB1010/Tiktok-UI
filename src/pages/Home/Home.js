import WatchVideo from '@/components/WatchVideo/WatchVideo';
import { videos } from '@/components/Videos/video';
function Home() {
    // useEffect(() => {
    //     fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=l&type=less')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setHome(res.data);
    //         });
    // }, []);

    return videos.map((video, index) => <WatchVideo key={video.id} data={video} index={index} />);
}

export default Home;
