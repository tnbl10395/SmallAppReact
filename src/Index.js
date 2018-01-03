// import React, { Component } from 'react';
// import { createStore } from 'redux';
// import { Provider,connect } from 'react-redux';
// import App from './Route.js';
// import rootReducer from './Reducer.js';
// import { addNavigationHelpers } from 'react-navigation';
// import AppWithNavigationState from './Route';

// const Appli = ({dispatch,nav}) =>(
//     <App
//         navigation={addNavigationHelpers({
//             dispatch,
//             state:nav
//         })}
//     />
// );

// const mapStateToProps = state=>({
//     nav: state.nav
// });

// const AppWithNavigation = connect(mapStateToProps)(Appli);

// export default class Index extends React.Component{
//     render(){
//         const store = createStore(rootReducer);
//         return(
//             <Provider store={store}>
//                 <AppWithNavigationState/>
//             </Provider>
//         );
//     }
// }
