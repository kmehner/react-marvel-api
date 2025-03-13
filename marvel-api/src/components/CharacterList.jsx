import axios from 'axios';
import {array, func } from 'prop-types';
import './CharacterList.css';

const CharacterList = ({characters}) => {

    return (
        <div className="characterList">
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <div>
                            <strong>{character.name}</strong>
                        </div>

                        <img src={`${character.thumbnail.path}/standard_small.jpg`} alt={`${character.name}`} onClick={() => handleThumbnailClick}/>
                        <CharacterDetails selectedCharacter={character.id}/>
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