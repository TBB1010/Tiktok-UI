import WatchVideo from '@/components/WatchVideo/WatchVideo';
import { useEffect, useState } from 'react';

function Following() {
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=m&type=less')
            .then((res) => res.json())
            .then((res) => {
                setFollowing(res.data);
            });
    }, []);

    return following.map((result) => <WatchVideo none key={result.id} data={result} />);
}

export default Following;
