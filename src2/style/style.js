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
    },
    viewLoginTouch: {
        backgroundColor: 'black',
        width:'100%',
        borderRadius: 50,
        height: 40,
        
    },
    textLoginTouch: {
        color: 'white',
        textAlign: 'center',
        marginTop:10,
        fontWeight:'bold'
    },
    textRegisterTouch: {
        textAlign: 'center'
    }
});