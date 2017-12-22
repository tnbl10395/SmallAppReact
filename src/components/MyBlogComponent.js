import React, { Component } from 'react';
import { 
View, 
StyleSheet,
Text, 
TouchableWithoutFeedback,
FlatList,
ActivityIndicator,
} from 'react-native';
import StyleMyBlog from '../Style/StyleMyBlogComponent.js'
import Icon from 'react-native-vector-icons/FontAwesome';


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
                        <View key={item.locationID} style={StyleMyBlog.body}>
                            <View style={StyleMyBlog.content}>
                                <View style={StyleMyBlog.viewText}>
                                    <Text style={StyleMyBlog.textStatus}>{item.description}</Text>
                                </View>
                                <View style={StyleMyBlog.viewIcon}>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.like(item.locationID)}>
                                        <View>
                                            <Text style={StyleMyBlog.textNumber}>
                                                10k <Icon name='heart' 
                                                        style={[StyleMyBlog.textIcon,{color:this.state.color}]}
                                                />
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.goComment(item.locationID)}>
                                        <View>
                                            <Text style={StyleMyBlog.textNumber}>
                                                10k <Icon name='comment-o' 
                                                        style={[StyleMyBlog.textIcon,{color:'black'}]}/>
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        onPress={()=>this.openAlert()}>
                                        <View>
                                            <Text style={StyleMyBlog.textNumber}>
                                                10k <Icon name='share' 
                                                        style={[StyleMyBlog.textIcon,{color:'steelblue'}]}/>
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