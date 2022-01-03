import style from './style.module.scss'
import {ButtonType} from '../../components/ButtonType'


import SpotifyTest from '../../assets/logoSpotify.png'

export function Playlist(){
  return(
    <div className={style.containerProfile}>
    <header>


      <div className={style.image}>
        <img src="https://github.com/Prg-Maker.png" alt="" />
      </div>


      <ButtonType text='User'/>
      <ButtonType text='Br'/>
    </header>
    <main>

      <div className={style.image}>
        <img src={SpotifyTest} alt="" />
      </div>

      <h2>Puxar</h2>

      <a href="#">
        Acessar suas músicas
      </a>
    </main>

  </div>
  )
}
