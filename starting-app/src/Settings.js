import './App.css';
import {Setting} from './pages/Setting';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';


function Settings() {
    return(
        <div className="App">
            < Header />
        <div className='Body'>
          < Sidebar />
           <div className='Body'>
                <div>
                  < Datetime />
                  < Setting />
                </div>
                  
        </div>
      </div>
    </div>
    );
}

export default Settings;