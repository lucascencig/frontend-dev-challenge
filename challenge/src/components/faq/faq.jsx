import React, { useState } from "react";

// import svg
import arrowRight from '../../assets/arrowRight.svg'
import arrowDown from '../../assets/arrowDown.svg'

// import styles
import '../faq/faq.css'


export default function Faq() {

  const [icon, setIcon] = useState(true)


  function changeToCross(e) {
    if (e.target) {
      setIcon(!icon)
    }
  }

  return (
    <div className="faq_container">

      <div className="faq_title">
        <h2>Preguntas Frecuentes</h2>
      </div>

      <label htmlFor="faq" className="faq_question" onClick={changeToCross}>
        {icon === true
          ?
          <h3>¿Cuales son los pasos para tomar una decisión?<img className="arrow_faq" src={arrowRight} alt="" />  </h3>
          :
          <h3>¿Cuales son los pasos para tomar una decisión? <img className="arrow_faq" src={arrowDown} alt="" /> </h3>}
      </label>
      <input type="checkbox" id="faq" className="checkbox_faq" />


      <div className="faq_answered">
        <h2>
          <ol>
            <li>Asignarles tareas sencillas</li>
          </ol>
        </h2>
        <p>
          La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. <span className="text_color"> Pueden recoger los platos mientras uno de los progenitores los empieza a lavar</span>. Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.).
        </p>
      </div>


      <label htmlFor="faq_two" className="faq_question_two" onClick={changeToCross}>
        {icon === true
          ?
          <h3>¿Cuales son los pasos para tomar una decisión?<img className="arrow_faq" src={arrowRight} alt="" />  </h3>
          :
          <h3>¿Cuales son los pasos para tomar una decisión? <img className="arrow_faq" src={arrowDown} alt="" /> </h3>}
      </label>
      <input type="checkbox" id="faq_two" className="checkbox_faq_two" />


      <div className="faq_answered_two">
        <h2>
          <ol>
            <li>Asignarles tareas sencillas</li>
          </ol>
        </h2>
        <p>
          La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. <span className="text_color"> Pueden recoger los platos mientras uno de los progenitores los empieza a lavar</span>. Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.).
        </p>
      </div>


      <label htmlFor="faq_three" className="faq_question_three" onClick={changeToCross}>
        {icon === true
          ?
          <h3>¿Cuales son los pasos para tomar una decisión?<img className="arrow_faq" src={arrowRight} alt="" />  </h3>
          :
          <h3>¿Cuales son los pasos para tomar una decisión? <img className="arrow_faq" src={arrowDown} alt="" /> </h3>}
      </label>
      <input type="checkbox" id="faq_three" className="checkbox_faq_three" />


      <div className="faq_answered_three">
        <h2>
          <ol>
            <li>Asignarles tareas sencillas</li>
          </ol>
        </h2>
        <p>
          La primera idea o estrategia para ayudar a los niños a ser responsables es asignarles tareas sencillas. Para que la situación sea más fácil, puede ser conveniente que un adulto también las haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los progenitores es una buena manera de empezar. Será el primer paso para que adquieran autonomía: ser sus modelos. <span className="text_color"> Pueden recoger los platos mientras uno de los progenitores los empieza a lavar</span>. Pueden hacer lo mismo con su propia colada, que separen su ropa blanca de la oscura y la lleven hacia los cubos correspondientes. De esta forma, progresivamente, los niños pueden comenzar a adquirir responsabilidades, lo que se trasladará también al uso de la tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos para clase, tiempo para los amigos, juegos, etc.).
        </p>
      </div>

    </div>
  )
}