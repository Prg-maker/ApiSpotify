import style from './style.module.scss'
import {ButtonType} from '../../components/ButtonType'


import SpotifyTest from '../../assets/logoSpotify.png'
import { useEffect, useState } from 'react'
import { api } from '../../api'


export function Playlist(){
  const [name , setName] = useState('')
  const [image , setImage] = useState('')
  const [id , setId] = useState('')


  const [imageUrl , setImageUrl] = useState('')
  const [country , setCountry] = useState('')
  const [type , setType] = useState('')


  const url = window.location.pathname

  const urlSplit = url.split('/')[2]

  useEffect(async () => {
    const response = await api.get('/listplaylist' , {
      id: urlSplit
    })
    
    const {name , image , userId } = response.data
    setName(name)
    setImage(image)
    setId(userId)
  })

  useEffect(async () => {
    const responseUser = await api.get('/user', {
      id: urlSplit
    })

    const {name ,  urlPhoto , type , country } = responseUser.data


    setImageUrl(urlPhoto)
    setNameUser(name)
    setCountry(country)
    setType(type)
  })

  

  return(
    <div className={style.containerProfile}>
    <header>


      <div className={style.image}>
        <img src={imageUrl} alt="" />
      </div>


      <ButtonType text={type}/>
      <ButtonType text={country}/>
    </header>
    <main>

      <div className={style.image}>
        <img src={image} alt="image" />
      </div>

      <h2>{name}</h2>

      <a href={`musics/${id}`}>
        Acessar suas músicas
      </a>
    </main>

  </div>
  )
}
