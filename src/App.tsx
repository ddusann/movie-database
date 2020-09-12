import { DetailPage, FavouritesPage, MainPage } from "./pages";
import { Route, Router, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import Container from "@material-ui/core/Container";
import { Provider } from 'react-redux';
import React from 'react';
import Title from "./Title";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import useStyles from "./styles";

function App() {
  const styles = useStyles();

  const history = createBrowserHistory();
  const compose = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware(history), sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer(history), compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Router history={history}>
        <Container className={styles.rootContainer} maxWidth="xl">
          <Title />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/favourites">
              <FavouritesPage />
            </Route>
            <Route exact path="/:id">
              <DetailPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
