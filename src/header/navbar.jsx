import './header.css';
import search from '../assets/search.svg';
import shop from '../assets/shop.svg';

export const Navbar = () => {

  return (
    <div className='navbar'>
        <nav>
           <a href="#"><h2 className='logo'>UI.desk</h2></a>
           <ul className='nav__ul'>
            <li><a href="#" className='nav__link'>Home</a></li>
            <li><a href="#" className='nav__link'>About</a></li>
            <li><a href="#" className='nav__link'>Contact</a></li>
            <li><a href="#" className='nav__link'>Testimonials</a></li></ul>
            <div className='nav__buttons'>
            <img src={search} alt="" />
            <img src={shop} alt="" />
            <button className='nav__button'>Order Now</button>
            </div>
            
           
        </nav>
    </div>
  );
}

