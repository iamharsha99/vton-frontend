// App.js
import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import ShirtSelector from './components/ShirtSelector';

function App() {
    return (
        <>
            <CssBaseline />
            <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <Typography variant="h3" gutterBottom style={{ color: '#333' }}>
                    Virtual TryOn
                </Typography>
                <ShirtSelector />
            </div>
        </>
    );
}

export default App;
