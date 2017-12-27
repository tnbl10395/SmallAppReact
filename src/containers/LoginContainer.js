
import LoginComponent from '../components/LoginComponent.js';
import { connect } from 'react-redux';
import { login } from '../actions/LoginAction.js';

const mapStateToProps = (state) => {
    return {
        auth: state.loginReducers.checkAuth
    } 
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin:(username, password) => {
            dispatch(login(username, password));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
// export default connect(
//     state => {
//         return {
//             checkAuth: state.checkAuth
//         }
//     },
//     dispatch => {
//         return {
//             onLogin: (username,password) => dispatch( login(username,password) )
//         }
//     }
// )(LoginComponent)




