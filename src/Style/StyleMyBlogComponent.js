import { StyleSheet } from 'react-native'

export default StyleMyBlog = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    content:{
        margin:5,
        width:'95%',
        backgroundColor:'white'
    },
    viewText:{
        width:'100%',
        padding:25,
        borderBottomColor: 'gray',
        borderBottomWidth:1,
    },
    textStatus:{
        fontSize:18,
    },
    viewIcon:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:5,
    },
    textNumber:{
        fontSize:15,
        margin:5,
        // color:'#EF5350',
    },
    textIcon:{
        margin:3,
        fontSize:15,

    }
});