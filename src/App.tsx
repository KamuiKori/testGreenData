import React from 'react';
import './App.css'
import Header from './Header/header'
import PersonList from './MainWindow/Person/personList'
import Store from './state/store'
import MainWindow from './MainWindow/mainWindow'
import {observer} from "mobx-react";

const store = new Store()

@observer
class App extends React.Component<any, any>{


    render() {
        return(
            <div className='wrapper'>
                <MainWindow store={store}/>
            </div>
        )
    }
}
export default App;
