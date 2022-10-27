import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import { FavForm } from '../FavForm'
import { useFavTeamGet } from '../../custom-hooks/FetchFavTeam'
import { useProfileGet } from '../../custom-hooks/FetchProfile'
import { useSavedOneTeamGet } from '../../custom-hooks/FetchSavedOne'

export const UserFav = (props) => {
  const { favTeam, setFavTeam } = useFavTeamGet()
  // const [post, setPost] = useState(props.post)
  const { userProfile, setUserProfile } = useProfileGet()
  
    
  return (
    <Container className='bg-light my-3'>
        <p>Favorite Team: {favTeam}</p> 
        {userProfile && <FavForm type='fav_id' update={true} user_id={props.user.sub} />}
        {!userProfile && <FavForm type='fav_id' update={false} user_id={props.user.sub} />}

    </Container>
  )
}
