import React from 'react';
import styles from '../video_item/video_item.module.css';

const VideoItem = ({ video }) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img
                className={styles.thumbnail}
                src={video.snippet.thumbnails.medium.url}
                alt="video_thumbnails"
            />

            <div className={styles.metadata}>
                <p className={styles.title}>{video.snippet.title}</p>
                <p className={styles.channel}>{video.snippet.channelTitle}</p>
            </div>
        </div>
    </li>
);

export default VideoItem;
