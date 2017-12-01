import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-connect'
import createHistory from 'history/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import serialize from 'serialize-javascript';

app.get('*', (req, res) => {
  const store = createStore(combineReducers({ reduxAsyncConnect }));

  match({ routes, location: req.url }, (err, redirect, renderProps) => {

    // 1. load data
    loadOnServer({ ...renderProps, store }).then(() => {

      // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`
      const appHTML = renderToString(
        <Provider store={store} key="provider">
          <ReduxAsyncConnect {...renderProps} />
        </Provider>
      )

      // 3. render the Redux initial data into the server markup
      const html = createPage(appHTML, store)
      res.send(html)
    })
  })
})

function createPage(html, store) {
  return `
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>

        <!-- its a Redux initial data -->
        <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
      </body>
    </html>
  `
}
