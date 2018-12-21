import React from 'react'

const VideoDetail = ({ selectedVideo }) => {

    if (!selectedVideo) {
        return (
            <div>
                Loading ....
            </div>
        );
    } else {
        const videosrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
        return (
            <div className="h-75">
                <iframe title={selectedVideo.snippet.title} width="100%" height="100%" src={videosrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h5>{selectedVideo.snippet.title}</h5>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        );

    }
}

export default VideoDetail;