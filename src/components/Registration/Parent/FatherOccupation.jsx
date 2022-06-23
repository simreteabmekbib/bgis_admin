import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';






const FatherOccupation = (props) => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        router.push(props.nextPage);

    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} columns={12} marginTop={1}>

                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                        Father Occupation
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>

                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        label="Occupation"
                        id="occupation" required

                        {...register('occupation', { required: 'Required' })}
                        error={!!errors?.occupation}
                        helperText={errors?.occupation ? errors.occupation.message : null}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>

                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        label="Name of work place"
                        id="name_work_place" required

                        {...register('name_work_place', { required: 'Required' })}
                        error={!!errors?.name_work_place}
                        helperText={errors?.name_work_place ? errors.name_work_place.message : null}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>

                

                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        id="email"
                        type="email"
                        {...register('email', { required: 'Required' })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                        required />
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
                        label="Office Phone Number"
                        id="o_phoneNumber"
                        type="tele"
                        {...register('o_phoneNumber', {
                            required: 'Required',
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                                message: 'Please use the 0912****** format ',

                            }

                        })}
                        error={!!errors?.o_phoneNumber}
                        helperText={errors?.o_phoneNumber ? errors.o_phoneNumber.message : null}
                        required />
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>



            </Grid>
            <Box sx={{ marginTop: 7, marginBottom: 7 }} display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="success" align='center' size="large" type="submit" >
                    Next
                </Button>
            </Box>
        </form>
    );

}
export default FatherOccupation;