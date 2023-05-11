/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //   const [loginObj, setLoginObj] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); //Store search term
  const [searchData, setSearchData] = useState(null); //Store search results
  const [searching, setSearching] = useState(false); //To handle loader while search
  const url = `${process.env.REACT_APP_API}/api/v1/items`;
  useEffect(() => {
    const search = async () => {
      try {
        const response = await fetch(`${url}?search=${searchTerm}`);
        const data = await response.json();
        if(data.data.items.length>0){
            setSearchData(data.data.items);
        }else{
            setSearchData('')
        }
      } catch (err) {
        console.log(err);
      }
    };
    if(searchTerm)
    search();
  }, [searchTerm]);
  
  //Pass all states as props to all child components
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchData,
        setSearchData,
        searching,
        setSearching,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//This fuction will be used by children to get current app context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
