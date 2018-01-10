import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native';
import { listStyle } from '../style/style';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class TodoComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'To do'
    }

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            modal: false,
            question: '',
            answer: '',
            id: '',
            title: '',
            content: '',
            modalAdd: false,
            textTitle: '',
            textContent: '',
            isDateTimePickerVisible: false,
            textDate:'',
        }
        console.ignoredYellowBox = ['Setting a timer']; // use close warning alert
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var a = new Date(date);
        var n = a.toLocaleDateString();
        alert(n);
        this._hideDateTimePicker();
    };


    componentDidMount() {
        this.props.onLoad('7AP0NQpM7SfKzHaMPzUTSJJj9Y42');
    }

    openModal(id, title, content) {
        this.setState({
            modal: true,
            question: 'Would you like to move "' + title + '" to Done-list?',
            answer: 'Yes',
            id: id,
            title: title,
            content: content,
        });
    }

    closeModal() {
        this.setState({
            modal: false,
            question: '',
            answer: '',
            id: '',
            title: '',
            content: '',
            modalAdd: false,
            textTitle: '',
            textContent: '',
            
        })
    }

    openModalAdd() {
        this.setState({
            modalAdd: true,
            add: 'ADD'
        })
    }

    moveTask() {
        this.props.moveTaskDone(this.state.id, this.state.title, this.state.content, '7AP0NQpM7SfKzHaMPzUTSJJj9Y42');
        this.closeModal();
    }

    addTodo() {
        this.props.addTodo(this.state.textTitle, this.state.textContent, '7AP0NQpM7SfKzHaMPzUTSJJj9Y42');
        this.closeModal();
    }

    render() {
        // const {modal} = this.state;
        // const modals = modal ? <jdjs></jdjs>
        return (
            <View style={{ flex: 1 }}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    animating={this.props.successfully}
                    style={{ height: this.props.heightAI, top: '40%' }}
                />
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => renderItem(item, this.openModal.bind(this))
                    }
                />
                {/* toggle */}
                {/* <TouchableOpacity
                    style={{position:'absolute'}}
                    onPress={()=>this.openModalAdd()}
                > */}
                <View style={listStyle.viewToggle}>
                    <TouchableOpacity onPress={() => this.openModalAdd()}>
                        <Text style={listStyle.textToggle}>+</Text>
                    </TouchableOpacity>
                </View>
                {/* </TouchableOpacity> */}
                {/* background opacity */}
                <TouchableWithoutFeedback
                    onPress={() => this.closeModal()}
                >
                    <View style={this.state.modal || this.state.modalAdd ? listStyle.openViewOpacity : listStyle.closeViewOpacity} />
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
                            <TouchableOpacity
                                onPress={() => this.moveTask()}
                            >
                                <Text style={[listStyle.openTextModal, { fontWeight: 'bold' }]}>{this.state.answer}</Text>
                            </TouchableOpacity>
                        </View>
                }
                {/* modalAdd */}
                {
                    !this.state.modalAdd
                        ?
                        <View></View>
                        :
                        <View style={listStyle.openViewModalAdd}>
                            {/* <View style={{flex:1,flexDirection:'row'}}>
                                <View>
                                    <TextInput
                                        style={listStyle.openTextAdd}
                                        placeholder='Date'
                                        underlineColorAndroid='#E0E0E0'
                                        value={this.state.textDate}
                                        onChangeText={(textDate) => this.setState({ textDate })}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity onPress={this._showDateTimePicker}>
                                        <Text>Show DatePicker</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            /> */}
                            <TextInput
                                style={listStyle.openTextAdd}
                                placeholder='Title'
                                underlineColorAndroid='#E0E0E0'
                                value={this.state.textTitle}
                                onChangeText={(textTitle) => this.setState({ textTitle })}
                            />
                            <TextInput
                                placeholder='Content'
                                underlineColorAndroid='#E0E0E0'
                                style={[listStyle.openTextAdd, { textAlignVertical: "top", height: '60%' }]}
                                multiline={true}
                                value={this.state.textContent}
                                onChangeText={(textContent) => this.setState({ textContent })}
                            />
                            <TouchableOpacity
                                onPress={() => this.addTodo()}
                            >
                                <View style={listStyle.openViewButton}>
                                    <Text style={listStyle.openTextButton}>ADD</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                }


            </View>
        );
    }
}


const renderItem = (item, openModal) => (
    <View>
        {/* <View slyte={listStyle.date}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>2018-Jan-09</Text>
        </View> */}
        <TouchableOpacity key={item.id}
            onPress={() => openModal(item.id, item.title, item.content)}
        >
            <View style={listStyle.viewList}>
                <Text style={[listStyle.textList,{fontWeight:'bold'}]}>{item.title}</Text>
                <Text style={listStyle.textList}>{item.content}</Text>
            </View>
        </TouchableOpacity>
    </View>
)