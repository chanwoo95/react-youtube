import React from 'react';

const VideoItem = (props) => (
    <>
        <h1>{props.video.snippet.channelTitle}</h1>
        <div>{props.video.thumbnails}</div>
        {console.log(props)}
    </>
);

export default VideoItem;
