import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import UserDetail from './components/UserDetail/UserDetail'
import CreateUser from './components/CreateUser/CreateUser'
import UpdateUser from './components/UpdateUser/UpdateUser'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/users/:id' component={UserDetail} />
      <Route exact path='/create/user' component={CreateUser} />
      <Route exact path='/update/:id' component={UpdateUser} />
    </div>
  );
}

export default App;
