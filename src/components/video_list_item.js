import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // === const video = props.video;
    console.log(video);
    const imgUrl = video.snippet.thumbnails.high.url;
    return (
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left video-item">
                    <img className="media-object" src={imgUrl} alt="media-object-img"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;