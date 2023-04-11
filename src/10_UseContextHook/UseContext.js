import React, { useState,createContext } from 'react'
import ComponentNew from './ComponentNew';

export const UserContext =createContext();

const UseContext = () => {
    const [user,setUser]=useState("Jesse Hall ")
  return (
    <div>
        {/* <h1> {`Hello ${user}!`} </h1>
        <Component1 user={user}/> */}


        <UserContext.Provider value={user}>
          <h1> {`Hello ${user}`}</h1>
          
         <ComponentNew/>
    
        </UserContext.Provider>
    </div>
  )
}

export default UseContext