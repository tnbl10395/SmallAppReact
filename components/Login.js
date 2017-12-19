import React, {Component} from "react";
import { 
View, 
Text, 
StyleSheet, 
TextInput, 
TouchableNativeFeedback,
Image, 
Animated, 
StatusBar
} from "react-native";

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0),
            username: '',
            password: '',
            error:'',
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:1,
                duration:2000,
            }
        ).start();
    }

    login(){
        if(this.state.username==user&&this.state.password==pass){
            this.props.navigation.navigate(
                'HelloScreen',
                {
                    name: this.state.username
                }
            );
        }else{
            this.setState({
                error: 'Username or password is uncorrectly!'
            });
        }
    }

    render(){
        return(
            <View style={styleLogin.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="steelblue"
                />
                <View style={styleLogin.child1}>
                    <Animated.Image
                        source={require('../images/anh.png')} 
                        // source={{uri:'https://static.wixstatic.com/media/950132_30fdb5a3bca5443e942a3a9f5edf32c4~mv2.png'}}
                        style={[styleLogin.img,{opacity:this.state.fadeAnim}]}
                    />
                </View>
                <Animated.View style={[styleLogin.child2,{opacity:this.state.fadeAnim}]}>
                    <TextInput
                        style={styleLogin.text}
                        placeholder="Username"
                        maxLength={20}   
                        onChangeText={ (username) => {this.setState({username})}}
                        Value={this.state.username}
                    ></TextInput>
                    <TextInput
                        style={styleLogin.text}
                        placeholder="Password"
                        secureTextEntry={true}
                        maxLength={20}   
                        onChangeText={(password)=>{this.setState({password})}}
                        Value={this.state.password}
                    ></TextInput>
                    <Text style={styleLogin.error}>{this.state.error}</Text>
                    <TouchableNativeFeedback
                        // onPress={()=>{this.props.navigation.navigate('HelloScreen')}}
                        onPress={()=>{this.login()}}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styleLogin.touchView}>
                            <Text style={styleLogin.touchText}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                </Animated.View>
                <View style={styleLogin.child3}>
                    <Text style={styleLogin.txt}>copyright @ Made by Lewis</Text>
                    <Text style={styleLogin.txt}>Enclave Company</Text>
                </View>
            </View>
        );
    }
}

let user = "Lewis";
let pass = "123456";

let styleLogin = StyleSheet.create({
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