import { createContext, useState, useContext } from 'react';

export const AppContext  = createContext();

export const ContextProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(null);
  
    return (
      <AppContext.Provider value={{ activeUser, setActiveUser }}>
        {children}
      </AppContext.Provider>
    );
  }
  
export const useAppContext = () => useContext(AppContext)