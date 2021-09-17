import React from 'react';
import {observer} from "mobx-react";

@observer
class Positions extends React.Component <any> {
    state = {
        positions:['Менеджер','Художник','Арт-директор','Разработчик','Дизайнер']
    }
    render() {
        return (
            <select name='positions' id='positions' onChange={this.props.onChangePos}>
                {
                    this.state.positions.map(e => <option key={`${e}pos`}>{e}</option>)
                }
            </select>
        )

    }
}

export default Positions