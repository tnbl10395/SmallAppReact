import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Route.js';
import rootReducer from './Reducer.js';
import { addNavigationHelpers } from 'react-navigation';
import { navReducers } from './reducers/NavReducers.js'

const store = createStore(rootReducer);

export default class Index extends React.Component{

    render(){
        return(
            <Provider store={store}>
                <App
                    // navigation={this.props.navigation}
                    // navigation={addNavigationHelpers({
                    //     dispatch: this.props.dispatch,
                    //     state: this.props.rootReducer
                    // })}
                />
            </Provider>
        );
    }
}
