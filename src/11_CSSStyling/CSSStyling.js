import React from 'react'
import "./CSSStyling.css"
import styles from "./CSSStyling.module.css"
import Example from './Example/Example'
import Example2 from './Example/Example2'
import ExampleModule from './ExampelModule/ExampleModule'
import ExampleModule2 from './ExampelModule/ExampleModule2'

const CSSStyling = () => {
    // const myStyle={
    //     backgroundColor:"DodgerBlue",
    //     padding:"10px",
    //     fontFamily:"Sans-serif",

    // }
  return (
     <div>
        {/* <h1 style={{color:"red"}}>Hello style</h1>    
        <h1 style={{backgroundColor:"blue"}}>Hello style</h1>    
        <h1 style={myStyle}>Hello style</h1> 
        <h1 className={styles.bigblue}>Hello World </h1>  */}
        <Example/>
        <Example2/>
        <ExampleModule/>
        <ExampleModule2/>
     </div>
  )
}

export default CSSStyling