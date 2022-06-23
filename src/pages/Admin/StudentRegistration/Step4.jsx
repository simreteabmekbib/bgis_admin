import React, { useState } from 'react';
import AdminLayout from './layout';  
import {CssBaseline,Typography} from '@mui/material';

function Step4() {
  return (
      <AdminLayout>
            <CssBaseline />
            <Typography variant='h5' align='center' color='textPrimary' marginTop={2}>
                You have completed your admission application.
            </Typography>
    </AdminLayout>

  );
}

export default Step4;
