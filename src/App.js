import { BrowserRouter, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
