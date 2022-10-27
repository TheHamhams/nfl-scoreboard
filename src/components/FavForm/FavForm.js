import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'

import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { user_calls } from '../../api'

// https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams
const teams = {
    ARI: ["Arizona Cardinals", 22],
    ATL: ["Atlanta Falcons", 1],
    BAL: ["Baltimore Ravens", 33],
    BUF: ["Buffalo Bills", 2],
    CAR: ["Carolina Panthers", 29],
    CHI: ["Chicago Bears", 3],
    CIN: ["Cincinnati Bengals", 4],
    CLE: ["Cleveland Browns", 5],
    DAL: ["Dallas Cowboys", 6],
    DEN: ["Denver Broncos", 7],
    DET: ["Detroit Lions", 8],
    GB: ["Green Bay Packers", 9],
    HOU: ['Houston Texans', 34],
    IND: ["Indianapolis Colts", 11],
    JAX: ["Jacksonville Jaguars", 30],
    KC: ["Kansas City Chiefs", 12],
    LV: ["Las Vegas Raiders", 13],
    LAC: ["Los Angeles Chargers", 24],
    LAR: ["Los Angeles Rams", 14],
    MIA: ["Miami Dolphins", 15],
    MIN: ["Minnesota Vikings", 16],
    NE: ["New England Patriots", 17],
    NO: ["New Orleans Saints", 18],
    NYG: ["New York Giants", 19],
    NYJ: ["New York Jets", 20],
    PHI: ["Philadelphia Eagles", 21],
    PIT: ["Pittsburgh Steelers", 23],
    SF: ["San Francisco 49ers", 25],
    SEA: ["Seattle Seahawks", 26],
    TB: ["Tampa Bay Buccaneers", 27],
    TEN: ["Tennessee Titans", 10],
    WSH: ["Washington Commanders", 28],
    
    
    
    
}

export const FavForm = (props) => {
  const { register, handleSubmit } = useForm()
  let [selection, setSelection] = useState()
  const navigate = useNavigate()

  const handleSelectionChange = event => {
    setSelection(event.target.value)
  }
  
  const onSubmit = (data, event) => {
    if (props.update == false) {

      user_calls.create({
        user_id: props.user_id,
        [props.type]: selection,
      })
      setTimeout( () => {window.location.reload()}, 1000)
    }

    else {

      user_calls.update({
        user_id: props.user_id,
        [props.type]: selection
      })
      setTimeout( () => {window.location.reload()}, 1000)       
    }
  }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select onChange={handleSelectionChange}>
            <option value='team'>Choose a team</option>
            {Object.keys(teams).map((key, value) => <option key={key} value={teams[key][1]}>{teams[key][0]}</option>)}
        </select>
        <Button type='submit'>Submit</Button>
    </form>
  )
}
