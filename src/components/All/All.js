import React, { useState } from 'react'
import { FetchScore } from '../../custom-hooks/FetchScore'
import { Score } from '../Score'

export const All = () => {
    const {score, setScore} = FetchScore()
    

    if (!score) {
        return "Loading"
    } 
    const all = score.events.map((value, index) => <li key={index}><Score key={index} gameId={index} /></li>)
    
   


  return (
    <div className='background pt-5'>

        <h1 className='my-3 flame text-center'>{score.events[0].weekText}</h1>
        { all }

        
    </div>
  )
}

