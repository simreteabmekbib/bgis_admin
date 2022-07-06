import React, { useState } from 'react';
import StudentLayout from '../layout';  
import {CssBaseline,Typography} from '@mui/material';
import AcademicInformation from '../../../components/Registration/Admission/AcademicInformation'

function Step3() {
  return (
      <StudentLayout>
            <CssBaseline />
            <Typography variant='h2' align='center' color='textPrimary' marginTop={2}>
                Admission Form
            </Typography>
            <AcademicInformation nextPage={'/Student/Registration/Step4'}/>
    </StudentLayout>

  );
}

export default Step3;
