import React from 'react';

const VideoItem = (props) => (
    <li className="video-item">
        <h1 className="video-title">{props.video.snippet.title}</h1>
        <h3>{props.video.snippet.channelTitle}</h3>
        <img src={props.video.snippet.thumbnails.medium.url} />
        {console.log(props)}
    </li>
);

export default VideoItem;
