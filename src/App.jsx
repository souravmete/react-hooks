import { CounterApp, DataContext } from "./components/contextAPI/Counter"
import HomeCounter from "./components/contextAPI/HomeCounter"
import UseStateHook from "./components/stateHooks/UseStateHook"
import { ComponentOne } from "./components/UseContextHooks/ComponentOne"
import { ComponentTwo } from "./components/UseContextHooks/ComponentTwo"
import { UseContextHooks } from "./components/UseContextHooks/UseContextHooks"
import UseEffect from "./components/UseEffect"
import { UseState } from "./components/UseState"


function App() {

  return (
    <>
    {/* <UseState/> */}
    {/* <UseEffect/>  */}

    {/* <UseContextHooks/> */}
    
    <div style={{display:'flex',gap:'10px',flexDirection: 'column',justifyContent:'center'}}>

      {/* <ComponentOne/>
      <ComponentTwo/> */}

      {/* <UseStateHook/> */}

      <CounterApp>
        <HomeCounter/>
      </CounterApp>

    </div>
    </>
  )
}

export default App
