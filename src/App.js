import React from 'react';
import './App.css'
import Header from './Header/header'
import PersonList from './MainWindow/Person/personList'
import store from './state/store'
import MainWindow from './MainWindow/mainWindow'

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <MainWindow/>
        </div>
    );
}

export default App;
