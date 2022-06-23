import React, { useState } from 'react';
import AdminLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import ContactAddress from '../../../components/Registration/Admission/ContactAddress'

function Step2() {
  return (
      <AdminLayout>
           <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <ContactAddress nextPage={'/Admin/StudentRegistration/Step3'}/>
    </AdminLayout>

  );
}

export default Step2;
