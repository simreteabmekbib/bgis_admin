import { forwardRef, useState } from 'react';
import * as React from 'react';
import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import Api from '../../utils/axios-api'
import AdminLayout from './layout';

const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))




function AddUser() {
    const [role, setRole] = React.useState('');
    const [imgSrc, setImgSrc] = useState('/assets/img/up1.jpg')
    const [date, setDate] = React.useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const onChange = file => {
        const reader = new FileReader()
        const { files } = file.target
        if (files && files.length !== 0) {
            reader.onload = () => setImgSrc(reader.result)
            reader.readAsDataURL(files[0])
        }
    }

    // const handleSubmit = (e) => {
    //     Api({
    //         url: 'sdhvbkbfv',
    //         data: json
    //     })
    //     .then(res => {

    //     })
    //     .catch(error => {

    //     })
    // }

    return (
        <AdminLayout>
            <CssBaseline />
            {/* <Navbar/> */}
            <Container>
                <Typography variant='h3' align='center' color='textPrimary' marginTop={2}>
                    Register Admin
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <Stack spacing={2} marginTop={2} direction="row" display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <img className="Cirimage" src={imgSrc} />
                        </Box>
                        <Box>
                            <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                                Upload Photo
                                <input
                                    hidden
                                    type='file'
                                    onChange={onChange}
                                    accept='image/png, image/jpeg'
                                    id='account-settings-upload-image'
                                />
                            </ButtonStyled>
                        </Box>
                    </Stack> */}
                    <Grid container spacing={3} columns={12} marginTop={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth label="Full Name" id="fullName" required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth label="UserName" id="userName" required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Birth Date"
                                        value={date}
                                        onChange={(newDate) => {
                                        setDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField fullWidth required {...params} />}
                                    />
                                </LocalizationProvider> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                id="email"
                                type="email"
                                {...register('email', { required: 'Required' })}
                                error={!!errors?.email}
                                helperText={errors?.email ? errors.email.message : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                id="phoneNumber"
                                type="tele"
                                {...register('phoneNumber', {
                                    required: 'Required',
                                    pattern: {
                                        value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                        message: 'Please use the 0912****** format ',

                                    }

                                })}
                                error={!!errors?.phoneNumber}
                                helperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
                                required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth label="Address" id="address" required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                fullWidth
                                label="Password"
                                id="password"
                                type="password"
                                required />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} >
                            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Role'
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={role}
                                label="role"
                                onChange={handleChange}
                                required>
                                <MenuItem value='admin'>Adminstrator</MenuItem>
                                <MenuItem value='teacher'>Teacher</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: 7, marginBottom: 7 }} display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" color="success" align='center' size="large" type="submit" >
                            Create
                        </Button>
                    </Box>
                </form>
            </Container>
        </AdminLayout>
    )
}

export default AddUser
