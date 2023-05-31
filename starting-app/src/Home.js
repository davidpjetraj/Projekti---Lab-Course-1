import './App.css';
import {Home} from './pages/Home';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import {Fatura} from './pages/Fatura';
import { Routes , Route } from 'react-router-dom';
import Products from './Products';

function HomePage() {
  return (
    <>
    <div className="App">
      < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Home />
                </div>
                  <Fatura />
        </div>
      </div>
    </div>


    <Routes>
    <Route path='/products' element={ < Products /> } />
    </Routes>


    </>
  );
}

export default HomePage;
