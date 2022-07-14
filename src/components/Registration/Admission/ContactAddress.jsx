import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const ContactAddress = (props) => {

    const router = useRouter();
    console.log(router.query.branch);
    console.log(router.query.birthDate);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
        router.push({
            pathname: props.nextPage,
            query: { branch: router.query.branch, birthDate: router.query.birthDate, gender: router.query.gender, nationality: router.query.nationality, gradeLevel: router.query.gradeLevel, phoneNumber: data.phoneNumber, alternativePhoneNumber: data.alternativePhoneNumber,  subcity: data.subcity, woreda: data.woreda, houseNumber: data.house_number}
        }, props.nextPage );

    }

    // useEffect(() => {
    //     console.log(router.query.branch); 
    //   }, [router.query]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} columns={12} marginTop={1}>
            <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                        Contact Information
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>


                <Grid item xs={12} sm={3} md={3}></Grid>
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
                <Grid item xs={12} sm={3} md={3}></Grid>


<Grid item xs={12} sm={3} md={3}></Grid>
<Grid item xs={12} sm={6} md={6}>
    <TextField
        fullWidth
        label="Alternative Phone Number"
        id="alternativePhoneNumber"
        type="tele"
        {...register('alternativePhoneNumber', {
            required: 'Required',
            pattern: {
                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: 'Please use the 0912****** format ',

            }

        })}
        error={!!errors?.alternativePhoneNumber}
        helperText={errors?.alternativePhoneNumber ? errors.alternativePhoneNumber.message : null}
        required />
</Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                        Home Address
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField fullWidth label="Sub-city" id="subcity" required
                        {...register('subcity', { required: 'Required' })}
                        error={!!errors?.subcity}
                        helperText={errors?.subcity ? errors.subcity.message : null}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField fullWidth label="Woreda" id="woreda" required
                        {...register('woreda', { required: 'Required' })}
                        error={!!errors?.woreda}
                        helperText={errors?.woreda ? errors.woreda.message : null}
                    />

                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField fullWidth label="House number" id="house_number" required
                        {...register('house_number', { required: 'Required' })}
                        error={!!errors?.house_number}
                        helperText={errors?.house_number ? errors.house_number.message : null}
                    />

                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
            </Grid>
            <Box sx={{ marginTop: 7, marginBottom: 7 }} display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="success" align='center' size="large" type="submit" >
                    Next
                </Button>
            </Box>

        </form >
    );

}

export default ContactAddress;