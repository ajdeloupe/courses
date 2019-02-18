import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import Routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store =  configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render(
    <Provider store={store}>{Routes}</Provider>, document.getElementById('app')
);