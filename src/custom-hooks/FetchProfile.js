import React, { useEffect, useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { user_calls } from '../api'

export const useProfileGet = () => {
  const [ userProfile, setProfile ] = useState()
  const { user } = useAuth0()
    
  async function handleDataFetch() {

    if (!user) {
        return null
    }
    const result = await user_calls.get(user.sub)
    setProfile(result)
  }
  
  useEffect( () => {
    handleDataFetch()
  }, [])
  
  return {userProfile, setProfile:handleDataFetch}
}
