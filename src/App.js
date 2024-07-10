import Header from './pages/header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch/NoMatch';
import RegisterUser from './pages/user/RegisterUser';
import UpdateUser from './pages/user/UpdateUser';
import HomePage from './pages/homePage/HomePage';
import UserList from './pages/admin/UserList';
import Dashboard from './pages/dashboard/Dashboard';
import StepCounter from './pages/step/StepCounter';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/register' element={<RegisterUser/>} />
        <Route path='/userlist' element={<UserList/>} />
        <Route path='/user/:id' element={<UpdateUser/>} />
        <Route path='/stepCounter' element={<StepCounter/>} />

        <Route path='*' element={<NoMatch/>} />

      </Routes>
    </>
  );
}

export default App;
