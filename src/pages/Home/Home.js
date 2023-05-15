import WatchVideo from '@/components/WatchVideo/WatchVideo';
import { useEffect, useState } from 'react';



function Home() {
    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=l&type=less')
            .then((res) => res.json())
            .then((res) => {
                setHome(res.data);
            });
    }, []);


    return home.map((result) => <WatchVideo key={result.id} data={result} />);
}

export default Home;
