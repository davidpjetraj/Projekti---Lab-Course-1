import './App.css';
import {Home} from './pages/Home';
import {Header} from './pages/Header';
import {Sidebar} from './pages/Sidebar';
import Datetime from './pages/Datetime';

function App() {
  return (
    <div className="App">
      < Header />
      <div className='Body'>
      < Sidebar />
        <div>
          < Datetime />
          < Home />
        </div>
      </div>
    </div>
  );
}

export default App;
