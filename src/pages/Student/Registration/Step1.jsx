import React, { useState } from 'react';
import StudentLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import BasicInformation from '../../../components/Registration/BasicInformation';

function Step1() {
  return (
      <StudentLayout>
          <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <BasicInformation nextPage={'/Student/Step2'}/>
    </StudentLayout>

  );
}

export default Step1;
