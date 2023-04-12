import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {decrement,increment, incrementByAmaount} from "./counterslice"

export default function counter() {

    const count =useSelector((state)=>state.counter.value)

    const dispatch=useDispatch();

      let amaount=10;

    return(
        <div>
            <div style={{fontSize :"100px"}}>{count} </div>
            <button onClick={()=>dispatch(increment())}>Increment(+)</button>
            <button onClick={()=>dispatch(decrement())}>Decrement(-)</button>
            <button onClick={()=>dispatch(incrementByAmaount(amaount))}>incrementByAmaount {amaount} </button>
        </div>
    )
}