import React, {Component} from 'react';
import { 
View,
Text, 
StyleSheet, 
Animated, 
Easing, 
TouchableWithoutFeedback, 
StatusBar
} from 'react-native';

export default class Hello extends Component {

    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
    }

    componentDidMount(){
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.fadeAnim,{
                    toValue:1,
                    duration:1000,
                    delay:500,
                }),
                Animated.timing(this.state.fadeAnim,{
                    toValue:0,
                    duration:1000,
                })
            ])
        ).start()
    }

    render() {
        return (
            <View style={styleHello.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="steelblue"
                />
                <Text 
                    style={styleHello.textHello}>
                        Hello {this.props.navigation.state.params.name}!
                </Text>
                <Text 
                    style={styleHello.textQuestion}>
                        Would you like to sign in by the other account?
                </Text>
                <TouchableWithoutFeedback
                    // accessible={true}
                    // accessibilityLabel={'click'}
                    onPress={()=>{this.props.navigation.navigate('Home')}}
                >
                    <Animated.Text style={[styleHello.textQuestion,{top:20,opacity:this.state.fadeAnim}]}>Click here!</Animated.Text>
                </TouchableWithoutFeedback>            
            </View>
        )
    }
}

const styleHello = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'steelblue',
    },
    textHello:{
        bottom:30,
        color:'white',
        fontSize:50,
        textAlign:'center',
        fontWeight:'bold',
    },
    textQuestion:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    }
});
