import React from 'react'
import store from "../../state/store";
import style from './editor.module.css'
import Positions from "../../Header/Positions/positions";
import {observer} from "mobx-react";

@observer
class editor extends React.Component <any> {


    changeName(e){
        const name = e.target.value
        this.props.person.name = name
    }
    changeDate(e){
        const date = e.target.value
        this.props.person.dateOfBirth = date
        console.log(this.props.person)
    }
    changeWorking(e){
        const checked = e.target.checked
        this.props.person.working = checked
    }
    changeGender(e){
        const gender = e.target.value
        this.props.person.gender = gender
    }
    deletePerson(){
        this.props.store.deletePerson(this.props.person.id)
    }
    onChangePosition(e) {
        const pos = e.currentTarget.value
        this.props.person.position = pos
    }

    render() {
        return (
            <div className={style.editor}>
                <label htmlFor="editorName">ФИО</label>
                <input type="text" placeholder='ФИО' value={this.props.person && this.props.person.name || ''} onChange={this.changeName.bind(this)}/>
                <span>Должность:</span>
                <Positions selected={this.props.person && this.props.person.position} onChangePos={this.onChangePosition.bind(this)}/>
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth' type="date" value={this.props.person && this.props.person.dateOfBirth} onChange={this.changeDate.bind(this)}/>
                <span>Пол:</span>
                <label htmlFor="radioMale">М</label>
                <input type="radio" name='sexRadio' id='radioMale' value='Male'  checked={this.props.person && this.props.person.gender ==='Male'} onChange={this.changeGender.bind(this)}/>
                <label htmlFor="radioFemale">Ж</label>
                <input type="radio" name='sexRadio' id='radioFemale' value='Female' checked={this.props.person && this.props.person.gender ==='Female'} onChange={this.changeGender.bind(this)}/>
                <label htmlFor="">Уволен:</label>
                <input name='checkbox' type="checkbox" id='status' checked={this.props.person && this.props.person.working} onChange={this.changeWorking.bind(this)}/>
                <br/>
                <input disabled={!this.props.person} type="submit" value='Удалить' onClick={this.deletePerson.bind(this)}/>
            </div>

        )
    }
}

export default editor