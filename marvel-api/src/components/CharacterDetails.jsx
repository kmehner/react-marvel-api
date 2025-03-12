import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const CharacterDetails = ({ selectedCharacter}) => {
    const [details, setDetails] = useState(false);

    useEffect(() => {
        if (selectedCharacter) {
            setDetails(selectedCharacter.details);
        }
    }, [selectedCharacter]); //This code is the listener to tell useEffect what it is waiting for

    handleThumbnailClick = () => {

    }
}

export default CharacterDetails;