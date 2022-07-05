import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   }
// ];


import React from 'react'

function EditPassword(props) {

  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
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
                label="Old Password"
                name="oldPassword"
                onChange={handleChange}
                required
                value={values.oldPassword}
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
                label="New Password"
                name="newPassword"
                onChange={handleChange}
                required
                value={values.newPassword}
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
                label="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                required
                value={values.confirmPassword}
                variant="outlined"
              />
            </Grid>
            {/* <Grid
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
            </Grid> */}
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
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
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
    </>
  )
}

export default EditPassword

// export const EditPassword = (props) => {
//   const [values, setValues] = useState({
//         oldPassword: '',
//         newPassword: '',
//         confirmPassword: ''
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
//                 label="Old Password"
//                 name="oldPassword"
//                 onChange={handleChange}
//                 required
//                 value={values.oldPassword}
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
//                 label="New Password"
//                 name="newPassword"
//                 onChange={handleChange}
//                 required
//                 value={values.newPassword}
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
//                 label="Confirm Password"
//                 name="confirmPassword"
//                 onChange={handleChange}
//                 required
//                 value={values.confirmPassword}
//                 variant="outlined"
//               />
//             </Grid>
//             {/* <Grid
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
//             </Grid> */}
//             {/* <Grid
//               item
//               md={6}
//               xs={12}
//             >
//               <TextField
//                 fullWidth
//                 label="Country"
//                 name="country"
//                 onChange={handleChange}
//                 required
//                 value={values.country}
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
//                 label="Select State"
//                 name="state"
//                 onChange={handleChange}
//                 required
//                 select
//                 SelectProps={{ native: true }}
//                 value={values.state}
//                 variant="outlined"
//               >
//                 {states.map((option) => (
//                   <option
//                     key={option.value}
//                     value={option.value}
//                   >
//                     {option.label}
//                   </option>
//                 ))}
//               </TextField>
//             </Grid> */}
//           </Grid>
//     </>
//   );
// };
