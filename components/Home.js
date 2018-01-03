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
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //     }
    // }


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
                            // source={require('../images/avatar.jpg')}
                        />
                    </View>
                    <View style={styleHome.rightChild1}>
                        <Text style={[styleHome.textName,{
                            fontSize:20, borderBottomWidth:0.6, 
                            borderBottomColor:'white',}]}>
                            Long (Lewis) N.B.TRAN
                        </Text>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:15,}}>
                            <Text style={[styleHome.textName,{fontSize:20,}]}>
                                10k <Icon name='heart' style={{fontSize:23,color:'#F5F5F5'}}/>
                            </Text>
                            <Text style={[styleHome.textName,{fontSize:20,}]}>
                                10k <Icon name='users' style={{fontSize:23,color:'#F5F5F5'}}/>
                            </Text>
                        </View>
                    </View>
                </View>
                {/* child3 */}
                <View style={styleHome.child3}>
                    <TabBar navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

Home.router =  TabBar.router;

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
    },
    textName:{
        marginTop:15,
        marginRight:5,
        color:'#F5F5F5',
        fontWeight:'bold'
    }
});