import React from 'react';

// import images
import suporte from '../images/suporte.png'

// import styles
import '../form/form.css'

export default function Form() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("¡Enviado!")
  }

  return (
    <div>

      <div className="form_container">

        <h2>¡Contactate con nosotros!</h2>

        <form onSubmit={handleSubmit}>

          <div className="input_email">
            <input placeholder="Inserte su: correo" type="email" />
          </div>

          <div className="selector">
            <select name="" placeholder="Select" id="">
              <option value="">Select</option>
              <option value="">option1</option>
              <option value="">option2</option>
              <option value="">option3</option>
            </select>
          </div>

          <div className="textarea">
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          </div>

          <div className="button_submit">
            <button type="submit">Enviar</button>
          </div>

          <div className="image_form">
            <img src={suporte} alt="" />
          </div>

        </form>

      </div>

    </div>
  )
}