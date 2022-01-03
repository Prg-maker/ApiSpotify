import {Home} from './pages/Home'
import {Playlist} from './pages/Playlist'
import {Profile} from './pages/Profile'

import styles from './styles/App.module.scss'

import {BrowserRouter as Router , Link, Route , Routes} from 'react-router-dom'
function App() {
  return(
    <Router>
    <div className="App">
      <h1>Oi</h1>

      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/contact">Contact Us</Link>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/playlist" element={<Playlist/>} />
        <Route path="/profile"  element={<Profile/>} />
      </Routes>
    </div>
  </Router>
  )

}

export default App;
