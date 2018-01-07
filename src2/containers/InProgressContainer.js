import { connect } from 'react-redux';
import InProgressComponent from '../components/InProgressComponent';
import { getInprogress } from '../actions/InProgressAction';
import { loadListInprogress } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.InprogressReducer.data,    
    heightAI: state.InprogressReducer.heightAI,
    successfully: state.InprogressReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    load: (userId) => {
        loadListInprogress(dispatch, getInprogress,userId);
    }
});

export default connect (mapStateToProps, mapDispatchToProps) (InProgressComponent);