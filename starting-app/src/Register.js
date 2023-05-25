import {Register} from './pages/Register';
import './Login.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function Regist() {
    return(
       <> <div className='Login'>
            < Register />
        </div> 
        
        <Routes>
            <Route path='/home' element={< Home />} />
        </Routes></>
    );
}

export default Regist;