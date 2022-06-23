import React, { useState } from 'react';
import AdminLayout from './layout';  
import {CssBaseline,Typography} from '@mui/material';
import AcademicInformation from '../../components/Registration/Admission/AcademicInformation'

function Step3() {
  return (
      <AdminLayout>
            <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <AcademicInformation nextPage={'/Admin/Step4'}/>
    </AdminLayout>

  );
}

export default Step3;
