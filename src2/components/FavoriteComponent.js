import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FavoriteComponent extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'Favorite'
    }

    constructor(props){
        super(props);
    }

    render () {
        return (
            <View>
                <Text>Favorite Component</Text>    
            </View>
        );
    }
}