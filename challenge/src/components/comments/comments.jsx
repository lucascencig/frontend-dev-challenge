import React from "react";

// imports svg
import quotes from '../../assets/quotes.svg'

// import styles
import '../comments/comments.css'


export default function Comments() {
  return (
    <div className="comments_container">

      <ul>
        <li>
          <div className="box_comment">
            <img src={quotes} alt="quotes" />
            <div className="text_comment">
              <p>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</p>
            </div>
            <div className="name_comment">
              <h4>~ Maria Montessori ~</h4>
            </div>
          </div>
        </li>

        <li>
          <div className="box_comment">
            <img className="box_comment_img" src={quotes} alt="quotes" />
            <div className="text_comment">
              <p>Me parecio un sitio sumamente práctico,  estoy muy contenta con los consejos para ser una buena madre.</p>
            </div>
            <div className="name_comment">
              <h4>~ Carla Rodriguez ~</h4>
            </div>
          </div>
        </li>

        <li>
          <div className="box_comment">
            <img className="box_comment_img" src={quotes} alt="quotes" />
            <div className="text_comment">
              <p>Muchas gracias por la informacion, ahora mi trabajo como madre va a ser mucho mejor y con mi marido podremos ser mejores padres.</p>
            </div>
            <div className="name_comment">
              <h4>~ Gisella Martinez ~</h4>
            </div>
          </div>
        </li>
      </ul>

    </div>
  )
}