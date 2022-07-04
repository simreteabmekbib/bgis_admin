import React, { useState } from 'react';
import AdminLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import BasicInformation from '../../../components/Registration/BasicInfoAdmin';

function Step1() {
  return (
      <AdminLayout>
          <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admin Registration
            </Typography>
            <BasicInformation nextPage={'/Admin/AdminRegistration/Step2'}/>
    </AdminLayout>

  );
}

export default Step1;
