import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import PropTypes from "prop-types";

const MY_AUTH_APP = "MY_AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    //localStorage.getItem(MY_AUTH_APP) ?? false
    localStorage.getItem('access_token') ?? false
  );

  const login = useCallback(function (token) {
    //window.localStorage.setItem(MY_AUTH_APP, true);
    localStorage.setItem('access_token', token.access);
    localStorage.setItem('refresh_token', token.refresh);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    //window.localStorage.removeItem(MY_AUTH_APP);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
