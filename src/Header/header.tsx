import React from 'react';
import Positions from "./Positions/positions";
import {observer} from "mobx-react";
import Store from '../state/store'

@observer
class Header extends React.Component <any> {

    constructor(props) {
        super(props);
        this.state = {name: '', position: '',dateOfBirth:'',gender:'',working:false}
    }


    onChangeName(e) {
        const name1 = e.currentTarget.value
        this.setState({name: name1})
    }

    onChangePosition(e) {
        const pos = e.currentTarget.value
        this.setState({position: pos})
    }

    onChangeDate(e) {
        const date = e.currentTarget.value
        this.setState({dateOfBirth:date})
    }
    selectSex(e){
        const sexValue = e.currentTarget.value
        sexValue === 'male'? this.setState({gender:'Male'}):this.setState({gender:'Female'})
    }

    onChangeWorking(e){
        this.setState({working:e.currentTarget.checked})
    }

    fillPerson() {
        this.props.addNewEmp(this.state)
    }


    render() {
        return (
            <header className='header'>
                <input type="text" placeholder='ФИО' id='fullName' onChange={this.onChangeName.bind(this)}/>
                <span>Должность:</span>
                <Positions onChangePos={this.onChangePosition.bind(this)}/>
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth' type="date" onChange={this.onChangeDate.bind(this)}/>
                <span>Пол:</span>
                <label htmlFor="radioMale">М</label>
                <input type="radio" name='sexRadio' id='radioMale' value='male' onChange={this.selectSex.bind(this)}/>
                <label htmlFor="radioFemale">Ж</label>
                <input type="radio" name='sexRadio' id='radioFemale' value='female' onChange={this.selectSex.bind(this)}/>
                <label htmlFor="">Уволен:</label>
                <input name='checkbox' type="checkbox" id='status' onChange={this.onChangeWorking.bind(this)}/>
                <input type="submit" value='Добавить' onClick={this.fillPerson.bind(this)}/>
            </header>
        )

    }
}

export default Header