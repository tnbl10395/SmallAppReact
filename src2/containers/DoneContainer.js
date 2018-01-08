import { connect } from 'react-redux';
import DoneComponent from '../components/DoneComponent';
import { getDone,moveTaskTodo } from '../actions/DoneAction';
import { loadListInprogress, moveTaskToTodo } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.DoneReducer.data,    
    heightAI: state.DoneReducer.heightAI,
    successfully: state.DoneReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    load: (userId) => {
        loadListInprogress(dispatch, getDone, userId);
    },
    move: (id,title,content,userId) => {
        moveTaskToTodo(dispatch,moveTaskTodo,id,title,content,userId)
    }
});

export default connect (mapStateToProps, mapDispatchToProps) (DoneComponent);