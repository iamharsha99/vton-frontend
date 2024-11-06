import React, { useState, useEffect } from 'react';
import api from '../api';
import { Card, Typography } from '@mui/material';

function VideoStream({ selectedShirtIndex }) {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        if (selectedShirtIndex !== undefined) {
            // Add a timestamp to avoid caching issues
            const streamUrl = `${api.defaults.baseURL}/stream_video_feed?shirt_index=${selectedShirtIndex}`;
            setVideoUrl(streamUrl);
        }
    }, [selectedShirtIndex]);

    const handleImageError = (e) => {
        console.error('Error loading the image', e);
    };

    return (
        <Card elevation={3} style={{ padding: '24px', textAlign: 'center', marginTop: '16px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" gutterBottom>Live Video Stream</Typography>
            <img
                src={videoUrl}
                alt="Selected shirt overlay"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                onError={handleImageError} // Handle image error (e.g., file not found)
            />
        </Card>
    );
}

export default VideoStream;
