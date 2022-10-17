import React from 'react'
import { Score } from '../Score'

export const Home = () => {
  return (
    <div className='background'>
        <h1>Home</h1>
        <Score gameId={2} />
        <Score gameId={4} />
        <Score gameId={5} />
    </div>
  )
}
