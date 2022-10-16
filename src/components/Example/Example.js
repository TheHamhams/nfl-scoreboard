import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { FetchExample } from '../../custom-hooks/FetchExample'
import { server_calls } from '../../api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFootball } from '@fortawesome/free-solid-svg-icons'

export const Example = () => {
    let { homeExample, setHomeExample } = FetchExample()
    
    if (!homeExample) {
        return "loading"
    }

    

    
    return (
        <div>
            <h2>{homeExample.name}</h2>
            <p>{homeExample.fullStatus.type.detail}</p>
            {console.log(homeExample)}
            <div>
                <p>{homeExample.competitors[0].displayName} : {homeExample.competitors[0].score} {homeExample.situation.possession == homeExample.competitors[0].id && <span><FontAwesomeIcon icon={faFootball} /></span>}</p>
                <p>{homeExample.competitors[1].displayName} : {homeExample.competitors[1].score} {homeExample.situation.possession == homeExample.competitors[1].id && <span><FontAwesomeIcon icon={faFootball} /></span>}</p>
            </div>
            <div>
                <p>{homeExample.situation.downDistanceText}</p>
            </div>
        </div>
    )
}