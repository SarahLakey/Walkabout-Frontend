import Header from './pages/header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import RegisterUser from './pages/user/RegisterUser';
import UpdateUser from './pages/user/UpdateUser';
import HomePage from './pages/homePage/HomePage';
import UserList from './pages/admin/UserList';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<RegisterUser/>} />
        <Route path='/userlist' element={<UserList/>} />
        <Route path='/user/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>} />

      </Routes>
    </>
  );
}

export default App;
