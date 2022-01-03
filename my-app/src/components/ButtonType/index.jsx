import style from './style.module.scss'

export function ButtonType(props){
  return(
    <div>
      <button className={style.buttonType}>{props.text}</button>
    </div>
  )
}