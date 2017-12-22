import React, { Component } from 'react';
import { 
View, 
Text, 
ListView, 
StyleSheet, 
TouchableOpacity, 
Modal} from 'react-native';
import StyleMyFriends from '../Style/StyleMyFriendsComponent.js'

export default class Myfriends extends React.Component{
    
    static navigationOptions = {
        tabBarLabel:'My Friends',
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
                    <TouchableOpacity>
                        <View
                            style={[styleSetting.viewTouch,{backgroundColor:this.state.backgroundColor}]}>
                            <Text style={styleSetting.textTouch}>Tina</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={styleSetting.textTouch}>Nathan</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={styleSetting.textTouch}>Quinto</Text>
                        </View>
                    </TouchableOpacity>                    
                </View>
            </View>
            // </ListView>
        );
    }
}
