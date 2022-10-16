import { useState, useEffect } from "react";
import React from "react";
import { server_calls } from "../api";

export const FetchExample = () => {
    const [ homeExample, setHomeExample ] = useState()

    async function handleDataFetch() {
        const result = await server_calls.get()
        setHomeExample(result.sports[0].leagues[0].events[2])
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {homeExample, setHomeExample:handleDataFetch}
}