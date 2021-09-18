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
    constructor(props) {
        super(props);
        this.state = {name: '', position: '',dateOfBirth:'',gender:'',working:false,id:null}
    }
    onSelect(){
        this.props.selectPerson(this.props.person.id)
    }

    render() {
        return (
            <div onClick={this.onSelect.bind(this)} >
                <span>{this.props.person.name} </span>
                <span>Должность: {this.props.person.position} </span>
                <span>Дата рождения: {this.props.person.dateOfBirth} </span>
                <span>Пол: {this.props.person.gender === 'Male' ? 'М' : 'Ж'}</span>
                <span>Уволен: {this.props.person.working ? 'Да' : 'Нет'}</span>
            </div>

        )
    }
}

export default Person