import style from './style.module.scss'

import {ButtonType} from '../../components/ButtonType'
import {Button} from '../../components/Button'

export function Profile(){
  return(
    <div className={style.containerProfile}>
      <header>
        <ButtonType text='User'/>
        <ButtonType text='Br'/>
      </header>
      <main>

        <div className={style.image}>
          <img src="https://github.com/Prg-Maker.png" alt="" />
        </div>
        <Button text="Daniel"/>
        <a href="#">
          Acessar sua playlist
        </a>
      </main>

    </div>
  )
}