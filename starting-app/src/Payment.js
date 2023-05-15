import './App.css';
import {Pagesa} from './pages/Pagesa';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';


function Payment() {
    return(
        <div className="App">
            < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Pagesa />
                </div>
                  
        </div>
      </div>
    </div>
    );
}

export default Payment;