import { StyleSheet } from 'react-native';

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
    closeViewOpacity: {
        
    }
});