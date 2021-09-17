import React from 'react'
import Person from './person'
import {observer} from "mobx-react";

@observer
class personList extends React.Component<any> {

    render() {
        return (
            <div>
                <h1> Список сотрудников</h1>
                <div>
                    {(this.props.persons || []).map((e:any) => <Person key={e.id} name={e.name}
                                                               position={e.position} dateOfBirth={e.dateOfBirth}
                                                               gender={e.gender} working={e.working}/>)}
                </div>
            </div>

        )
    }
}

export default personList