import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';





const AcademicInformation = (props) => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        router.push(props.nextPage);

    }
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // console.log(selectedFile.name)
    };
    const onFileUpload = (event) => {
        console.log('hello');
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const fileData = () => {

        if (selectedFile) {

            return (
                <span>
                    <Grid container spacing={3} columns={12}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='body1' align='left' color='textSecondary' marginTop={2}>
                                {selectedFile.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Button variant="contained" color="primary"
                                fullWidth
                                onClick={onFileUpload}
                            >
                                Upload
                            </Button>
                        </Grid>
                    </Grid>

                </span>
            );
        } else {
            return (
                <span>
                    <Grid container spacing={3} columns={12}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='body1' align='left' color='textSecondary' marginTop={2}>
                                Upload your report card
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <input
                                style={{ display: "none" }}
                                id="contained-button-file"
                                type="file"
                                onChange={onFileChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary"
                                    fullWidth
                                    component="span"
                                >
                                    Choose File
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                </span>




            );
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} columns={12} marginTop={1}>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                        Academic Information
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        label="Average result of the previous academic year"
                        fullWidth
                        id="average_result"
                        required
                        {...register('average_result', { required: 'Required' })}
                        error={!!errors?.average_result}
                        helperText={errors?.average_result ? errors.average_result.message : null}
                    />
                </Grid>
                <Grid item xs={12} sm={3} md={3}></Grid>

                <Grid item xs={12} sm={3} md={3}></Grid>
                <Grid item xs={12} sm={6} md={6}>
                    {fileData()}

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
export default AcademicInformation;