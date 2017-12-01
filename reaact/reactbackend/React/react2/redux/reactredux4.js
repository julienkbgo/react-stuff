// 3. Connect redux async reducer
const store = createStore(combineReducers({ reduxAsyncConnect }), window.__data);

// 4. Render `Router` with ReduxAsyncConnect middleware
hydrate((
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
), el)
