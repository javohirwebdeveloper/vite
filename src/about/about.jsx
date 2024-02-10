import './about.css';
import todo from '../assets/todo.svg';
import map from '../assets/map.svg';
import leaf from '../assets/leaf.svg';
export const About = () => {

  return (
    <div className='About'>
           <h2>
           Why Choose US?
           </h2>
           <p>Organic food is grown without the use of synthetic chemicals</p>
    
    <div className='about__box'>
     <div className='about__todo'>
        <img src={todo} alt="" />
           <h3>Easy to order</h3>
           <p>foods include fresh produce, meats as well as processed</p>
     </div>
     <div className='about__map'>
        <img src={map} alt="" />
           <h3>Live Order</h3>
           <p>Place your online Order easily and get the food instantly</p>
     </div>
     <div className='about__leaf'>
        <img src={leaf} alt="" />
           <h3>100% Organic</h3>
           <p>Organic food is grown without the use of synthetic chemicals</p>
     </div>
    </div>
     <div className='count'>
        <div className="count__left"><h4>40+</h4><p>Food Partners</p></div>
        <div className="count__center"><h4>459+</h4><p>Trusted Clients</p></div>
        <div className="count__right"><h4>12k+</h4><p>Order Online</p></div>
     </div>
    </div>
  )
}

