import React from 'react'
import Car from './Car'
 
 const Props = () => {
   //    const myElemnet=<Car brand="Ford"/> 
  //    let variable="Mustang"
 //    const myElement=<Car brand={variable}/>

//  const CarInfo={name:"Ford",model:"Mustang"}
//    const myElement=<Car brand={CarInfo}/>

const myPerson ={
    name:"mustafa",
    age:"25",
    location:"turkey"

}
   const myCar={
    carName: "ford",
    carAge:5,
    model:"mustang"
 }
   const myProps={
    myPerson,
    myCar,
   }
  const myElement=<Car defination={myProps}/>


  return (
    <div>{myElement}</div>
  )
}

export default Props