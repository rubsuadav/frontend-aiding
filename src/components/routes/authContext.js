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

  const [role, setRole] = useState(
    localStorage.getItem('role') ?? { isAdmin: false, isCaptain: false, isSupervisor: false }
  );

  const { isAdmin, isCaptain, isSupervisor } = role;

  const login = useCallback(function (token, role) {
    localStorage.setItem('access_token', token.access);
    localStorage.setItem('refresh_token', token.refresh);
    localStorage.setItem('role', role);
    setIsAuthenticated(true);
    setRole(role);
  }, []);

  const logout = useCallback(function () {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('role');
    setRole({ isAdmin: false, isCaptain: false, isSupervisor: false });
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
