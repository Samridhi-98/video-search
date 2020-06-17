import './VideoList.css';
import React from 'react';



const VideoItem = ({videoprops , onVideoSelect}) => {
    return(
        <div onClick={()=> onVideoSelect(videoprops)} className=" video-item item">
            <img className="ui image" src={videoprops.snippet.thumbnails.medium.url} alt={videoprops.snippet.title} />
           <div className="content">
                {/* {props.videoprops.snippet.title} */}
               <div className="header">{videoprops.snippet.title}</div>
           </div>
        </div>
    );
}

export default VideoItem;