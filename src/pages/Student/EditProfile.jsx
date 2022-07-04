import { Button } from '@mui/material';
import React, { useState } from 'react';
import StudentLayout from './layout';
import Account  from './profile/edit';


function EditProfile() {

  return (
      <StudentLayout>
            <Account />
    </StudentLayout>

  );
}

export default EditProfile;
