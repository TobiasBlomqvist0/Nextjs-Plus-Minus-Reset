import { useState } from "react"
import style from '../styles/Home.module.css'

const index = () => {
  let [score, changeScore] = useState(0)

  return (
    <div className={style.conatiner}>
      <span className={style.score}>{score}</span>
      <div>
        <button onClick={()=>changeScore(score -1)} className={style.button}>-</button>
        <button onClick={()=>changeScore(score +1)} className={style.button}>+</button>
        <button onClick={()=>changeScore(score =0)} className={style.button}>Reset</button>
      </div>
    </div>
  )
}

export default index