// on client
const component = (
  <Router
    render={(props) => (
      <ReduxAsyncConnect
        {...props}
        helpers={{ client }}
        filter={item => !item.deferred}
        render={applyRouterMiddleware(useScroll())}
      />
    )}
    history={history}
    routes={getRoutes(store)}
  />
);
