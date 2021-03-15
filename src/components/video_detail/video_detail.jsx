import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <>
            <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0"
                allowfullscreen
            ></iframe>
            <h1>{video.snippet.title}</h1>
            <h3>{video.snippet.channelTitle}</h3>
            <p>{video.snippet.description}</p>
        </>
    );
};

export default VideoDetail;
