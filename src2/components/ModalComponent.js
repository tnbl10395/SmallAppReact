import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

class ModalComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{position: 'absolute',
                height:100, width:100,
                top: 100,left:100,
                backgroundColor: 'red'
            }}>
                <TouchableHighlight>
                    <Text>Like</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default ModalComponent;