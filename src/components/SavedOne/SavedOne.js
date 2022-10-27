import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import { FavForm } from '../FavForm'
import { useProfileGet } from '../../custom-hooks/FetchProfile'
import { useSavedOneTeamGet } from '../../custom-hooks/FetchSavedOne'

export const SavedOne = (props) => {
  const { savedOneTeam, setSavedOneTeam } = useSavedOneTeamGet()
  // const [post, setPost] = useState(props.post)
  const { userProfile, setUserProfile } = useProfileGet()
  
    
  return (
    <Container className='bg-light my-3'>
        <p>Favorite Team: {savedOneTeam}</p> 
        {userProfile && <FavForm type='saved_1' update={true} user_id={props.user.sub} />}
        {!userProfile && <FavForm type='saved_1' update={false} user_id={props.user.sub} />}

    </Container>
  )
}
