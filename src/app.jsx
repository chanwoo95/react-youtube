import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import './app.css';

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
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
            {selectedVideo && <VideoDetail video={selectedVideo} />}
            <VideoList videos={videos} onVideoClick={selectVideo} />
        </>
    );
}

export default App;
