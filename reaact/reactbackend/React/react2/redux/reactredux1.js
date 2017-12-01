import { Router, browserHistory } from 'react-router';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'
import React from 'react'
import { hydrate } from 'react-dom'
import { createStore, combineReducers } from 'redux';

// 1. Connect your data, similar to react-redux @connect
@asyncConnect([{
  key: 'lunch',
  promise: ({ params, helpers }) => Promise.resolve({ id: 1, name: 'Borsch' })
}])
class App extends React.Component {
  render() {
    // 2. access data as props
    const lunch = this.props.lunch
    return (
      <div>{lunch.name}</div>
    }
  }
};
