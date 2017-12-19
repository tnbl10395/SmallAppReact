import React, { Component } from 'react';
import { 
View, 
StyleSheet,
Image, 
ScrollView,
Text,
TouchableWithoutFeedback} from 'react-native';

export default class ModalComment extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <View style={styleModal.body}>
                <TouchableWithoutFeedback>
                    <View></View>
                </TouchableWithoutFeedback>
                <ScrollView>
                    <View style={styleModal.bodyComment}>
                        <View style={styleModal.bodyAvatar}>
                            <Image style={styleModal.avatar} source={require('../images/tina.jpg')}/>
                        </View>
                        <View style={styleModal.content}>
                            <Text style={styleModal.name}>Tina :</Text> 
                            <Text style={styleModal.text}>Tại hạ tình cờ đi ngang qua chốn này! Thấy các vị huynh đệ cùng các tỉ muội xôn xao bàn tán bèn mạn phép ghé vào cho thỏa lòng soi mói. Giật mình, kinh ngạc khi thấy lời nói của các vị vô cùng sắc bén, ngữ ngôn truyền cảm, thiết nghĩ Độc Cô Cầu Bại ngày xưa có đội mồ sống dậy cũng thêm phần nể sợ. Nay xuất hiện thêm nhiều anh hùng bàn phím như thế này cũng khiến cho tại hạ mở mang tầm mắt, học hỏi được nhiều điều. Nếu các vị huynh đệ đây không cảm thấy phiền nhiễu thì với một cú Click chuột chúng ta hãy kết nghĩa bàn thờ, à không bàn đào! Ngày hôm nay được gặp các vị huynh đệ, các vị tỉ muội ở đây cũng là phước phần cho tại hạ. Xin nhận của tại hạ một like gọi là để kết nghĩa thâm giao!</Text>
                        </View>
                    </View>
                    <View style={styleModal.bodyComment}>
                        <View style={styleModal.bodyAvatar}>
                            <Image style={styleModal.avatar} source={require('../images/tina.jpg')}/>
                        </View>
                        <View style={styleModal.content}>
                            <Text style={styleModal.name}>Tina :</Text> 
                            <Text style={styleModal.text}>Tại hạ tình cờ đi ngang qua chốn này! Thấy các vị huynh đệ cùng các tỉ muội xôn xao bàn tán bèn mạn phép ghé vào cho thỏa lòng soi mói. Giật mình, kinh ngạc khi thấy lời nói của các vị vô cùng sắc bén, ngữ ngôn truyền cảm, thiết nghĩ Độc Cô Cầu Bại ngày xưa có đội mồ sống dậy cũng thêm phần nể sợ. Nay xuất hiện thêm nhiều anh hùng bàn phím như thế này cũng khiến cho tại hạ mở mang tầm mắt, học hỏi được nhiều điều. Nếu các vị huynh đệ đây không cảm thấy phiền nhiễu thì với một cú Click chuột chúng ta hãy kết nghĩa bàn thờ, à không bàn đào! Ngày hôm nay được gặp các vị huynh đệ, các vị tỉ muội ở đây cũng là phước phần cho tại hạ. Xin nhận của tại hạ một like gọi là để kết nghĩa thâm giao!</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styleModal = StyleSheet.create({
    body:{
        flex:1,
        // justifyContent:'center',
        backgroundColor:'#BBDEFB',
    },
    bodyComment:{
        width:'100%',
        // height:'100%',
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        margin:1,
        marginTop:3,
        borderRadius:15,
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
    }
});