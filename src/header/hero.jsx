import './header.css';


export const Hero = () => {

  return (
    <div className='hero'>
       <div className='hero__texts'>
          <h1>
          Just <span className='hero__h1'>Eat healthy</span> food to live a healthier life
          </h1>
          <p>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</p>
          <button className='hero__btn'>Order Now</button>
       </div>
    </div>
  );
}

