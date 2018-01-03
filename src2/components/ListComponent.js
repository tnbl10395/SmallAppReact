import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class ListComponent extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'List'
    }

    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
        console.ignoredYellowBox = ['Setting a timer']; // use close warning alert
    }

    componentDidMount(){
        this.props.onLoad();
    }

    render () {
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
                    renderItem={({item})=> renderItem(item)
                    }

                   
                />
            </View>
        
        );
    }
}

const renderItem = (item) => (
    <TouchableOpacity key={item.id}>
        <View style={{width:'100%', backgroundColor:'gray'}}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
    </TouchableOpacity>
)