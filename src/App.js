import React, { Component, Fragment } from 'react';
import Routes from './routes/index';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './Containers/store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
