import React from 'react';
import '../../css/styles.css';

export default function Form() {

  return (
    <div>
      {/* form */}
      <div className="form_container">
        <h2>¡Contactate con nosotros!</h2>
        <form action="">
          <div className="input_email">
            <input placeholder="Inserte su: correo" type="email" />
          </div>

          <div className="selector">
            <label>Select</label>
            <select name="" placeholder="Select" id="">
              <option value=""></option>
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
        </form>
      </div>
    </div>
  )
}