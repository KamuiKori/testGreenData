import React from 'react';

class Positions extends React.Component {
    state = {
        positions:['Менеджер','Художник','Арт-директор','Разработчик','Дизайнер']
    }
    render() {
        return (
            <select name='positions' id='positions'>
                {
                    this.state.positions.map(e => <option key={`${e}pos`}>{e}</option>)
                }
            </select>
        )

    }
}

export default Positions