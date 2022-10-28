import React from 'react'

const Contact = (props) => {

    const{ count4,setCount4} =props 
  return (
    <div>
<div className="mann" style={{display:count4?"flex":"none" }} >
<div className="manu"  >
<div>
<h2>Login to carwale </h2>
<span>This is necesssary to personalise resualts for you </span>
</div>

<div className='manu1'>
<input type="text" placeholder='Enter Your Email id'/>
<input type="text" placeholder='Enter Your Password ' />
</div>





</div>

</div>



    </div>
  )
}

export default Contact