import React, { Component } from 'react';
import { 
View, 
StyleSheet,
Image, 
ScrollView,
Text,
TouchableWithoutFeedback,
TouchableNativeFeedback,
FlatList,
ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



export default class ModalComment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datas :[],
            animated:true,
            heightAI:30,
        }
    }

    fetchData(){
        fetch('http://travellingdn.herokuapp.com/api/location/0'+this.props.navigation.state.params.name)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                datas: responseJson.description,
                animated:false,
                heightAI:0
            });
        }).done()
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        let pic = {
            url:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styleModal.body}>
                <View style={{height:this.state.heightAI}}>
                   <ActivityIndicator size='large' color='white' animating={this.state.animated}/>
                </View>
                {/* <FlatList 
                    data={this.state.datas}
                    renderItem={({item})=> */}
                        <View style={styleModal.bodyComment}>
                            <View style={styleModal.bodyAvatar}>
                                {/* <Image style={styleModal.avatar} source={require('../images/tina.jpg')}/> */}
                            </View>
                            <View style={styleModal.content}>
                                <Text style={styleModal.name}>Tina :</Text> 
                                <Text style={styleModal.text}>{this.state.datas}</Text>
                            </View>
                        </View>
                    {/* }
                    keyExtractor = {(item,index)=>index}
                />  */}
            </View>
        );
    }
}

const styleModal = StyleSheet.create({
    body:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#BBDEFB',
    },
    bodyComment:{
        width:'97%',
        // height:'100%',
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        margin:5,
        marginTop:1,
        // borderRadius:15,
    },
    bodyAvatar:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,

    },
    avatar:{
        borderRadius:100,
        height:50,
        width:50,
    },
    content:{
        flex:8,
        margin:10,
        padding:10,
    },
    name:{
        color:'steelblue',
        fontSize:20,
        fontWeight:'bold',
    },
    text:{
    },
    touchReturn:{
        width:'100%',
        borderBottomWidth:3,
        borderBottomColor:'#BBDEFB',
        borderTopColor:'black',
        borderTopWidth:0.6,
        height:50,
        backgroundColor:'steelblue'
    },
    textReturn:{
        padding:13,
        fontSize:15,
        color:'white',
        fontWeight:'bold'
    }
});