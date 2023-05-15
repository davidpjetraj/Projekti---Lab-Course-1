import './App.css';
import {Porosia} from './pages/Porosia';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';


function Order() {
    return(
        <div className="App">
            < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Porosia />
                </div>
                  
        </div>
      </div>
    </div>
    );
}

export default Order;