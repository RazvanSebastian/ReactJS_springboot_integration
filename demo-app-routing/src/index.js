import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Notfound from './notfound'

const Users = lazy(() => import('./users'))
const Contact = lazy(() => import('./contact'))
const Table = lazy(() => import('./fragments'))
const ContextDemo = lazy(() => import('./context'));
const TestErrorBoundary = lazy(() => import('./error-boundaries'));

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="active" to="/users">Users</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="active" to="/fragments">Fragments</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="active" to="/context">Context</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="active" to="/error-boundary">Error-Boundary</NavLink >
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/users" component={Users} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/fragments" component={Table} />
                    <Route path="/context" component={ContextDemo} />
                    <Route path="/error-boundary" component={TestErrorBoundary}/>
                    <Route component={Notfound} />
                </Switch>
            </Suspense>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
