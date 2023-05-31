import './App.css';
import User from './pages/Users';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import { Routes , Route } from 'react-router-dom';

function Useri() {
  return (
    <>
    <div className="User">
      < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < User />
                </div>
        </div>
      </div>
    </div>


    <Routes>
      <Route path='/users' element={ < User /> } />
    </Routes>


    </>
  );
}

export default Useri;
