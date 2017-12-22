import React, { Component } from 'react';
import { 
View, 
StyleSheet,
Text, 
ScrollView, 
TouchableWithoutFeedback,
Modal,
Alert,
FlatList,
ActivityIndicator,
} from 'react-native';
// import ModalComment from '../components/ModalComment.js';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { NavigationActions } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';

export default class Myblog extends React.Component{
    static navigationOptions = {
        tabBarLabel:'My Blog',
    }

    constructor(props){
        super(props);
        this.state = {
            refresh:false,
            datas: [],
            color:'#EF9A9A',
            animated:true,
            heightAI:20,
            selected: new Map()
        };
    }

    fetchData(){
        fetch('http://travellingdn.herokuapp.com/api/location')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                datas: responseJson,
                animated:false,
                heightAI:0,
            });
        })
        .done()
    }

    like(id){
        if(this.state.color=='#EF9A9A'){
            this.setState({
                color:'#EF5350',
            });
        }else{
            this.setState({
                color:'#EF9A9A',
            });
        }
    }

    goComment(id){
        this.props.navigation.navigate(
            'ModalComment',
            {
                name:id,
            }
        );
    }
    

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
                <View style={{flex:1}}>
                    <View style={{height:this.state.heightAI}}>
                        <ActivityIndicator size='large' color='white' animating={this.state.animated}/>
                    </View>
                <FlatList

                    refreshing={this.state.refresh}
                    onRefresh={this._onRefresh()}

                    data={this.state.datas} 
                    renderItem = {({item}) =>
                    //    <Text style={{fontSize:50}}>{item.key}</Text>
                        <View key={item.locationID} style={styleBlog.body}>
                            <View style={styleBlog.content}>
                                <View style={styleBlog.viewText}>
                                    <Text style={styleBlog.textStatus}>{item.description}</Text>
                                </View>
                                <View style={styleBlog.viewIcon}>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.like(item.locationID)}>
                                        <View>
                                            <Text style={styleBlog.textNumber}>
                                                10k <Icon name='heart' 
                                                        style={[styleBlog.textIcon,{color:this.state.color}]}
                                                />
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.goComment(item.locationID)}>
                                        <View>
                                            <Text style={styleBlog.textNumber}>
                                                10k <Icon name='comment-o' 
                                                        style={[styleBlog.textIcon,{color:'black'}]}/>
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.openAlert()}>
                                        <View>
                                            <Text style={styleBlog.textNumber}>
                                                10k <Icon name='share' 
                                                        style={[styleBlog.textIcon,{color:'steelblue'}]}/>
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    }
                    keyExtractor = {(item,index) => item.locationID}
                />   
            </View>
        );
    }

    _onRefresh(){
        fetch('http://travellingdn.herokuapp.com/api/location')
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                datas: responseJson,
            });
        })
        .done()
    }



}

const styleBlog = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    content:{
        margin:5,
        width:'95%',
        backgroundColor:'white'
    },
    viewText:{
        width:'100%',
        padding:25,
        borderBottomColor: 'gray',
        borderBottomWidth:1,
    },
    textStatus:{
        fontSize:18,
    },
    viewIcon:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:5,
    },
    textNumber:{
        fontSize:15,
        margin:5,
        // color:'#EF5350',
    },
    textIcon:{
        margin:3,
        fontSize:15,

    }



});