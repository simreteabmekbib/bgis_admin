import React, { useState } from 'react';
import AdminLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';

function Step3() {
  return (
      <AdminLayout>
            <CssBaseline />
            <Typography variant='h5' align='center' color='textPrimary' marginTop={2}>
                You have completed the registration of the admin.
            </Typography>
    </AdminLayout>

  );
}

export default Step3;
