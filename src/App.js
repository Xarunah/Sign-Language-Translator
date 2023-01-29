
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import Profile from './views/Profile';
import Translation from './views/Translation';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/translation" element={ <Translation /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
