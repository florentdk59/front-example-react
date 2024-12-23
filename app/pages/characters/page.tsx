'use client';

import React, { useState, useEffect } from "react";
import CharactersTable from "../../components/characters/CharactersTable";

const API_CHARACTERS = 'http://localhost:8080/api/characters';

async function fetchCharacters() {
    const response = await fetch(API_CHARACTERS);
    return await response.json();
};

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // Fetch characters when the component is mounted
        fetchCharacters().then(data => {
            setCharacters(data);  // Set fetched data to state
        });
    }, []);  // Empty dependency array ensures it runs only once after mount

    return <>
        <h2>This is the Characters page</h2>
        <CharactersTable characters={characters}/>
    </>;
};

export default Characters;
