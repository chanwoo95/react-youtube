import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import './app.css';

function App({ youtube }) {
    const [videos, setVideos] = useState([]);

    const search = (query) => {
        youtube
            .search(query) //
            .then((videos) => setVideos(videos));
    };

    useEffect(() => {
        youtube
            .mostPopular() //
            .then((videos) => setVideos(videos));
    }, []);

    return (
        <>
            <SearchHeader search={search} />
            <VideoList videos={videos} />
        </>
    );
}

export default App;
