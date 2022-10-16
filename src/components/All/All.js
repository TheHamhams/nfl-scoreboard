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
    <div>

    { all }

        
    </div>
  )
}

