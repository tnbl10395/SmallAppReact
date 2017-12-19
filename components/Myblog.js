import React, { Component } from 'react';
import { View, StyleSheet,Text, ScrollView } from 'react-native';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';

export default class Myblog extends React.Component{
    static navigationOptions = {
        tabBarLabel:'My Blog'
    }

    constructor(props){
        super(props);
        this.state = {
            row: [],
        };
    }

    // componentWillMount(){
    //     return fetch('http://travellingdn.herokuapp.com/api/location/0402')
    //     .then(response => response.json())
    //     .then(responseJson => {
    //         this.setState({
    //             row: responseJson.locationID
    //         });
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         this.setState({
    //            color:'red', 
    //         });
    //     });
    // }

    render(){
        return(
            <ScrollView style={styleBlog.scroll}>
                <View style={styleBlog.body}>
                    <View style={styleBlog.content}>
                        <View style={styleBlog.viewText}>
                            <Text style={styleBlog.textStatus}>Nằm cách trung tâm thành phố Ðà Nẵng chừng 10 km về hướng Ðông Bắc. Đây được xem là viên ngọc quý của Đà Nẵng với vẻ đẹp mê hoặc lòng người.Quận Sơn Trà có bán đảo Sơn Trà và núi Sơn Trà đẹp nổi tiếng, 4400 ha được công nhận là khu vực bảo tồn thiên nhiên vào năm 1992. Ở đây có chùa Linh Ứng, cũng là nơi có các căn cứ Hải quân Nhân dân Việt Nam quan trọng. Quận Sơn Trà có cảng Tiên Sa và đường Bạch Đằng Đông ven sông cũng nổi tiếng không kém.</Text>
                        </View>
                        <View style={styleBlog.viewIcon}>
                            <Text style={styleBlog.textNumber}>
                                <Icon name='search' style={{fontSize:30}}/>100
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styleBlog = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    // scroll:{
    //     flex:1,
    //     flexDirection:'column',
    // },
    content:{
        margin:5,
        width:'95%',
        // height:460,
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
        alignItems:'flex-end',
        padding:5,
    },
    textNumber:{
    },
    textIcon:{
    }



});