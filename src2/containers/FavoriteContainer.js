import { connect } from 'react-redux';
import FavoriteComponent from '../components/FavoriteComponent';
import { getFavorite } from '../actions/LoadDataAction';
import { loadListFavorite } from '../firebase/actionFirebase';

const mapStateToProps = state => ({
    data: state.LoadFavoriteReducer.data.movie,    
    heightAI: state.LoadFavoriteReducer.heightAI,
    successfully: state.LoadFavoriteReducer.successfully
});

const mapDispatchToProps = dispatch => ({
    load: () => {
       loadListFavorite(dispatch,getFavorite,'7AP0NQpM7SfKzHaMPzUTSJJj9Y42');
    }
});

export default connect (mapStateToProps, mapDispatchToProps) (FavoriteComponent);