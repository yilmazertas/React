import React from 'react'
import MadeGoal from './MadeGoal'
import MissedGoal from './MissedGoal'

const Goal = (Props) => {
    const isGoal=Props.isGoal
    
    // if(isGoal) {
    //     return <MadeGoal/>
    // } else{
    //     return<MissedGoal/>

    // }

    return <>{isGoal ?<MadeGoal/>:<MissedGoal/>}</>
}

export default Goal