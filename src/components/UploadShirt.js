import React, { useState } from 'react';
import api from '../api';
import { Button, Container, TextField, Typography, Paper } from '@mui/material';

function UploadShirt({ refreshShirts }) {
    const [file, setFile] = useState(null);

    const uploadShirt = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await api.post('/upload_shirt', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFile(null);
            // Refresh the shirt list after successful upload
            if (refreshShirts) {
                refreshShirts();
            }
        } catch (error) {
            console.error("Error uploading shirt:", error);
        }
    };

    return (
        <Container component={Paper} elevation={3} style={{ padding: '24px', marginBottom: '16px', backgroundColor: '#ffffff' }}>
            <Typography variant="h4" align="center" gutterBottom>Upload Shirt</Typography>
            <form onSubmit={uploadShirt}>
                <TextField 
                    type="file" 
                    accept=".png" 
                    onChange={(e) => setFile(e.target.files[0])} 
                    fullWidth 
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" disabled={!file} style={{ width: '100%' }}>
                    Upload
                </Button>
            </form>
        </Container>
    );
}

export default UploadShirt;
