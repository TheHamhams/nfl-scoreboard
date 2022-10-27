import React, {useState} from 'react'

import { Container } from 'react-bootstrap'
import { SavedOne } from '../SavedOne'
import { SavedTwo } from '../SavedTwo'
import { UserFav } from '../UserFav'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile = () => {
  const { user, isLoading } = useAuth0()
 
  
  if ( isLoading ) {
    return (
        <>
            <p>loading...</p>
        </>
    )
  }
    
    
  return (
    <div className='background'>
        <Container className='text-center border bg-light mt-5'>
            <h1>Profile</h1>
            <p>Email {user.email}</p>
        </Container>
           
        <UserFav user={user} />
        <SavedOne user={user} />
        <SavedTwo user={user} />
        

    </div>
  )
}
