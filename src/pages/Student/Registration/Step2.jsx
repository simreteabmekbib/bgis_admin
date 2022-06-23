import React, { useState } from 'react';
import StudentLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import ContactAddress from '../../../components/Registration/Admission/ContactAddress'

function Step2() {
  return (
      <StudentLayout>
           <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <ContactAddress nextPage={'/Student/Step3'}/>
    </StudentLayout>

  );
}

export default Step2;
