import React, { useState } from 'react'
import './Agecalculator.css'

const Agecalculator = () => {
  const [birthdate,setBirthdate] = useState('')
  const [age,setAge] =useState(0)
  const calculateage = () => {
    const today=new Date()
    const birthDate = new Date(birthdate)
    let age = today.getFullYear()-birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if(monthDiff<0||(monthDiff===0 && today.getDate()<birthDate.getDate())){
      age--;
    }
    setAge(age)

}
const resetage = ()=>{
  setBirthdate('')
  setAge(0)

}
  return (
    <div className='container'>
       <h2 className='heading container_title'>Age Calculator</h2>
       <p className='para container_title'> Age calculator can determined the age or interval between two dates. the calculator will be displayed in years </p>
       <div className='container_middle'>
        <div className='right'>
            <h4> Date of birth</h4>
            <input className='date' type='date' value={birthdate} onChange={e=>setBirthdate(e.target.value)}></input>
            <div className='button_div'>
                <button className='button-65' onClick={calculateage}>calculate Age</button>
              <button className='button-65' onClick={resetage} >Reset</button>
            </div>
        </div>
        <div className='left'>
            <div className='container_middle_para'>
                <h1> Your age is </h1>
            </div>
            <h1 className='age_heading'> {age>0?` ${age}`:''} </h1>
        </div>
       </div>
       
    </div>
  )
}

export default Agecalculator
