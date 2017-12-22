import { StyleSheet } from 'react-native';

export default StyleHome = StyleSheet.create({
    body:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    // child1
    child1:{
        flex:0.8,
        backgroundColor:'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftChild1:{
        flex:0.7,
        alignItems:'center'
    },
    rightChild1:{
        flex:1,
    },
    image:{
        top:15,
        width:'63%',
        height:'80%',
        borderRadius:100,
    },
    // child2
    child2:{
        flex:0.3,
        backgroundColor:'#90CAF9',
        flexDirection:'row',
        justifyContent:'space-around', 
        // alignItems: 'center',
    },
    contentChild2:{
        flex:1,
        margin:2,
        width:205,
        // top:10,
        // height:'100%',
        backgroundColor:'#BBDEFB',
        // alignItems:'center'
    },
    textChild2:{
        top:10,
        textAlign:'center',
        // color: 'white'
    },
    // child3
    child3:{    
        flex:3,
        backgroundColor:'powderblue',
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:0.5,
    },
    textName:{
        marginTop:15,
        marginRight:5,
        color:'#F5F5F5',
        fontWeight:'bold'
    }
});