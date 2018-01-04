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

export const loadListMovies = (dispatch,getData) => {
    firebaseApp.database().ref('Movies').on('value',function(snapshot){
        dispatch(getData(snapshot.val()))
    })
}
