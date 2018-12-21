import React from 'react'

const VideoListItem = ({snippet,onVideoSelected,index}) => {
    return (
        <div className="media" style={{marginBottom:'3px',cursor:'pointer',userSelect:'none'}} onClick={() => onVideoSelected(index)}>
            <img className="mr-3" style={{width:'10rem'}} src={snippet.thumbnails.medium.url} alt="VideoItem" />
            <div className="media-body">
                <h6 className="mt-0 mb-1">{snippet.title}</h6>
            </div>
        </div>
    );
}

export default VideoListItem;