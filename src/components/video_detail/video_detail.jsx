import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <>
            <iframe
                title="youtube video"
                id="ytplayer"
                type="text/html"
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <h1>{video.snippet.title}</h1>
            <h3>{video.snippet.channelTitle}</h3>
            <p>{video.snippet.description}</p>
        </>
    );
};

export default VideoDetail;
