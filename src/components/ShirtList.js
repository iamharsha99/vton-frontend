import React, { useEffect, useState } from 'react';
import api from '../api';
import { Button, List, ListItem, Typography, Paper } from '@mui/material';

function ShirtList({ setSelectedShirtIndex }) {
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        const fetchShirts = async () => {
            const response = await api.get('/shirts');
            setShirts(response.data.shirts);
        };
        fetchShirts();
    }, []);

    const selectShirt = async (index) => {
        await api.post('/shirts', { shirt_index: index });
        setSelectedShirtIndex(index);
    };

    return (
        <Paper elevation={3} style={{ padding: '24px', marginBottom: '16px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" align="center" gutterBottom>Select a Shirt</Typography>
            <List>
                {shirts.map((shirt, index) => (
                    <ListItem key={index} style={{ justifyContent: 'center' }}>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={() => selectShirt(index)}
                            style={{ width: '80%' }}  // Adjust button width
                        >
                            {shirt}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default ShirtList;
