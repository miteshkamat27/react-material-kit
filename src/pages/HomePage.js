import React from 'react';
import FullWidthGrid from '../grids/BreakpointGrid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HomePage = () => {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                    <h1>Home component</h1>
                    <FullWidthGrid />
                </Typography>
            </Container>
        </>
        
    )
}

export default HomePage;