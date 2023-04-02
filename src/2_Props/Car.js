import React from 'react'

const car = (Props) => {
  return (
    <div>
       {/* <h2>I am a {Props.brand}!</h2 >; */}
    {/* <h2>I am a {Props.brand.name}and{Props.brand.model} </h2> */}
    <h2> { Props.defination.myPerson.name}</h2>
    <h2> { Props.defination.myPerson.age}</h2>
    <h2> { Props.defination.myPerson.location}</h2>
    <h2> { Props.defination.myCar.carName}</h2>
    <h2> { Props.defination.myCar.carAge}</h2>
    <h2> { Props.defination.myCar.model}</h2>
    </div>
  )
}

export default car