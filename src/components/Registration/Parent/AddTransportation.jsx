import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';






const AddTransportation = (props) => {

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
                            Add Transportation Care Taker
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            id="firstname" required

                            {...register('firstname', { required: 'Required' })}
                            error={!!errors?.firstname}
                            helperText={errors?.firstname ? errors.firstname.message : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth label="Middle Name" id="middlename" required
                            {...register('middlename', { required: 'Required' })}
                            error={!!errors?.middlename}
                            helperText={errors?.middlename ? errors.middlename.message : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth label="Last Name" id="lastname" required
                            {...register('lastname', { required: 'Required' })}
                            error={!!errors?.lastname}
                            helperText={errors?.lastname ? errors.lastname.message : null}
                        />

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth label="Relationship to the student" id="relationship" required
                            {...register('relationship', { required: 'Required' })}
                            error={!!errors?.relationship}
                            helperText={errors?.relationship ? errors.relationship.message : null}
                        />

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
export default AddTransportation;