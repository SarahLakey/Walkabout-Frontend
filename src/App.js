import Header from './pages/header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import RegisterUser from './pages/user/RegisterUser';
import UpdateUser from './pages/user/UpdateUser';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/register' element={<RegisterUser/>} />
        <Route path='/user/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>} />

      </Routes>
    </>
  );
}

export default App;
