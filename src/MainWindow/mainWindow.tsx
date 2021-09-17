import React from 'react'
import store from "../state/store";
import PersonList from "./Person/personList";
import Editor from './Editor/editor'
import style from './mainWindow.module.css'
import {observer, Observer, Provider} from "mobx-react";
import {Simulate} from "react-dom/test-utils";

@observer
class mainWindow extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {name: '', position: '', dateOfBirth: '', gender: '', working: false, selected: null}
    }

    toggleSelect(id) {
        this.setState({selected: id})
    }

    get SelectedElem() {
        return this.props.store.persons.find(person => this.state.selected === person.id)
    }

    render() {
        return (
            <div className={style.mainWindow}>
                <PersonList persons={this.props.store.persons}/>
                <Editor selectedElem={this.SelectedElem}/>
            </div>

        )
    }

}

export default mainWindow