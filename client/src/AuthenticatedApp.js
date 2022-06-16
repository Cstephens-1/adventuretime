import './App.css';
// import GroupsContainer from './components/GroupsContainer'
import CharCreation from './components/CharCreation';
import {Routes, Route, useNavigate } from 'react-router-dom'
import Mypage from './components/Mypage';
import NavBar from './components/NavBar';
// import trophycase from "./trophycase.jpg"
// import ExerciseLibrary from './components/ExerciseLibrary';
// import MyClasses from './components/MyClasses';
// import WorkoutLibrary from './components/WorkoutLibrary';
// import Students from './components/Students';
// import Footer from './components/Footer';
import styled from 'styled-components';
import LaunchPage from './components/pages/chapterOne/LaunchPage';
import Firstchoice from './components/pages/chapterOne/FirstChoice';
import SecondChoice from './components/pages/chapterOne/SecondChoice';

function AuthenticatedApp({ currentUser, setCurrentUser }) {

  const navigate = useNavigate()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          navigate('/')
        }
      })
  }
  return (
    <AppStyler>
      
      <nav>
        <NavBar handleLogout={handleLogout} currentUser={currentUser}/>
      </nav>
      <Routes>
        <Route path="/mypage" element={<Mypage currentUser={currentUser}/>} />
        <Route path="/charcreation" element={<CharCreation  currentUser={currentUser}/>}/>
        <Route path='/chapterone' element={<LaunchPage />} />
        <Route path='/chapteronefirstchoice' element={<Firstchoice />}/>
        <Route path='/chapteronesecondchoice' element={<SecondChoice />}/>
      </Routes>
      {/* <Footer /> */}
    </AppStyler>
  );
}

export default AuthenticatedApp;
         

const AppStyler = styled.div`
  background-image: "./trophycase.jpg"
`

          

         

          