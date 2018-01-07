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
        flex:1,
        backgroundColor: '#4CAF50', 
    },
    child1: {
        flex:3,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    child2: {
        flex:2,
    },
    child3: {
        flex:4,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    image: {
        width:"80%",
        height:'60%',
        left:width*0.1
    },
    viewLoginTouch: {
        backgroundColor: 'white',
        width:width*0.4,
        borderRadius: 50,
        height: 40,
        // left:width*0.15,
    },
    textLoginTouch: {
        color: '#4CAF50',
        textAlign: 'center',
        marginTop:10,
        fontWeight:'bold'
    },
    textRegisterTouch: {
        marginTop:30,
        textAlign: 'center',
        fontSize: 15
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
    //modal
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
    //textmodal
    openTextModal: {
        padding:10,
        textAlign:'center'
    },
    //list
    viewList: {
        backgroundColor: 'white',
        width:'100%',
        marginTop: 3,
        borderBottomWidth: 1.5,
        borderBottomColor:'#4CAF50'
    },
    textList: {
        padding: 5
    },
    // toggle
    viewToggle: {
        width:width*0.15,
        height:height*0.1,
        backgroundColor:'#4CAF50',
        borderRadius:100,
        left: width*0.8,
    },
    textToggle: {
        color: 'white',
        textAlign: 'center',
        fontSize:40,
        fontWeight:'bold',
        // top:height*0.01
    },
    //view modal add
    openViewModalAdd: {
        position: 'absolute',
        top: height*0.05,
        left:width*0.1,
        right:width*0.1,
        width:width*0.8,
        height:height*0.7,
        borderRadius: 20,
        backgroundColor:'white',
    },
    openTextAdd: {
        width: '90%',
        left:'5%',
        top:'3%',
        marginTop:10,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRadius:10,
        borderColor: 'gray',
        backgroundColor:'#E0E0E0'
    },
    openViewButton: {
        top:'25%',
        width:'50%',
        height:'30%',
        borderRadius:20,
        backgroundColor:'#4CAF50',
        left:'25%'
    },
    openTextButton: {
        top:'20%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});

export const registerStyle = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor:'#4CAF50',
    },
    child0: {
        left:width*0.05,
        top:height*0.03,
        borderRadius:50,
        backgroundColor:'white',
        width: width*0.9,
        height: height*0.9
    },
    child00:{
        flex:0.2,
    },
    child01: {
        flex:0.8, 
        width:width*0.8,
        // top:height*0.3,
        left:width*0.05,

    },
    child02: {
        flex:1,
        flexDirection:'row'
    },
    textTitle:{
        color: '#4CAF50',
        textAlign:'center',
        top:width*0.05,
        fontSize:24,
        fontWeight:'bold'
    },
    viewRegisterTouch: {
        top:width*0.4,
        margin: 30,
        width:width*0.3,
        height:40,
        borderRadius:50,
        backgroundColor: '#4CAF50'
    },
    textRegisterTouch: {
        color:'white',  
        textAlign: 'center',
        marginTop:10,
    }

});