import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { listStyle } from '../style/style';

export default class ListComponent extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'List'
    }

    constructor(props){
        super(props);
        this.state = {
            array: [],
            modal: false,
        }
        console.ignoredYellowBox = ['Setting a timer']; // use close warning alert
    }

    componentDidMount(){
        this.props.onLoad();
    }

    openModal(id){
        this.setState({
            modal: true
        });
    }
    render () {
        // const {modal} = this.state;
        // const modals = modal ? <jdjs></jdjs>
        return (
            <View style={{flex:1}}>
                <Text>List Component</Text> 
                <ActivityIndicator 
                    size="large" 
                    color="#0000ff" 
                    animating={this.props.successfully}
                    style={{height:this.props.heightAI}}
                />
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item,index)=>item.id}
                    renderItem={({item})=> renderItem(item,this.openModal.bind(this))
                    }
                />
                <View style={this.state.modal ? listStyle.openViewOpacity : listStyle.closeViewOpacity}/>
            </View>
        );
    }
}


const renderItem = (item, openModal) => (
    <View>
        <TouchableOpacity key={item.id}
            onPress={()=>openModal(item.id)}
        >
            <View style={{width:'100%', backgroundColor:'gray'}}>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
            </View>
        </TouchableOpacity>
        {/* <View>
            <Text>{item.id}</Text>
        </View> */}
    </View>
)