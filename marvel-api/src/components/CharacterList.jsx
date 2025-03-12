import axios from 'axios';
import {array, func } from 'prop-types';
import './CharacterList.css';
import CharacterDetails from './CharacterDetails';

const CharacterList = ({characters}) => {
    return (
        <div className="characterList">
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <div>
                            <strong>{character.name}</strong>
                        </div>

                        <img src={`${character.thumbnail.path}/standard_small.jpg`} alt={`${character.name}`} onClick={() => (selectedCharacter)}/>
                        <div>
                            <CharacterDetails selectedCharacter={character.id} />
                        </div>
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