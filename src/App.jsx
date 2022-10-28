import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import{BrowserRouter,Route, Routes } from "react-router-dom"
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
function App() {

  const [count4, setCount4] = useState(false)
  return (
    <div className="App">
   <BrowserRouter>
   
   
   
<Header count4={count4 } setCount4={setCount4} />
<Routes>

<Route path='/'/>

<Route path='/about' element={<About/> }/>
<Route path='/help' element={<Home/>} />
<Route path='/contact' element={<Contact count4={count4} setCount4={setCount4} />}/>

</Routes>



   </BrowserRouter>




    </div>
  )
}

export default App
