import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Layouts/Alert';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
          <Alert/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
