import React, { Component } from 'react';
import { 
View, 
StyleSheet,
Text, 
ScrollView, 
TouchableWithoutFeedback,
Modal,
Alert
} from 'react-native';
// import ModalComment from '../components/ModalComment.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';

const navigateAction = NavigationActions.navigate({
    
      routeName: 'MyBlogScreen',
    
      params: {},
    
      action: NavigationActions.navigate({ routeName: 'ModalScreen'})
    })

export default class Myblog extends React.Component{
    static navigationOptions = {
        tabBarLabel:'My Blog',
    }

    constructor(props){
        super(props);
        this.state = {
            row: [],
            color:'#EF9A9A',
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
                            <TouchableWithoutFeedback
                                onPress={()=>this.like()}>
                                <View>
                                    <Text style={styleBlog.textNumber}>
                                        10k <Icon name='heart' 
                                                style={[styleBlog.textIcon,{color:this.state.color}]}
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
            </ScrollView>
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

    closeModal(){
        
    }

    openModal(){
        this.props.navigation.dispatch(navigateAction);
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