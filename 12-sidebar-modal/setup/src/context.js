import React, { useState, useContext } from 'react'

const AppKaContext = React.createContext();

const AppKaProvider = ({children}) => {

    const[isModalOn, setIsModalOn] = useState(false);
    const[isSidebarOn, setIsSidebarOn] = useState(false);


    const openModel = () => {
        setIsModalOn(true);
    }

    const closeModel = () => {
        setIsModalOn(false);
    }

    const openSidebar = () => {
        setIsSidebarOn(true);
    }

    const closeSidebar = () => {
        setIsSidebarOn(false);
    }

    return <AppKaContext.Provider value = {{
        isModalOn, isSidebarOn, openModel, openSidebar, closeModel, closeSidebar
    }}>
        {children}
    </AppKaContext.Provider>
}

export const useCustomHook = () => {
    return useContext(AppKaContext);
}

export {AppKaProvider}