import React, {useState, useEffect} from 'react'
import { Container, Image } from 'react-bootstrap'
import { FetchScore } from '../../custom-hooks/FetchScore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootball } from '@fortawesome/free-solid-svg-icons'

export const Score = (props) => {
    let { score, setScore } = FetchScore()
    
    if (!score) {
        return "loading"
    }
    
    
    return (
        <Container className='bg-light rounded'>
            <h2>{score.events[props.gameId].name}</h2>
            <p>{score.events[props.gameId].fullStatus.type.detail}</p>
            <div>
                <p><Image src={score.events[props.gameId].competitors[0].logo} style={{width: '25px'}} /> {score.events[props.gameId].competitors[0].displayName} : {score.events[props.gameId].competitors[0].score} {score.events[props.gameId].situation && score.events[props.gameId].situation.possession === score.events[props.gameId].competitors[0].id && <span><FontAwesomeIcon icon={faFootball} /></span>}</p>
                <p><Image src={score.events[props.gameId].competitors[1].logo} style={{width: '25px'}} /> {score.events[props.gameId].competitors[1].displayName} : {score.events[props.gameId].competitors[1].score} {score.events[props.gameId].situation && score.events[props.gameId].situation.possession === score.events[props.gameId].competitors[1].id && <span><FontAwesomeIcon icon={faFootball} /></span>}</p>
            </div>
            <div>
                <p>{score.events[props.gameId].situation && score.events[props.gameId].situation.downDistanceText}</p>
                <p>{score.events[props.gameId].situation && score.events[props.gameId].situation.lastPlay.text}</p>
            </div>
        </Container>
    )
}