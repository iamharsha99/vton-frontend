import React, { useState } from 'react';
import ShirtList from './ShirtList';
import VideoStream from './VideoStream';
import { Container } from '@mui/material';

function ShirtSelector() {
    const [selectedShirtIndex, setSelectedShirtIndex] = useState(0);

    return (
        <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ShirtList setSelectedShirtIndex={setSelectedShirtIndex} />
            <VideoStream selectedShirtIndex={selectedShirtIndex} />
        </Container>
    );
}

export default ShirtSelector;
