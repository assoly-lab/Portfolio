'use client'


import React, { createContext,useRef } from "react";



type AppState = {
    projectRef: React.MutableRefObject<HTMLHeadingElement | null>,
}


export const AppContext = createContext<AppState | any>({})

export default function AppContextProvider({children}: {children:React.ReactNode}){
const projectRef = useRef<HTMLHeadingElement | null>(null)


    const values:AppState = {
        projectRef
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
        
    )
}


