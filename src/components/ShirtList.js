import React, { useEffect, useState } from 'react';
import api from '../api';
import { Button, List, ListItem, Typography, Paper, Container } from '@mui/material';
import UploadShirt from './UploadShirt';
import VideoStream from './VideoStream'; // Assuming you have a VideoStream component

function ShirtList() {
    const [shirts, setShirts] = useState([]);
    const [selectedShirtIndex, setSelectedShirtIndex] = useState(0);

    const fetchShirts = async () => {
        try {
            const response = await api.get('/shirts');
            setShirts(response.data.shirts);
        } catch (error) {
            console.error("Error fetching shirts:", error);
        }
    };

    useEffect(() => {
        fetchShirts();
    }, []);

    const selectShirt = async (index) => {
        try {
            // Set the selected shirt index in the frontend state
            setSelectedShirtIndex(index);

            // Trigger the video feed update by passing the selected shirt index
        } catch (error) {
            console.error("Error selecting shirt:", error);
        }
    };

    return (
        <Container>
            {/* Shirt Upload Component */}
            <UploadShirt refreshShirts={fetchShirts} />

            {/* Shirt Selection List */}
            <Paper elevation={3} style={{ padding: '24px', marginBottom: '16px', backgroundColor: '#ffffff' }}>
                <Typography variant="h4" align="center" gutterBottom>Select a Shirt</Typography>
                <List>
                    {shirts.map((shirt, index) => (
                        <ListItem key={index} style={{ justifyContent: 'center' }}>
                            <Button 
                                variant="outlined" 
                                color={selectedShirtIndex === index ? "secondary" : "primary"} // Highlight selected shirt
                                onClick={() => selectShirt(index)}
                                style={{ width: '80%' }}
                            >
                                {shirt}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            {/* Video Stream Component */}
            <VideoStream selectedShirtIndex={selectedShirtIndex} />
        </Container>
    );
}

export default ShirtList;
