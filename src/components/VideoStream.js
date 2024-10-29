import React, { useState, useEffect } from 'react';
import api from '../api';
import { Card, CircularProgress, Typography } from '@mui/material';

function VideoStream({ selectedShirtIndex }) {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        if (selectedShirtIndex !== undefined) {
            const streamUrl = `${api.defaults.baseURL}/stream_video_feed?shirt_index=${selectedShirtIndex}`;
            setVideoUrl(streamUrl);
        }
    }, [selectedShirtIndex]);

    return (
        <Card elevation={3} style={{ padding: '24px', textAlign: 'center', marginTop: '16px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" gutterBottom>Live Video Stream</Typography>
            {videoUrl ? (
                <img
                    src={videoUrl}
                    alt="Video stream with selected shirt"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    onError={(e) => { e.target.src = ''; }}
                />
            ) : (
                <CircularProgress style={{ margin: '20px' }} />
            )}
        </Card>
    );
}

export default VideoStream;
