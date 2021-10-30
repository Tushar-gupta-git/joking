
import { useRef, useState } from 'react';
import './App.css';
import useTusharjoke from './custom_hooks/useTusharjoke';

function App() {
  const firstnameref = useRef(null)
  const lastnameref = useRef(null)
  const [fname , setfname]=useState("")
  const [lname , setlname]=useState("")
  
  const joke = useTusharjoke(fname , lname)

const Generate=(e)=>{
e.preventDefault();
setfname(firstnameref.current.value)
setlname(lastnameref.current.value)

}
  

  return (
    <div className="app">

<h2>
      JOKING
</h2>


<h2>{joke}</h2>

<form action="">
  <input placeholder="Firstname" ref={firstnameref} />
  <input placeholder="Lastname " ref={lastnameref} />
  <br />
  <br />
  <br />
  <div>
    <button onClick={Generate} >GENERATE</button>
</div>
</form>
    </div>
  );
}

export default App;
