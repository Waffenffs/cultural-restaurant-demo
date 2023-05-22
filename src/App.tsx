import './App.css';
import { Routes, Route } from 'react-router-dom'
import Menu from './routes/Menu';
import Home from './routes/Home';

function App() {
  // use react routers
  // routes: /menu /instagram /facebook
  // cuisine will be mostly maranao (tagalog alternative)

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/menu' element={ <Menu /> } />
    </Routes>
  )
}

export default App;
