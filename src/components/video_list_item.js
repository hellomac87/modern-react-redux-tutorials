import React from 'react';

const VideoListItem = ({video}) => {
    // === const video = props.video;
    console.log(video);
    const imgUrl = video.snippet.thumbnails.high.url;
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
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