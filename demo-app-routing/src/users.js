import React from 'react'
import { Route, Link } from 'react-router-dom'

class User extends React.Component {
    render() {
        return (
            <p>User id = {this.props.match.params.id} </p>
        )
    }
}

class Users extends React.Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <strong>Nested router of users</strong>
                <ul>
                    <li>
                        <Link to="/users/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3 </Link>
                    </li>
                </ul>
                <Route path="/users/:id" component={User} />
            </div>
        )
    }
}
export default Users