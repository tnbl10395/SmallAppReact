import React,{Component} from 'react';
import { 
View,
Text,
StyleSheet,
StatusBar, 
Image,
ScrollView,
TouchableOpacity,
ToolbarAndroid,
Picker,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import TabBar from '../components/Tabbar.js';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <View style={styleHome.body}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="steelblue"
                />
                {/* child1 */}
                <View style={styleHome.child1}>
                    <View style={styleHome.leftChild1}>
                        <Image
                            style={styleHome.image} 
                            source={require('../images/avatar.jpg')}
                        />
                    </View>
                    <View style={styleHome.rightChild1}>

                    </View>
                </View>
                {/* child3 */}
                <View style={styleHome.child3}>
                    <TabBar/>
                </View>
            </View>
        );
    }

}

const styleHome = StyleSheet.create({
    body:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    // child1
    child1:{
        flex:0.8,
        backgroundColor:'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftChild1:{
        flex:0.7,
        alignItems:'center'
    },
    rightChild1:{
        flex:1,
    },
    image:{
        top:15,
        width:'63%',
        height:'80%',
        borderRadius:100,
    },
    // child2
    child2:{
        flex:0.3,
        backgroundColor:'#90CAF9',
        flexDirection:'row',
        justifyContent:'space-around', 
        // alignItems: 'center',
    },
    contentChild2:{
        flex:1,
        margin:2,
        width:205,
        // top:10,
        // height:'100%',
        backgroundColor:'#BBDEFB',
        // alignItems:'center'
    },
    textChild2:{
        top:10,
        textAlign:'center',
        // color: 'white'
    },
    // child3
    child3:{    
        flex:3,
        backgroundColor:'powderblue',
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:0.5,
    }
});