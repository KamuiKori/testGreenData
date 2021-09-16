import React from 'react'
import store from "../../state/store";
import style from './editor.module.css'
import Positions from "../../Header/Positions/positions";

class editor extends React.Component {
    state = {}

    render() {
        return (
            <div className={style.editor}>
                <label htmlFor="editorName">ФИО</label>
                <input type="text" placeholder='ФИО'/>
                <span>Должность:</span>
                <Positions/>
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth'type="date"/>
                <span>Пол:</span>
                <label htmlFor="radioMale">М</label>
                <input type="radio" name='sexRadio' id='radioMale' value='male'/>
                <label htmlFor="radioFemale">Ж</label>
                <input type="radio" name='sexRadio' id='radioFemale' value='female'/>
                <label htmlFor="">Уволен:</label>
                <input name='checkbox' type="checkbox" id='status'/>
                <br/>
                <input type="submit" value='Добавить'/>
            </div>

        )
    }
}

export default editor