import { createContext, useState, useContext } from 'react';

export const AppContext  = createContext();

export const ContextProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(null);
    const [headerText, setHeaderText] = useState('Heba');
  
    return (
      <AppContext.Provider value={{ 
          activeUser, 
          setActiveUser,
          headerText, 
          setHeaderText
        }}>
        {children}
      </AppContext.Provider>
    );
  }
  
export const useAppContext = () => useContext(AppContext)