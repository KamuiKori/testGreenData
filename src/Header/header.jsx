import React from 'react';
import Positions from "./Positions/positions";


class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <input type="text" placeholder='ФИО' id='fullName'/>
                <span>Должность:</span>
                <Positions/>
                <label htmlFor="dateOfBirth">Дата рождения:</label>
                <input name='dateOfBirth' type="date"/>
                <span>Пол:</span>
                <label htmlFor="radioMale">М</label>
                <input type="radio" name='sexRadio' id='radioMale' value='male'/>
                <label htmlFor="radioFemale">Ж</label>
                <input type="radio" name='sexRadio' id='radioFemale' value='female'/>
                <label htmlFor="">Уволен:</label>
                <input name='checkbox' type="checkbox" id='status'/>
                <input type="submit" value='Добавить'/>
            </header>
        )

    }
}

export default Header