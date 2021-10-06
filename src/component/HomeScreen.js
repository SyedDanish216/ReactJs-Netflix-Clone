import React from 'react'
import Continuetowatch from "./Continuetowatch";
import Featured from "./Featured";
import Home from "./Home";
const HomeScreen = ({name}) => {
    return (
        <div>
             <Home/>
     <Featured  type={name} />
     <Continuetowatch />
    <Continuetowatch />  
        </div>
    )
}

export default HomeScreen
