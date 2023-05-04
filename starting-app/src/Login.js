import {Login} from './pages/Login';
import './Login.css'
import { Route, Routes } from 'react-router-dom';
import App from './App';

function Log() {
    return(
       <> <div className='Login'>
            < Login />
        </div> 
        
        <Routes>
            <Route path='/app' element={< App />} />
        </Routes></>
    );
}

export default Login;