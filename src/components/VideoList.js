import React from 'react'
import VideoListItem from '../components/VideoListItem.js'

const VideoList = (props) => {
    return (
       <div>
            {props.videos.map(({id,snippet},index) => <VideoListItem key={index} snippet={snippet} index={index} onVideoSelected={props.onVideoSelected} /> )}
       </div>
    );
}

export default VideoList;