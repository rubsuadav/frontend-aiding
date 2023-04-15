import {
    createContext,
    useCallback,
    useMemo,
    useState,
    useContext,
  } from "react";
  import PropTypes from "prop-types";
  
  
  export const NotificationContext = createContext();
  
  export function NotificationContextProvider({ children }) {
    const [emails, setEmails] = useState("");
  
    const setFilteredEmails = useCallback(function (data) {
      setEmails(data);
    }, []);
  
    const value = useMemo(
      () => ({
        setFilteredEmails,
        emails,
      }),
      [setFilteredEmails,emails]
    );
  
    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
  }
  
  NotificationContextProvider.propTypes = {
    children: PropTypes.object,
  };
  
  export function useNotificationContext() {
    return useContext(NotificationContext);
  }
  