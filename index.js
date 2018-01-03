// import App from './App.js';
// import App from './src/Index.js'
// import App from './components/Home.js';
// import App from './components/Route.js';
// import App from './components/Myblog.js'
// import App from './components/Tabbar.js';
// import App from './test/'

// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import AppWithNavigationState from './src/Route.js';
// import rootReducer from './src/Reducer.js';

// class App extends React.Component{
//     store = createStore(rootReducer);
//     render(){        
//         return(
//             <Provider store={this.store}>
//                 <AppWithNavigationState/>
//             </Provider>
//         );
//     }
// }

// AppRegistry.registerComponent('blog', () => App);
// export default App;

// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// import AppReducer from './test/reducers/index';
// import AppWithNavigationState from './test/navigators/AppNavigator';

// class ReduxExampleApp extends React.Component {
//   store = createStore(AppReducer);

//   render() {
//     return (
//       <Provider store={this.store}>
//         <AppWithNavigationState />
//       </Provider>
//     );
//   }
// }

// AppRegistry.registerComponent('blog', () => ReduxExampleApp);

// export default ReduxExampleApp;

// ------------------------------------------------------------------------------------------------------------------------
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src2/route/Route';
import { createStore } from 'redux';
import rootReducers from './src2/reducers/rootReducers';

const store = createStore(rootReducers);

export default class Blog extends React.Component {
    
    render(){
        return(
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('blog', () => Blog);
