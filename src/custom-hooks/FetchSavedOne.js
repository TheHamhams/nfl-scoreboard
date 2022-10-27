import React, { useEffect, useState } from 'react'

import { team_calls } from '../api'
import { useAuth0 } from '@auth0/auth0-react'

export const useSavedOneTeamGet = () => {
  const [ savedOneTeam, setSavedOneTeam ] = useState()
  const { user } = useAuth0()
    
  async function handleDataFetch() {
    
    if (!user) {
        return null
    }

    const result = await team_calls.get(`${user.sub}/saved_1`)
 
    setSavedOneTeam(result)
  }
  
  useEffect( () => {
    handleDataFetch()
  }, [])
  
  return {savedOneTeam, setSavedOneTeam:handleDataFetch}
}