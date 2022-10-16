import React from 'react'
const baseURL = "https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl"


export const server_calls = {
    get: async() => {
        const response = await fetch(`${baseURL}`, {
            method: 'GET'
        })

        if (!response.ok) {
            throw new Error('Failed to fetch')
        }

        return await response.json()
    }
}