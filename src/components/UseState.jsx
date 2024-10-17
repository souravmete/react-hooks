import React from 'react'
import {useState} from 'react'

export const UseState = () => {

    const initialData = {
        name:'',
        city:''
    }

    const [formdata,setFormdata] = useState(initialData)

    function handelNameChange (event){
        setFormdata({
            ...formdata,
            name:event.target.value,
        })
    }

    function handelCityChange (event){
        setFormdata({
            ...formdata,
            city:event.target.value,
        })
    }

    console.log(formdata)


  return (
    <>
        <h1>UseState Hooks</h1>
        <input onChange={handelNameChange} name='name' type="text" placeholder='Enter Your Name' />
        <select onChange={handelCityChange} name="city" id="">
            <option value={""}>Select City</option>
            <option value={"Bengaluru"}>Bengaluru</option>
            <option value={"kolkata"}>kolkata</option>
            <option value={"Jamshedpur"}>Jamshedpur</option>
        </select>

        <div>
            Name is : <b>{formdata.name}</b>  And city is : <b>{formdata.city}</b> 
        </div>
    </>
  )
}
