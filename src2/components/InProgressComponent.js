import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, FlatList, Picker } from 'react-native';
import { listStyle } from '../style/style';

export default class InProgressComponent extends React.Component{
    static navigationOptions = {
        tabBarLabel : 'In Progress'
    }

    constructor(props){
        super(props);
        this.state = {
            array: [],
            modal: false,
            question: '',
            answer:'',
            component:'To do'
        }
        console.ignoredYellowBox = ['Setting a timer']; // use close warning alert
    }

    componentDidMount(){
        this.props.load('7AP0NQpM7SfKzHaMPzUTSJJj9Y42');
    }

    openModal(title){
        this.setState({
            modal: true,
            question:'Would you like to move "'+title+'" to '+this.state.component+'?',
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
                    style={{height:this.props.heightAI,top:'40%'}}
                />
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item,index)=>item.id}
                    renderItem={({item})=> renderItem(item,this.openModal.bind(this))}
                />
                 {/* background opacity */}
                 <TouchableWithoutFeedback
                    onPress={()=>this.closeModal()}
                >
                    <View style={this.state.modal || this.state.modalAdd ? listStyle.openViewOpacity : listStyle.closeViewOpacity}/>
                </TouchableWithoutFeedback>
                {/* modal */}
                {
                    !this.state.modal
                    ?
                    <View></View>
                    :
                    <View style={listStyle.openViewModal}>
                        <Text style={listStyle.openTextModal}>
                        {this.state.question}
                        </Text>
                        <Picker
                            selectedValue={this.state.component}
                            onValueChange={(itemValue, itemIndex) => this.setState({component: itemValue})}>
                            <Picker.Item label="To do" value="To do" />
                            <Picker.Item label="Done" value="Done" />
                        </Picker>
                        <TouchableOpacity
                            onPress={()=>this.moveTask()}
                        >
                            <Text style={[listStyle.openTextModal,{fontWeight:'bold'}]}>{this.state.answer}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

const renderItem = (item, openModal) => (
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