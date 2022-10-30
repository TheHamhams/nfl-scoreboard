import { Col, Container, Image, Row } from 'react-bootstrap'
import React, {useEffect, useState} from 'react'

import { FetchScore } from '../../custom-hooks/FetchScore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootball } from '@fortawesome/free-solid-svg-icons'
import { server_calls } from '../../api'

export const Score = (props) => {
    let { score, setScore } = FetchScore()
    let [time, setTime] = useState(0)
    
    let timer

    async function handleDataFetch() {
        const result = await server_calls.get()
        setScore(result.sports[0].leagues[0])
    }
    
    useEffect(() => {
        if (score.events[props.gameId].fullStatus.type.name === "STATUS_IN_PROGRESS"){
            // console.log("bing")
            handleDataFetch()
            clearInterval(timer)
            timer = setInterval(() => setTime(time += 1), 30000)
        } 
        else if (score.events[props.gameId].fullStatus.type.name === "STATUS_SCHEDULED"){
            handleDataFetch()
            clearInterval(timer)
            timer = setInterval(() => setTime(time += 1), 60000 * 15)
        }
        
        
        
    }, [time])
    
    if (!score) {
        return "loading"
    }
    
    
    return (
        <Container className='bg-light rounded col-lg-3 col-sm-10 my-2'>
            <Row className="d-flex">
                <h2>{score.events[props.gameId].shortName}</h2>
            </Row>
            <Row className="d-flex">
                <p>{score.events[props.gameId].fullStatus.type.detail}</p>
            </Row>
            
            <Row className="d-flex">
                <Col className='col-1'>
                    {score.events[props.gameId].situation && score.events[props.gameId].situation.possession === score.events[props.gameId].competitors[0].id 
                        && <span><FontAwesomeIcon icon={faFootball} /></span>}
                    </Col>
                <Col className='col-1'>
                    <Image src={score.events[props.gameId].competitors[0].logo} style={{width: '25px'}} /> 
                </Col>

                <Col className='col-2'>
                    {score.events[props.gameId].competitors[0].record}   
                </Col>

                <Col className='col-6'>
                    {score.events[props.gameId].competitors[0].name} : {score.events[props.gameId].competitors[0].score} 
                    
                </Col>
                
            </Row>
            <Row className="d-flex">
                
                <Col className='col-1'>
                    {score.events[props.gameId].situation && score.events[props.gameId].situation.possession === score.events[props.gameId].competitors[1].id 
                        && <span><FontAwesomeIcon icon={faFootball} /></span>}
                    </Col>
                    <Col className='col-1'>
                        <Image src={score.events[props.gameId].competitors[1].logo} style={{width: '25px'}} /> 
                    </Col>

                    <Col className='col-2'>
                    {score.events[props.gameId].competitors[1].record}   
                    </Col>

                    <Col className='col-6'>
                        
                        {score.events[props.gameId].competitors[1].name} : {score.events[props.gameId].competitors[1].score} 

                        
                    </Col>

                    
                
            </Row>
            <Row className='d-flex'>
                <div>
                    <p>{score.events[props.gameId].situation && score.events[props.gameId].situation.downDistanceText}</p>
                    <p>{score.events[props.gameId].situation && score.events[props.gameId].situation.lastPlay.text}</p>
                </div>
            </Row>
        </Container>
    )
}