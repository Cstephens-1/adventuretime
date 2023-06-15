import React from 'react';
import './App.css';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpProvider from './context/SignUpProvider';
import StartScreen from './StartScreen';
import Signup from './Signup';
import Launchpage from './Launchpage';
import { CharacterProvider } from './context/CharacterContext';
import CharacterCreation from './CharacterCreation';
import Page1 from './Page1';
import { EnemyProvider } from './context/EnemyContext';
import Combat from './Combat';



function App() {

  return(
      <UserProvider>
          <BrowserRouter>
            <SignUpProvider>
              <CharacterProvider>
                <EnemyProvider>
                  <Routes>
                    <Route path="/" element = {<StartScreen />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/launchpage" element={<Launchpage />} />
                    <Route path="/createcharacter" element={<CharacterCreation />} />
                    <Route path="/1" element={<Page1 />} />
                    <Route path="/combat" element={<Combat />}/>
                  </Routes>
                </EnemyProvider>
              </CharacterProvider>
            </SignUpProvider>
          </BrowserRouter>
      </UserProvider>
  )
}

export default App;
