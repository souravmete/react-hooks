import { useState,useEffect } from "react"

const UseEffect = () => {

    const [count,setCount] =useState(1)

    const [showText,setShowText] =useState(false)

    const [ProductList,setProductList] =useState([])

    async function fetchAllPrduct(){
        try{
            const response = await fetch('https://dummyjson.com/products')
            const result =await response.json();

            if(result && result.products) setProductList(result.products);
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        // console.log("hello")
        if(count === 5) setShowText(true);
    },[count])


    useEffect(()=>{
        fetchAllPrduct()
    },[])



  return (  
    <>
        <h1>Use Effect</h1>
        {
            showText?<h3>Hello User</h3>:null

        }
        <h4>Count is {count}</h4>
        <button onClick={()=>setCount(count+1)}>Inc Count</button>

        <ul>
            {   
            productList && productList.length > 0 ?ProductList.map(item=> <li>{item.title}</li>):null
            }
        </ul>
    </>
  )
}

export default UseEffect
