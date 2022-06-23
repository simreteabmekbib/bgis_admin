import { useState } from 'react';
import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicInformation = (props) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [gradeLevel, setGradeLevel] = useState('');
    const [gender, setGender] = useState('');
    const onSubmit = (data) => {
        console.log(data);
        router.push(props.nextPage);

    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleGradeLevelChange = (event) => {
        setGradeLevel(event.target.value);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} columns={12} marginTop={1}>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                            Basic Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disableFuture
                                fullwidth
                                label="Date of Birth"
                                {...register('birth_date', { required: 'Required' })}
                                error={!!errors?.birth_date}
                                helperText={errors?.birth_date ? errors.birth_date.message : null}
                                value={selectedDate}
                                onChange={(newValue) => {
                                    setSelectedDate(newValue);
                                }}
                                renderInput={(params) => <TextField sx={{ width: '100%' }} required {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="gender_label">Gender</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Gender'
                                labelId="gender_label"
                                id="gender"
                                {...register('gender', { required: 'Required' })}
                                error={!!errors?.gender}
                                helperText={errors?.gender ? errors.gender.message : null}
                                value={gender}
                                label="Gender"
                                onChange={handleGenderChange}
                                required
                            >
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            fullWidth label="Nationality" id="nationality" required
                            {...register('nationality', { required: 'Required' })}
                            error={!!errors?.nationality}
                            helperText={errors?.nationality ? errors.nationality.message : null}
                        />

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="grade_level">Expected Grade Level</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Expected Grade Level'
                                labelId="grade_level"
                                id="grade_level"
                                value={gradeLevel}
                                {...register('grade_level', { required: 'Required' })}
                                error={!!errors?.grade_level}
                                helperText={errors?.grade_level ? errors.grade_level.message : null}
                                label="Expected Grade Level"
                                onChange={handleGradeLevelChange}
                                required
                            >
                                <MenuItem value='one'>1</MenuItem>
                                <MenuItem value='two'>2</MenuItem>
                                <MenuItem value='three'>3</MenuItem>
                                <MenuItem value='four'>4</MenuItem>
                                <MenuItem value='five'>5</MenuItem>
                                <MenuItem value='six'>6</MenuItem>
                                <MenuItem value='seven'>7</MenuItem>
                                <MenuItem value='eight'>8</MenuItem>
                                <MenuItem value='nine'>9</MenuItem>
                                <MenuItem value='ten'>10</MenuItem>
                                <MenuItem value='11'>11</MenuItem>
                                <MenuItem value='12'>12</MenuItem>
                            </Select>
                        </FormControl>

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

export default BasicInformation;