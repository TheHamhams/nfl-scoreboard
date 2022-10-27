import React from 'react'
import { faTable } from '@fortawesome/free-solid-svg-icons'
const scoreURL = "https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl"
const baseURL = 'https://web-production-8965.up.railway.app'
const testURL = 'http://127.0.0.1:8000'


export const server_calls = {
    get: async() => {
        const response = await fetch(`${scoreURL}`, {
            method: 'GET'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch')
        }

        return await response.json()
    }
}

export const team_calls = {
    get: async (data) => {
  
        const response = await fetch(`${baseURL}/team/${data}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch team')
        }

        return await response.json()
    }
}

export const user_calls = {
    get: async(id) => {
        
        const response = await fetch(`${baseURL}/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok) {
            throw new Error('Failed to fetch user')
        }

        return await response.json()
    },

    create: async (data) => {

        const response = await fetch(`${baseURL}/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create user data')
        }
    },

    update: async (data) => {
        console.log(data)
        const response = await fetch(`${baseURL}/update/${data.user_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update')
        }

        return await response.json()
    }
    
}