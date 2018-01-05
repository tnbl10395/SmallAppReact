import { StyleSheet, Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window');

export const LoginStyle = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    child0: {
        flex:0.2,
        backgroundColor: '#4CAF50', 
    },
    child1: {
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    child2: {
        flex:1,
    },
    image: {
        width:'100%'
    },
    viewLoginTouch: {
        backgroundColor: 'black',
        width:'90%',
        // borderRadius: 50,
        marginTop:20,
        marginLeft:20,
        height: 40,
        
    },
    textLoginTouch: {
        color: 'white',
        textAlign: 'center',
        marginTop:10,
        fontWeight:'bold'
    },
    textRegisterTouch: {
        marginTop:40,
        textAlign: 'center',
        fontSize: 18
    }
});

export const listStyle = StyleSheet.create({
    body: {
        flex:1
    },
    openViewOpacity: {
        position: 'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'black',
        opacity:0.7
    },
    closeViewOpacity: {},
    openViewModal: {
        position: 'absolute',
        top: height*0.3,
        left:width*0.2 ,
        right:width*0.2,
        width:width*0.6,
        // height:100,
        borderRadius: 20,
        backgroundColor:'white',
    },
    closeViewModal: {},
    textModal: {
        padding:10,
        textAlign:'center'
    },
    viewList: {
        backgroundColor: 'white',
        width:'100%',
        marginTop: 3,
    },
    textList: {
        padding: 5
    }
});
