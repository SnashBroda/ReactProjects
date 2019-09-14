import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Auth = ({ path, props, component: Component , isAuthenticated }) => {
  return <Route
    path={path}
    render={
      routerProps => {
        if (isAuthenticated)
        {
          return <Component {...props} {...routerProps}/>
        }
        return <Redirect to="/login"/>
      }
    }
  />
}

Auth.defaultProps = {
  props: {}
}

Auth.Proptypes = {
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  props: PropTypes.objectOf(PropTypes.any),
  component: PropTypes.instanceOf(React.Component).isRequired
}

export default Auth;