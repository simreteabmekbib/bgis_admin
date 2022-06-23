import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectUserId
} from '../../redux/auth/auth.selectors';

const RegistrationSuccess = (props) => {
    const userId = props.userId;

    const registrationSuccess =() =>{
        if(userId){
            return (
                <h1>Registration successful. Here is your userId: {userId}</h1>
                
            );
        }
        else{
            return (
                <h1>Please complete your registration.</h1>
                
            );
        }
    };
    
    return (
        <span>
        {registrationSuccess()}
        </span>
    );
}

const mapStateToProps = createStructuredSelector({
    userId:selectUserId
})
export default connect(mapStateToProps)(RegistrationSuccess);