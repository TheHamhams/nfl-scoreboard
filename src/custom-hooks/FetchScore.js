import { useState, useEffect } from "react";
import React from "react";
import { server_calls } from "../api";

export const FetchScore = () => {
    const [ score, setScore ] = useState()

    async function handleDataFetch() {
        const result = await server_calls.get()
        setScore(result.sports[0].leagues[0])
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {score, setScore:handleDataFetch}
}