import React from 'react'
import Person from './person'

class personList extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <h1> Список сотрудников</h1>
                <div>
                    {this.props.props.persons.map(e => <Person key={`${e.name}${e.dateOfBirth}`}name={e.name} position={e.position} dateOfBirth={e.dateOfBirth} gender={e.gender} working={e.working}/>)}
                </div>
            </div>

    )
    }
}

export default personList