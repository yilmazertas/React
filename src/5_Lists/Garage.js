import React from 'react'
import Car from './Car'
const Garage = () => {
    // const cars =["Ford","BMV","Audi"]
    const cars2=[
        {id:1,brand:"Ford"},
        { id:2,brand:"BMV"},
        {id:3,brand:"Audi"}
    ]
  return (
    <>
    <h1>Who lives in my garage?</h1>

    {/* <ul>
        {
          cars.map((car,index)=>(
            <Car key={index} brand={car}/>
          )) 
        }
    </ul> */}


    {/* <ul>
     {
        cars2.map((car)=>(
            <Car key={car.id} brand={car.brand}/>
        ))
     }
    </ul> */}

    {/* <ul>
        {
        cars2.map(()=>{
         let saveCar= Car  ;
         let saveCarLogo="lovely" + saveCar.brand;
         return<Car key={Car.id} brand={saveCarLogo}/>
        })
        } 
  </ul> */}

    <ul>
        {
         cars2.map((car)=>{
            let saveCar=car;
            let saveCarLogo="lovely" +saveCar.brand;
            return(
                <>
                <Car key={car.id1}brand={saveCarLogo}/>
                <Car key={car.id2}brand={saveCarLogo}/>
                <Car key={car.id3}brand={saveCarLogo}/>

                </>
            )
         })   
        }

    </ul>
    </>
  );
};

export default Garage