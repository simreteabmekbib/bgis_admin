// import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStructuredSelector } from 'reselect';
import { userLoginStart } from '../../redux/auth/auth.actions';
import {
        selectAccountActivated,
        selectUserAuthenticated, selectUserExistChecked,
        selectUserExists,
        selectUserHasPassword
    } from '../../redux/auth/auth.selectors';

const theme = createTheme();

const Login = (props) => {

        const handleSubmit = (event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const loginModel = {
                        username: data.get('email'),
                        password: data.get('password'),
                }
                console.log({
                        username: data.get('email'),
                        password: data.get('password'),
                });
                props.loginStart(loginModel);
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
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                <LockOutlinedIcon />
                                        </Avatar>
                                        <Typography component="h1" variant="h5">
                                                Sign in
                                        </Typography>
                                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                                <TextField
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Email Address"
                                                        name="email"
                                                        autoComplete="email"
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
                                                        autoComplete="current-password"
                                                />
                                                <FormControlLabel
                                                        control={<Checkbox value="remember" color="primary" />}
                                                        label="Remember me"
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
                                                        <Grid item xs>
                                                                <Link href="#" variant="body2">
                                                                        Forgot password?
                                                                </Link>
                                                        </Grid>
                                                        <Grid item>
                                                                <Link href="/auth/Registration" variant="body2">
                                                                        {"Don't have an account? Sign Up"}
                                                                </Link>
                                                        </Grid>
                                                </Grid>
                                        </Box>
                                </Box>
                                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                        </Container>
                </ThemeProvider>
        );
}

const mapStateToProps = createStructuredSelector({
        userExists: selectUserExists,
        userHasPassword: selectUserHasPassword,
        userExistChecked: selectUserExistChecked,
        accountActivated: selectAccountActivated,
        userAuthenticated: selectUserAuthenticated
    })
    const mapDispatchToProps = dispatch => ({
        loginStart: (loginModel) => dispatch(userLoginStart(loginModel))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(Login);
//     export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
