
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStructuredSelector } from 'reselect';
import api from '../../utils/axios-api';
// import axios from 'axios'
import { Button } from '@mui/material';
import CommonLayout from './layout';
const theme = createTheme();

const Profile = (props) => {

        const handleSubmit = (event) => {
                api.get('https://localhost:7247/api/Home/Health2/health2')
                .then(res => alert(res))
                .catch(error => alert(error))
        };

        return (
                <CommonLayout>
                        Profile Page
                </CommonLayout>
        );
}

const mapStateToProps = createStructuredSelector({
        // userExists: selectUserExists,
        // userHasPassword: selectUserHasPassword,
        // userExistChecked: selectUserExistChecked,
        // accountActivated: selectAccountActivated,
        // userAuthenticated: selectUserAuthenticated
})
const mapDispatchToProps = dispatch => ({
        // loginStart: (loginModel) => dispatch(userLoginStart(loginModel))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
