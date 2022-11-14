import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import Portofolio from './pages/Portofolio'
import About from './pages/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/article'element={<Article/>} />
        <Route path='/portofolio'element={<Portofolio/>} />
        <Route path='/about'element={<About/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
