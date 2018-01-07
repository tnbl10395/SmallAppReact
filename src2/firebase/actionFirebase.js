import {firebaseApp} from '../firebase/configFirebase';

export const logined = (email,password, dispatch, login) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
        let checkAuth = true;
        dispatch( login(checkAuth) );
    })
    .catch((error) => {
        alert('Please check email or password again!');
    });
}

export const registered = (email,password,dispatch,register) => {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        let checkRegister = true;
        dispatch( register(checkRegister) );
    })
    .catch((error)=>{
        alert(error);
    });
}

export const loadListTodo = (dispatch,getData,userId) => {
    firebaseApp.database().ref('Todo').child(userId).child('List').on('value',function(snapshot){
        let listTodo = [];
        let value = snapshot.val();
        for(var k in value ){
            listTodo.push(value[k]);            
        }
        dispatch(getData(listTodo))
    })
}

export const loadListInprogress = (dispatch,getInprogress,userId) => {
    firebaseApp.database().ref('InProgress/'+userId).child('List').on('value',function(snapshot){
        let listInprogress = [];
        let value = snapshot.val();
        for(var k in value ){
            listInprogress.push(value[k]);            
        }
        dispatch(getInprogress(listInprogress))
    })
}

export const addListTodo = (dispatch, addTodo, title, content, userId) => {
    let key = firebaseApp.database().ref('Todo').child(userId).child('List').push({
        id:'',
        title:title,
        content:content
    }).getKey();
        firebaseApp.database().ref('Todo').child(userId).child('List/'+key).update({
            id:key
        })
    .then(()=>{
        dispatch(addTodo())
    })
}

export const moveTaskToInProgress = (dispatch, moveInProgress, id, title, content, userID) => {
    firebaseApp.database().ref('InProgress').child(userID).child('List/'+id).set({
        id:id,
        title:title,
        content:content
    }).then(()=>{
        firebaseApp.database().ref('Todo').child(userID).child('List/'+id).remove()
    }).then(()=>{
        dispatch(moveInProgress())
    })
    
}