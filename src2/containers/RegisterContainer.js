import { connect } from 'react-redux';
import { register, goLogin } from '../actions/AuthAction';
import RegisterComponent from '../components/RegisterComponent';
import { registered } from '../firebase/actionFirebase';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    register: (email,password) => {
        registered(email,password,dispatch,register)
    },
    goLogin: () => {
        dispatch( goLogin() )
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent);