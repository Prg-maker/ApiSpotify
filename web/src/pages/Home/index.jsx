import style from './style.module.scss' 

import SpotifyImg  from '../../assets/logoSpotify.png'


export function Home(){
  
  const singIn = `https://accounts.spotify.com/authorize?response_type=code&client_id=e1b8d9aafdff41829dcbe4236a2921cc&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/callback`


  return(
    <div className={style.containerHome}>
      <div className={style.image}>
        <img src={SpotifyImg} alt="logo image"/>

      </div>
      
      <a 
        href={singIn}
      >
        Entrar com a conta do Spotify
      </a>

    </div>
  )
}