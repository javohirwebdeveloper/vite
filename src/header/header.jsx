import './header.css';
import { Navbar } from './navbar';
import { Hero } from './hero';


export const Header = () => {

  return (
    <div className='header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

