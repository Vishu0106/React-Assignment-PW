import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componenets/Home/Home';
import ImageList from './componenets/ImageList/ImageList';
import ImageDetails from './componenets/ImageDetails/ImageDetails';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/:id' element={<ImageDetails />}/>
    </Routes>
  );
}

export default App;
