import { connect } from 'react-redux';
import MyBlogComponent from '../components/MyBlogComponent.js';
import { loadData } from '../actions/LoadData.js';

export default connect(
    state=>{
        return {

        }
    },
    dispatch=>{
        return {
            loadData: ()=>dispatch( loadData() )
        }
    }
)(MyBlogComponent);