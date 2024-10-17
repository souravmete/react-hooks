import React, { useState } from 'react'

const UseStateHook = () => {
    const [form,setForm] = useState({
        username:"",
        gmail:"",
        number:"",
        password:""
    })

    const handelForm= (event)=>{
        const name =event.target.name;
        const value =event.target.value;

        setForm((prev)=>{
            return {...prev,[name]:value}
        })
    }
  return (
    <>
        <div>
            <span>NAME : </span>
            <input type="text" placeholder='name' id='name' name='username' value={form.username} onChange={handelForm}/>
            <br />
            <span>G-MAIL : </span>
            <input type="text" placeholder='gmail' id='gmail' value={form.gmail} name='gmail' onChange={handelForm}/>
            <br />
            <span>PHONE-NO : </span>
            <input type="number" placeholder='number' id='number' name='number' value={form.number} onChange={handelForm}/>
            <br />
            <span>PASSWORD : </span>
            <input type="password" placeholder='password' id='pass' name='password' value={form.password} onChange={handelForm}/>
        </div>
    </>
  )
}

export default UseStateHook