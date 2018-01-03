import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    goBack: () => {
        dispatch( goBack() )
    }
}); 

export default connect (mapStateToProps,mapDispatchToProps)(HomeComponent)