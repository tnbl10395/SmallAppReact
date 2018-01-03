import React,{ Component } from 'react';
import { View, TextInput,Text, Button } from 'react-native';

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
            <View>
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
                <Button
                    title='Login'
                    onPress={()=>this.props.login(this.state.email,this.state.password)}
                />
                <Button
                    title='Register'
                    onPress={()=>this.props.goRegister()}
                />
            </View>
        );
    }
}

LoginComponent.navigationOptions = {
    title:'Login'
}


