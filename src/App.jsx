import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavbarComponent } from './components/NavbarComponent';
import { Cards } from './components/Cards';
import { Categories } from './components/Categories';

function App() {

  return (
    <>
      <NavbarComponent/>
      <Cards/>
      <Categories/>
    </>
  )
}

export default App
