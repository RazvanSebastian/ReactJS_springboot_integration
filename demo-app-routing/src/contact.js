import React from 'react'
class Contact extends React.Component {

    handleClick = () => {
        this.props.history.push('/users/4')
    }

    render() {
        return (
            <div>
                <h1>Contact user 4 </h1>
                <button onClick={this.handleClick}> Contact</button>
            </div>
        )
    }
}
export default Contact