import style from './style.module.scss'
import { api } from '../../api';
import { useState , useEffect } from 'react';
import {ButtonType} from '../../components/ButtonType'
import {Button} from '../../components/Button'




export function Profile(){
  const [user , setUser] = useState([])
  const url = window.location.href

  const urlSlipt = url.split('=')[1]


  useEffect(async () => {

    const response = await api.post('authorization' , {
      code: urlSlipt
    })

    if(!response){
      console.log('error')
    }


    const {user , token } = response.data


    setUser([user])
  } ,[])

 
 


  return(
    <div className={style.containerProfile}>


      {
        user.map(data=> {
          return(
            <>
              <header >
                <ButtonType text={data.type}/>
                <ButtonType text={data.country}/>
              </header>

              <main >

                <div className={style.image}>
                  <img src={data.urlPhoto} alt={data.name} />
                </div>
                <Button text={data.name}/>
                <a href={`playlist/${data.id}`}>
                  Acessar sua playlist
                </a>
              </main>
            </>
          )
        })
      }


     


    </div>
  )
}

