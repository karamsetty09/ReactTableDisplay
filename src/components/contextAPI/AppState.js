import React from 'react';
import AppContext from './app-context';

export default function AppState(props) {
    return (
        <AppContext.Provider 
        value={{
            message: "This is from the context",
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
