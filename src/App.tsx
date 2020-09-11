import { applyMiddleware, createStore } from 'redux';

import Container from "@material-ui/core/Container";
import { Provider } from 'react-redux';
import React from 'react';
import SearchBox from "./SearchBox";
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
      <Container className={styles.rootContainer} maxWidth="xl">
        <Title />
        <SearchBox />
      </Container>
    </Provider>
  );
}

export default App;
