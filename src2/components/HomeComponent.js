import React from 'react';
import { Button, View, Text } from 'react-native';
import {Tabbar} from '../route/Route';

class HomeComponent extends React.Component{
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={{flex:1}}>
                <Tabbar/>
            </View>
        );
    }
}

HomeComponent.navigationOptions = {
    title:'Home'
}

export default HomeComponent;
