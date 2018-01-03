import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';

class ModalComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <TouchableHighlight>
                    <Text>Like</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default ModalComponent;