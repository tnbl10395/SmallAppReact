import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { moveTaskInProgress } from '../actions/InProgressAction';
import { getTodo, addTodo } from '../actions/ToDoAction';
import { loadListTodo, moveTaskToInProgress, addListTodo } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.TodoReducer.data,
    heightAI: state.TodoReducer.heightAI,
    successfully: state.TodoReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    onLoad: (userId) => {
        loadListTodo(dispatch,getTodo,userId) 
    }, 
    moveTaskInProgress: (id,title,content,userID) => {
        moveTaskToInProgress(dispatch,moveTaskInProgress,id,title,content,userID)
    },
    addTodo: (title,content,userID) => {
        addListTodo(dispatch,addTodo,title,content,userID)
    }
     
});

// async function load(dispatch) {
//     try {
//       let response = await fetch(
//         'http://travellingdn.herokuapp.com/api/location'
//       );
//       let responseJson = await response.json();
//       dispatch(getData(responseJson));
//     } catch (error) {
//       console.error(error);
//     }
//   }


export default connect (mapStateToProps, mapDispatchToProps) (TodoComponent);