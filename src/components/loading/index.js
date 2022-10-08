import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './styles.scss'

export default function Loader({className = ''}) {
    return (
        <div className='loading-container'>
          <Box sx={{ display: 'flex' }}>
                <CircularProgress className={className}  />
            </Box>
        </div>
    );
}
