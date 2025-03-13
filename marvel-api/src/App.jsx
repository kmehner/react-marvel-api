import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

import './App.css';

const App = () => {

  const handleThumbnailClick = () => {
    console.log('thumbnail clicked');
}

  return (
    <>
      <div className='app-container'>
        <h1>Marvel Characters</h1>
        <CharacterList handleThumbnailClick={handleThumbnailClick} /> {/*This is passing props to the character list*/}
        {/* <CharacterDetails characters={characters} /> */}
      </div>
     
    </>
    )
  }

export default App;
