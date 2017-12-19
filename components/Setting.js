import React, { Component } from 'react';
import { 
View, 
Text, 
ListView, 
StyleSheet, 
TouchableOpacity } from 'react-native';

export default class Setting extends React.Component{
    static navigationOptions = {
        tabBarLabel:'Setting'
    }
    constructor(props){
        super(props);
        this.state = {
            backgroundColor:'white',
        }
    }
    render(){
        return(
            // <ListView>
            <View style={styleSetting.body}>
                <View style={styleSetting.content}>
                    <TouchableOpacity
                        // onPressIn={()=>{this.setState({backgroundColor:'gray'})}}
                        >
                        <View
                            // onMoveShouldSetResponder={()=>{this.setState({backgroundColor:'gray'})}} 
                            style={[styleSetting.viewTouch,{backgroundColor:this.state.backgroundColor}]}>
                            <Text style={styleSetting.textTouch}>Sign out</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={styleSetting.textTouch}>Sign out</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={styleSetting.textTouch}>Sign out</Text>
                        </View>
                    </TouchableOpacity>                    
                </View>
            </View>
            // </ListView>
        );
    }
}
const styleSetting = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    content:{
        margin:5,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    viewTouch:{
        width:'100%',
    },
    textTouch:{
        fontSize:30,
    }
});