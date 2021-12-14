import './App.css';
import { useState } from 'react'
import Layout from './components/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { loginUser, registerUser } from './services/auth';
import SignUp from './components/SignUpForm';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData);
    history.push('/')
  }
  return (
    <div className="App">

      <Layout>
        <Switch>
          <Route path='/'></Route>
        </Switch>

        <Switch>
          <Route path='/about'></Route>
        </Switch>
        
        <Switch>
          <Route path='/login'><LoginForm handleLogin={handleLogin}/></Route>
        </Switch>

        <Switch>
          <Route path='/signup'><SignUp handleRegister={handleRegister} /></Route>
        </Switch>

        <Switch>
          <Route path='/create'></Route>
        </Switch>

      </Layout>
      
    </div>
  );
}

export default App;
