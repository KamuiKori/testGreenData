import React from 'react'
import style from './person.module.css'
import {observer} from "mobx-react";


type PersonProps = {
    name: string,
    position: string,
    dateOfBirth: string,
    gender: string,
    working: boolean,
}



@observer
class Person extends React.Component<any> {

    selectEmp(){

    }

    render() {
        return (
            <div onClick={this.props.selectEmp} className={style.person}>
                <span>{this.props.name} </span>
                <span>Должность: {this.props.position} </span>
                <span>Дата рождения: {this.props.dateOfBirth} </span>
                <span>Пол: {this.props.gender === 'Male' ? 'М' : 'Ж'}</span>
                <span>Уволен: {this.props.working ? 'Да' : 'Нет'}</span>
            </div>

        )
    }
}

export default Person