import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    BlackUserListContainer,
    BoardListContainer,
    DeclareListContainer, 
    IndexContainer,
} from './containers';

import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={IndexContainer} />
                        <Route path="/board" component={BoardListContainer} />
                        <Route path="/declare" component={DeclareListContainer} />
                        <Route path="/black" component={BlackUserListContainer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
