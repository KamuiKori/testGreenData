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
                    {(this.props.persons || []).map((e:any) => <Person person={e} selectPerson={this.props.selectPerson}/>)}
                </div>
            </div>

        )
    }
}

export default personList