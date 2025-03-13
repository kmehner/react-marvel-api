import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`)
      setCharacters(response.data.data.results);
    
        } catch (error) {
        console.error('Error fetching data: ', error);
        }
    }
  

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    <>
      <div className='app-container'>
        <h1>Marvel Characters</h1>
        <CharacterList characters={characters}/> {/*This is passing props to the character list*/}
        <CharacterDetails characters={characters} />
      </div>
     
    </>
    )
  }

export default App;
