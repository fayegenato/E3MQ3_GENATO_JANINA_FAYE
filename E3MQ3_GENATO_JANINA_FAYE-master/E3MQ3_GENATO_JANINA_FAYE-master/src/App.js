import './index.css';
import Nav from './components/user';
import Home from './components/home';
import About from './components/about'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="container">
                <Nav user={'janinafayegenato@gmail.com'} />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;