import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UseContext'

const ComponentNew3 = () => {
  const user =  {UserContext}
  return (
    <div>
        <h1>ComponentNew3</h1>
        <h2>{`Hello ${user}again`} </h2>

    </div>

  )
}

export default ComponentNew3