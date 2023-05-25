import './App.css';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';
import { AddProduktet } from './pages/AddProduktet';


function AddProducts() {
    return(
        <div className="App">
            < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < AddProduktet />
                </div>
                  
        </div>
      </div>
    </div>
    );
}

export default AddProducts;