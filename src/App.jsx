import { useState } from 'react';
import './App.css';

function App() {
  const blueSpan = "span-blue";
  const firstH4 = "first-h4";
const title1 = (
  <div>
    <h1>Choose title content</h1>
    <div className="buttons">
      <button className='title-btn'
        onClick={() => {
          setButton2(blueSpan);
          setButton3("");
          setButton22(firstH4);
          setButton33("");
          setTitle11(title2)
        }}
      >
        Submit title
      </button>
    </div>
  </div>
);
const title2 = (
  <div>
    <h1>Choose description content</h1>
    <div className="buttons">
      <button className='title-btn' onClick={() => {
          setButton2("");
           setButton3("");
            setButton22("");
             setButton33("");
              setTitle11(title1);}}>Back</button>
      <button className='title-btn'
        onClick={() => {
          setButton3(blueSpan);
           setButton33(firstH4);
            setTitle11(title3)
        }}
      >
        Submit description
      </button>
      
    </div>
  </div>
);
const title3 = (
  <div>
    <h1>Are you happy now</h1>
    <div className="buttons">
      <button className='title-btn' onClick={() => {
          setButton3("");
           setButton22(firstH4);
            setButton33("");
             setTitle11(title2);}}>No, go back</button>
      <button className='title-btn'
        onClick={() => {
          setButton3(blueSpan);
           setButton33(firstH4);
            setTitle11(title4)
        }}
      >
        Yes, go ahead
      </button>
      
    </div>
  </div>
);
const title4 = (
  <div>
    <h1>Ok, we're done. Thanks for sending use your data!</h1>
  </div>
);



    let [button2, setButton2] = useState("1");
    let [button3, setButton3] = useState("1");
    let [button33, setButton33] = useState("1");
    let [button22, setButton22] = useState("1");
    let [title, setTitle11] = useState(title1);
  return (
    <div className='app'>
        <div className='box w-1/2 h-72 bg-white shadow-2xl rounded-lg flex gap-x-20 py-9 pl-9 '>
           <ul className='box-left flex flex-col gap-y-8'>
       <li className='flex items-center'><button onClick={() => {
          setButton2(""); 
          setButton3("");
          setButton22(""); 
          setButton33(""); 
          setTitle11(title1);
          }
        }><h4 className='text-3xl flex items-center first-h4'><h6 className='mr-5 text-2xl span-blue'>1</h6>Choose title</h4></button></li>
       <li><button className='title2-btn' onClick={() => {
          setButton2(blueSpan); 
          setButton3(""); 
          setButton22(firstH4); 
          setButton33(""); 
          setTitle11(title2);
       }
      }><h4 className={`flex text-3xl items-center h4 ${button22}`}><h6 className={`mr-5 text-2xl ${button2}`}>2</h6>Choose description</h4></button></li>
       <li><button  className='title3-btn' onClick={() =>  {
        if (button2 == blueSpan) {
          setButton3(blueSpan); 
          setButton33(firstH4); 
          setTitle11(title3);
        }
       }
      }><h4 className={`flex text-3xl items-center h4 ${button33}`}><h6 className={`mr-5 text-2xl ${button3}`}>3</h6>Confirm data</h4></button></li>
           </ul>
           <div className='box-right'>
              {title}
           </div>
        </div>
    </div>
  )
}

export default App
