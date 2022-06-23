import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';






const AddStudentHealth = (props) => {

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
                        Please state any important medical information about your child. 
                        Please write "none" in the text box, if you don't have any medical Information
                        to share with us.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        maxRows={10}
                        label="Student health status"
                        id="student_health" 
                        required

                        {...register('student_health', { required: 'Required' })}
                        error={!!errors?.student_health}
                        helperText={errors?.student_health ? errors.student_health.message : null}
                        
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
export default AddStudentHealth;