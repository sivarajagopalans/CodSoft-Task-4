import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Cards } from './components/Cards';
import { Categories } from './components/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarComponent } from './components/NavbarComponent';

function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <NavbarComponent />
      {/* <Categories/> */}
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/cards' element={<Cards />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
