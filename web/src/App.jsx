import styles from './styles/App.module.scss'



import {Home} from './pages/Home'
import {Profile} from './pages/Profile'
import {Playlist} from './pages/Playlist'
import {ListMusics} from './pages/ListMusics'



import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'



function App() {

  const name = 'daniel'

  return (
    <main className={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/callback" element={<Profile/>}/>
          <Route path="/playlist/:id" element={<Playlist/>}/>
          <Route path="/playlist/musics/:id" element={<ListMusics/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
