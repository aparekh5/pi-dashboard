import React from 'react';

const Camera = () => {
    return (
        <div>
            <h1>Camera Stream</h1>
            <img src="http://raspberrypi_ip_address:8000/video_feed" alt="camera_stream" />
        </div>
    );
};

export default Camera;
