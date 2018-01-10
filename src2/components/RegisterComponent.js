import React, { Component } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { registerStyle } from '../style/style';

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
            <View style={registerStyle.body}>
                <View style={registerStyle.child0}>
                    <View style={registerStyle.child00}>
                        <Text style={registerStyle.textTitle}>REGISTER</Text>
                    </View>
                    <View style={registerStyle.child01}>
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
                        {/* <TextInput
                            value={this.state.password}
                            placeholder='fullname'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder='phone'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder='address'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder='age'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder='job'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                        <TextInput
                            value={this.state.password}
                            placeholder='facebook'
                            secureTextEntry={true}
                            onChangeText={(password)=>{this.setState({password})}}
                            
                        />
                         */}
                    </View>
                    <View style={registerStyle.child02}>
                        <TouchableOpacity
                            onPress={()=>this.props.register(this.state.email,this.state.password)}
                        >
                            <View style={registerStyle.viewRegisterTouch}>
                                <Text style={registerStyle.textRegisterTouch}>Register</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>this.props.goLogin()}
                        >
                            <View style={registerStyle.viewRegisterTouch}>
                                <Text style={registerStyle.textRegisterTouch}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default RegisterComponent;