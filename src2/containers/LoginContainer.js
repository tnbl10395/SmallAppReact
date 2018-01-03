import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import { goHome, register, goRegister, login } from '../actions/AuthAction';
import { logined } from '../firebase/actionFirebase';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        logined(email,password,dispatch,login);
    },
    goRegister: () => {
        dispatch( goRegister() )
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);