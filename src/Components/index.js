import React from 'react';
import {HashRouter as Router, Route, Switch,} from 'react-router-dom';
import Main from './Home'

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Index;
