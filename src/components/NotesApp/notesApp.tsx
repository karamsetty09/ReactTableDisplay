import React from 'react';
import NotesList from './NotesList';
import Nav from './Nav';
import { NotesProvider } from './NotesContext';
import AddNote from './AddNote';
import Reducer from './Reducer';

export default function NotesApp() {
    return (
        <NotesProvider>
            <Reducer/>
            <div>
                Table Display
                <Nav/>
                <hr></hr>
                <NotesList/>
                <AddNote/>
            </div>   
        </NotesProvider>
        
    )
}

