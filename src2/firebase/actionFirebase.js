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
    firebaseApp.database().ref('Done/'+userId).child('List').on('value',function(snapshot){
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
//move Todo to Done
export const moveTaskToDone = (dispatch, moveDone, id, title, content, userID) => {
    firebaseApp.database().ref('Done').child(userID).child('List/'+id).set({
        id:id,
        title:title,
        content:content
    }).then(()=>{
        firebaseApp.database().ref('Todo').child(userID).child('List/'+id).remove()
    }).then(()=>{
        dispatch(moveDone())
    })
    
}
//move InProgress to Todo
export const moveTaskToTodo = (dispatch,moveTaskTodo,id,title,content,userID) => {
    firebaseApp.database().ref('Todo').child(userID).child('List/'+id).set({
        id:id,
        title:title,
        content:content
    }).then(()=>{
        firebaseApp.database().ref('Done').child(userID).child('List/'+id).remove()
    }).then(()=>{
        dispatch(moveTaskTodo())
    })
}
//move InProgress to Done

// export const moveTask = (dispatch,action,id,title,content,userID,currentComponent,newComponent) => {
//     firebaseApp.database().ref(currentComponent).child(userID).child('List/'+id).set({
//         id:id,
//         title:title,
//         content:content
//     }).then(()=>{
//         firebaseApp.database().ref(newComponent).child(userID).child('List/'+id).remove()
//     }).then(()=>{
//         dispatch(action())
//     })
// }