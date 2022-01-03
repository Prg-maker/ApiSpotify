import style from './style.module.scss'

export function Button(props) {
  return (
    <div>
      <button className={style.button}>{props.text}</button>
    </div>
  )
}