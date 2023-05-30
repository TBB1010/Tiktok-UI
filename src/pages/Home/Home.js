import WatchVideo from '@/components/WatchVideo/WatchVideo';
import { listUser } from '@/components/ListUser/ListUser';

function Home() {
    return listUser.map((video, index) => <WatchVideo key={video.id} data={video} index={index} />);
}

export default Home;
