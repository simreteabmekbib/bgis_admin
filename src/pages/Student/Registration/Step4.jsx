import React, { useState } from 'react';
import StudentLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';

function Step4() {
  return (
      <StudentLayout>
            <CssBaseline />
            <Typography variant='h5' align='center' color='textPrimary' marginTop={2}>
                You have completed your admission application.
            </Typography>
    </StudentLayout>

  );
}

export default Step4;
