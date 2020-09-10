import { applyMiddleware, createStore } from 'redux';

import Container from "@material-ui/core/Container";
import { Provider } from 'react-redux';
import React from 'react';
import SearchBox from "./SearchBox";
import Title from "./Title";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import rootReducer from "./rootReducer";
import { routerMiddleware } from "connected-react-router";
import useStyles from "./styles";

function App() {
  const styles = useStyles();

  const history = createBrowserHistory();
  const compose = composeWithDevTools({});
  const middlewares = [routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(() => rootReducer(history), compose(...enhancers));

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
