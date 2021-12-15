import './App.css';
import { useState, useEffect } from 'react'
import Layout from './layouts/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import SignUp from './components/SignUpForm';
import MainContainer from './Containers/MainContainer';

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
    history.push('/cars')
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData);
    history.push('/cars')
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  };
    
  return (
    <div className="App">

      
      <Layout currentUser={currentUser} handleLogout={handleLogout}>

        <Switch>
        
          <Route path='/login'>
            <LoginForm handleLogin={handleLogin} />
          </Route>
        
          <Route path='/signup'>
            <SignUp handleRegister={handleRegister} />
          </Route>

          <Route path='/about'></Route>
        
          <Route path='/'>
            <MainContainer />
          </Route>

        </Switch>
      </Layout>
      
    </div>
  );
}

export default App;
