import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { Tabbar } from '../route/Route';
import { homeStyle } from '../style/style';
 
class HomeComponent extends React.Component{
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <View style={homeStyle.body}>
                <View style={homeStyle.info}>
                    <View style={homeStyle.avatar}>
                        <Image source={require('../images/logo.png')} style={homeStyle.image}/>
                    </View>
                    <View style={homeStyle.profile}>
                        <Text style={homeStyle.textInfo}>Long (Lewis) N.B. TRAN</Text>
                    </View>
                </View>
                <View style={homeStyle.tab}>
                    <Tabbar/>
                </View>
            </View>
        );
    }
}

HomeComponent.navigationOptions = {
    title:'Home'
}

export default HomeComponent;
