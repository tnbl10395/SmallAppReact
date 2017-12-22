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
ListView
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
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!==r2}),
            color:'#EF9A9A',
        };
    }

    fetchData(){
        fetch('http://travellingdn.herokuapp.com/api/location', {method: "GET", body: null})
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
            });
        })
        .done()
    }

    componentDidMount(){
        this.fetchData();
    }
    
    renderRaw(content){
        return(
            <View style={styleBlog.body}>
            <View style={styleBlog.content}>
                <View style={styleBlog.viewText}>
                    <Text style={styleBlog.textStatus}>{content.description}</Text>
                </View>
                <View style={styleBlog.viewIcon}>
                    <TouchableWithoutFeedback
                        onPress={()=>this.like()}>
                        <View>
                            <Text style={styleBlog.textNumber}>
                                10k <Icon name='heart' 
                                        style={[styleBlog.textIcon,{color:'#EF9A9A'}]}
                                />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={()=>this.props.navigation.navigate('ModalComment')}>
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
        );
    }

    render(){
        return(
            // <ScrollView style={styleBlog.scroll}>
            // <FlatList
            //     data={this.state.row}
            //     renderItem={({item})=>
                    
            //     }
            // />
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderRaw}
                />  
            </View>    
            // </ScrollView>
        );
    }

    like(){
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