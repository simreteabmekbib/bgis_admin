import { useState } from 'react';
import {
    Paper, Grid, CssBaseline, Container, AppBar, Toolbar, IconButton, Box,
    Typography, TextField, InputLabel, MenuItem, Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useForm } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AddYourChild = (props) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [child, setChild] = useState('');
    const onSubmit = (data) => {
        console.log(data);
        router.push(props.nextPage);

    }
    const handleChildChange = (event) => {
        setChild(event.target.value);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} columns={12} marginTop={1}>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant='h6' align='left' color='textSecondary' marginTop={2}>
                            Select your child
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={3} md={3}></Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl
                            fullWidth
                        >
                            <InputLabel id="child_label">Child</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Child'
                                labelId="child_label"
                                id="child"
                                {...register('child', { required: 'Required' })}
                                error={!!errors?.child}
                                helperText={errors?.child ? errors.child.message : null}
                                value={child}
                                label="Child"
                                onChange={handleChildChange}
                                required
                            >
                                <MenuItem value='bst240'>(bat240) Biruk Abebe Tewolde</MenuItem>
                                <MenuItem value='rtf230'>(rat230) Ruth Abebe Tewolde</MenuItem>
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

export default AddYourChild;