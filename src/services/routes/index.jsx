import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { App } from '../../pages/App/index.jsx';
import { Default } from '../../pages/Default';
import P from 'prop-types';

/**
 * Gerenciamento de rotas do sistema
 * @returns {JSX.Element}
 * @constructor
 */
function AppRoute() {
  let isAuthenticated = false;

  const PrivateRoute = ({ component: Component, ...rest }) => {
    if (isAuthenticated === null || isAuthenticated === undefined) {
      return 'Carregando ...';
    }
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            // eslint-disable-next-line react/prop-types
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
        }
      />
    );
  };

  PrivateRoute.propTypes = {
    component: P.any,
  };

  return (
    <BrowserRouter>
      <Default>
        <Switch>
          <Route exact path="/" render={() => <App>Hello</App>} />
          <PrivateRoute exact path="/profile" component={App} />
          {/*<Route path='*' component={Error} />*/}
        </Switch>
      </Default>
    </BrowserRouter>
  );
}

export default AppRoute;
