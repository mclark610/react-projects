import React from 'react';
import {
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";

import AuthContext from './AuthContext';


const fakeAuthProvider = {
  isAuthenticated: false,
  signin(data,callback) {
    (data.username==="admin" && data.password==="password")?
      fakeAuthProvider.isAuthenticated = true:
      fakeAuthProvider.isAuthenticated = false;
      console.log('----------------------------------------')
      console.log(`fakeAuthProvider::user<${data.user}> password<${data.password}> authorized:<${fakeAuthProvider.isAuthenticated}>`);
      console.log('----------------------------------------')
    setTimeout(callback, 300); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (data, callback) => {
    return fakeAuthProvider.signin(data.username,data.password,() => {     
      setUser(data.username);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export {AuthContext,AuthProvider, useAuth, AuthStatus, RequireAuth};
