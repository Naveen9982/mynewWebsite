import React from 'react'
// import './App.css'
// import{BrowserRouter,Link} from "react-router-dom"
import { useState } from 'react'
import{Link} from 'react-router-dom'

const Header = (props) => {

 const{ count4,setCount4} =props
    const [count1, setCount1] = useState(true)
    const [count2, setCount2] = useState(false)
    const [count3, setCount3] = useState(false)
    
    const [count5, setCount5] = useState(false)
    const Contact1 =()=>{
      setCount1(true)
      setCount2(false)
      setCount3(false)
      setCount4(false)
      setCount5(false)
    }
    const Contact2 =()=>{
        setCount1(false)
        setCount2(true)
        setCount3(false)
        setCount4(false)
        setCount5(false)
    }
    const Contact3 =()=>{
      setCount1(false)
      setCount2(false)
      setCount3(true)
      setCount4(false)
      setCount5(false)
    }  
    const Contact4 =()=>{
      setCount1(false)
      setCount2(false)
      setCount3(false)
      setCount4(!count4)
      setCount5(false)
    } 
     const Contact5 =()=>{
      setCount1(false)
      setCount2(false)
      setCount3(false)
      setCount4(false)
      setCount5(true)
    }
  return (
    <>
        <div className="container">


<div className='one'>
<Link   to="/home"  className={count1?"active":""} onClick={Contact1}  >Home</Link>
<Link  to="/about" className={count2?"active":""} onClick={Contact2}>About us</Link>
<Link to="/services"  className={count3?"active":""} onClick={Contact3}>Services </Link>
<Link to="/contact"  className={count4?"active":''} onClick={Contact4 }   >Contact </Link>
<Link  to='help' className={count5?"active":""} onClick={Contact5}> Help</Link>


</div>
</div> 






    </>
  )
}

export default Header