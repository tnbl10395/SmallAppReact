import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class RegisterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    render(){
        return (
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
                    title='Register'
                    onPress={()=>this.props.register(this.state.email,this.state.password)}
                />
                <Button
                    title='Go back Login'
                    onPress={()=>this.props.goLogin()}
                />
            </View>
        );
    }
}
export default RegisterComponent;