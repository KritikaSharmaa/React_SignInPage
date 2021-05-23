import LoginPage from './LoginPage/LoginPage';
import HomePage from './Home/HomePage';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import store from './Counter/store';
import {Provider} from 'react-redux';
const App = () => {
    return(<>
    <Provider store={store}>
        <Switch>
            <Route  exact path="/" component={LoginPage}/>
            <Route path="/Home" component={HomePage}/>
        </Switch>
    </Provider>
    </>);
}
export default App;