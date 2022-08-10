import React from 'react'
import '../styles/mainVp.css'

function Cards(props) {
  return (
    <ul>
      <li className="cards">
        <div className="title">
          <h2>{props.name}</h2>
         </div>
        <div>
          <img className="imgcard" src={props.imgs}/>
          <h3>Atributos:</h3>
         </div>
        <div className="atributes">
          <h4>{props.HP}</h4>
          <h4>{props.attack}</h4>
          <h4>{props.defense}</h4>
         </div>
      </li>
    </ul>
  )
}

export default Cards