import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import PropTypes from "prop-types";

const ROLE_ADMIN = "admin";
const ROLE_CAPTAIN = "capitan";
const ROLE_SUPERVISOR = "supervisor";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('access_token') ?? false
  );

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem('role') ?? false
  );

  const [isCaptain, setIsCaptain] = useState(
    localStorage.getItem('role') ?? false
  );

  const [isSupervisor, setIsSupervisor] = useState(
    localStorage.getItem('role') ?? false
  );

  const login = useCallback(function (token, role) {
    localStorage.setItem('access_token', token.access);
    localStorage.setItem('refresh_token', token.refresh);
    localStorage.setItem('role', role);
    setIsAuthenticated(true);
    switch (role) {
      case ROLE_ADMIN:
        setIsAdmin(true);
        break;
      case ROLE_CAPTAIN:
        setIsCaptain(true);
        break;
      case ROLE_SUPERVISOR:
        setIsSupervisor(true);
        break;
    }
  }, []);

  const logout = useCallback(function () {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('role');
    setIsAdmin(false);
    setIsCaptain(false);
    setIsSupervisor(false);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      isAdmin,
      isCaptain,
      isSupervisor,
    }),
    [login, logout, isAuthenticated, isAdmin, isCaptain, isSupervisor]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export function useAuthContext() {
  return useContext(AuthContext);
}
