import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import { FavForm } from '../FavForm'
import { useProfileGet } from '../../custom-hooks/FetchProfile'
import { useSavedTwoTeamGet } from '../../custom-hooks/FetchSavedTwo'

export const SavedTwo = (props) => {
  const { savedTwoTeam, setSavedTwoTeam } = useSavedTwoTeamGet()
  // const [post, setPost] = useState(props.post)
  const { userProfile, setUserProfile } = useProfileGet()
  
    
  return (
    <Container className='bg-light my-3'>
        <p>Favorite Team: {savedTwoTeam}</p> 
        {userProfile && <FavForm type='saved_2' update={true} user_id={props.user.sub} />}
        {!userProfile && <FavForm type='saved_2' update={false} user_id={props.user.sub} />}

    </Container>
  )
}