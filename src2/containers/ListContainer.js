import { connect } from 'react-redux';
import ListComponent from '../components/ListComponent';
import { loadData,getData } from '../actions/LoadDataAction';
import { loadListMovies } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.LoadDataReducer.data,
    heightAI: state.LoadDataReducer.heightAI,
    successfully: state.LoadDataReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => {
        // load(dispatch)
        loadListMovies(dispatch,getData) 
    }, 
     
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


export default connect (mapStateToProps, mapDispatchToProps) (ListComponent);