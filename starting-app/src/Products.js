import './App.css';
import {Home} from './pages/Home';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import {Order} from './pages/Order';
function Products() {
    return(
        <div className="App">
            < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Home />
                </div>
                  
        </div>
      </div>
    </div>
    );
}

export default Products;