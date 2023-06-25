import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './user/pages/User';
import NewPlaces from './places/pages/NewPlaces';
import NotFound from './user/pages/NotFound';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<User/>}/>
        <Route   path='/places/new' element={<NewPlaces/>}/>
        <Route   path='/*' element={<NotFound/>}/>

      
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
