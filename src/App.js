import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAhASnnmQvsaHOhu9mhUS3pzAACZahvjik",
            authDomain: "manager-8cc34.firebaseapp.com",
            databaseURL: "https://manager-8cc34.firebaseio.com",
            projectId: "manager-8cc34",
            storageBucket: "manager-8cc34.appspot.com",
            messagingSenderId: "804193570522"
        }

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;