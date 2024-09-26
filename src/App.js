import './App.css';
import Header from './component/header/Header';
import Main from './component/Main';
import Sidebar from './component/sidebar/Sidebar'
import Home from './component/home/Home';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main sidebar={<Sidebar />} section={<Home />} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;