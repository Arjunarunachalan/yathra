
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './user/pages/User';
import NewPlaces from './places/pages/NewPlaces';
import NotFound from './user/pages/NotFound';
import MainNavigation from './shared/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <MainNavigation />
      <main>

      </main>
      <Routes>
        
        <Route  exact path='/' element={<User/>}/>
        <Route  exact  path='/:userId/places' element={<UserPlaces/>}/>
        <Route   path='/places/new' element={<NewPlaces/>}/>
        <Route   path='/*' element={<NotFound/>}/>

      
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
