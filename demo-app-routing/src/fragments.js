import React from 'react';

const items = [
    {
        col1: 'col11',
        col2: 'col12'
    },
    {
        col1: 'col21',
        col2: 'col22'
    }
]

class Columns extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.col1}</td>
                <td>{this.props.col2}</td>
            </tr>
        )
    }
}

class Table extends React.Component {
    render() {
        const rows = items.map((item, index) => (
            <React.Fragment key={index} >
                <Columns col1={item.col1} col2={item.col2} />
            </React.Fragment>

        ))
        return (
            <div>
                <table >
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table