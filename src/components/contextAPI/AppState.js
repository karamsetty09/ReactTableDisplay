import React, {useState} from 'react';
import AppContext from './app-context';

export default function AppState(props) {
    const [theme, setTheme] = useState(true);
    return (
        <AppContext.Provider 
        value={{
            theme,
            setTheme,
            message: "This is from the context",
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}
