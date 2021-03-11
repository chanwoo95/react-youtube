import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import './app.css';

function App() {
    const [videos, setVideos] = useState([]);

    const search = (query) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=videos&key=AIzaSyBpXbgoPSkptnIkOZJHPYWzn9L-yEUKuus`,
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) =>
                result.items.map((item) => ({ ...item, id: item.id.videoId })),
            )
            .then((items) => setVideos(items))
            .catch((error) => console.log('error', error));
    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyBpXbgoPSkptnIkOZJHPYWzn9L-yEUKuus',
            requestOptions,
        )
            .then((response) => response.json())
            .then((result) => setVideos(result.items))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <>
            <SearchHeader search={search} />
            <VideoList videos={videos} />
        </>
    );
}

export default App;
