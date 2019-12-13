import React from 'react'
import { Route, Link } from 'react-router-dom'

class User extends React.Component {
    render() {
        return (
            <p>User id = {this.props.match.params.id} </p>
        )
    }
}

function UserRows(props) {
    return (
        props.users.map((user, id) => {
            const path = "/users/" + id;
            return (
                <li key={id}>
                    <Link to={path} > Name : {user.name} and age : {user.age} </Link>
                </li >
            )
        })
    )
}

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isSuccessfully: true,
            users: []
        }
    }

    componentDidMount() {
        fetch('/users')
            .then(response => response.json())
            .then(response =>
                this.setState({
                    users: response,
                    isLoading: false,
                    isSuccessfully: true
                }))
            .catch(err => this.setState({
                isLoading: false,
                isSuccessfully: false
            }))
    }

    onSuccess() {
        return (
            <div>
                <h1>Users</h1>
                <strong>Nested router of users</strong>
                <ul>
                    <UserRows users={this.state.users} />
                </ul>
                <Route path="/users/:id" component={User} />
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ?
                        <h3>Loading...</h3> :
                        this.onSuccess()
                }
            </div>
        )
    }
}
export default Users