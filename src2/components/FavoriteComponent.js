import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import { listStyle } from '../style/style';

export default class FavoriteComponent extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'Favorite'
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
        this.props.load();
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
        return (
            <View style={{flex:1}}>
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
                    <TouchableOpacity>
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
            onPress={()=>openModal(item.id)}
        >
            <View style={listStyle.viewList}>
                <Text style={listStyle.textList}>{item.userID}</Text>
            </View>
        </TouchableOpacity>
    </View>
)