import './App.css';
import { useState, useEffect } from 'react'
import Layout from './components/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import SignUp from './components/SignUpForm';
import MainContainer from './Containers/MainContainer';
import Splash from './screens/Splash';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify()
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData);
    history.push('/')
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData);
    history.push('/')
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };
    
  return (
    <div className="App">

      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>

          <Route path='/' exact>
            <Splash/>
          </Route>
          
          <Route path='/'>
            <MainContainer />
          </Route>

          <Route path='/wheels'></Route>

          <Route path='/about'></Route>
        
          <Route path='/login'>
            <LoginForm handleLogin={handleLogin} />
          </Route>
        
          <Route path='/signup'>
            <SignUp handleRegister={handleRegister} />
          </Route>
        
          <Route path='/create'></Route>
        </Switch>

      </Layout>
      
    </div>
  );
}

export default App;
