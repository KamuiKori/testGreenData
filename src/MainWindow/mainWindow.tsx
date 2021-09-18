import React from 'react'
import store from "../state/store";
import PersonList from "./Person/personList";
import Editor from './Editor/editor'
import style from './mainWindow.module.css'
import {observer, Observer, Provider} from "mobx-react";
import {Simulate} from "react-dom/test-utils";
import Header from "../Header/header";

@observer
class mainWindow extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {selected: null, id:null}
    }
    get SelectedElem() {
        return this.props.store.persons.find(person => this.state.selected === person.id)
    }

    selectPerson(id){
        this.setState({selected: id})
    }
    addNewEmp(person){
        person.id = this.encrId()
        this.props.store.persons.push(person)
        this.selectPerson(person.id)
        console.log(person.id)
    }
    encrId(){
        const id = this.props.store.persons.map(person => person.id)
        let maxId = Math.max(...id)
        maxId++
        return maxId
    }

    render() {
        return (
            <div>
                <Header addNewEmp={this.addNewEmp.bind(this)}/>
                <div className={style.mainWindow}>
                    <PersonList persons={this.props.store.persons} selectPerson={this.selectPerson.bind(this)}/>
                    <Editor store={this.props.store} person={this.SelectedElem} />
                </div>
            </div>
        )
    }

}

export default mainWindow