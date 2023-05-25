import {Login} from './pages/Login';
import './Login.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function Log() {
    return(
       <> <div className='Login'>
            < Login />
        </div> 
        
        <Routes>
            <Route path='/home' element={< Home />} />
        </Routes></>
    );
}

export default Log;