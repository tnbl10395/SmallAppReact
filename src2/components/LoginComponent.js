import React,{ Component } from 'react';
import { View, TextInput,Text, Button, TouchableHighlight, TouchableOpacity, Image, StatusBar } from 'react-native';
import { LoginStyle } from '../style/style';
export default class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    render(){
        return(
            <View style={LoginStyle.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="black"
                />
                <View style={LoginStyle.child0}></View>
                <View style={LoginStyle.child1}>
                    <Image source={require('../images/images.png')} style={LoginStyle.image}/>
                </View>
                <View style={LoginStyle.child2}>
                    <TextInput
                        value={this.state.email}
                        placeholder='email'
                        onChangeText={(email)=>{this.setState({email})}}
                    />
                    <TextInput
                        value={this.state.password}
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={(password)=>{this.setState({password})}}
                        
                    />
                    <TouchableHighlight
                        onPress={()=>this.props.login(this.state.email,this.state.password)}
                    >
                        <View style={LoginStyle.viewLoginTouch}>
                            <Text style={LoginStyle.textLoginTouch}>LOGIN</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        onPress={()=>this.props.goRegister()}
                    >

                            <Text style={LoginStyle.textRegisterTouch}>Create a new account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

LoginComponent.navigationOptions = {
    title:'Login'
}


