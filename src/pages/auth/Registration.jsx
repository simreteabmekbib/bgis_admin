import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStructuredSelector } from 'reselect';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';
import { userRegistrationStart } from '../../redux/auth/auth.actions';


const theme = createTheme();

// - what todo here
//     -- ask role
//     -- ask first name
//     -- ask middle name
//     -- ask lastname
//     -- ask password
//     -- ask to confirm password


const Registration = (props) => {

    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
                const registrationModel = {
                        role : data.get('role'),
                        firstname: data.get('firstname'),
                        middlename: data.get('middlename'),
                        lastname: data.get('lastname'),
                        email: data.get('email'),
                        password: data.get('password')
                }
                console.log({
                    role : data.get('role'),
                    firstname: data.get('firstname'),
                    middlename: data.get('middlename'),
                    lastname: data.get('lastname'),
                    email: data.get('email'),
                    password: data.get('password')

                });
                props.registrationStart(registrationModel);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {/* <FormControl
                            fullWidth
                        >
                            <InputLabel id="role_label">Are you a?</InputLabel>
                            <Select
                                fullWidth
                                placeholder='Role'
                                labelId="role_label"
                                id="role"
                                label="Are you a?"
                                name="role"
                                onChange={handleRoleChange}
                                required
                            >
                                <MenuItem value='parent'>Parent</MenuItem>
                                <MenuItem value='existing_student'>Existing Student</MenuItem>
                                <MenuItem value='new_student'>New student, applying for admission.</MenuItem>
                            </Select>
                        </FormControl> */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="First name"
                            name="firstname"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="middlename"
                            label="Middle name"
                            name="middlename"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="Last name"
                            name="lastname"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="confirm_email"
                            label="Confirm Email Address"
                            name="confirm_email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                           
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirm_password"
                            label="Confirm Password"
                            type="password"
                            id="confirm_password"
                           
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/auth/login" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>


            </Container>
        </ThemeProvider>
    );
}

const mapDispatchToProps = dispatch => ({
    registrationStart: (registrationModel) => dispatch(userRegistrationStart(registrationModel))
});

export default connect(null,mapDispatchToProps)(Registration);