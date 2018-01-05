import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
            question: '',
            answer:''
        }
        console.ignoredYellowBox = ['Setting a timer']; // use close warning alert
    }

    componentDidMount(){
        this.props.onLoad();
    }

    openModal(title){
        this.setState({
            modal: true,
            question:'Would you like to add "'+title+'" into your favorite movies?',
            answer:'Yes'
        });
    }
    closeModal(){
        this.setState({
            modal:false,
            question:'',
            answer:''
        })
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
                <TouchableWithoutFeedback
                    onPress={()=>this.closeModal()}
                >
                    <View style={this.state.modal ? listStyle.openViewOpacity : listStyle.closeViewOpacity}/>
                </TouchableWithoutFeedback>
                <View style={this.state.modal ? listStyle.openViewModal : listStyle.closeViewModal}>
                    <Text style={listStyle.textModal}>
                       {this.state.question}
                    </Text>
                    <TouchableOpacity
                        onPress={()=>this.props.addFavorite()}
                    >
                        <Text style={[listStyle.textModal,{fontWeight:'bold'}]}>{this.state.answer}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const renderItem = (item, openModal ) => (
    <View>
        <TouchableOpacity key={item.id}
            onPress={()=>openModal(item.title)}
        >
            <View style={listStyle.viewList}>
                <Text style={listStyle.textList}>{item.title}</Text>
                <Text style={listStyle.textList}>{item.content}</Text>
            </View>
        </TouchableOpacity>
    </View>
)