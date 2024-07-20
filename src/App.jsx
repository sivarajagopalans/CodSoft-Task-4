import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Categories } from './components/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarComponent } from './components/NavbarComponent';
import { Cart } from './components/Cart';

function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <NavbarComponent />
      {/* <Categories/> */}
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
