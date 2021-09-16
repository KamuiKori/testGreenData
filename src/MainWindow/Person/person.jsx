import React from 'react'
import style from './person.module.css'



class person extends React.Component {
    state = {}

    render() {
        return (
            <div className={style.person}>
                <span>{this.props.name} </span>
                <span>Должность: {this.props.position} </span>
                <span>Дата рождения: {this.props.dateOfBirth} </span>
                <span>Пол: {this.props.gender === 'Male'? 'М':'Ж'}</span>
                <span>Уволен: {this.props.working ? 'Да' : 'Нет'}</span>
            </div>

        )
    }
}

export default person