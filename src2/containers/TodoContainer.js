import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent';
import { getTodo, addTodo, moveTaskDone } from '../actions/ToDoAction';
import { loadListTodo, moveTaskToDone, addListTodo } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.TodoReducer.data,
    heightAI: state.TodoReducer.heightAI,
    successfully: state.TodoReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    onLoad: (userId) => {
        loadListTodo(dispatch,getTodo,userId) 
    }, 
    moveTaskDone: (id,title,content,userID) => {
        moveTaskToDone(dispatch,moveTaskDone,id,title,content,userID)
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