import React, {Component} from "react";
import { 
View, 
Text,  
TextInput, 
TouchableNativeFeedback,
Image, 
Animated, 
StatusBar
} from "react-native";
import StyleLogin from '../Style/StyleLoginComponent.js';

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
        // if(this.state.username==user&&this.state.password==pass){
        //     this.props.navigation.navigate(
        //         'HomeScreen',
        //         {
        //             name: this.state.username
        //         }
        //     );
        // }else{
        //     this.setState({
        //         error: 'Username or password is uncorrectly!'
        //     });
        // }
    }

    render(){
        return(
            <View style={StyleLogin.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="steelblue"
                />
                <View style={StyleLogin.child1}>
                    <Animated.Image
                        source={require('../images/anh.png')} 
                        style={[StyleLogin.img,{opacity:this.state.fadeAnim}]}
                    />
                </View>
                <Animated.View style={[StyleLogin.child2,{opacity:this.state.fadeAnim}]}>
                    <TextInput
                        style={StyleLogin.text}
                        placeholder="Username"
                        maxLength={20}   
                        onChangeText={ (username) => {this.setState({username})}}
                        Value={this.state.username}
                    ></TextInput>
                    <TextInput
                        style={StyleLogin.text}
                        placeholder="Password"
                        secureTextEntry={true}
                        maxLength={20}   
                        onChangeText={(password)=>{this.setState({password})}}
                        Value={this.state.password}
                    ></TextInput>
                    <Text style={StyleLogin.error}>{this.state.error}</Text>
                    <TouchableNativeFeedback
                        // onPress={()=>{this.props.navigation.navigate('HelloScreen')}}
                        onPress={()=>{this.login()}}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={StyleLogin.touchView}>
                            <Text style={StyleLogin.touchText}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                </Animated.View>
                <View style={StyleLogin.child3}>
                    <Text style={StyleLogin.txt}>copyright @ Made by Lewis</Text>
                    <Text style={StyleLogin.txt}>Enclave Company</Text>
                </View>
            </View>
        );
    }
}


