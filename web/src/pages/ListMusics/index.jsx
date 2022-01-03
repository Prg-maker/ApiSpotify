import style from './style.module.scss'
import SpotifyTest from '../../assets/logoSpotify.png'
import { useEffect, useState } from 'react'
import { api } from '../../api'


export function ListMusics(){
  const url = window.location.pathname

  
  const urlSplit = url.split('/')[3]

  const [musicas , setMusicas] = useState('')

  let array 
  async function loading() {
    const response = await api.get('/listmusics' , {
      userId: urlSplit
    })

    let data = [...response.data]
    array = data
  }
  loading()
  


  console.log(array)
  return(
    <div className={style.containerListMusic}>


      <main>
        <div className={style.artist}>
          <img src={SpotifyTest} alt="" />
          <p>André Costa</p>

        </div>

        
      </main>
    </div>
  )
}