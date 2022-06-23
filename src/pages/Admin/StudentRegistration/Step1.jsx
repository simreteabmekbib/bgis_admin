import React, { useState } from 'react';
import AdminLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import BasicInformation from '../../../components/Registration/BasicInformation';

function Step1() {
  return (
      <AdminLayout>
          <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <BasicInformation nextPage={'/Admin/StudentRegistration/Step2'}/>
    </AdminLayout>

  );
}

export default Step1;
