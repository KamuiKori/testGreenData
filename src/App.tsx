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

    addNewEmp(person){
        store.persons.push(person)
    }

    render() {
        return(
            <div className='wrapper'>
                <Header addNewEmp={this.addNewEmp.bind(this)}/>
                <MainWindow store={store}/>
            </div>
        )
    }
}

// setTimeout(()=>{
//     const first = store.persons[0]
//     first.name = 'Pavel'
//     store.editPerson(0,first)
// },3000)
export default App;
