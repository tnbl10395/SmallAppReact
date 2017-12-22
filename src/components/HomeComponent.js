import React,{Component} from 'react';
import { 
View,
Text,
StatusBar, 
Image,
ScrollView,
TouchableOpacity,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import {TabBar} from '../Route.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleHome from '../Style/StyleHomeComponent.js';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <View style={StyleHome.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="steelblue"
                />
                {/* child1 */}
                <View style={StyleHome.child1}>
                    <View style={StyleHome.leftChild1}>
                        <Image
                            style={StyleHome.image} 
                            source={require('../images/avatar.jpg')}
                        />
                    </View>
                    <View style={StyleHome.rightChild1}>
                        <Text style={[StyleHome.textName,{
                            fontSize:20, borderBottomWidth:0.6, 
                            borderBottomColor:'white',}]}>
                            Long (Lewis) N.B.TRAN
                        </Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:15,}}>
                            <Text style={[StyleHome.textName,{fontSize:20,}]}>
                                10k <Icon name='heart' style={{fontSize:23,color:'#F5F5F5'}}/>
                            </Text>
                            <Text style={[StyleHome.textName,{fontSize:20,}]}>
                                10k <Icon name='users' style={{fontSize:23,color:'#F5F5F5'}}/>
                            </Text>
                        </View>
                    </View>
                </View>
                {/* child3 */}
                <View style={StyleHome.child3}>
                    {/* <Tab navigation={this.props.navigation}/> */}
                    <TabBar/>
                </View>
            </View>
        );
    }
}
// Home.router =  Tab.router;