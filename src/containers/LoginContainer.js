
import LoginComponent from '../components/LoginComponent.js';
import { connect } from 'react-redux';
import { login } from '../actions/LoginAction.js';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
        // auth: state.loginReducers.checkAuth
});

const mapDispatchToProps = dispatch => ({
    onLogin: () => dispatch(NavigationActions.navigate({routeName:'HomeScreen'})),
  });

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);





