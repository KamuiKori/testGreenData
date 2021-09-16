import React from 'react'
import store from "../state/store";
import PersonList from "./Person/personList";
import Editor from './Editor/editor'
import style from './mainWindow.module.css'

class mainWindow extends React.Component {
    state = {}

    render() {
        return (
            <div className={style.mainWindow}>
                <PersonList props={store}/>
                <Editor/>
            </div>

        )
    }
}

export default mainWindow