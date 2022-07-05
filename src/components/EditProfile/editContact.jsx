import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  TextareaAutosize
} from '@mui/material';

const contact = [
  {
    value: 'email',
    label: 'Email'
  },
  {
    value: 'phoneNumber',
    label: 'Phone Number'
  },
];

import React from 'react'

function EditContact(props) {

  const [values, setValues] = useState({
    email: 'demo@devias.io',
    phone: '0934564345',
    contact: '',
    reason: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
    <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select contact"
                name="contact"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.contact}
                variant="outlined"
              >
                {contact.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Reason for change"
                name="reason"
                onChange={handleChange}
                required
                value={values.reason}
                variant="outlined"
                multiline
                rows={2}
                maxRows={Infinity}
              />
                  {/* <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    
                    /> */}
            </Grid>
          </Grid>
    </>
  )
}

export default EditContact

// export const EditContact = (props) => {
//   const [values, setValues] = usecontact({
//     email: 'demo@devias.io',
//     phone: '0934564345',
//     contact: '',
//     reason: '',
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <>
//     <Grid
//             container
//             spacing={3}
//           >
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Select contact"
//                 name="contact"
//                 onChange={handleChange}
//                 required
//                 select
//                 SelectProps={{ native: true }}
//                 value={values.contact}
//                 variant="outlined"
//               >
//                 {contact.map((option) => (
//                   <option
//                     key={option.value}
//                     value={option.value}
//                   >
//                     {option.label}
//                   </option>
//                 ))}
//               </TextField>
//             </Grid>
//             {/* <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="First name"
//                 name="firstName"
//                 onChange={handleChange}
//                 required
//                 value={values.firstName}
//                 variant="outlined"
//               />
//             </Grid> */}
//             {/* <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Last name"
//                 name="lastName"
//                 onChange={handleChange}
//                 required
//                 value={values.lastName}
//                 variant="outlined"
//               />
//             </Grid> */}
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 onChange={handleChange}
//                 required
//                 value={values.email}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Phone Number"
//                 name="phone"
//                 onChange={handleChange}
//                 type="number"
//                 value={values.phone}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Reason for change"
//                 name="reason"
//                 onChange={handleChange}
//                 required
//                 value={values.reason}
//                 variant="outlined"
//                 multiline
//                 rows={2}
//                 maxRows={Infinity}
//               />
//                   {/* <TextareaAutosize
//                     aria-label="minimum height"
//                     minRows={3}
//                     placeholder="Minimum 3 rows"
                    
//                     /> */}
//             </Grid>
//           </Grid>
//     </>
//   );
// };
