const reloadOnPropsChange = (props, nextProps) => {
  // reload only when path/route has changed
  return props.location.pathname !== nextProps.location.pathname;
};

export const Root = ({ store, history }) => (
  <Provider store={store} key="provider">
    <Router render={(props) => <ReduxAsyncConnect {...props}
      reloadOnPropsChange={reloadOnPropsChange}/>} history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>
);
