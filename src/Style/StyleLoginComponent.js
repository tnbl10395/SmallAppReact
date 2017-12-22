import { StyleSheet } from 'react-native';

export default StyleLogin = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    child1:{
        width: 415,
        height: 250,
        backgroundColor:'powderblue',
        alignItems:'center',
        justifyContent:'center',
    },
    child2:{
        // flex:2,
        width: 415,
        height: 240,
        backgroundColor:'skyblue',
        alignItems:'center'
    },
    child3:{
        // flex:3,
        width: 415,
        height: 270,
        backgroundColor:'steelblue',
    },
    text:{
        top: 30,
        width:300,
        fontSize: 20,
        textAlign: 'center',
    },
    txt:{
        top:100,
        color:'white',
        fontSize:15,
        textAlign: 'center',
    },
    touchView:{
        top:60,
        backgroundColor:'steelblue',
        width:200,
        height:40,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center'
    },
    touchText:{
        fontSize:20,
        color:'white',
    },
    img:{
        right:10,
        top:20,
        width:230,
        height:180,
    },
    error:{
        top:40,
        fontSize:18,
        color:'#e74c3c'
    }
});