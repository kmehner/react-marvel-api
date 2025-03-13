import axios from 'axios';
import {array, func } from 'prop-types';
import { useState, useEffect } from 'react';
import './CharacterList.css';

const CharacterList = ({handleThumbnailClick}) => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
          const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`)
          console.log('response: ', response);
          setCharacters(response.data.data.results);
        
        } catch (error) {
        console.error('Error fetching data: ', error);
        }
    }

    // const handleThumbnailClick = () => {
    //     console.log('thumbnail clicked');
    // }

    useEffect(() => {
        fetchCharacters();

    }, []);

    return (
        <div className="characterList">
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <div>
                            <strong>{character.name}</strong>
                        </div>

                        <img src={`${character.thumbnail.path}/standard_small.jpg`} alt={`${character.name}`} onClick={() => handleThumbnailClick()}/>
                        {/* <CharacterDetails selectedCharacter={character.id}/> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}


CharacterList.propTypes = {
    characters: array
};

export default CharacterList;