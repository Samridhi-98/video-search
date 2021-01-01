import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map(video => {
        return <VideoItem
            videoprops={video}
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
        />;
    });

    return (
        <div className=" ui relaxed divided list" >
            { /* We have {videos.length}  search results. */}
            { renderedList}
        </div>
    );
}

export default VideoList;