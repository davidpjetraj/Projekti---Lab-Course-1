import './App.css';
import {Home} from './pages/Home';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import {Order} from './pages/Order';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Home />
                </div>
                  <Order/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
